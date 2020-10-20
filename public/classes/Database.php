<?php


namespace Palasthotel\PostToMailchimp;

use wpdb;

/**
 * @property wpdb wpdb
 * @property string statesTable
 */
class Database extends _Component {

	public function onCreate() {
		global $wpdb;
		$this->wpdb = $wpdb;
		$this->statesTable = $wpdb->prefix."post_to_mailchimp_campaigns";
	}

	/**
	 * @param Campaign $campaign
	 *
	 * @return bool|int
	 */
	public function updateCampaign( Campaign $campaign ) {
		return $this->wpdb->replace(
			$this->statesTable,
			[
				"campaign_id" => $campaign->campaign_id,
				"post_id" => $campaign->post_id,
				"state" => $campaign->state,
			]
		);
	}

	/**
	 * @param int $post_id
	 *
	 * @return Campaign[]
	 */
	public function getCampaigns( $post_id ) {
		$result = $this->wpdb->get_results(
			$this->wpdb->prepare("SELECT * FROM $this->statesTable WHERE post_id = %d", $post_id)
		);
		if(!is_array($result)) return [];
		return array_map(function ($item){
			return new Campaign($item->post_id, $item->campaign_id, $item->state);
		}, $result);
	}

	/**
	 *
	 */
	public function createTables(){
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		\dbDelta( "CREATE TABLE IF NOT EXISTS $this->statesTable
			(
			 campaign_id bigint(20) unsigned NOT NULL,
			 post_id bigint(20) unsigned NOT NULL,
			 campaign_state varchar(20) NOT NULL,
			 primary key (campaign_id),
			 key (post_id),
			 key (campaign_state)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;" );

	}

}