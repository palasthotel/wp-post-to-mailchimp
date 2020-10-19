<?php


namespace Palasthotel\PostToMailchimp;


/**
 * Class _Component
 * @property Plugin plugin
 */
abstract class _Component {
	public function __construct(Plugin $plugin) {
		$this->plugin = $plugin;
		$this->onCreate();
	}

	public function onCreate(){}

}