<?php


namespace Palasthotel\PostToMailchimp;


class Assets extends _Component {

	public function enqueueGutenberg(){

		$info = include $this->plugin->path . "/js/gutenberg/post-to-mailchimp.asset.php";
		wp_enqueue_script(
			Plugin::HANDLE_JS_GUTENBERG,
			$this->plugin->url . "/js/gutenberg/post-to-mailchimp.js",
			$info["dependencies"],
			$info["version"]
		);

		$lists = $this->plugin->repository->getAudiencesList();
		$segments = [];
		foreach ($lists as $list){
			$segments[$list->listId]= $this->plugin->repository->getSegments($list);
		}

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"PostToMailchimp",
			[
				"lists" => $lists,
				"segments" => $segments,
			]
		);

	}

}