<?php


namespace Palasthotel\PostToMailchimp;


class Gutenberg extends _Component {

	public function onCreate() {
		add_action( 'enqueue_block_editor_assets', function () {
			$post_type = get_post_type();
			$isActive =Option::isActiveFor($post_type);
			if($isActive){
				$this->plugin->assets->enqueueGutenberg();
			}
		});
	}

}