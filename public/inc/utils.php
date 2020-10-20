<?php

namespace Palasthotel\PostToMailchimp;

use Exception;

/**
 * @param $string_date
 *
 * @return string
 * @throws Exception
 */
function format_string_datetime($string_date){
	$datetime = new \DateTime($string_date);
	$datetime->setTimezone(new \DateTimeZone(get_option('timezone_string')));
	return $datetime->format(get_option( 'date_format' )." – ".get_option("time_format"));
}

/**
 * @param $date
 *
 * @return string
 */
function format_datetime($date){
	$datetime = new \DateTime();
	$datetime->setTimestamp($date);
	$datetime->setTimezone(new \DateTimeZone(get_option('timezone_string')));
	return $datetime->format(get_option( 'date_format' )." – ".get_option("time_format"));
}
/**
 * @param $web_id
 *
 * @return string
 */
function get_list_url($web_id){
	return "https://admin.mailchimp.com/lists/members/?id=$web_id";
}

/**
 * @param $text
 * @param $web_id
 */
function render_list_link($text, $web_id){
	$url = get_list_url($web_id);
	echo "<a href='$url' target='_blank'>$text</a>";
}

/**
 * @param $web_id
 *
 * @return string
 */
function get_campaign_url($web_id){
	return "https://admin.mailchimp.com/campaigns/edit?id=$web_id";
}

/**
 * @param $text
 * @param $web_id
 */
function render_campaign_link($text, $web_id){
	$url = get_campaign_url($web_id);
	echo "<a href='$url' target='_blank'>$text</a>";
}