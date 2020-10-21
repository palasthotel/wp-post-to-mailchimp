<?php


namespace Palasthotel\PostToMailchimp;


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

	/**
	 * start component
	 */
	public function onCreate() {
		add_action( 'rest_api_init', array( $this, 'init_rest_api' ) );
	}

	public function init_rest_api() {
		$this->campaignsController = CampaignsController::register($this->plugin);
	}


}