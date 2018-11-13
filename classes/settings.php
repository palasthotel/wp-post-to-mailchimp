<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 10:11
 */

namespace Palasthotel\PostToMailchimp;


class Settings {

	/**
	 * @var Plugin
	 */
	private $plugin;

	/**
	 * Settings constructor.
	 *
	 * @param Plugin $plugin
	 */
	public function __construct($plugin) {
		$this->plugin = $plugin;

		add_action( 'admin_init', array( $this, 'admin_init' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_filter('plugin_action_links_' . $plugin->basename, array($this, 'add_action_links'));
		add_filter(Plugin::FILTER_ADD_CAMPAIGN_ARGS, array($this, 'add_to_campaign_args'));
	}

	/**
	 *
	 */
	function admin_init() {

		add_settings_section(
			'ph_mailchimp_settings_section',
			__('API', Plugin::DOMAIN),
			array( $this, 'render_section' ),
			'ph_mailchimp_settings'
		);

		add_settings_field(
			'ph_mailchimp_api_key',
			__('API key', Plugin::DOMAIN),
			array( $this, 'render_api_key' ),
			'ph_mailchimp_settings',
			'ph_mailchimp_settings_section'
		);
		register_setting( 'ph_mailchimp_settings', 'ph_mailchimp_api_key' );

		add_settings_field(
			'ph_mailchimp_ga',
			__('Google Analytics ID', Plugin::DOMAIN),
			array( $this, 'render_ga' ),
			'ph_mailchimp_settings',
			'ph_mailchimp_settings_section'
		);
		register_setting( 'ph_mailchimp_settings', 'ph_mailchimp_ga' );

		add_settings_field(
			'ph_mailchimp_lists',
			__('Available lists', Plugin::DOMAIN),
			array( $this, 'render_lists' ),
			'ph_mailchimp_settings',
			'ph_mailchimp_settings_section'
		);

	}

	/**
	 * register admin menu page for settings
	 */
	function admin_menu(){
		add_submenu_page(
			'options-general.php',
			__('Post to Mailchimp', Plugin::DOMAIN),
			__('Post to Mailchimp', Plugin::DOMAIN),
			'manage_options',
			'ph_mailchimp_settings',
			array( $this, 'render_settings_form' )
		);
	}

	/**
	 * action link to settings on plugins list page
	 * @param $links
	 *
	 * @return array
	 */
	public function add_action_links($links){
		return array_merge($links, array(
			'<a href="'.admin_url('options-general.php?page=ph_mailchimp_settings').'">'.__("Settings", Plugin::DOMAIN).'</a>'
		));
	}

	public function render_settings_form(){
		?>
		<div class="wrap">
			<h2><?php _e('Post to Mailchimp Settings', Plugin::DOMAIN); ?></h2>
			<form method="post" action="options.php">
				<?php
				settings_fields( 'ph_mailchimp_settings' );
				do_settings_sections( 'ph_mailchimp_settings' );
				?>
				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}

	public function render_section(){
		$controller = $this->plugin->controller;
		if($controller->isReady()){
			echo "<p>✅ ".__("Yep, this is working!", Plugin::DOMAIN)."</p>";
		} else {
			echo "<p>🚨 ".__("Nope, this is not working. Is your API key valid?", Plugin::DOMAIN)."</p>";
		}
	}

	public function getApiKey(){
		return get_option('ph_mailchimp_api_key', '');
	}

	public function render_api_key(){
		$this->renderInput("ph_mailchimp_api_key", $this->getApiKey());
		echo "<br><span class='description'>";
		printf(
				__( "You can get one in your %sMailchimp Account Settings%s.", Plugin::DOMAIN),
				"<a href='https://us19.admin.mailchimp.com/account/api/' target='_blank'>",
				"</a>"
		);
		echo "</span>";
	}

	public function getGoogleAnalyticsId(){
		return get_option('ph_mailchimp_ga', '');
	}
	public function render_ga(){
		$this->renderInput("ph_mailchimp_ga", $this->getGoogleAnalyticsId());
	}

	private function renderInput($name, $value, $type = "text"){
		echo "<input id='$name' name='$name' value='$value' type='$type' class='regular-text' />";
	}

	public function render_lists(){
		$lists = $this->plugin->controller->getLists();
		$list_id = null;
		if($lists){
			echo "<ul>";
			foreach ($lists as $list){
				$count = $list["stats"]["member_count"];
				$web_id = $list["web_id"];
				$list_id = $list["id"];
				$default_from_name = $list["campaign_defaults"]["from_name"];
				$default_from_email = $list["campaign_defaults"]["from_email"];
				$default_subject = $list["campaign_defaults"]["subject"];

				echo "<li>";
				echo render_list_link($list["name"], $web_id);
				echo "<br>";

				echo "<span class='description'>";
				echo "ID: $list_id";
				echo "<br>";
				echo __("Members", Plugin::DOMAIN).": $count <br>";
				echo __("Defaults", Plugin::DOMAIN).": $default_from_name &lt;$default_from_email&gt; – $default_subject<br>";
				echo "</span>";

				echo "</li>";
			}
			echo "</ul>";
		} else {
			echo "---";
		}

	}

	/**
	 * @param $args
	 *
	 * @return array
	 */
	public function add_to_campaign_args($args){
		return array_merge_recursive($args, array(
			"tracking" => array(
				"google_analytics" => $this->getGoogleAnalyticsId()
			)
		));
	}


}