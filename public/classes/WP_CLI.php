<?php


namespace Palasthotel\PostToMailchimp;

class WP_CLI {

	/**
	 * @return Plugin
	 */
	private function plugin(): Plugin {
		return Plugin::instance();
	}

	/**
	 * update all pending newsletter contents to mailchimp
	 *
	 * ## EXAMPLES
	 *
	 *   wp ptm updatePendingContents
	 *
	 * @when after_wp_load
	 */

	public function updatePendingContents($args, $assoc_args){
		$this->plugin()->schedule->updateCampaignContents(function($error){
			CLI::error($error);
		});
	}

}