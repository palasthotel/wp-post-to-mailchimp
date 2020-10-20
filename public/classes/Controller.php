<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 09:34
 */

namespace Palasthotel\PostToMailchimp;

use DrewM\MailChimp\MailChimp;

class Controller extends _Component {

	/**
	 * @var MailChimp|null
	 */
	private $api = null;

	/**
	 * @return bool|MailChimp|null
	 */
	private function getApi() {
		try {
			if ( $this->api === null ) {
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
	private $isReady = null;

	/**
	 * @return bool
	 */
	public function isReady() {
		if ( $this->isReady == null ) {
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
	 * @return Audience[]
	 */
	public function getLists( $args = array() ) {
		if ( ! $this->isReady() ) {
			error_log("Mailchimp api was not ready on Controller->getLists call.");
			return [];
		}

		$result = $this->getApi()->get( '/lists', apply_filters( Plugin::FILTER_GET_LISTS_ARGS, $args ) );

		if ( !is_array( $result ) || !is_array( $result["lists"] ) ) return [];

		return array_map( function ( $item ) {
			return Audience::parse( $item );
		}, $result["lists"] );
	}

	/**
	 * @param string $id
	 * @return Audience|false
	 */
	public function getAudience(string $id){
		if ( ! $this->isReady() ) {
			error_log("Mailchimp api was not ready on Controller->getLists call.");
			return false;
		}

		$result = $this->getApi()->get("/lists/$id");
		return Audience::parse($result);
	}

	/**
	 * @param int|string $listId
	 *
	 * @return array|bool
	 */
	public function getSegments( $listId ) {
		$result = $this->getApi()->get( "/lists/$listId/segments" );
		if ( is_array( $result ) && is_array( $result["segments"] ) ) {
			return array_map(function($item){
				return new Segment($item["id"], $item["name"], $item["list_id"], $item["created_at"], $item["updated_at"]);
			},$result["segments"]);
		}

		return false;
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
	public function addCampaign( string $title, string $list_id, $args = array() ) {

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

		if ( WP_DEBUG ) {
			return false;
		}

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

		if ( WP_DEBUG ) {
			return false;
		}

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

		if ( WP_DEBUG ) {
			return false;
		}

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