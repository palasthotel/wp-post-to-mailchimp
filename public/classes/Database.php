<?php


namespace Palasthotel\PostToMailchimp;

use Palasthotel\PostToMailchimp\Model\Campaign;
use stdClass;
use wpdb;

/**
 * @property wpdb wpdb
 * @property string $table
 * @property string table_customize
 * @property string table_pending_updates
 */
class Database extends _Component {

	public function onCreate() {
		global $wpdb;
		$this->wpdb  = $wpdb;
		$this->table = $wpdb->prefix . "post_to_mailchimp_campaigns";
		$this->table_customize = $wpdb->prefix . "post_to_mailchimp_campaigns_customize";
		$this->table_pending_updates = $wpdb->prefix . "post_to_mailchimp_pending_updates";
	}

	/**
	 * add new campaign to post
	 *
	 * @param int $post_id
	 *
	 * @return false|Campaign
	 */
	public function addCampaign( int $post_id ) {
		$row = $this->wpdb->get_row( "SELECT * FROM $this->table WHERE campaign_id IS NULL LIMIT 1" );
		if ( $row ) {
			return $this->campaignRowToModel( $row );
		}
		$inserted = $this->wpdb->insert(
			$this->table,
			[
				"post_id"        => $post_id,
			]
		);
		if ( ! $inserted ) {
			return false;
		}

		return new Campaign( $this->wpdb->insert_id, $post_id, Campaign::STATE_NEW );

	}

	/**
	 * @param int $post_id
	 *
	 * @return Campaign|null
	 */
	public function getRecentCampaign( int $post_id ) {
		$row = $this->wpdb->get_row(
			$this->wpdb->prepare(
				"SELECT * FROM $this->table WHERE post_id = %d ORDER BY id LIMIT 1", $post_id)
		);
		if ( $row ) {
			return $this->campaignRowToModel( $row );
		}

		return null;
	}

	/**
	 * @param int $id
	 *
	 * @return Campaign|null
	 */
	public function getCampaign( int $id ) {
		$row = $this->wpdb->get_row(
			$this->wpdb->prepare(
				"SELECT * FROM $this->table WHERE id = %d ORDER BY id LIMIT 1", $id
			)
		);
		if ( $row ) {
			return $this->campaignRowToModel( $row );
		}

		return null;
	}

	/**
	 * @param string $campaign_id mailchimp campaign id
	 *
	 * @return Campaign|null
	 */
	public function getCampaignById( string $campaign_id ) {
		$row = $this->wpdb->get_row(
			$this->wpdb->prepare(
				"SELECT * FROM $this->table WHERE campaign_id = %s ORDER BY id LIMIT 1", $campaign_id
			)
		);
		if ( $row ) {
			return $this->campaignRowToModel( $row );
		}

		return null;
	}


	/**
	 * @param int $post_id
	 *
	 * @return Campaign[]
	 */
	public function getCampaigns( int $post_id ) {
		$result = $this->wpdb->get_results(
			$this->wpdb->prepare( "SELECT * FROM $this->table WHERE post_id = %d", $post_id )
		);
		if ( ! is_array( $result ) ) {
			return [];
		}

		return array_map( [ $this, 'campaignRowToModel' ], $result );
	}

	/**
	 * @param Campaign $campaign
	 *
	 * @return bool|int
	 */
	public function updateCampaign( Campaign $campaign ) {
		$data = [
			"post_id"        => $campaign->post_id,
			"campaign_id"    => $campaign->campaign_id,
			"attributes"     => $campaign->attributes !== null ? json_encode( $campaign->attributes ) : null,
		];

		return $this->wpdb->update(
			$this->table,
			$data,
			[
				"id" => $campaign->id,
			]
		);
	}

	/**
	 * @param int $id
	 * @param array $customs_array
	 */
	public function updateCampaignCustoms( int $id, array $customs_array ) {
		$this->deleteCampaignCustoms($id);
		foreach ($customs_array as $key => $value){
			$this->wpdb->insert(
				$this->table_customize,
				[
					"campaign_id" => $id,
					"custom_key" => $key,
					"custom_value" => $value
				],
				[ "%d", "%s", "%s"]
			);
		}
	}

	/**
	 * @param int $id
	 *
	 * @return stdClass
	 */
	public function getCampaignCustoms(int $id){
		$results = $this->wpdb->get_results(
			$this->wpdb->prepare("SELECT custom_key, custom_value FROM $this->table_customize WHERE campaign_id = %d", $id)
		);
		$customs = new stdClass();
		foreach ($results as $row){
			$customs->{$row->custom_key} = $row->custom_value;
		}
		return $customs;
	}

	/**
	 * @param int $id
	 *
	 * @return bool|int
	 */
	public function deleteCampaignCustoms( int $id ) {
		return $this->wpdb->delete(
			$this->table_customize,
			["campaign_id" => $id],
			["%d"]
		);
	}

	/**
	 * @param int $id
	 *
	 * @return bool|int
	 */
	public function deleteCampaign( int $id ) {
		$this->deleteCampaignCustoms($id);
		return $this->wpdb->delete( $this->table, [ "id" => $id, ], [ "%d" ] );
	}

	/**
	 * @param int $post_id
	 *
	 * @return bool|int
	 */
	public function deleteCampaigns( int $post_id ) {
		return $this->wpdb->delete( $this->table, [ "post_id" => $post_id ], [ '%d' ] );
	}

	public function scheduleCampaignUpdate(int $campaign_id){
		return $this->wpdb->replace(
			$this->table_pending_updates,
			["campaign_id" => $campaign_id]
		);
	}

	public function getScheduledCampaignUpdates(){
		return $this->wpdb->get_col(
			"SELECT campaign_id FROM $this->table_pending_updates"
		);
	}

	public function unscheduleCampaignUpdate(int $campaign_id){
		return $this->wpdb->delete(
			$this->table_pending_updates,
			["campaign_id" => $campaign_id]
		);
	}

	// ------------------------------------------------------------------------
	// util functions
	// ------------------------------------------------------------------------
	/**
	 * @param object $row
	 *
	 * @return Campaign
	 */
	private function campaignRowToModel( $row ) {
		$attributes = ! empty( $row->attributes ) ? json_decode( $row->attributes, true ) : null;

		return Campaign::build( $row->id, $row->post_id )
		               ->setCampaignId( $row->campaign_id )
		               ->setAttributes( $attributes )
						->setCustom($this->getCampaignCustoms($row->id));
	}

	/**
	 *
	 */
	public function createTables() {
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		\dbDelta( "CREATE TABLE IF NOT EXISTS $this->table
			(
			 id bigint(20) unsigned auto_increment,
			 post_id bigint(20) unsigned NOT NULL,
			 campaign_id varchar (30) default null,
			 attributes text default NULL,
			 primary key (id),
			 unique key unique_post_campaign (post_id, campaign_id),
			 key (campaign_id),
			 key (post_id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

		\dbDelta( "CREATE TABLE IF NOT EXISTS $this->table_customize
			(
			 campaign_id bigint(20) unsigned,
			 custom_key varchar(190) NOT NULL,
			 custom_value TEXT default null,
			 primary key (campaign_id, custom_key)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;" );

		\dbDelta( "CREATE TABLE IF NOT EXISTS $this->table_pending_updates
			(
			 campaign_id bigint(20) unsigned,
			 update_date datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
			 primary key (campaign_id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;" );

	}

}