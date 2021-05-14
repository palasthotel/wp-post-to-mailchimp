<?php


namespace Palasthotel\PostToMailchimp;


class Option {

	private static function typedKey( $key, $typeId ) {
		if ( is_string( $typeId ) && strlen($typeId) > 0 ) {
			return "type_{$typeId}_{$key}";
		}

		return $key;
	}

	private static function setTypeOrGlobalOption( $key, $value, $typeId = null ) {
		return update_option( self::typedKey($key, $typeId), $value );
	}

	private static function getLangOrGlobalOption( $key, $typeId = null ) {
		$langValue = get_option( self::typedKey( $key, $typeId ), false );
		if ( false !== $langValue ) {
			return $langValue;
		}

		return get_option( $key );
	}

	// ------------------------------------------------
	// mailchimp api
	// ------------------------------------------------
	public static function isApiKeyInBlogConstant() {
		$blogId = get_current_blog_id();

		return defined( 'POST_TO_MAILCHIMP_API_KEY_BLOG_' . $blogId )
		       &&
		       is_string( constant( 'POST_TO_MAILCHIMP_API_KEY_BLOG_' . $blogId ) );
	}

	public static function isApiKeyInConstant() {
		return is_string( POST_TO_MAILCHIMP_API_KEY ) || static::isApiKeyInBlogConstant();
	}

	public static function getApiKey() {
		if ( static::isApiKeyInBlogConstant() ) {
			$blogId = get_current_blog_id();

			return constant( 'POST_TO_MAILCHIMP_API_KEY_BLOG_' . $blogId );
		}

		return static::isApiKeyInConstant() ? POST_TO_MAILCHIMP_API_KEY : get_option( Plugin::OPTION_MAILCHIMP_API_KEY, '' );
	}

	// ------------------------------------------------
	// google analytics
	// ------------------------------------------------
	public static function isGoogleAnalyticsIdInConstant() {
		return false !== POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY;
	}

	public static function getGoogleAnalyticsId() {
		return static::isGoogleAnalyticsIdInConstant() ? POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY : get_option( Plugin::OPTION_GA_API_KEY, '' );
	}

	// ------------------------------------------------
	// schedule time
	// ------------------------------------------------
	public static function getScheduleTime() {
		return get_option( Plugin::OPTION_SCHEDULE_TIME, '' );
	}

	// ------------------------------------------------
	// audiences
	// ------------------------------------------------
	public static function setAudiencesWhitelist( array $audiences, $typeId = null){
		self::setTypeOrGlobalOption(Plugin::OPTION_AUDIENCE_WHITELIST, $audiences, $typeId);
	}
	public static function getAudiencesWhitelist( $typeId = null ) {
		$whitelist = self::getLangOrGlobalOption( Plugin::OPTION_AUDIENCE_WHITELIST, $typeId );

		return is_array( $whitelist ) ? $whitelist : [];
	}

	public static function isAudienceWhitelisted( $id, $typeId = null ) {
		return in_array( $id, static::getAudiencesWhitelist( $typeId ) );
	}

	// ------------------------------------------------
	// segments
	// ------------------------------------------------
	public static function setSegmentsWhitelist( string $audienceId, array $segments, $typeId = null ) {
		return self::setTypeOrGlobalOption(
			sprintf( Plugin::OPTION_SEGMENT_WHITELIST, $audienceId ),
			$segments,
			$typeId
		);
	}

	public static function getSegmentWhitelist( string $audienceId, $typeId = null ) {
		$whitelist = self::getLangOrGlobalOption(
			sprintf( Plugin::OPTION_SEGMENT_WHITELIST, $audienceId ),
			$typeId
		);

		return is_array( $whitelist ) ? $whitelist : [];
	}

	public static function isSegmentWhitelisted( $audienceId, $segmentId, $typeId = null ) {
		return in_array( $segmentId, static::getSegmentWhitelist( $audienceId, $typeId ) );
	}

	public static function deleteSegmentWhitelists( $typeId = null ) {
		global $wpdb;
		$name      = sprintf( Plugin::OPTION_SEGMENT_WHITELIST, "%" );
		$typedName = self::typedKey( $name, $typeId );
		$names     = $wpdb->get_col( "SELECT option_name FROM {$wpdb->prefix}options WHERE option_name LIKE '$typedName'" );
		foreach ( $names as $name ) {
			delete_option( $name );
		}
	}

	// ------------------------------------------------
	// tags
	// ------------------------------------------------
	public static function setTagWhitelist( string $audienceId, array $tags, $typeId = null ) {
		self::setTypeOrGlobalOption(
			sprintf( Plugin::OPTION_TAG_WHITELIST, $audienceId ),
			$tags,
			$typeId
		);
	}

	public static function getTagWhitelist( string $audienceId, $typeId = null ) {
		$whitelist = self::getLangOrGlobalOption(
			sprintf( Plugin::OPTION_TAG_WHITELIST, $audienceId ),
			$typeId
		);

		return is_array( $whitelist ) ? $whitelist : [];
	}

	public static function isTagWhitelisted( $audienceId, $tagId, $typeId = null ) {
		return in_array( $tagId, static::getTagWhitelist( $audienceId, $typeId ) );
	}

	public static function deleteTagsWhitelists( $typeId = null ) {
		global $wpdb;
		$name    = self::typedKey( sprintf( Plugin::OPTION_TAG_WHITELIST, "%" ), $typeId );
		$typedKey = self::typedKey( $name, $typeId );
		$names   = $wpdb->get_col( "SELECT option_name FROM {$wpdb->prefix}options WHERE option_name LIKE '$typedKey'" );
		foreach ( $names as $name ) {
			delete_option( $name );
		}
	}

	// ------------------------------------------------
	// empty segments/tags allowed
	// ------------------------------------------------
	public static function setEmptySegmentsAllowed( array $audienceIds, $typeId = null ) {
		return self::setTypeOrGlobalOption(
			Plugin::OPTION_EMPTY_SEGMENT_ALLOWED_AUDIENCES_LIST,
			$audienceIds,
			$typeId
		);
	}

	public static function isEmptySegmentAllowed( string $audienceId, $typeId = null ): bool {
		return in_array( $audienceId, static::getAudienceIdsWithEmptySegmentAllowed( $typeId ) );
	}

	public static function getAudienceIdsWithEmptySegmentAllowed( $typeId = null ): array {
		$whitelist = self::getLangOrGlobalOption(
			Plugin::OPTION_EMPTY_SEGMENT_ALLOWED_AUDIENCES_LIST,
			$typeId
		);

		return is_array( $whitelist ) ? $whitelist : [];
	}

	// ------------------------------------------------
	// activated post types
	// ------------------------------------------------
	public static function getPostTypes(): array {
		return apply_filters( Plugin::FILTER_POST_TYPES, [ "post" ] );
	}

	public static function isActiveFor( $post_type ): bool {
		return in_array( $post_type, static::getPostTypes() );
	}

}