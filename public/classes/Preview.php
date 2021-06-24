<?php


namespace Palasthotel\PostToMailchimp;


class Preview extends _Component {

	const ACTION = "ptm_preview";

	public function onCreate() {
		add_action('wp_ajax_'.static::ACTION, [$this, 'preview']);
	}

	public function getHTMLUrl($post_id){
		$additional = "";
		if(function_exists("wpml_get_current_language")) {
			$lang = wpml_get_current_language();
			$additional.="&lang=$lang";
		}
		return admin_url('admin-ajax.php?action='.static::ACTION."&post_id={$post_id}{$additional}");
	}

	public function getPlaintextUrl($post_id){
		$additional = "";
		if(function_exists("wpml_get_current_language")) {
			$lang = wpml_get_current_language();
			$additional.="&lang=$lang";
		}
		return admin_url('admin-ajax.php?action='.static::ACTION."&post_id={$post_id}&version=plaintext{$additional}");
	}

	public function preview(){

		if(!isset($_GET["post_id"])) return;

		$post_id = intval($_GET["post_id"]);
		if(!current_user_can("edit_post", $post_id)) return;

		$post = get_post($post_id);
		if(!($post instanceof \WP_Post)) return;

		if(isset($_GET["version"]) && $_GET["version"] === "plaintext"){
			do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT, $post_id );
		} else {
			do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT, $post_id );
		}

		exit;
	}

}