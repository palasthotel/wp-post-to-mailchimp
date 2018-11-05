<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 15:42
 */

namespace Palasthotel\PostToMailchimp;


class MetaBox {

	const AJAX_ACTION_CREATE = "post_to_mailchimp__create";

	const AJAX_ACTION_SEND = "post_to_mailchimp__send";

	const POST_CREATE_NAME = "post_to_mailchimp_create";

	const POST_LIST_ID = "post_to_mailchimp_list_id";

	const ROOT_ID = "post_to_mailchimp__app";

	/**
	 * MetaBox constructor.
	 *
	 * @param Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ), 10, 2 );
		add_action( 'save_post', array( $this, 'save_post' ), 10, 2 );
		add_action( 'wp_ajax_' . self::AJAX_ACTION_CREATE, array(
			$this,
			'ajax_create',
		) );
		add_action( 'wp_ajax_' . self::AJAX_ACTION_SEND, array(
			$this,
			'ajax_send',
		) );
	}

	/**
	 *  register meta box
	 *
	 * @param $post_type
	 * @param $post \WP_Post
	 */
	public function add_meta_box( $post_type, $post ) {
		$post_types = apply_filters( Plugin::FILTER_POST_TYPES, array( "post" ) );

		wp_register_script(Plugin::DOMAIN."-api", $this->plugin->url."/js/api.js", array("jquery"),1,false);
		wp_localize_script(Plugin::DOMAIN."-api", "PostToMailchimpAPI", array(
			"ajaxurl"       => admin_url( 'admin-ajax.php' ),
			"action_send"   => self::AJAX_ACTION_SEND,
			"action_create" => self::AJAX_ACTION_CREATE,
			"post_id"       => get_the_ID(),
		));

		if ( count( $post_types ) < 1 || in_array( $post_type, $post_types ) ) {
			wp_enqueue_style( Plugin::DOMAIN . "-meta-box-style", $this->plugin->url . "/css/meta-box.css" );
			wp_enqueue_script( Plugin::DOMAIN . "-meta-box-script", $this->plugin->url . "/js/meta-box.js", array( Plugin::DOMAIN."-api" ), 1, true );

			$controller      = $this->plugin->controller;
			$campaignIdsList = get_post_meta( $post->ID, Plugin::POST_META_CAMPAIGNS );

			$mailchimp = false;
			if ( $controller->isReady() ) {
				$mailchimp = array(
					"lists"        => $controller->getLists(),
					"campaign_ids" => $campaignIdsList,
					"campaigns"    => array_map( function ( $campaignIds ) use ( $controller ) {
						$c                     = $controller->getCampaign( $campaignIds["id"] );
						$c["send_time_format"] = ( isset( $c["send_time"] ) && "" != $c["send_time"] ) ?
							format_datetime( strtotime( $c["send_time"] ) ) : '';
						$c["ids"]              = $campaignIds;

						return $c;
					}, $campaignIdsList ),
				);
			}

			wp_localize_script( Plugin::DOMAIN . "-meta-box-script", "PostToMailchimpMetaBox", array(
				"root_id"       => self::ROOT_ID,
				"mailchimp"     => $mailchimp,
				"i18n"          => array(
					"time_display_now"         => __( "now", Plugin::DOMAIN ),
					"time_display_schedule"    => __( "Schedule for", Plugin::DOMAIN ),
					"time_edit"                => __( "Edit", Plugin::DOMAIN ),
					"time_edit_cancel"         => __( "Cancel", Plugin::DOMAIN ),
					"warning_schedule_in_past" => __( "Sorry, schedule needs to be in future", Plugin::DOMAIN ),
					"list_prefix"              => __( "List", Plugin::DOMAIN ),
					"scheduled_to_send"        => __( "Scheduled to be send", Plugin::DOMAIN ),
					"was_send"                 => __( "Was send", Plugin::DOMAIN ),
					"send_it"                  => __( "Send it", Plugin::DOMAIN ),
					"now"                      => __( "now", Plugin::DOMAIN ),
					"edit"                     => __( "Edit", Plugin::DOMAIN ),
					"btn_send"                 => __( 'Send', Plugin::DOMAIN ),
					"loading"                  => __( 'Please wait...', Plugin::DOMAIN ),
					"loading_create"           => __( 'Creating campaign, please wait...', Plugin::DOMAIN ),
					"error"                    => __( 'Error 🚨', Plugin::DOMAIN ),
					"loading_send"           => __( 'Scheduling campaign, please wait...', Plugin::DOMAIN ),
				),
			) );

			add_meta_box(
				Plugin::DOMAIN . '-meta-box',
				__( 'Post to Mailchimp', Plugin::DOMAIN ),
				array( $this, 'render' ),
				$post_type,
				"side",
				"high"
			);
		}
	}

	public function render( $post ) {
		$controller = $this->plugin->controller;
		if ( ! $controller->isReady() ) {
			echo "<p class='description'>";
			_e( "API is not ready yet.", Plugin::DOMAIN );
			echo "</p>";

			return;
		}

		if ( get_post_status( $post->ID ) == 'auto-draft' ) {
			echo "<p class='description'>";
			_e( "You have to save the post first.", Plugin::DOMAIN );
			echo "</p>";

			return;
		}

		echo "<div id='" . self::ROOT_ID . "'></div>";

		$lists = $controller->getLists();

		?>
		<div id="post_to_mailchimp__next-campaign_create"
		     style="display: none;">
			<label for="<?php echo self::POST_LIST_ID; ?>"><?php _e( "Choose a list", Plugin::DOMAIN ); ?>
				:</label><br>
			<select class="post_to_mailchimp__lists-list"
			        id="<?php echo self::POST_LIST_ID; ?>"
			        name="<?php echo self::POST_LIST_ID; ?>">
				<?php
				foreach ( $lists as $item ) {
					echo "<option value='{$item["id"]}'>{$item["name"]}</option>";
				}
				?>
			</select>
			<div>
				<?php
				submit_button( __( "Add campaign", Plugin::DOMAIN ), "primary", self::POST_CREATE_NAME, false );
				?>
			</div>
		</div>

		<p id="post_to_mailchimp__next-campaign_info" class="description"
		   style="display: none;">
			<?php _e( "You can create the next campaign as soon as you send or delete the existing one.", Plugin::DOMAIN ); ?>
		</p>
		<?php

	}

	public function save_post( $post_id, $post ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		if (
			isset( $_POST[ self::POST_CREATE_NAME ] )
			&&
			isset( $_POST[ self::POST_LIST_ID ] )
			&&
			$_POST[ self::POST_LIST_ID ] != ''
		) {

			$list_id = sanitize_text_field( $_POST[ self::POST_LIST_ID ] );
			$list    = $this->plugin->controller->getListById( $list_id );
			if ( $list == false ) {
				wp_die( new \WP_Error( __( "List not found", Plugin::DOMAIN ) ) );
			}

			$campaign = $this->plugin->controller->addCampaign(
				get_the_title( $post_id ),
				$list_id,
				array(
					"settings" => array(
						"from_name"    => $list["campaign_defaults"]["from_name"],
						"from_email"   => $list["campaign_defaults"]["from_email"],
						"reply_to"     => $list["campaign_defaults"]["from_email"],
						"subject_line" => get_the_title( $post_id ),
					),
				)
			);

			if ( $campaign ) {

				ob_start();
				do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT, $post_id );
				$content = ob_get_contents();
				ob_end_clean();

				ob_start();
				do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT, $post_id );
				$content_plaintext = ob_get_contents();
				ob_end_clean();

				$this->plugin->controller->addContent(
					$campaign["id"],
					apply_filters( Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT, $content, $post_id ),
					apply_filters( Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT_PLAINTEXT, $content_plaintext, $post_id ),
					get_permalink( $post_id )
				);

				add_post_meta(
					$post_id,
					Plugin::POST_META_CAMPAIGNS,
					array(
						"id"     => $campaign["id"],
						"web_id" => $campaign["web_id"],
					)
				);
			}

		}
	}

	public function ajax_create() {
		if ( ! current_user_can( 'edit_posts' ) ) {
			die( 'you do not have the permission for this operation.' );
		}
		if ( ! isset( $_POST["post_id"] ) || ! isset( $_POST["list_id"] ) ) {
			wp_send_json_error( array( "missing values" ) );
			exit;
		}

		$post_id = intval( $_POST["post_id"] );

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			die( 'you do not habe permissions for this post.' );
		}

		$list_id = sanitize_text_field( $_POST["list_id"] );

		$list = $this->plugin->controller->getListById( $list_id );
		if ( $list == false ) {
			die( 'List not found' );
		}

		$campaign = $this->plugin->controller->addCampaign(
			get_the_title( $post_id ),
			$list_id,
			array(
				"settings" => array(
					"from_name"    => $list["campaign_defaults"]["from_name"],
					"from_email"   => $list["campaign_defaults"]["from_email"],
					"reply_to"     => $list["campaign_defaults"]["from_email"],
					"subject_line" => get_the_title( $post_id ),
				),
			)
		);

		if ( ! $campaign ) {
			die( "Could not add campaign" );
		}

		ob_start();
		do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT, $post_id );
		$content = ob_get_contents();
		ob_end_clean();

		ob_start();
		do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT, $post_id );
		$content_plaintext = ob_get_contents();
		ob_end_clean();

		$this->plugin->controller->addContent(
			$campaign["id"],
			apply_filters( Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT, $content, $post_id ),
			apply_filters( Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT_PLAINTEXT, $content_plaintext, $post_id ),
			get_permalink( $post_id )
		);

		add_post_meta(
			$post_id,
			Plugin::POST_META_CAMPAIGNS,
			array(
				"id"     => $campaign["id"],
				"web_id" => $campaign["web_id"],
			)
		);

		wp_send_json( $campaign );
		exit;

	}

	public function ajax_send() {

		if ( ! current_user_can( 'edit_posts' ) ) {
			die( 'you do not have the permission for this operation.' );
		}

		if ( ! isset( $_POST["campaign_id"] ) ) {
			wp_send_json_error( array( "missing values" ) );
			exit;
		}
		$campaign_id = sanitize_text_field( $_POST["campaign_id"] );
		$schedule    = NULL;
		if ( isset( $_POST["schedule"] ) && "" != $_POST["schedule"] ) {
			$schedule = get_gmt_from_date( sanitize_text_field( $_POST["schedule"] ) );
			$result   = $this->plugin->controller->schedule( $campaign_id, $schedule );
			wp_send_json( $result );
			exit;

		}

		$result = $this->plugin->controller->send( $campaign_id );
		wp_send_json( $result );
		exit;
	}


}