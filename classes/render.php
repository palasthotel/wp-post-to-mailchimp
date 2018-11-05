<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 30.10.18
 * Time: 10:03
 */

namespace Palasthotel\PostToMailchimp;


class Render {

	/**
	 * Render constructor
	 *
	 * @param Plugin $plugin
	 */
	function __construct( Plugin $plugin ) {
		$this->plugin = $plugin;
		$this->sub_dirs = null;

		add_action(Plugin::ACTION_NEWSLETTER_THE_CONTENT, array($this, "the_content"));
		add_action(Plugin::ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT, array($this, "the_content_plaintext"));
	}

	/**
	 * render content
	 * @param $post_id
	 *
	 */
	public function the_content($post_id){
		$template = $this->get_template_path(Plugin::TEMPLATE_HTML);
		if($template === false) return;
		global $post;
		$post = get_post($post_id);
		setup_postdata($post);
		include $template;
		wp_reset_postdata();
	}

	/**
	 * render content plaintext
	 * @param $post_id
	 *
	 */
	public function the_content_plaintext($post_id){
		$template = $this->get_template_path(Plugin::TEMPLATE_PLAINTEXT);
		if($template === false) return;
		global $post;
		$post = get_post($post_id);
		setup_postdata($post);
		include $template;
		wp_reset_postdata();
	}

	/**
	 * Look for existing template path
	 * @return string|false
	 */
	function get_template_path( $template ) {

		// theme or child theme
		if ( $overridden_template = locate_template( $this->get_template_dirs($template) ) ) {
			return $overridden_template;
		}

		// parent theme
		foreach ($this->get_template_dirs($template) as $path){
			if( is_file( get_template_directory()."/$path")){
				return get_template_directory()."/$path";
			}
		}

		// other plugins
		$paths = apply_filters(Plugin::FILTER_ADD_TEMPLATE_PATHS, array());
		// add default templates at last position
		$paths[] = $this->plugin->dir . 'templates';
		// find templates
		foreach ($paths as $path){
			if(is_file("$path/$template")){
				return "$path/$template";
			}
		}

		// if nothing found...
		return false;
	}

	/**
	 * get array of possible template files in theme
	 * @param $template
	 *
	 * @return array
	 */
	function get_template_dirs($template){
		$dirs = array(
			Plugin::THEME_FOLDER . "/" . $template,
		);
		foreach ($this->get_sub_dirs() as $sub){
			$dirs[] = $sub.'/'.$template;
		}
		return $dirs;
	}

	/**
	 * paths for locate_template
	 * @return array
	 */
	function get_sub_dirs(){
		if($this->sub_dirs == null){
			$this->sub_dirs = array();
			$dirs = array_filter(glob(get_template_directory().'/'.Plugin::THEME_FOLDER.'/*'), 'is_dir');
			foreach($dirs as $dir){
				$this->sub_dirs[] = str_replace(get_template_directory().'/', '', $dir);
			}
		}
		return $this->sub_dirs;
	}


}