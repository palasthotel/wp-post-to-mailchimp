<?php


namespace Palasthotel\PostToMailchimp;


class Gutenberg extends _Component {

	public function onCreate() {
		add_action( 'enqueue_block_editor_assets', function () {
			$this->plugin->assets->enqueueGutenberg();
		} );
		add_action( 'save_post', array( $this, 'save_post' ), 10, 2 );
	}

	public function save_post( $post_id ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		$campaign = $this->plugin->repository->getRecentCampaign($post_id);
		if($campaign instanceof Campaign) $this->plugin->repository->updateCampaignContent($campaign->post_id);
	}
}