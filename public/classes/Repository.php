<?php


namespace Palasthotel\PostToMailchimp;


class Repository extends _Component {

	/**
	 * @var null|Audience[]
	 */
	private $lists;

	/**
	 * @var array
	 */
	private $audianceMap;

	/**
	 * @var array
	 */
	private $segments;

	public function onCreate() {
		$this->segments    = [];
		$this->audianceMap = [];
	}

	/**
	 * @return Audience[]
	 */
	public function getAudiencesList() {
		if ( is_array( $this->lists ) ) {
			return $this->lists;
		}

		$cache = get_transient( Plugin::TRANSIENT_LISTS );
		if ( is_array( $cache ) ) {
			$this->lists = $cache;

			return $this->lists;
		}

		$this->lists = $this->plugin->controller->getLists();
		set_transient( Plugin::TRANSIENT_LISTS, $this->lists, 60 * 10 );

		return $this->lists;
	}

	public function getAudience( $audienceListId ) {
		if ( isset( $this->audianceMap[ $audienceListId ] ) ) {
			return $this->audianceMap[ $audienceListId ];
		}
		if ( is_array( $this->lists ) ) {
			$found = array_filter( $this->lists, function ( $item ) use ( $audienceListId ) {
				return $item->listId === $audienceListId;
			} );
			if ( count( $found ) === 1 ) {
				return $found[0];
			}
		}
		$audience                             = $this->plugin->controller->getAudience( $audienceListId );
		$this->audianceMap[ $audienceListId ] = $audience;

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

		$this->segments[ $id ] = $this->plugin->controller->getSegments( $id );
		set_transient( $transientKey, $this->segments[ $id ], 60 * 10 );

		return $this->segments[ $id ];

	}

	public function cacheClear() {
		$this->lists = null;
		delete_transient( Plugin::TRANSIENT_LISTS );
		$this->segments = [];
		global $wpdb;
		$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE '" . Plugin::TRANSIENT_DELETE_SEGMENTS_LIKE . "'" );
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
	 * @param string $title
	 * @param int $post_id
	 * @param string $audienceListId
	 *
	 * @return Campaign|false
	 */
	public function addCampaign( string $title, int $post_id, string $audienceListId ) {

		$audience = $this->getAudience( $audienceListId );

		if ( ! ( $audience instanceof Audience ) ) {
			return false;
		}

		$campaign = $this->plugin->controller->addCampaign( $title, $audienceListId, array(
			"settings" => array(
				"from_name"    => $audience->campaignDefaults["from_name"],
				"from_email"   => $audience->campaignDefaults["from_email"],
				"reply_to"     => $audience->campaignDefaults["from_email"],
				"subject_line" => $title,
			),
		) );
		if ( ! is_array( $campaign ) ) {
			return false;
		}

		$campaign = new Campaign( $post_id, $campaign["id"] );
		$this->plugin->database->updateCampaign( $campaign );

		return $campaign;
	}


}