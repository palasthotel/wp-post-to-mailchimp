<?php


namespace Palasthotel\PostToMailchimp;


class Option {

	// ------------------------------------------------
	// mailchimp api
	// ------------------------------------------------

	public static function isApiKeyInConstant(){
		return false !== POST_TO_MAILCHIMP_API_KEY;
	}
	public static function getApiKey(){
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

}