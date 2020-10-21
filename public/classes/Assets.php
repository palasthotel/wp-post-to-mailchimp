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

		$lists = $this->plugin->repository->getAudiences();
		$lists = array_values(array_filter($lists, function($list){
			return $this->plugin->settings->isAudienceWhitelisted($list->listId);
		}));

		$segments = [];
		$groups = [];
		foreach ($lists as $list){
			$segments[$list->listId]= $this->plugin->repository->getSegments($list);
			$groups[$list->listId] = $this->plugin->repository->getGroups($list);
		}

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"PostToMailchimp",
			[
				"lists" => $lists,
				"segments" => $segments,
				"groups" => $groups,
			]
		);

		if(file_exists($this->plugin->path."/js/gutenberg/post-to-mailchimp.css")){
			wp_enqueue_style(
				Plugin::HANDLE_CSS_GUTENBERG,
				$this->plugin->url."/js/gutenberg/post-to-mailchimp.css",
				[],
				filemtime($this->plugin->path."/js/gutenberg/post-to-mailchimp.css")
			);
		}
	}

}