<?php


namespace Palasthotel\PostToMailchimp;


class Assets extends _Component {

	public function enqueueGutenberg() {

		$info = include $this->plugin->path . "/js/gutenberg/post-to-mailchimp.asset.php";
		wp_enqueue_script(
			Plugin::HANDLE_JS_GUTENBERG,
			$this->plugin->url . "/js/gutenberg/post-to-mailchimp.js",
			$info["dependencies"],
			$info["version"]
		);

		$typeId = $this->plugin->types->getType( get_the_ID() );

		$audiences          = $this->plugin->repository->getAudiences();
		$audiencesWhitelist = array_values( array_filter( $audiences, function ( $list ) use ( $typeId ) {
			return Option::isAudienceWhitelisted( $list->listId, $typeId );
		} ) );

		$segments = [];
		$groups   = [];
		foreach ( $audiencesWhitelist as $list ) {
			$segments[ $list->listId ] = array_values(
				array_filter(
					$this->plugin->repository->getSegments( $list ),
					function ( $segment ) use ( $typeId, $list ) {
						return Option::isSegmentWhitelisted( $list->listId, $segment->id, $typeId )
						       || Option::isTagWhitelisted( $list->listId, $segment->id, $typeId );
					} )
			);
			$groups[ $list->listId ]   = $this->plugin->repository->getGroups( $list );
		}


		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"PostToMailchimp",
			[
				"preview"                             => [
					"html"      => $this->plugin->preview->getHTMLUrl( get_the_ID() ),
					"plaintext" => $this->plugin->preview->getPlaintextUrl( get_the_ID() ),
				],
				"defaultScheduleTime"                 => apply_filters(
					Plugin::FILTER_EDITOR_DEFAULT_SCHEDULE_TIME,
					Option::getScheduleTime(),
					$typeId,
				),
				"lists"                               => apply_filters(
					Plugin::FILTER_EDITOR_AUDIENCES,
					$audiencesWhitelist,
					$typeId
				),
				"segments"                            => apply_filters(
					Plugin::FILTER_EDITOR_SEGMENTS,
					$segments,
					$typeId
				),
				"audienceIdsWithEmptySegmentsAllowed" => Option::getAudienceIdsWithEmptySegmentAllowed( $typeId ),
				"groups"                              => $groups,
				"settingsUrl"                         => $this->plugin->settings->getUrl(),
			]
		);

		if ( file_exists( $this->plugin->path . "/js/gutenberg/post-to-mailchimp.css" ) ) {
			wp_enqueue_style(
				Plugin::HANDLE_CSS_GUTENBERG,
				$this->plugin->url . "/js/gutenberg/post-to-mailchimp.css",
				[],
				filemtime( $this->plugin->path . "/js/gutenberg/post-to-mailchimp.css" )
			);
		}
	}

}