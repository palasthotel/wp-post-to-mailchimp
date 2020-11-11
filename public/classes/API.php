<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 29.10.18
 * Time: 09:34
 */

namespace Palasthotel\PostToMailchimp;

use DateTime;
use DrewM\MailChimp\MailChimp;
use Palasthotel\PostToMailchimp\Model\Audience;
use Palasthotel\PostToMailchimp\Model\MailchimpCampaignArgs;
use Palasthotel\PostToMailchimp\Model\MailchimpTestMail;
use Palasthotel\PostToMailchimp\Model\Segment;
use Palasthotel\PostToMailchimp\Model\GroupCategory;
use Palasthotel\PostToMailchimp\Model\GroupInterest;

class API extends _Component {

	/**
	 * @var MailChimp|null
	 */
	private $api = null;

	public function onCreate() {
		add_filter( Plugin::FILTER_ADD_CAMPAIGN_ARGS, function ( $args ) {
			return array_merge_recursive( $args, array(
				"tracking" => array(
					"google_analytics" => Option::getGoogleAnalyticsId()
				)
			) );
		} );
	}

	/**
	 * @return bool|MailChimp|null
	 */
	private function getApi() {
		try {
			if ( $this->api === null ) {
				$this->api = new MailChimp( Option::getApiKey() );
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
	private $isConnected = null;

	/**
	 * @return bool
	 */
	public function isConnected() {
		if ( $this->isConnected == null ) {
			$this->isConnected = false;
			if ( $this->getApi() ) {
				$this->isConnected = $this->api->get( "/ping" );
			}
		}

		return $this->isConnected;
	}

	/**
	 * @param array $args
	 *
	 * @return Audience[]
	 */
	public function getAudiences( array $args = array() ) {
		$result = $this->getApi()->get( '/lists', apply_filters( Plugin::FILTER_GET_LISTS_ARGS, $args ) );
		if ( ! is_array( $result ) || ! is_array( $result["lists"] ) ) {
			return [];
		}

		return array_map( function ( $item ) {
			return Audience::parse( $item );
		}, $result["lists"] );
	}

	/**
	 * @param string $id
	 *
	 * @return Audience|false
	 */
	public function getAudience( string $id ) {
		$result = $this->getApi()->get( "/lists/$id" );
		return Audience::parse( $result );
	}

	/**
	 * @param string $audienceId
	 *
	 * @return array|bool
	 */
	public function getSegments( string $audienceId ) {
		$result = $this->getApi()->get( "/lists/$audienceId/segments" );
		if ( is_array( $result ) && is_array( $result["segments"] ) ) {
			return array_map( function ( $item ) {
				return new Segment( $item["id"], $item["name"], $item["list_id"], $item["type"], $item["created_at"], $item["updated_at"] );
			}, $result["segments"] );
		}

		return false;
	}

	/**
	 * @param string $audienceId
	 *
	 * @return array|bool
	 */
	public function getGroups( string $audienceId ) {
		$baseUrl = "/lists/$audienceId/interest-categories";
		$result  = $this->getApi()->get( $baseUrl );
		if ( ! is_array( $result ) || ! is_array( $result["categories"] ) ) {
			return [];
		}

		return array_map( function ( $cat ) use ( $baseUrl ) {
			$id        = $cat["id"];
			$interests = $this->getApi()->get( $baseUrl . "/$id/interests" );

			return new GroupCategory( $cat["id"], $cat["title"], array_map( function ( $item ) {
					return new GroupInterest( $item["id"], $item["name"] );
				}, is_array( $interests ) && is_array( $interests["interests"] ) ? $interests["interests"] : [] )
			);
		}, $result["categories"] );
	}

	/**
	 * @param array $args
	 *
	 * @return array|false
	 */
	public function getCampaigns( array $args = array() ) {
		$items = $this->getApi()->get( "/campaigns", $args );

		return ( $items !== false ) ? $items["campaigns"] : false;
	}

	/**
	 * @param string $campaignID
	 * @param array $args
	 *
	 * @return array|bool|false
	 */
	public function getCampaign( string $campaignID, array $args = array() ) {
		return $this->getApi()->get( "/campaigns/$campaignID", $args );
	}

	/**
	 * @param MailchimpCampaignArgs $args
	 *
	 * @return array|false
	 */
	public function addCampaign( MailchimpCampaignArgs $args ) {
		return $this->getApi()->post(
			"/campaigns",
			apply_filters( Plugin::FILTER_ADD_CAMPAIGN_ARGS, $args->toArray(), $args )
		);
	}

	/**
	 * @param MailchimpCampaignArgs $args
	 *
	 * @return array|bool
	 */
	public function updateCampaign( MailchimpCampaignArgs $args ) {
		if ( empty( $args->campaign_id ) ) {
			return false;
		}

		return $this->getApi()->patch(
			"/campaigns/$args->campaign_id",
			apply_filters( Plugin::FILTER_UPDATE_CAMPAIGN_ARGS, $args->toArray(), $args )
		);

	}

	/**
	 * @param string $campaignId
	 *
	 * @return array|bool
	 */
	public function deleteCampaign( string $campaignId ) {
		return $this->getApi()->delete( "/campaigns/$campaignId" );
	}

	/**
	 * @param $campaignId
	 * @param $html
	 * @param $plain_text
	 *
	 * @param string $url
	 *
	 * @return bool|array
	 */
	public function addContent( $campaignId, $html, $plain_text, $url = "" ) {

		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			return false;
		}

		return $this->getApi()->put( "/campaigns/$campaignId/content", array(
			"html"       => $html,
			"plain_text" => $plain_text,
			"url"        => $url,
		) );
	}

	/**
	 * @param string $campaignId
	 * @param MailchimpTestMail $test
	 *
	 * @return array|bool
	 */
	public function sendTestMail( string $campaignId, MailchimpTestMail $test ) {
		$mails = [];
		if ( $test->type === MailchimpTestMail::TYPE_HTML || $test->type === MailchimpTestMail::TYPE_BOTH ) {
			$mails[] = [
				"test_emails" => $test->emailAddresses,
				"send_type"   => MailchimpTestMail::TYPE_HTML,
			];
		}
		if ( $test->type === MailchimpTestMail::TYPE_PLAINTEXT || $test->type === MailchimpTestMail::TYPE_BOTH ) {
			$mails[] = [
				"test_emails" => $test->emailAddresses,
				"send_type"   => MailchimpTestMail::TYPE_PLAINTEXT,
			];
		}

		return array_map( function ( $mail ) use ( $campaignId ) {
			return $this->getApi()->post( "/campaigns/$campaignId/actions/test", $mail );
		}, $mails );
	}

	/**
	 * @param $campaignId string
	 *
	 * @return array|bool|false
	 */
	public function send( string $campaignId ) {

		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			return false;
		}

		return $this->getApi()->post( "/campaigns/$campaignId/actions/send" );
	}

	/**
	 * @param string $campaignId
	 *
	 * @return array|bool
	 */
	public function cancel( string $campaignId ) {

		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			return false;
		}

		return $this->getApi()->post( "/campaigns/$campaignId/actions/cancel-send" );
	}

	/**
	 * @param $campaignId string
	 *
	 * @param $utc_datetime DateTime quarter hour only
	 *
	 * @return array|bool|false
	 */
	public function schedule( string $campaignId, DateTime $utc_datetime ) {

		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			return false;
		}

		// round to next quarter hour
		return $this->getApi()->post(
			"/campaigns/$campaignId/actions/schedule",
			apply_filters(
				Plugin::FILTER_SCHEDULE_CAMPAIGN_ARGS,
				array(
					"schedule_time" => $utc_datetime->format( 'Y-m-d H:i:00 e' ),
					"timewrap"      => true,
				)
			)
		);
	}

	/**
	 * @param string $campaignId
	 *
	 * @return array|bool
	 */
	public function unschedule( string $campaignId ) {
		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			return false;
		}

		return $this->getApi()->post( "/campaigns/$campaignId/actions/unschedule" );
	}

	// ------------------------------------------------------------
	// deprecated section
	// ------------------------------------------------------------

	/**
	 * @param $id
	 *
	 * @return array|bool
	 * @deprecated use getAudience
	 */
	public function getListById( $id ) {
		$lists = $this->getAudiences();
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


}