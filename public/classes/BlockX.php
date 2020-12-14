<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\Model\Campaign;

class BlockX extends _Component {

	public function onCreate() {
		parent::onCreate();
		add_action('plugin_loaded', [$this, 'plugins_loaded']);
	}

	public function plugins_loaded(){
		if(function_exists("blockx_get_embedded_in_post_ids")){
			add_action('save_post', [$this, 'save_post']);
		}
	}

	public function save_post($post_id){

		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return;

		if (!current_user_can('edit_post', $post_id))
			return;

		$post_ids = blockx_get_embedded_in_post_ids($post_id);

		foreach ($post_ids as $in_post_id){
			$campaign = $this->plugin->repository->getRecentCampaign($in_post_id);
			if($campaign instanceof Campaign){
				$this->plugin->repository->scheduleCampaignUpdate($campaign->id);
			}
		}

	}

}