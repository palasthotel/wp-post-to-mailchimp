<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 09:34
 */

namespace Palasthotel\PostToMailchimp;

use DrewM\MailChimp\MailChimp;

class Controller {

	/**
	 * @var Plugin
	 */
	private $plugin;

	/**
	 * Controller constructor.
	 *
	 * @param Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
	}

	/**
	 * @var \DrewM\MailChimp\MailChimp|null
	 */
	private $api = NULL;

	/**
	 * @return bool|\DrewM\MailChimp\MailChimp|null
	 */
	private function getApi() {
		try {
			if ( $this->api === NULL ) {
				$this->api = new MailChimp( $this->plugin->settings->getApiKey() );
			}
		} catch ( \Exception $e ) {
			error_log( $e, 4 );
			$this->api = false;
		}

		return $this->api;
	}

	/**
	 * checks if api is ready for use
	 *
	 * @return bool
	 */
	private $isReady = NULL;

	/**
	 * @return bool
	 */
	public function isReady() {
		if ( $this->isReady == NULL ) {
			$this->isReady = false;
			if ( $this->getApi() ) {
				$this->isReady = $this->api->get( "/ping" );
			}
		}

		return $this->isReady;
	}

	/**
	 * @param array $args
	 *
	 * @return array|false
	 */
	private $lists = NULL;

	public function getLists( $args = array() ) {
		if ( ! $this->isReady() ) {
			return false;
		}
		if ( $this->lists == NULL ) {
			$this->lists = $this->getApi()
			                    ->get( '/lists', apply_filters( Plugin::FILTER_GET_LISTS_ARGS, $args ) );
		}

		return ( $this->lists !== false ) ? $this->lists["lists"] : false;
	}

	/**
	 * @param $id
	 *
	 * @return array|bool
	 */
	public function getListById( $id ) {
		$lists = $this->getLists();
		if ( ! is_array( $lists ) ) {
			return false;
		}
		$found = array_filter( $lists, function ( $item ) use ( $id ) {
			return $item["id"] == $id;
		} );
		if ( count( $found ) !== 1 ) {
			return false;
		}

		return array_pop( $found );
	}

	/**
	 * @param $args
	 *
	 * @return array|false
	 */
	public function getCampaigns( $args = array() ) {
		if ( ! $this->isReady() ) {
			return false;
		}
		$items = $this->getApi()->get( "/campaigns", $args );

		return ( $items !== false ) ? $items["campaigns"] : false;
	}

	/**
	 * @param $campaignID
	 * @param array $args
	 *
	 * @return array|bool|false
	 */
	public function getCampaign( $campaignID, $args = array() ) {
		if ( ! $this->isReady() ) {
			return false;
		}

		return $this->getApi()->get( "/campaigns/$campaignID", $args );
	}

	/**
	 * @param $title string administrative title
	 * @param $list_id string id of mailing list
	 * @param array $args arguments see
	 *     https://developer.mailchimp.com/documentation/mailchimp/reference/campaigns/
	 *
	 * @return array|false
	 */
	public function addCampaign( $title, $list_id, $args = array() ) {
		if ( ! $this->isReady() ) {
			return false;
		}

		$args = array_merge_recursive( array(
			"type"       => "regular",
			"recipients" => array(
				"list_id" => $list_id,
			),
			"settings"   => array(
				"title" => $title,
			),
		), $args );

		return $this->getApi()->post(
			"/campaigns",
			apply_filters( Plugin::FILTER_ADD_CAMPAIGN_ARGS, $args, $this )
		);
	}

	/**
	 * @param $campaignId
	 * @param $html
	 * @param $plain_text
	 *
	 * @param string $url
	 *
	 * @return bool
	 */
	public function addContent( $campaignId, $html, $plain_text, $url = "" ) {
		if ( ! $this->isReady() ) {
			return false;
		}

		return $this->getApi()->put( "/campaigns/$campaignId/content", array(
			"html"       => $html,
			"plain_text" => $plain_text,
			"url"        => $url,
		) );
	}

	/**
	 * @param $campaignId string
	 *
	 * @return array|bool|false
	 */
	public function send( $campaignId ) {
		if ( ! $this->isReady() ) {
			return false;
		}

		return $this->getApi()->post( "/campaigns/$campaignId/actions/send" );
	}

	/**
	 * @param $campaignId string
	 *
	 * @param $utc_datetime string quarter hour only
	 *
	 * @return array|bool|false
	 */
	public function schedule( $campaignId, $utc_datetime ) {
		if ( ! $this->isReady() ) {
			return false;
		}

		// round to next quarter hour
		return $this->getApi()->post(
			"/campaigns/$campaignId/actions/schedule",
			apply_filters(
				Plugin::FILTER_SCHEDULE_CAMPAIGN_ARGS,
				array(
					"schedule_time" => $utc_datetime,
					"timewrap"      => true,
				)
			)
		);
	}

}