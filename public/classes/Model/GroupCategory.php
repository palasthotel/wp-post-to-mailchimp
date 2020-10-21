<?php


namespace Palasthotel\PostToMailchimp;


/**
 * @property string id
 * @property string title
 * @property GroupInterest[] interests
 */
class GroupCategory {

	/**
	 * GroupCategory constructor.
	 *
	 * @param string $id
	 * @param string $title
	 * @param GroupInterest[] $interests
	 */
	public function __construct(string $id, string $title, array $interests) {
		$this->id = $id;
		$this->title = $title;
		$this->interests = $interests;
	}

}