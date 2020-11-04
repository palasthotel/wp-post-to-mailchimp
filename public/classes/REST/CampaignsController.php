<?php


namespace Palasthotel\PostToMailchimp\REST;

use Palasthotel\PostToMailchimp\Model\Campaign;
use Palasthotel\PostToMailchimp\Model\MailchimpTestMail;
use Palasthotel\PostToMailchimp\Option;
use Palasthotel\PostToMailchimp\WP_REST;
use WP_REST_Request;
use WP_REST_Server;

class CampaignsController extends _BaseController {

	protected $rest_base = "campaigns";

	public function register_routes() {

		register_rest_route(
			WP_REST::ROUTES_NAMESPACE,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => [$this, 'permission'],
				'args'                => [
					WP_REST::ARG_POST_ID => $this->arg_int_required,
					WP_REST::ARG_RECENT  => [
						"type"    => "boolean",
						"default" => false,
					]
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign/(?P<' . WP_REST::ARG_CAMPAIGN_ID . '>\d+)',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_item' ),
				'permission_callback' => [$this, 'permission'],
				'args'                => [
					WP_REST::ARG_POST_ID     => $this->arg_int_required,
					WP_REST::ARG_CAMPAIGN_ID => $this->arg_int_required,
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign/(?P<' . WP_REST::ARG_CAMPAIGN_ID . '>\d+)',
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_item' ),
				'permission_callback' => [$this, 'permission'],
				'args'                => [
					WP_REST::ARG_POST_ID     => $this->arg_int_required,
					WP_REST::ARG_CAMPAIGN_ID => $this->arg_int_required,
					WP_REST::ARG_AUDIENCE_ID => $this->arg_string,
					WP_REST::ARG_SEGMENT_ID  => $this->arg_int,
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign/(?P<' . WP_REST::ARG_CAMPAIGN_ID . '>\d+)',
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => array( $this, 'delete_item' ),
				'permission_callback' => [$this, 'permission'],
				'args'                => [
					WP_REST::ARG_POST_ID     => $this->arg_int_required,
					WP_REST::ARG_CAMPAIGN_ID => $this->arg_int_required,
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign/(?P<' . WP_REST::ARG_CAMPAIGN_ID . '>\d+)/test',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'test' ),
				'permission_callback' => [$this, 'permission'],
				'args'                => [
					WP_REST::ARG_POST_ID         => $this->arg_int_required,
					WP_REST::ARG_CAMPAIGN_ID     => $this->arg_int_required,
					WP_REST::ARG_EMAIL_ADDRESSES => [
						"required" => true,
						"type"     => "array",
						'items'    => array(
							'type'   => 'string',
							'format' => 'email',
						),
					],
					WP_REST::ARG_EMAIL_TYPE      => [
						'type'    => 'string',
						'enum'    => array(
							MailchimpTestMail::TYPE_BOTH,
							MailchimpTestMail::TYPE_HTML,
							MailchimpTestMail::TYPE_PLAINTEXT,
						),
						'default' => MailchimpTestMail::TYPE_BOTH,
					]
				]
			)
		);

	}

	public function permission(WP_REST_Request $request){
		$post_id = $request->get_param( WP_REST::ARG_POST_ID );
		$post_type = get_post_type($post_id);
		$isActive =  Option::isActiveFor($post_type);
		return $isActive && (current_user_can( 'edit_post', $post_id ) || WP_DEBUG);
	}

	public function get_items( $request ) {
		$recent  = $request->get_param( WP_REST::ARG_RECENT );
		$post_id = $request->get_param( WP_REST::ARG_POST_ID );
		if ( true === $recent ) {
			$campaign = $this->plugin->repository->getRecentCampaign( $post_id );

			return $campaign === null ? [] : $campaign;
		}

		return $this->plugin->repository->getCampaigns( $post_id );
	}

	public function get_item( $request ) {
		$post_id  = $request->get_param( WP_REST::ARG_POST_ID );
		$campaign_id = $request->get_param( WP_REST::ARG_CAMPAIGN_ID );
		return $this->plugin->repository->fetchCampaign($campaign_id);
	}

	public function update_item( $request ) {
		$campaignId     = $request->get_param( WP_REST::ARG_CAMPAIGN_ID );
		$audienceId = $request->get_param( WP_REST::ARG_AUDIENCE_ID );
		$segmentId  = $request->get_param( WP_REST::ARG_SEGMENT_ID );
		return $this->plugin->repository->updateCampaign(
			$campaignId, $audienceId, $segmentId
		);
	}

	public function delete_item( $request ) {
		$id      = $request->get_param( WP_REST::ARG_CAMPAIGN_ID );
		return $this->plugin->repository->deleteCampaign( $id );
	}

	public function test( WP_REST_Request $request ) {
		$id              = $request->get_param( WP_REST::ARG_CAMPAIGN_ID );
		$email_addresses = $request->get_param( WP_REST::ARG_EMAIL_ADDRESSES );
		$type            = $request->get_param( WP_REST::ARG_EMAIL_TYPE );

		$campaign = $this->plugin->repository->getCampaign( $id );
		if ( ! ( $campaign instanceof Campaign ) ) {
			return false;
		}

		return $this->plugin->api->sendTestMail( $campaign->campaign_id, new MailchimpTestMail(
			$email_addresses,
			$type
		) );
	}

}