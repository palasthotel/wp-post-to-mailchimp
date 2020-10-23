<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\Model\Campaign;
use Palasthotel\PostToMailchimp\REST\CampaignsController;
use WP_REST_Request;
use WP_REST_Server;

/**
 * @property CampaignsController campaignsController
 * @property \Closure[] arg_int_required
 */
class WP_REST extends _Component {

	/**
	 * routes
	 */
	const ROUTES_NAMESPACE = "post-to-mailchimp/v1";

	/**
	 * arguments
	 */
	const ARG_POST_ID = "post_id";

	const ARG_CAMPAIGN_ID = "campaign_id";

	const ARG_AUDIENCE_ID = "audience_id";

	const ARG_SEGMENT_ID = "segment_id";

	const ARG_RECENT = "recent";

	const ARG_EMAIL_ADDRESSES = "email_addresses";

	const ARG_EMAIL_TYPE = "email_type";

	/**
	 * start component
	 */
	public function onCreate() {
		add_action( 'rest_api_init', array( $this, 'init_rest_api' ) );
	}

	public function init_rest_api() {
		$this->campaignsController = CampaignsController::register( $this->plugin );

		// TODO: settings
		register_rest_field(
			[ "post", "newsletter" ],
			Plugin::REST_FIELD_RECENT_CAMPAIGN,
			[
				'get_callback'        => function ( $post ) {
					$postId   = $post["id"];
					$campaign = $this->plugin->repository->getRecentCampaign( $postId );

					return null === $campaign ? new \stdClass() : $campaign;
				},
				'update_callback'     => function ( $value, $post ) {
					if ( is_array( $value ) ) {
						$campaign = $this->plugin->repository->getRecentCampaign( $post->ID );
						if ( isset( $value["delete"] ) && true === $value["delete"] ) {
							if ( $campaign instanceof Campaign ) {
								$this->plugin->repository->deleteCampaign( $campaign->id );
							}
						} else if ( isset( $value["id"] ) ) {
							if($campaign instanceof Campaign){
								$success = $this->plugin->repository->updateCampaign(
									$campaign,
									get_the_title( $post ),
									sanitize_text_field( $value["audience_id"] ),
									isset( $value["segment_id"] ) ? intval( $value["segment_id"] ) : null
								);
							}
						} else {
							$campaign = $this->plugin->repository->addCampaign(
								get_the_title( $post ),
								$post->ID,
								sanitize_text_field( $value["audience_id"] ),
								isset( $value["segment_id"] ) ? intval( $value["segment_id"] ) : null
							);
						}
					}
				},
				'permission_callback' => function ( $request ) {
					return current_user_can( 'edit_post', $request["id"] );
				},
//				'schema' => array(
//					'description' => "Recent campaign",
//					'type'        => 'array'
//				),
			]
		);
	}


}