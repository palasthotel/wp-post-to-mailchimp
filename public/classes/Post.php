<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\Model\Campaign;
use WP_Post;

class Post extends _Component {

	public function onCreate() {
		add_action( 'save_post', [ $this, 'save_post' ], 10, 2 );
		add_action( 'delete_post', [ $this, 'on_delete' ] );
		add_action( 'transition_post_status', [$this, 'transition_post_status'], 10 , 3);
	}

	public function save_post( $post_id ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}
		if( get_post_status($post_id) == "trash" ) return;

		$campaign = $this->plugin->repository->getRecentCampaign($post_id);
		if($campaign instanceof Campaign) $this->plugin->repository->updateCampaignContent($campaign->id);
	}

	public function on_delete( $post_id ) {
		$this->plugin->repository->deletePost( $post_id );
	}

	/**
	 * @param string $new_status
	 * @param string $old_status
	 * @param $post
	 */
	public function transition_post_status($new_status, $old_status, WP_Post $post){

		if($new_status === "publish") return; // nothing to cleanup here

		if($new_status === "trash" && Option::isActiveFor($post->post_type)){
			$this->plugin->repository->deletePost($post->ID);
			return;
		}

		$campaign = $this->plugin->repository->getRecentCampaign(($post->ID));
		if( !($campaign instanceof Campaign) ) return; // no recent campaign

		if($new_status === "draft"){
			switch ($campaign->state){
				case Campaign::MC_STATUS_SCHEDULED:
					$this->plugin->repository->unschedule($campaign);
					break;
				case Campaign::MC_STATUS_SENDING:
					$this->plugin->repository->cancel($campaign);
					break;
			}
			return;
		}

		if($new_status === "future" && $campaign->state === Campaign::MC_STATUS_SENDING){
			$this->plugin->repository->cancel($campaign);
			return;
		}
	}
}