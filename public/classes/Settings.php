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
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'admin_init', array( $this, 'admin_init' ) );
		add_filter('plugin_action_links_' . $this->plugin->basename, array($this, 'add_action_links'));
		add_filter('pre_update_option_'.Plugin::OPTION_MAILCHIMP_API_KEY, [$this, 'before_update']);
		add_filter('pre_update_site_option_'.Plugin::OPTION_MAILCHIMP_API_KEY , [$this, 'before_update']);
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
	 *
	 */
	function admin_init() {

	    if(
	            is_array($_POST) && isset($_POST["post-to-mailchimp-settings-form"]) && $_POST["post-to-mailchimp-settings-form"] === "it-is"
            &&
	            isset($_POST["clear_cache"]) && !empty($_POST["clear_cache"])
        ){
            $this->plugin->repository->cacheClear();
        }

	    if( is_array($_POST) && isset($_POST['update_whitelists'])){

	        Option::deleteSegmentWhitelists();
	        if(isset($_POST["ptm_segments"]) && is_array($_POST["ptm_segments"])){
		        $audiences = $_POST["ptm_segments"];
		        foreach ($audiences as $audienceId => $segments){
			        Option::setSegmentsWhitelist($audienceId,array_map('intval', $segments));
		        }
            }

		    Option::deleteTagsWhitelists();
		    if(isset($_POST["ptm_tags"]) && is_array($_POST["ptm_tags"])){
			    $audiences = $_POST["ptm_tags"];
			    foreach ($audiences as $audienceId => $tags){
				    Option::setTagWhitelist($audienceId,array_map('intval', $tags));
			    }
		    }

		    if(is_array($_POST["ptm_allow_no_segment_selection"])){
			   Option::setEmptySegmentsAllowed(array_map('sanitize_text_field',$_POST["ptm_allow_no_segment_selection"]));
            } else {
		        Option::setEmptySegmentsAllowed([]);
            }

        }

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
			'ph_mailchimp_schedule_time',
			__('Default schedule time', Plugin::DOMAIN),
			array( $this, 'render_schedule_time' ),
			'ph_mailchimp_settings',
			'ph_mailchimp_settings_section'
		);
		register_setting( 'ph_mailchimp_settings', Plugin::OPTION_SCHEDULE_TIME);

		add_settings_field(
			'ph_mailchimp_lists',
			__('Available lists', Plugin::DOMAIN),
			array( $this, 'render_lists' ),
			'ph_mailchimp_settings',
			'ph_mailchimp_settings_section'
		);
		register_setting('ph_mailchimp_settings', Plugin::OPTION_AUDIENCE_WHITELIST);

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
				<?php submit_button(null, 'primary', 'submit', false); ?>
				<?php submit_button(__("Clear cache", Plugin::DOMAIN), 'secondary', 'clear_cache', false); ?>
                <input type="hidden" name="post-to-mailchimp-settings-form" value="it-is" />

			</form>
		</div>
		<?php
	}

	public function render_section(){
		$controller = $this->plugin->api;
		if($controller->isReady()){
			echo "<p>✅ ".__("Yep, this is working!", Plugin::DOMAIN)."</p>";
		} else {
			echo "<p>🚨 ".__("Nope, this is not working. Is your API key valid?", Plugin::DOMAIN)."</p>";
		}
	}

	public function render_api_key(){
	    $isConstantOption = Option::isApiKeyInConstant();
	    $apiKey = Option::getApiKey();
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

	public function render_ga(){
		$this->renderInput(
		        Plugin::OPTION_GA_API_KEY,
                Option::getGoogleAnalyticsId(),
                Option::isGoogleAnalyticsIdInConstant()
        );
	}

	public function render_schedule_time(){
	    $id = Plugin::OPTION_SCHEDULE_TIME;
	    $value = Option::getScheduleTime();
		echo "<input id='$id' name='$id' value='$value' type='hidden' />";
		echo "<select id='$id-hour'>";
		echo "<option value=''></option>";
		for ($i = 0; $i < 24; $i++){
			$label = str_pad($i, 2, "0", STR_PAD_LEFT);
		    echo "<option value='$label'>$label</option>";
		}
		echo "</select>";
        echo "<select id='$id-minute'>";
		echo "<option value=''></option>";
        for($i = 0; $i <= 45; $i+=15){
            $label = str_pad($i, 2, "0", STR_PAD_LEFT);
            echo "<option value='$label'>$label</option>";
        }
		echo "</select>";
        echo " o'clock the next day.";

		?>
        <script>
            jQuery(function($){
                const inputId = '<?= $id; ?>';
                const $input = $("#"+inputId);
                const $hour = $("#"+inputId+"-hour");
                const $minute = $("#"+inputId+"-minute");
                const val = $input.val();
                const init =  val.split(":");
                if(init.length === 2){
                    $hour.val(init[0]);
                    $minute.val(init[1]);
                }
                $hour.on("change", update);
                $minute.on("change", update)
                function update(){
                    const h = $hour.val();
                    if(h === ""){
                        $input.val("");
                        return;
                    }
                    const min = $minute.val() === "" ? "00": $minute.val();
                    $input.val(h+":"+min);
                }
            });
        </script>
        <?php

	}

	private function renderInput($name, $value, $isReadonly = false){
	    $readonly = $isReadonly ? "readonly": "";
	    echo "<input id='$name' name='$name' value='$value' type='text' $readonly class='regular-text' />";
	}

	public function render_lists(){
		$lists = $this->plugin->repository->getAudiences();
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
				$checked = Option::isAudienceWhitelisted($list->listId) ? "checked": "";
				echo "<input type='checkbox' value='$list->listId' name='".Plugin::OPTION_AUDIENCE_WHITELIST."[]' $checked />";
				echo render_list_link($list->name, $web_id);
				echo "<br>";

				echo "<span class='description'>";
				echo "ID: $list_id";
				echo "<br>";
				echo __("Members", Plugin::DOMAIN).": $count <br>";
				echo __("Defaults", Plugin::DOMAIN).": $default_from_name &lt;$default_from_email&gt; – $default_subject<br>";
				echo "</span>";

				$segments = $this->plugin->repository->getSegments($list_id);

				// static type segments are tags
                // https://mailchimp.com/developer/api/marketing/list-segments/list-segments/
				$tags = array_filter($segments, function($item){return $item->type === "static";});
				$noTags = array_filter($segments, function ($item){return $item->type !== "static";});
				echo "<input type='hidden' name='update_whitelists' value='yes'  />";
				if(count($tags) > 0 || count($noTags) > 0){
					echo "<p><strong>Segments/Tags</strong></p>";
					echo "<ul style='padding-left: 20px;margin: 5px 0;'>";

					$checked = Option::isEmptySegmentAllowed($list_id) ? "checked": "";

					echo "<li><input $checked type='checkbox' name='ptm_allow_no_segment_selection[$list_id]' value='$list_id' /><i>- No segment or tag - (only if other options are selected)</i></li>";

					if(count($noTags)){
						foreach ($noTags as $segment){
							$checked = Option::isSegmentWhitelisted($list_id, $segment->id) ? "checked": "";
							echo "<li><input $checked type='checkbox' name='ptm_segments[$list_id][]' value='$segment->id' /> $segment->name</li>";
						}
					}

					if(count($tags)){
						foreach ($tags as $tag){
							$checked = Option::isTagWhitelisted($list_id, $tag->id) ? "checked": "";
							echo "<li><input $checked type='checkbox' name='ptm_tags[$list_id][]' value='$tag->id' /> $tag->name</li>";
						}
					}

					echo "</ul>";

				}



//				$groups = $this->plugin->repository->getGroups($list_id);
//				if(count($groups)){
//				    echo "<strong>Groups</strong>";
//					echo "<ul style='padding-left: 20px;'>";
//				    foreach ($groups as $group){
//				        echo "<li><em>Category: $group->title</em>";
//				        echo "<ul style='padding-left: 20px;'>";
//				        foreach ($group->interests as $item){
//				            echo "<li>$item->name</li>";
//				        }
//				        echo "</ul>";
//				        echo "</li>";
//				    }
//				    echo "</ul>";
//				}

				echo "</li>";
			}
			echo "</ul>";
		} else {
			echo "---";
		}

	}

	public function before_update(){
	    $this->plugin->repository->cacheClear();
	}


}