<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 10:11
 */

namespace Palasthotel\PostToMailchimp;


class Settings extends _Component {

	public function onCreate() {
		add_action( 'admin_init', array( $this, 'admin_init' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_filter('plugin_action_links_' . $this->plugin->basename, array($this, 'add_action_links'));
		add_filter(Plugin::FILTER_ADD_CAMPAIGN_ARGS, array($this, 'add_to_campaign_args'));
		add_filter('pre_update_option_'.Plugin::OPTION_MAILCHIMP_API_KEY, [$this, 'before_update']);
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
		register_setting( 'ph_mailchimp_settings', Plugin::OPTION_MAILCHIMP_API_KEY );

		add_settings_field(
			'ph_mailchimp_ga',
			__('Google Analytics ID', Plugin::DOMAIN),
			array( $this, 'render_ga' ),
			'ph_mailchimp_settings',
			'ph_mailchimp_settings_section'
		);
		register_setting( 'ph_mailchimp_settings', Plugin::OPTION_GA_API_KEY);

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
				<?php submit_button(__("Save and update lists", Plugin::DOMAIN)); ?>
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

	public function isApiKeyInConstant(){
	    return false !== POST_TO_MAILCHIMP_API_KEY;
	}

	public function getApiKey(){
		return $this->isApiKeyInConstant() ? POST_TO_MAILCHIMP_API_KEY: get_option(Plugin::OPTION_MAILCHIMP_API_KEY, '');
	}

	public function render_api_key(){
	    $isConstantOption = $this->isApiKeyInConstant();
	    $apiKey = $this->getApiKey();
		$this->renderInput("ph_mailchimp_api_key", $apiKey, $isConstantOption);
		echo "<br/>";
		if($isConstantOption){
			echo "<span class='description'>";
			_e('Included in wp-config.php.', Plugin::DOMAIN);
			echo "</span> ";
		}
		echo "<span class='description'>";
		printf(
				__( "You can get one in your %sMailchimp Account Settings%s.", Plugin::DOMAIN),
				"<a href='https://us19.admin.mailchimp.com/account/api/' target='_blank'>",
				"</a>"
		);
		echo "</span>";
	}

	public function isGoogleAnalyticsIdInConstant(){
	    return false !== POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY;
	}
	public function getGoogleAnalyticsId(){
		return $this->isGoogleAnalyticsIdInConstant() ? POST_TO_MAILCHIMP_GOOGLE_ANALYTICS_API_KEY: get_option(Plugin::OPTION_GA_API_KEY, '');
	}
	public function render_ga(){
		$this->renderInput("ph_mailchimp_ga", $this->getGoogleAnalyticsId(), $this->isGoogleAnalyticsIdInConstant());
	}

	private function renderInput($name, $value, $isReadonly = false){
	    $readonly = $isReadonly ? "readonly": "";
	    echo "<input id='$name' name='$name' value='$value' type='text' $readonly class='regular-text' />";
	}

	public function render_lists(){
		$lists = $this->plugin->repository->getAudiencesList();
		$list_id = null;
		if($lists){
			echo "<ul>";
			foreach ($lists as $list){
				$count = $list->memberCount;
				$web_id = $list->webId;
				$list_id = $list->listId;
				$default_from_name = $list->campaignDefaults["from_name"];
				$default_from_email = $list->campaignDefaults["from_email"];
				$default_subject = $list->campaignDefaults["subject"];

				echo "<li style='border-bottom: 1px solid #cecece;padding: 10px 0;'>";
				echo render_list_link($list->name, $web_id);
				echo "<br>";

				echo "<span class='description'>";
				echo "ID: $list_id";
				echo "<br>";
				echo __("Members", Plugin::DOMAIN).": $count <br>";
				echo __("Defaults", Plugin::DOMAIN).": $default_from_name &lt;$default_from_email&gt; – $default_subject<br>";
				echo "</span>";

				$segments = $this->plugin->repository->getSegments($list_id);

				if(count($segments)){
					echo "<strong>Segments</strong>";
					echo "<ul style='padding-left: 20px;'>";
					foreach ($this->plugin->repository->getSegments($list_id) as $segment){
						echo "<li>$segment->name</li>";
					}
					echo "</ul>";
				}

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

	public function before_update(){
	    $this->plugin->repository->cacheClear();
	}


}