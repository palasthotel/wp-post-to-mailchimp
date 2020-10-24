<?php


namespace Palasthotel\PostToMailchimp\Model;


class MailchimpCampaignArgs {

	// https://developer.mailchimp.com/documentation/mailchimp/reference/campaigns/

	const TYPE_REGULAR = "regular";
	const TYPE_PLAINTEXT = "plaintext";
	const TYPE_ABSPLIT = "absplit";
	const TYPE_RSS = "rss";
	const TYPE_VARIATE = "variate";

	/**
	 * @var string
	 */
	var $type = self::TYPE_REGULAR;

	/**
	 * @var null|string
	 */
	var $campaign_id;

	/**
	 * @var null|string
	 */
	var $title;
	/**
	 * @var null|string
	 */
	var $subject;
	/**
	 * @var null|string
	 */
	var $from_name;
	/**
	 * @var null|string
	 */
	var $from_email;
	/**
	 * @var null|string
	 */
	var $reply_to;
	/**
	 * @var null|string
	 */
	var $list_id;
	/**
	 * @var null|int
	 */
	var $segment_id;

	/**
	 * @return static
	 */
	public static function build(){
		return new static();
	}

	/**
	 * @param string $value
	 *
	 * @return $this
	 */
	public function setType(string $value){
		$this->type = $value;
		return $this;
	}

	/**
	 * for updates
	 * @param string $campaign_id
	 *
	 * @return $this
	 */
	public function setCampaignId(string $campaign_id){
		$this->campaign_id = $campaign_id;
		return $this;
	}

	/**
	 * sets list_id, from_name, from_email and reply_to fields
	 * @param Audience $audience
	 *
	 * @return $this
	 */
	public function setAudience(Audience $audience){
		$this->setListId($audience->listId)
		     ->setFrom(
		     	$audience->campaignDefaults["from_name"],
		        $audience->campaignDefaults["from_email"]
		     )
		     ->setReplyTo($audience->campaignDefaults["from_email"]);
		return $this;
	}

	public function setListId(string $value){
		$this->list_id = $value;
		return $this;
	}

	public function setFrom(string $name,$email){
		$this->from_name = $name;
		$this->from_email = $email;
		return $this;
	}

	public function setReplyTo(string $email){
		$this->reply_to = $email;
		return $this;
	}

	public function setSegmentId(?int $value){
		$this->segment_id = $value;
		return $this;
	}

	public function setSubject(string $subject){
		$this->subject = $subject;
		if(empty($this->title)) $this->title = $subject;
		return $this;
	}

	public function setTitle(string $title){
		$this->title = $title;
		if(empty($this->subject)) $this->subject = $title;
		return $this;
	}

	public function toArray(){
		$args = [
			"type" => $this->type,
		];

		$recipients = [];
		if($this->list_id) $recipients["list_id"] = $this->list_id;
		$recipients["segment_opts"] = ["saved_segment_id" => $this->segment_id ? $this->segment_id : 0];
		if(!empty($recipients)) $args["recipients"] = $recipients;

		$settings = [];
		if($this->title) $settings["title"] = $this->title;
		if($this->from_name) $settings["from_name"] = $this->from_name;
		if($this->from_email) $settings["from_email"] = $this->from_email;
		if($this->reply_to) $settings["reply_to"] = $this->reply_to;
		if($this->subject) $settings["subject_line"] = $this->subject;

		if(!empty($settings)) $args["settings"] = $settings;

		return $args;

	}

}