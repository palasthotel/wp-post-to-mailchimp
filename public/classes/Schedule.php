<?php


namespace Palasthotel\PostToMailchimp;


class Schedule extends _Component {

	public function onCreate() {
		parent::onCreate();
		add_action('admin_init', [$this, 'admin_init_schedule']);
		add_action(Plugin::SCHEDULE_UPDATE_CAMPAIGNS, [$this, 'run']);
	}

	public function admin_init_schedule(){
		if(!wp_next_scheduled(Plugin::SCHEDULE_UPDATE_CAMPAIGNS)){
			wp_schedule_event(time(), 'hourly', Plugin::SCHEDULE_UPDATE_CAMPAIGNS);
		}
	}

	public function run(){
		$this->updateCampaignContents(function(\WP_Error $error){
			error_log($error->get_error_message());
		});
	}

	/**
	 * @param callable $onError
	 */
	public function updateCampaignContents($onError){
		$campaign_ids = $this->plugin->repository->getScheduledCampaignUpdates();
		foreach ($campaign_ids as $campaign_id){
			$campaign = $this->plugin->repository->getCampaign($campaign_id);
			if($campaign != null){
				$result = $this->plugin->repository->updateCampaignContent($campaign);
				if($result instanceof \WP_Error){
					$onError($result);
					continue;
				}
			}
			$this->plugin->repository->unscheduleCampaignUpdate($campaign->id);
		}
	}

}