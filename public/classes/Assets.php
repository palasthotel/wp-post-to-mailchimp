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
			return Option::isAudienceWhitelisted($list->listId);
		}));

		$segments = [];
		$groups = [];
		foreach ($lists as $list){
			$segments[$list->listId]= array_values(array_filter($this->plugin->repository->getSegments($list),function($segment) use ( $list ) {
				return Option::isSegmentWhitelisted($list->listId, $segment->id) || Option::isTagWhitelisted($list->listId, $segment->id);
			}));
			$groups[$list->listId] = $this->plugin->repository->getGroups($list);
		}

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"PostToMailchimp",
			[
				"preview" => [
					"html" => $this->plugin->preview->getHTMLUrl(get_the_ID()),
					"plaintext" => $this->plugin->preview->getPlaintextUrl(get_the_ID()),
				],
				"defaultScheduleTime" => Option::getScheduleTime(),
				"lists" => $lists,
				"segments" => $segments,
				"audienceIdsWithEmptySegmentsAllowed" => Option::getAudienceIdsWithEmptySegmentAllowed(),
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