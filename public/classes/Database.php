<?php


namespace Palasthotel\PostToMailchimp;

use Palasthotel\PostToMailchimp\Model\Campaign;
use wpdb;

/**
 * @property wpdb wpdb
 * @property string $table
 */
class Database extends _Component {

	public function onCreate() {
		global $wpdb;
		$this->wpdb  = $wpdb;
		$this->table = $wpdb->prefix . "post_to_mailchimp_campaigns";
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
				"campaign_state" => Campaign::STATE_NEW,
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
				"SELECT * FROM $this->table WHERE post_id = %d AND campaign_state != %s ORDER BY id LIMIT 1", $post_id, Campaign::STATE_DONE
			)
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
			"campaign_state" => $campaign->state,
			"schedule"       => $campaign->schedule,
			"attributes"     => $campaign->attributes !== null ? json_encode( $campaign->attributes ) : null,
		];

		$response = $this->wpdb->update(
			$this->table,
			$data,
			[
				"id" => $campaign->id,
			]
		);

		return $response;
	}

	/**
	 * @param int $id
	 *
	 * @return bool|int
	 */
	public function deleteCampaign( int $id ) {
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

	// ------------------------------------------------------------------------
	// util functions
	// ------------------------------------------------------------------------
	/**
	 * @param object $row
	 *
	 * @return Campaign
	 */
	private function campaignRowToModel( object $row ) {
		$attributes = ! empty( $row->attributes ) ? json_decode( $row->attributes, true ) : null;

		return Campaign::build( $row->id, $row->post_id, $row->campaign_state )
		               ->setSchedule( $row->schedule )
		               ->setCampaignId( $row->campaign_id )
		               ->setAttributes( $attributes );
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
			 campaign_state varchar(10) NOT NULL,
			 schedule bigint(20) unsigned default null,
			 attributes text default NULL,
			 primary key (id),
			 unique key unique_post_campaign (post_id, campaign_id, campaign_state),
			 key (campaign_state),
			 key (campaign_id),
			 key (schedule),
			 key (post_id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;" );

	}


}