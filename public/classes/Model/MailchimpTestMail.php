<?php


namespace Palasthotel\PostToMailchimp\Model;


/**
 * @property string[] emailAddresses
 * @property string type
 */
class MailchimpTestMail {

	const TYPE_PLAINTEXT = "plaintext";
	const TYPE_HTML = "html";

	/**
	 * MailchimpTestMail constructor.
	 *
	 * @param string[] $emailAddresses
	 * @param string $type
	 */
	public function __construct(array $emailAddresses, string $type) {
		$this->emailAddresses = $emailAddresses;
		$this->type = $type;
	}

}