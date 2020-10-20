<?php


namespace Palasthotel\PostToMailchimp\REST;


use Palasthotel\PostToMailchimp\Campaign;
use Palasthotel\PostToMailchimp\WP_REST;
use WP_REST_Request;
use WP_REST_Server;

class CampaignsController extends _BaseController {

	protected $rest_base = "campaigns";

	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/'.$this->rest_base,
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'create_item' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					WP_REST::ARG_POST_ID => $this->arg_int_required,
					WP_REST::ARG_AUDIENCE_ID => $this->arg_string_required,
					WP_REST::ARG_SEGMENT_ID => $this->arg_int,
				]
			)
		);

		register_rest_route(
			$this->namespace,
			'/'.$this->rest_base,
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_item' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					WP_REST::ARG_POST_ID => $this->arg_int_required,
				]
			)
		);

		register_rest_route(
			WP_REST::ROUTES_NAMESPACE,
			'/'.$this->rest_base.'/(?P<' . WP_REST::ARG_POST_ID . '>\d+)',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_post', $request->get_param( WP_REST::ARG_POST_ID ) );
				},
				'args'                => [
					WP_REST::ARG_POST_ID => $this->arg_int_required,
				]
			)
		);

	}

	public function create_item( $request ) {


		$postId = $request->get_param(WP_REST::ARG_POST_ID);
		$audienceId = $request->get_param(WP_REST::ARG_AUDIENCE_ID);
		$segmentId = $request->get_param(WP_REST::ARG_SEGMENT_ID);

		// TODO: create campaign via mailchimp api
		return $this->plugin->repository->addCampaign(
			get_the_title( $postId ), $postId, $audienceId
		);
	}

	public function update_item( $request ) {
		return [
			"post_id" => $request->get_param(WP_REST::ARG_POST_ID),
			"audience_id" => $request->get_param(WP_REST::ARG_AUDIENCE_ID),
			"segment_id" => $request->get_param(WP_REST::ARG_SEGMENT_ID),
		];
	}

	public function get_items( $request ) {
		return $this->plugin->repository->getCampaigns($request->get_param(WP_REST::ARG_POST_ID));
	}

}