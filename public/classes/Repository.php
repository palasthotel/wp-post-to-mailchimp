<?php


namespace Palasthotel\PostToMailchimp;


use WP_Error;

class Repository extends _Component {

	/**
	 * @var null|Audience[]
	 */
	private $audiences;

	/**
	 * @var array
	 */
	private $audienceMap;

	/**
	 * @var array
	 */
	private $segments;

	/**
	 * @var array
	 */
	private $groups;

	public function onCreate() {
		$this->audienceMap = [];
		$this->segments    = [];
		$this->groups      = [];
	}

	/**
	 * @return Audience[]
	 */
	public function getAudiences() {
		if ( is_array( $this->audiences ) ) {
			return $this->audiences;
		}

		$cache = get_transient( Plugin::TRANSIENT_LISTS );
		if ( is_array( $cache ) ) {
			$this->audiences = $cache;

			return $this->audiences;
		}

		$this->audiences = $this->plugin->api->getAudiences();
		set_transient( Plugin::TRANSIENT_LISTS, $this->audiences, 60 * 10 );

		return $this->audiences;
	}

	public function getAudience( $audienceListId ) {
		if ( isset( $this->audienceMap[ $audienceListId ] ) ) {
			return $this->audienceMap[ $audienceListId ];
		}
		if ( is_array( $this->audiences ) ) {
			$found = array_filter( $this->audiences, function ( $item ) use ( $audienceListId ) {
				return $item->listId === $audienceListId;
			} );
			if ( count( $found ) === 1 ) {
				return $found[0];
			}
		}
		$audience                             = $this->plugin->api->getAudience( $audienceListId );
		$this->audienceMap[ $audienceListId ] = $audience;

		return $audience;
	}

	/**
	 * @param Audience|string $audienceOrId
	 *
	 * @return Segment[]
	 */
	public function getSegments( $audienceOrId ) {
		$id = $audienceOrId instanceof Audience ? $audienceOrId->listId : $audienceOrId;

		if ( isset( $this->segments[ $id ] ) ) {
			return $this->segments[ $id ];
		}

		$transientKey = sprintf( Plugin::TRANSIENT_SEGMENTS, $id );
		$cache        = get_transient( $transientKey );
		if ( is_array( $cache ) ) {
			$this->segments[ $id ] = $cache;

			return $this->segments[ $id ];
		}

		$this->segments[ $id ] = $this->plugin->api->getSegments( $id );
		set_transient( $transientKey, $this->segments[ $id ], 60 * 10 );

		return $this->segments[ $id ];

	}

	/**
	 * @param Audience|string $audienceOrId
	 *
	 * @return GroupCategory[]
	 */
	public function getGroups( $audienceOrId ) {
		$id = $audienceOrId instanceof Audience ? $audienceOrId->listId : $audienceOrId;

		if ( isset( $this->groups[ $id ] ) ) {
			return $this->groups[ $id ];
		}

		$transientKey = sprintf( Plugin::TRANSIENT_GROUPS, $id );
		$cache        = get_transient( $transientKey );
		if ( is_array( $cache ) ) {
			$this->groups[ $id ] = $cache;

			return $this->groups[ $id ];
		}

		$groups = $this->plugin->api->getGroups( $id );
		$this->groups[$id] = $groups;
		set_transient($transientKey, $this->groups[$id], 60*10);

		return $this->groups[$id];
	}

	/**
	 * clear all caches
	 */
	public function cacheClear() {
		$this->audiences = null;
		delete_transient( Plugin::TRANSIENT_LISTS );
		$this->audienceMap = [];
		$this->segments = [];
		$this->groups = [];
		global $wpdb;
		$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE '" . Plugin::TRANSIENT_DELETE_SEGMENTS_LIKE . "'" );
		$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE '" . Plugin::TRANSIENT_DELETE_GROUPS_LIKE . "'" );
	}

	/**
	 * @param $post_id
	 *
	 * @return Campaign[]
	 */
	public function getCampaigns( $post_id ) {
		return $this->plugin->database->getCampaigns( $post_id );
	}

	/**
	 * @param $post_id
	 *
	 * @return Campaign|null
	 */
	public function getRecentCampaign( $post_id ){
		return $this->plugin->database->getRecentCampaign($post_id);
	}

	/**
	 * @param string $title
	 * @param int $post_id
	 * @param string $audienceListId
	 * @param null|int $segmentId
	 *
	 * @return Campaign|WP_Error
	 */
	public function addCampaign( string $title, int $post_id, string $audienceListId, ?int $segmentId ) {

		$campaign = $this->plugin->database->addCampaign( $post_id );

		$audience = $this->getAudience( $audienceListId );

		if ( ! ( $audience instanceof Audience ) ) {
			return new WP_Error( 404, "Could not find audience list id.", [
				"audience" => $audienceListId,
				"campaign" => $campaign,
			] );
		}

		$campaign->audience_id = $audienceListId;
		$campaign->segment_id = $segmentId;

		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			// only local if debug
			$campaign->campaign_id = "debug-" . $campaign->id;
			$campaign->attributes  = [];
			$this->plugin->database->updateCampaign( $campaign );

			return $campaign;
		}

		// create campaign at mailchimp
		$response = $this->plugin->api->addCampaign( $title, $audienceListId, $segmentId, array(
			"settings" => array(
				"from_name"    => $audience->campaignDefaults["from_name"],
				"from_email"   => $audience->campaignDefaults["from_email"],
				"reply_to"     => $audience->campaignDefaults["from_email"],
				"subject_line" => $title,
			),
		) );
		if ( ! is_array( $response ) ) {
			return new WP_Error(
				500,
				"Bad response from mailchimp controller.",
				[
					"response" => $response,
					"campaign" => $campaign,
				]
			);
		}

		$this->plugin->database->updateCampaign(
			$campaign->setCampaignId($response["id"])
			         ->setState(Campaign::STATE_SAVED)
			         ->setAttributes($response)
		);

		return $campaign;
	}

	/**
	 * @param int $id
	 *
	 * @return bool|WP_Error
	 */
	public function deleteCampaign( int $id ) {
		$campaign = $this->plugin->database->getCampaign($id);
		if(null === $campaign) return new WP_Error(
			404,
			"Could not find campaign.",
			[
				"id" => $id,
			]
		);
		$apiResponse = $this->plugin->api->deleteCampaign($campaign->campaign_id);
		if(!$apiResponse) return new WP_Error(
			500,
			"Could not delete campaign from Mailchimp",
			[
				"response" => $apiResponse,
				"id" => $id,
			]
		);
		$dbResult = $this->plugin->database->deleteCampaign($campaign->id);
		if(!$dbResult) return new WP_Error(
			500,
			"Could not delete campaign from database",
			[
				"id" => $id,
			]
		);

		return true;
	}


}