<?php


namespace Palasthotel\PostToMailchimp;


/**
 * @property int post_id
 * @property int campaign_id
 * @property string state
 */
class Campaign {

	const STATE_CREATED = "created";
	const STATE_SCHEDULED = "scheduled";
	const STATE_SENT = "sent";

	public function __construct(int $post_id, int $campaign_id, string $state = "created") {
		$this->post_id = $post_id;
		$this->campaign_id = $campaign_id;
		$this->state = $state;
	}

}