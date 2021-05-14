<?php


namespace Palasthotel\PostToMailchimp;


use Palasthotel\PostToMailchimp\Model\Campaign;

class PostsTable extends _Component {

	public function onCreate() {
		add_action( 'init', function () {
			foreach ( Option::getPostTypes() as $post_type ) {
				add_filter( "manage_{$post_type}_posts_columns", array( $this, 'add_column' ) );
				add_action( "manage_{$post_type}_posts_custom_column", array( $this, 'custom_columns' ), 10, 2 );
			}
		}, 99 );
		add_filter( 'post_row_actions', array( $this, 'modify_list_row_actions' ), 10, 2 );
	}

	public function add_column( $columns ) {

		$newCols = array();
		$added   = false;
		foreach ( $columns as $key => $label ) {
			if ( ! $added && ( $key == "comments" || $key == "date" ) ) {
				$added                              = true;
				$newCols['post-to-mailchimp-state'] = __( 'Mailchimp', Plugin::DOMAIN );
			}
			$newCols[ $key ] = $label;
		}

		// if to any reason there is no comments or date column add it to the last position
		if ( $added == false ) {
			$newCols['post-to-mailchimp-state'] = __( 'Mailchimp', Plugin::DOMAIN );
		}

		return $newCols;
	}

	public function custom_columns( $column, $post_id ) {
		if ( $column == 'post-to-mailchimp-state' ) {
			$campaign = $this->plugin->repository->getRecentCampaign( $post_id );
			if ( $campaign instanceof Campaign ) {
				echo $campaign->state;
			}
		}
	}

	public function modify_list_row_actions( $actions, $post ) {

		if ( !in_array( get_post_type( $post ), Option::getPostTypes() ) ) return $actions;

		$preview_html_url = $this->plugin->preview->getHTMLUrl( $post->ID );
		// Add the new preview link.
		if ( ! empty( $preview_html_url ) ) {
			$actions = array_merge( $actions, array(
				'copy' => sprintf( '<a href="%1$s">%2$s</a>',
					esc_url( $preview_html_url ),
					'Newsletter-HTML'
				)
			) );
		}

		return $actions;
	}
}