<?php


namespace Palasthotel\PostToMailchimp\Model;


/**
 * @property string id
 * @property string $name
 */
class GroupInterest {

	public function __construct(string $id, string $name) {
		$this->id   = $id;
		$this->name = $name;
	}

}