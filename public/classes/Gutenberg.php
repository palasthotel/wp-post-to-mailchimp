<?php


namespace Palasthotel\PostToMailchimp;


class Gutenberg extends _Component {
	public function onCreate() {
		add_action( 'enqueue_block_editor_assets', function () {
			$this->plugin->assets->enqueueGutenberg();
		} );
	}
}