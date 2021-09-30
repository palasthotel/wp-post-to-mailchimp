<?php


namespace Palasthotel\PostToMailchimp\Model;


use stdClass;

/**
 * @property int $id
 * @property int $post_id
 * @property null|string $audience_id
 * @property null|int $segment_id
 * @property null|string $campaign_id
 * @property null|array $attributes
 * @property string $state
 * @property null|int $schedule
 * @property stdClass custom
 */
class Campaign {

	const STATE_NEW = "new";
	const MC_STATUS_SAVED = "save";
	const MC_STATUS_PAUSED = "paused";
	const MC_STATUS_SCHEDULED = "schedule";
	const MC_STATUS_SENDING = "sending";
	const MC_STATUS_SENT = "sent";

	/**
	 * Campaign constructor.
	 *
	 * @param int $id
	 * @param int $post_id
	 */
	public function __construct( int $id, int $post_id ) {

		$this->id      = $id;
		$this->post_id = $post_id;
		$this->state   = static::STATE_NEW;

		$this->campaign_id = null;

		$this->audience_id = null;
		$this->segment_id  = null;

		$this->schedule = null;

		$this->attributes = null;

		$this->custom = new stdClass();

	}

	/**
	 * @param int $id
	 * @param int $post_id
	 *
	 * @return static
	 */
	public static function build( int $id, int $post_id ) {
		return new static( $id, $post_id );
	}

	public function isValid(): bool{
		return $this->campaign_id !== null && $this->attributes !== null;
	}

	/**
	 * @param string|null $campaignId
	 *
	 * @return $this
	 */
	public function setCampaignId( ?string $campaignId ) {
		$this->campaign_id = $campaignId;

		return $this;
	}

	/**
	 * sets attributes and overwrites object props: campaign_id, audience_id and segment_id
	 *
	 * @param array|null $attributes
	 *
	 * @return $this
	 */
	public function setAttributes( ?array $attributes ) {
		$this->attributes = $attributes;

		if ( isset( $attributes["id"] ) ) {
			$this->campaign_id = $attributes["id"];
		}

		if (
			isset( $attributes["recipients"] )
			&&
			is_array( $attributes["recipients"] )
		) {
			if ( isset( $attributes["recipients"]["list_id"] ) ) {
				$this->audience_id = $attributes["recipients"]["list_id"];
			}
			if ( isset( $attributes["recipients"]["segment_opts"] ) && isset( $attributes["recipients"]["segment_opts"]["saved_segment_id"] ) ) {
				$this->segment_id = $attributes["recipients"]["segment_opts"]["saved_segment_id"];
			}
		}

		$this->state = (
			is_array( $this->attributes )
			&&
			isset( $this->attributes["status"] )
			&&
			is_string( $this->attributes["status"] )
		) ?
			$this->attributes["status"]
			:
			static::STATE_NEW;

		if(
			is_array( $this->attributes )
			&&
			isset($this->attributes["send_time"])
			&&
			!empty($this->attributes["send_time"])
		){
			try {
				$dateTime = new \DateTime( $this->attributes["send_time"] );
				$this->schedule = $dateTime->getTimestamp() * 1000; // go with javascript microseconds
			} catch ( \Exception $e ) {
				$this->schedule = null;
			}
		} else {
			$this->schedule = null;
		}

		return $this;
	}

	/**
	 * @return string
	 */
	public function getMailchimpStatus() {
		return (
			is_array( $this->attributes )
			&&
			isset( $this->attributes["status"] )
			&&
			is_string( $this->attributes["status"] )
		) ?
			$this->attributes["status"]
			:
			static::STATE_NEW;
	}

	/**
	 * @param stdClass $obj
	 *
	 * @return $this
	 */
	public function setCustom($obj){
		$this->custom = $obj;
		return $this;
	}


}