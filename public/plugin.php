<?php
/**
 * Plugin Name: Post to Mailchimp
 * Plugin URI: https://github.com/Palasthotel
 * Description: Use your contents with Mailchimp.com API
 * Version: 2.0.0
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

if ( ! defined( 'POST_TO_MAILCHIMP_API_KEY' ) ) {
	define( 'POST_TO_MAILCHIMP_API_KEY', false );
}
if ( ! defined( 'POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY' ) ) {
	define( 'POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY', false );
}
if ( ! defined( 'POST_TO_MAILCHIMP_DEBUG_OFF' ) ) {
	define( 'POST_TO_MAILCHIMP_DEBUG_OFF', false );
}

/**
 * Class Plugin
 * @property string $path
 * @property string url
 * @property string basename
 * @property Settings settings
 * @property MetaBox metaBox
 * @property Templates templates
 * @property Assets assets
 * @property Gutenberg gutenberg
 * @property Repository repository
 * @property API $api
 * @property WP_REST rest
 * @property Database database
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
	 * script and style handles
	 */
	const HANDLE_JS_GUTENBERG = "post-to-mailchimp-gutenberg-js";
	const HANDLE_CSS_GUTENBERG = "post-to-mailchimp-gutenberg-css";

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
	 * options
	 */
	const OPTION_MAILCHIMP_API_KEY = "ph_mailchimp_api_key";
	const OPTION_GA_API_KEY = "ph_mailchimp_ga";
	const OPTION_AUDIENCE_WHITELIST = "ph_mailchimp_audience_whitelist";

	/**
	 * transients
	 */
	const TRANSIENT_LISTS = "post-to-mailchimp__lists";
	const TRANSIENT_SEGMENTS = "post-to-mailchimp__list_%s_segments";
	const TRANSIENT_DELETE_SEGMENTS_LIKE = "%post-to-mailchimp__list_%_segments";
	const TRANSIENT_GROUPS = "post-to-mailchimp__list_%s_groups";
	const TRANSIENT_DELETE_GROUPS_LIKE = "%post-to-mailchimp__list_%_groups";

	/**
	 * Plugin constructor.
	 */
	private function __construct() {

		$this->path     = plugin_dir_path( __FILE__ );
		$this->url      = plugin_dir_url( __FILE__ );
		$this->basename = plugin_basename( __FILE__ );

		/**
		 * load translations
		 */
		load_plugin_textdomain(
			Plugin::DOMAIN,
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);

		require_once dirname( __FILE__ ) . "/vendor/autoload.php";

		$this->assets     = new Assets( $this );
		$this->gutenberg  = new Gutenberg( $this );
		$this->database   = new Database( $this );
		$this->api        = new API( $this );
		$this->repository = new Repository( $this );
		$this->settings   = new Settings( $this );
		$this->metaBox    = new MetaBox( $this );
		$this->templates  = new Templates( $this );
		$this->rest       = new WP_REST( $this );

		require_once dirname( __FILE__ ) . "/inc/utils.php";

		/**
		 * on activate or deactivate plugin
		 */
		register_activation_hook( __FILE__, array( $this, "activation" ) );
		register_deactivation_hook( __FILE__, array( $this, "deactivation" ) );

		$this->database->createTables();

	}

	/**
	 * on plugin activation
	 */
	function activation() {
		$this->database->createTables();
	}

	/**
	 * on plugin deactivation
	 */
	function deactivation() {
	}


	/**
	 * @var Plugin
	 */
	private static $instance;

	/**
	 * @return Plugin
	 */
	public static function instance() {
		if ( static::$instance == null ) {
			static::$instance = new Plugin();
		}

		return static::$instance;
	}

}

/**
 * init and make it accessible
 */
Plugin::instance();