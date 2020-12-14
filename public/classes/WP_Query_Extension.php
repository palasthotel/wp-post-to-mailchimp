<?php


namespace Palasthotel\PostToMailchimp;


use WP_Query;

class WP_Query_Extension extends _Component {

	public function onCreate() {
		parent::onCreate();
		add_filter( 'posts_where', array( $this, 'posts_where' ), 10, 2 );
	}

	/**
	 * WHERE statement
	 *
	 * @param string $where The WHERE clause of the query.
	 *
	 * @param WP_Query $wp_query
	 *
	 * @return string $where
	 */
	function posts_where( $where, $wp_query ) {

		if ( ! $wp_query->get( Plugin::WP_QUERY_ARG_HAS_CAMPAIGN, false ) ) {
			return $where;
		}

		global $wpdb;
		$db = $this->plugin->database;

		$where.= " AND {$wpdb->posts}.ID IN ( SELECT post_id FROM $db->table )";

		return $where;
	}


}