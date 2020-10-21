<?php


namespace Palasthotel\PostToMailchimp\REST;


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
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param( WP_REST::ARG_POST_ID ) );
				},
				'args'                => [
					WP_REST::ARG_POST_ID => $this->arg_int_required,
					WP_REST::ARG_RECENT  => [
						"type" => "boolean",
					]
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'create_item' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param(WP_REST::ARG_POST_ID) );
				},
				'args'                => [
					WP_REST::ARG_POST_ID     => $this->arg_int_required,
					WP_REST::ARG_AUDIENCE_ID => $this->arg_string_required,
					WP_REST::ARG_SEGMENT_ID  => $this->arg_int,
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign/(?P<' . WP_REST::ARG_CAMPAIGN_ID . '>\d+)',
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_item' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param( WP_REST::ARG_POST_ID ) );
				},
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
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param( WP_REST::ARG_POST_ID ) );
				},
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
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'test' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param( WP_REST::ARG_POST_ID ) );
				},
				'args'                => [
					WP_REST::ARG_POST_ID     => $this->arg_int_required,
					WP_REST::ARG_CAMPAIGN_ID => $this->arg_int_required,
					"emails" => [

					]
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<' . WP_REST::ARG_POST_ID . '>\d+)/campaign/(?P<' . WP_REST::ARG_CAMPAIGN_ID . '>\d+)/send',
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'send' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param( WP_REST::ARG_POST_ID ) );
				},
				'args'                => [
					WP_REST::ARG_POST_ID     => $this->arg_int_required,
					WP_REST::ARG_CAMPAIGN_ID => $this->arg_int_required,
				]
			)
		);

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

	public function create_item( $request ) {

		$postId     = $request->get_param( WP_REST::ARG_POST_ID );
		$audienceId = $request->get_param( WP_REST::ARG_AUDIENCE_ID );
		$segmentId  = $request->get_param( WP_REST::ARG_SEGMENT_ID );

		// TODO: create campaign via mailchimp api
		return $this->plugin->repository->addCampaign(
			get_the_title( $postId ), $postId, $audienceId, $segmentId
		);
	}

	public function update_item( $request ) {
		return [
			"post_id"     => $request->get_param( WP_REST::ARG_POST_ID ),
			"audience_id" => $request->get_param( WP_REST::ARG_AUDIENCE_ID ),
			"segment_id"  => $request->get_param( WP_REST::ARG_SEGMENT_ID ),
		];
	}

	public function delete_item( $request ) {
		$post_id = $request->get_param(WP_REST::ARG_POST_ID);
		$id = $request->get_param(WP_REST::ARG_CAMPAIGN_ID);
		return  $this->plugin->repository->deleteCampaign($id);
	}

	public function test(WP_REST_Request $request){
		$post_id = $request->get_param(WP_REST::ARG_POST_ID);
		$id = $request->get_param(WP_REST::ARG_CAMPAIGN_ID);

		// TODO: send test messages
		return true;
	}

	public function send(WP_REST_Request $request){
		$post_id = $request->get_param(WP_REST::ARG_POST_ID);
		$id = $request->get_param(WP_REST::ARG_CAMPAIGN_ID);

		// TODO: send message
		return true;
	}

}