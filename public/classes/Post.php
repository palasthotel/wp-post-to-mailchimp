<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\Model\Campaign;

class Post extends _Component {

	public function onCreate() {
		add_action( 'save_post', [ $this, 'save_post' ], 10, 2 );
		add_action( 'delete_post', [ $this, 'on_delete' ] );
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
}