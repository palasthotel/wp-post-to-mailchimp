<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\Model\NewsletterType;


class NewsletterTypes {

	private $types = null;

	/**
	 * @return NewsletterType[]
	 */
	public function getTypes(){
		if(is_array($this->types)) return $this->types;

		$types = apply_filters(Plugin::FILTER_NEWSLETTER_TYPES, []);
		$this->types = array_map(function($type){
			$model = new NewsletterType();
			$model->id = $type["id"];
			$model->label = $type["label"];
			return $model;
		}, $types);

		return $this->types;
	}

	public function getType($post_id){
		return apply_filters(Plugin::FILTER_NEWSLETTER_TYPE_ID, null, $post_id);
	}


}