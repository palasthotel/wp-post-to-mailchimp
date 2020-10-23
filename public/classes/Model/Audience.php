<?php


namespace Palasthotel\PostToMailchimp\Model;


/**
 * @property  string listId
 * @property  string webId
 * @property  string name
 * @property int|null $memberCount
 * @property array campaignDefaults
 * @property string createdAt
 * @property string updatedAt
 */
class Audience {

	/**
	 * Audience constructor.
	 *
	 * @param string $listId
	 * @param string $webId
	 * @param string $name
	 * @param string $createdAt
	 */
	public function __construct( string $listId, string $webId, string $name, string $createdAt ) {
		$this->listId           = $listId;
		$this->webId            = $webId;
		$this->name             = $name;
		$this->createdAt        = $createdAt;
		$this->memberCount      = null;
		$this->campaignDefaults = [];
	}

	/**
	 * @param string $listId
	 * @param string $webId
	 * @param string $name
	 * @param string $createdAt
	 *
	 * @return static
	 */
	public static function build( string $listId, string $webId, string $name, string $createdAt ) {
		return new static( $listId, $webId, $name, $createdAt );
	}

	/**
	 * @param array $apiResult
	 *
	 * @return Audience
	 */
	public static function parse( array $apiResult ){
		return static::build( $apiResult["id"], $apiResult["web_id"], $apiResult["name"], $apiResult["date_created"] )
		               ->setMemberCount( $apiResult["stats"]["member_count"] )
		               ->setCampaignDefaults( $apiResult["campaign_defaults"] );
	}

	/**
	 * @param array $defaults
	 *
	 * @return $this
	 */
	public function setCampaignDefaults( array $defaults ) {
		$this->campaignDefaults = $defaults;

		return $this;
	}

	/**
	 * @param int $count
	 *
	 * @return $this
	 */
	public function setMemberCount( int $count ) {
		$this->memberCount = $count;

		return $this;
	}


}