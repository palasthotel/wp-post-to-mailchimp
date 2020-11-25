<?php


namespace Palasthotel\PostToMailchimp;


class Option {

	// ------------------------------------------------
	// mailchimp api
	// ------------------------------------------------
	public static function isApiKeyInBlogConstant() {
		$blogId = get_current_blog_id();

		return defined( 'POST_TO_MAILCHIMP_API_KEY_BLOG_' . $blogId )
		       &&
		       is_string(constant( 'POST_TO_MAILCHIMP_API_KEY_BLOG_' . $blogId ));
	}

	public static function isApiKeyInConstant(){
		return is_string(POST_TO_MAILCHIMP_API_KEY) || static::isApiKeyInBlogConstant();
	}

	public static function getApiKey(){
		if(static::isApiKeyInBlogConstant()){
			$blogId = get_current_blog_id();
			return constant( 'POST_TO_MAILCHIMP_API_KEY_BLOG_' . $blogId );
		}
		return static::isApiKeyInConstant() ? POST_TO_MAILCHIMP_API_KEY: get_option(Plugin::OPTION_MAILCHIMP_API_KEY, '');
	}

	// ------------------------------------------------
	// google analytics
	// ------------------------------------------------

	public static function isGoogleAnalyticsIdInConstant(){
		return false !== POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY;
	}
	public static function getGoogleAnalyticsId(){
		return static::isGoogleAnalyticsIdInConstant() ? POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY: get_option(Plugin::OPTION_GA_API_KEY, '');
	}

	// ------------------------------------------------
	// schedule time
	// ------------------------------------------------
	public static function getScheduleTime(){
		return get_option(Plugin::OPTION_SCHEDULE_TIME, '');
	}

	// ------------------------------------------------
	// audiences
	// ------------------------------------------------

	public static function getAudiencesWhitelist(){
		$whitelist = get_option(Plugin::OPTION_AUDIENCE_WHITELIST);
		return is_array($whitelist) ? $whitelist : [];
	}
	public static function isAudienceWhitelisted($id){
		return in_array($id, static::getAudiencesWhitelist());
	}

	// ------------------------------------------------
	// segments
	// ------------------------------------------------
	public static function setSegmentsWhitelist(string $audienceId , array $segments){
		return update_option(sprintf(Plugin::OPTION_SEGMENT_WHITELIST, $audienceId), $segments);
	}
	public static function getSegmentWhitelist(string $audienceId){
		$whitelist = get_option(sprintf(Plugin::OPTION_SEGMENT_WHITELIST, $audienceId));
		return is_array($whitelist) ? $whitelist : [];
	}
	public static function isSegmentWhitelisted($audienceId, $segmentId){
		return in_array($segmentId, static::getSegmentWhitelist($audienceId));
	}
	public static function deleteSegmentWhitelists(){
		global $wpdb;
		$name = sprintf(Plugin::OPTION_SEGMENT_WHITELIST, "%");
		$names = $wpdb->get_col("SELECT option_name FROM {$wpdb->prefix}options WHERE option_name LIKE '$name'");
		foreach ($names as $name){
			delete_option($name);
		}
	}

	// ------------------------------------------------
	// tags
	// ------------------------------------------------
	public static function setTagWhitelist(string $audienceId , array $tags){
		return update_option(sprintf(Plugin::OPTION_TAG_WHITELIST, $audienceId), $tags);
	}
	public static function getTagWhitelist(string $audienceId){
		$whitelist = get_option(sprintf(Plugin::OPTION_TAG_WHITELIST, $audienceId));
		return is_array($whitelist) ? $whitelist : [];
	}
	public static function isTagWhitelisted($audienceId, $tagId){
		return in_array($tagId, static::getTagWhitelist($audienceId));
	}
	public static function deleteTagsWhitelists(){
		global $wpdb;
		$name = sprintf(Plugin::OPTION_TAG_WHITELIST, "%");
		$names = $wpdb->get_col("SELECT option_name FROM {$wpdb->prefix}options WHERE option_name LIKE '$name'");
		foreach ($names as $name){
			delete_option($name);
		}
	}

	// ------------------------------------------------
	// empty segments/tags allowed
	// ------------------------------------------------
	public static function setEmptySegmentsAllowed(array $audienceIds) {
		return update_option(Plugin::OPTION_EMPTY_SEGMENT_ALLOWED_AUDIENCES_LIST, $audienceIds);
	}
	public static function isEmptySegmentAllowed(string $audienceId): bool {
		return in_array($audienceId,static::getAudienceIdsWithEmptySegmentAllowed());
	}
	public static function getAudienceIdsWithEmptySegmentAllowed(): array {
		$whitelist = get_option(Plugin::OPTION_EMPTY_SEGMENT_ALLOWED_AUDIENCES_LIST);
		return is_array($whitelist) ? $whitelist : [];
	}

	// ------------------------------------------------
	// activated post types
	// ------------------------------------------------
	public static function getPostTypes(): array {
		return apply_filters(Plugin::FILTER_POST_TYPES, ["post"]);
	}

	public static function isActiveFor($post_type): bool {
		return in_array($post_type, static::getPostTypes());
	}

}