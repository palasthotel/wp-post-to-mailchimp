<?php


namespace Palasthotel\PostToMailchimp\REST;


use Palasthotel\PostToMailchimp\Plugin;
use Palasthotel\PostToMailchimp\WP_REST;

/**
 * @property Plugin plugin
 */
abstract class _BaseController extends \WP_REST_Controller {

	protected $arg_int_required;
	protected $arg_string_required;
	protected $arg_int;
	protected $arg_string;

	private function __construct(Plugin $plugin) {
		$this->plugin = $plugin;

		$this->namespace = WP_REST::ROUTES_NAMESPACE;

		$this->arg_int_required = array(
			'required' => true,
			'type' => 'integer',
			'validate_callback' => function ( $value, $request, $param ) {
				return is_numeric( $value );
			},
			'sanitize_callback' => function ( $value ) {
				return intval( $value );
			},
		);

		$this->arg_int = array(
			'validate_callback' => function ( $value, $request, $param ) {
				return empty($value) || is_numeric( $value );
			},
			'sanitize_callback' => function ( $value ) {
				return intval( $value );
			},
		);

		$this->arg_string_required = array(
			'required' => true,
			'type' => 'string',
			'validate_callback' => function ( $value, $request, $param ) {
				return is_string( $value ) && strlen( $value );
			},
			'sanitize_callback' => function ( $value ) {
				return sanitize_text_field( $value );
			},
		);

		$this->arg_string = array(
			'type' => 'string',
			'validate_callback' => function ( $value, $request, $param ) {
				return is_string( $value );
			},
			'sanitize_callback' => function ( $value ) {
				return sanitize_text_field( $value );
			},
		);

	}

	public static function register(Plugin $plugin){
		$self = new static($plugin);
		$self->register_routes();
		return $self;
	}

}