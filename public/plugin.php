<?php
/**
 * Plugin Name: Post to Mailchimp
 * Plugin URI: https://github.com/Palasthotel
 * Description: Use your contents with Mailchimp.com API
 * Version: 1.1.0
 * Author: Palasthotel ( Edward Bock <eb@palasthotel.de> )
 * Author URI: http://www.palasthotel.de
 * Text Domain: post_to_mailchimp
 * Domain Path: /languages
 * Requires at least: 5.x
 * Tested up to: 5.5.1
 * License: http://www.gnu.org/licenses/gpl-2.0.html GPLv2
 * @copyright Copyright (c) 2020, Palasthotel
 * @package Palasthotel\PostToMailchimp
 */

namespace Palasthotel\PostToMailchimp;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Plugin
 * @property string $path
 * @property string url
 * @property string basename
 */
class Plugin {
	
	/**
	 * ---------------------------------------------
	 * plugin constants
	 * ---------------------------------------------
	 */
	const DOMAIN = "post_to_mailchimp";
	const THEME_FOLDER = "plugin-parts";
	const TEMPLATE_HTML = "post-to-mailchimp.php";
	const TEMPLATE_PLAINTEXT = "post-plaintext-to-mailchimp.php";

	/**
	 * post metas
	 */
	const POST_META_CAMPAIGNS = "_post_to_mailchimp_campaigns";

	/**
	 * actions
	 */
	const ACTION_NEWSLETTER_THE_CONTENT = "post_to_mailchimp_the_content";
	const ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT = "post_to_mailchimp_the_content_plaintext";

	/**
	 * filters
	 */
	const FILTER_NEWSLETTER_CHANGE_CONTENT = "post_to_mailchimp_change_content";
	const FILTER_NEWSLETTER_CHANGE_CONTENT_PLAINTEXT = "post_to_mailchimp_change_content_plaintext";
	const FILTER_GET_LISTS_ARGS = "post_to_mailchimp_get_lists_args";
	const FILTER_ADD_CAMPAIGN_ARGS = "post_to_mailchimp_add_campaign_args";
	const FILTER_SCHEDULE_CAMPAIGN_ARGS = "post_to_mailchimp_schedule_campaign_args";
	const FILTER_POST_TYPES = "post_to_mailchimp_post_types";
	const FILTER_ADD_TEMPLATE_PATHS = "post_to_mailchimp_add_template_paths";
	
	/**
	 * Plugin constructor.
	 */
	private function __construct() {

		$this->path     = plugin_dir_path(__FILE__);
		$this->url      = plugin_dir_url(__FILE__);
		$this->basename = plugin_basename(__FILE__);
		
		/**
		 * load translations
		 */
		load_plugin_textdomain(
			Plugin::DOMAIN,
			FALSE,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);

		require_once dirname(__FILE__)."/vendor/autoload.php";

		$this->controller = new Controller($this);
		$this->settings = new Settings($this);
		$this->meta_box = new MetaBox($this);
		$this->render = new Render($this);

		require_once dirname(__FILE__)."/inc/utils.php";

	}

	/**
	 * @var Plugin
	 */
	private static $instance;

	/**
	 * @return Plugin
	 */
	public static function instance(){
		if(static::$instance == null){
			static::$instance = new Plugin();
		}
		return static::$instance;
	}

}

/**
 * init and make it accessible
 */
Plugin::instance();