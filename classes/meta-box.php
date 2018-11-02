<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 15:42
 */

namespace Palasthotel\PostToMailchimp;


class MetaBox {

	const POST_CREATE_NAME = "post_to_mailchimp_create";
	const POST_LIST_ID = "post_to_mailchimp_list_id";
	const POST_SCHEDULE_TIME_NAME = "post_to_mailchimp_schedule_time";
	const POST_SCHEDULE_NAME = "post_to_mailchimp_schedule";

	/**
	 * MetaBox constructor.
	 *
	 * @param Plugin $plugin
	 */
	public function __construct($plugin) {
		$this->plugin = $plugin;
		add_action('add_meta_boxes', array($this,'add_meta_box') , 10, 2);
		add_action('save_post', array($this, 'save'), 10, 2);
	}

	/**
	 *  register meta box
	 *
	 * @param $post_type
	 * @param $post \WP_Post
	 */
	public function add_meta_box($post_type, $post) {
		$post_types = apply_filters(Plugin::FILTER_POST_TYPES, array("post"));
		if(count($post_types) < 1 || in_array($post_type, $post_types)){
			wp_enqueue_style(Plugin::DOMAIN."-meta-box-style", $this->plugin->url."/css/meta-box.css");
			wp_enqueue_script(Plugin::DOMAIN."-meta-box-script", $this->plugin->url."/js/meta-box.js", array("jquery"), 1, true);
			wp_localize_script(Plugin::DOMAIN."-meta-box-script", "PostToMailchimp", array(
				"schedule" => $this->getScheduleFromTransient($post->ID),
			));
			$this->clearScheduleFromTransient($post->ID);
			add_meta_box(
				Plugin::DOMAIN.'-meta-box',
				__( 'Post to Mailchimp', Plugin::DOMAIN ),
				array($this,'render'),
				$post_type,
				"side",
				"high"
			);
		}
	}

	public function render($post){
		$controller = $this->plugin->controller;
		if(!$controller->isReady()){
			echo "<p class='description'>API is not ready yet.</p>";
			return;
		}

		if( get_post_status($post->ID) == 'auto-draft' ){
			echo "<p class='description'>You have to save the post first.</p>";
			return;
		}

		$hasOpenCampaign = false;
		$lists = $controller->getLists();
		$campaigns = get_post_meta($post->ID, Plugin::POST_META_CAMPAIGNS);

		echo "<ul class='campaign-list'>";
		foreach ($campaigns as $campIds){
			$c = $controller->getCampaign($campIds["id"]);
			if(isset($c["status"]) && $c["status"] == 404){
				delete_post_meta($post->ID, Plugin::POST_META_CAMPAIGNS, $campIds);
				continue;
			}



			// campaign name and link
			echo "<li class='campaign-list--item'>";

			echo "<div class='title'>";
			render_campaign_link($c["settings"]["title"], $campIds["web_id"]);
			echo "</span>";

			$error = $this->getError($campIds["id"]);
			if($error){
				$this->unsetError($campIds["id"]);
				echo "<div class='post_to_mailchimp__error'>";
				echo "<div class='post_to_mailchimp__error--title'>Error</div>";
				echo "<pre class='post_to_mailchimp__error--details'>";
				print_r($error);
				echo "</pre>";
				echo "</div>";
			}

			echo "<div class='content'>";
			// list info
			echo "List: ";
			$l = $this->plugin->controller->getListById($c["recipients"]["list_id"]);
			if(false != $l){
				render_list_link($l["name"], $l["web_id"]);
			} else {
				echo $c["recipients"]["list_name"];
			}

			// send info or send button
			if($c["send_time"] != ''){
				if("schedule" === $c["status"]){
					echo "<br>Scheduled to be send:<br>";
				} else {
					echo "<br>Was send:<br>";
				}
				echo format_datetime(strtotime($c["send_time"]));
			} else {
				$hasOpenCampaign = true;
				?>
				<div class='campaign-controls'>
					<div class="campaign-controls--time">
						<span>Send: <strong class="time-display">now</strong> <a href="#mailchimp-schedule" class="hide-if-no-js">Schedule</a></span>
					</div>
					<div class="campaign-controls--send">
						 <button
								 id="<?php echo self::POST_SCHEDULE_NAME; ?>"
				name='<?php echo self::POST_SCHEDULE_NAME; ?>'
				class='button send'
				value='<?php echo $c["id"] ?>'>
							 Send
						 </button>
					</div>
				</div>
				<?php
			}
			echo "</div>";
			echo "</li>";
		}
		echo "</ul>";

		if(!$hasOpenCampaign){
			?>
			<label for="<?php echo self::POST_LIST_ID; ?>">Choose a list:</label><br>
			<select class="post_to_mailchimp__lists-list" id="<?php echo self::POST_LIST_ID; ?>" name="<?php echo self::POST_LIST_ID; ?>">
				<?php
				foreach ($lists as $item){
					echo "<option value='{$item["id"]}'>{$item["name"]}</option>";
				}
				?>
			</select>
			<div>
				<?php
				submit_button("Create campaign", "primary", self::POST_CREATE_NAME, false);
				?>
			</div>
			<?php
		} else {
			?>
			<p class="description">You can create the next campaign as soon as you send or delete the existing one.</p>
			<?php
		}

	}

	public function save($post_id, $post){

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
			return;
		if ( ! current_user_can( 'edit_post', $post_id ) )
			return;

		if(
			isset($_POST[self::POST_CREATE_NAME])
			&&
			isset($_POST[self::POST_LIST_ID])
			&&
			$_POST[self::POST_LIST_ID] != ''
		){

			$list_id = sanitize_text_field($_POST[self::POST_LIST_ID]);
			$list = $this->plugin->controller->getListById($list_id);
			if($list == false) die("list not found");

			$campaign = $this->plugin->controller->addCampaign(
				get_the_title($post_id),
				$list_id,
				array(
					"settings" => array(
						"from_name" => $list["campaign_defaults"]["from_name"],
						"from_email" => $list["campaign_defaults"]["from_email"],
						"reply_to" => $list["campaign_defaults"]["from_email"],
						"subject_line" => get_the_title($post_id),
					)
				)
			);

			if($campaign){

				ob_start();
				do_action(Plugin::ACTION_NEWSLETTER_THE_CONTENT, $post_id);
				$content = ob_get_contents();
				ob_end_clean();

				ob_start();
				do_action(Plugin::ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT, $post_id);
				$content_plaintext = ob_get_contents();
				ob_end_clean();
				
				$this->plugin->controller->addContent(
						$campaign["id"],
						apply_filters(Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT, $content, $post_id),
						apply_filters(Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT_PLAINTEXT, $content_plaintext, $post_id),
						get_permalink($post_id)
					);

				add_post_meta(
						$post_id,
						Plugin::POST_META_CAMPAIGNS,
						array(
							"id" => $campaign["id"],
							"web_id" => $campaign["web_id"]
						)
				);
			}

		} else if( isset($_POST[self::POST_SCHEDULE_NAME]) && $_POST[self::POST_SCHEDULE_NAME] != null){
			$campaign_id = sanitize_text_field($_POST[self::POST_SCHEDULE_NAME]);
			$schedule = $this->getScheduleValues();
			if($schedule){
				$this->postScheduleToTransient($post_id);
				$schedule["date"] = date('Y-m-d\TH:i:s.Z\Z', strtotime(""));

				$aa = $schedule['year'];
				$mm = $schedule['month'];
				$jj = $schedule['day'];
				$hh = $schedule['hours'];
				$mn = $schedule['minutes'];
				$ss = 0;

				$timestring = sprintf( "%04d-%02d-%02d %02d:%02d:%02d", $aa, $mm, $jj, $hh, $mn, $ss );
				$valid_date = wp_checkdate( $mm, $jj, $aa, $timestring );
				if ( !$valid_date ) {
					$this->setError($campaign_id, "Invalid schedule date.");
					return;
				}
				$date = get_gmt_from_date( $timestring );

				$result = $this->plugin->controller->schedule($campaign_id, $date);
				if(true !== $result){
					$this->setError($campaign_id, $result);
				}
			} else {
				// send it now!
				$result = $this->plugin->controller->send($campaign_id);
				if(true !== $result){
					$this->setError($campaign_id, $result);
				}
			}
		}
	}

	/**
	 * @return array|bool
	 */
	function getScheduleValues(){
		if(!isset($_POST["mailchimp_jj"])) return false;
		return array(
			"day" => intval($_POST["mailchimp_jj"]),
			"month" => intval($_POST["mailchimp_mm"]),
			"year" => intval($_POST["mailchimp_aa"]),
			"hours" => intval($_POST["mailchimp_hh"]),
			"minutes" => intval($_POST["mailchimp_mn"]),
		);
	}

	/**
	 * @param $post_id
	 */
	function postScheduleToTransient($post_id){
		set_transient("post_to_mailchimp_schedule_$post_id", $this->getScheduleValues(), 30);
	}

	/**
	 * @param $post_id
	 *
	 * @return mixed
	 */
	function getScheduleFromTransient($post_id){
		return get_transient("post_to_mailchimp_schedule_$post_id");
	}

	/**
	 * @param $post_id
	 */
	function clearScheduleFromTransient($post_id){
		delete_transient("post_to_mailchimp_schedule_$post_id");
	}

	/**
	 * @param $campaignId
	 *
	 * @return mixed
	 */
	function getError($campaignId){
		return get_transient("post_to_mailchimp_error_$campaignId");
	}

	/**
	 * @param $campaignId
	 * @param $error_json
	 */
	function setError($campaignId, $error_json){
		set_transient("post_to_mailchimp_error_$campaignId", $error_json, 30);
	}

	/**
	 * @param $campaignId
	 */
	function unsetError($campaignId){
		delete_transient("post_to_mailchimp_error_$campaignId");
	}

}