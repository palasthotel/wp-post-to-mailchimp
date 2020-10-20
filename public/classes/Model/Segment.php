<?php


namespace Palasthotel\PostToMailchimp;


/**
 * @property int id
 * @property string name
 * @property string listId
 * @property string createdAt
 * @property string updatedAt
 */
class Segment {

	/**
	 * Segment constructor.
	 *
	 * @param int $id
	 * @param string $name
	 * @param string $listId
	 * @param string $createdAt
	 * @param string $updatedAt
	 */
	public function __construct(int $id, string $name, string $listId, string $createdAt, string $updatedAt) {
		$this->id = $id;
		$this->name = $name;
		$this->listId = $listId;
		$this->createdAt = $createdAt;
		$this->updatedAt = $updatedAt;
	}
}