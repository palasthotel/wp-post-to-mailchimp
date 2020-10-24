<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\REST\CampaignsController;
use Palasthotel\PostToMailchimp\REST\RecentCampaignField;

/**
 * @property CampaignsController campaignsController
 * @property RecentCampaignField recentCampaignField
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
		$this->recentCampaignField = new RecentCampaignField( $this->plugin );
	}


}