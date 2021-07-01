<?php


namespace Palasthotel\PostToMailchimp;


use DateTime;
use Palasthotel\PostToMailchimp\Model\Audience;
use Palasthotel\PostToMailchimp\Model\Campaign;
use Palasthotel\PostToMailchimp\Model\GroupCategory;
use Palasthotel\PostToMailchimp\Model\MailchimpCampaignArgs;
use Palasthotel\PostToMailchimp\Model\Segment;
use Palasthotel\ProcessLog\Model\ProcessLog;
use WP_Error;

/**
 * @property API api
 * @property Database database
 */
class Repository extends _Component {

	/**
	 * @var null|Audience[]
	 */
	private $audiences;

	/**
	 * @var array
	 */
	private $audienceMap;

	/**
	 * @var array
	 */
	private $segments;

	/**
	 * @var array
	 */
	private $groups;

	public function onCreate() {
		$this->audienceMap = [];
		$this->segments    = [];
		$this->groups      = [];
		$this->api         = $this->plugin->api;
		$this->database    = $this->plugin->database;
	}

	/**
	 * @return Audience[]
	 */
	public function getAudiences() {
		if ( is_array( $this->audiences ) ) {
			return $this->audiences;
		}

		$cache = get_transient( Plugin::TRANSIENT_LISTS );
		if ( is_array( $cache ) ) {
			$this->audiences = $cache;

			return $this->audiences;
		}

		$this->audiences = $this->api->getAudiences();
		Log::write(function(ProcessLog $log){
			$log
				->setMessage("Fetch audiences")
				->setChangedDataField("audiences")
				->setChangedDataValueNew($this->audiences)
			    ->setEventType("mailchimp_api_fetch");
			return $log;
		});
		set_transient( Plugin::TRANSIENT_LISTS, $this->audiences, 60 * 10 );

		return $this->audiences;
	}

	/**
	 * @param $audienceListId
	 *
	 * @return false|Audience
	 */
	public function getAudience( $audienceListId ) {
		if ( isset( $this->audienceMap[ $audienceListId ] ) ) {
			return $this->audienceMap[ $audienceListId ];
		}
		if ( is_array( $this->audiences ) ) {
			$found = array_filter( $this->audiences, function ( $item ) use ( $audienceListId ) {
				return $item->listId === $audienceListId;
			} );
			if ( count( $found ) === 1 ) {
				return $found[0];
			}
		}
		$audience                             = $this->api->getAudience( $audienceListId );
		Log::write(function(ProcessLog $log) use ($audience, $audienceListId){
			$log
				->setMessage("Fetch single audience")
				->setChangedDataField("audience")
				->setChangedDataValueNew($audience)
				->setEventType("mailchimp_api_fetch");
			return $log;
		});
		$this->audienceMap[ $audienceListId ] = $audience;

		return $audience;
	}

	/**
	 * @param Audience|string $audienceOrId
	 *
	 * @return Segment[]
	 */
	public function getSegments( $audienceOrId ) {
		$id = $audienceOrId instanceof Audience ? $audienceOrId->listId : $audienceOrId;

		if ( isset( $this->segments[ $id ] ) ) {
			return $this->segments[ $id ];
		}

		$transientKey = sprintf( Plugin::TRANSIENT_SEGMENTS, $id );
		$cache        = get_transient( $transientKey );
		if ( is_array( $cache ) ) {
			$this->segments[ $id ] = $cache;

			return $this->segments[ $id ];
		}

		$this->segments[ $id ] = $this->api->getSegments( $id );

		Log::write(function(ProcessLog $log) use ($id){
			$log
				->setMessage("Fetch segments for audience $id")
				->setChangedDataField("segments")
				->setChangedDataValueNew($this->segments[$id])
				->setEventType("mailchimp_api_fetch");
			return $log;
		});

		set_transient( $transientKey, $this->segments[ $id ], 60 * 10 );

		return $this->segments[ $id ];

	}

	/**
	 * @param Audience|string $audienceOrId
	 *
	 * @return GroupCategory[]
	 */
	public function getGroups( $audienceOrId ) {
		$id = $audienceOrId instanceof Audience ? $audienceOrId->listId : $audienceOrId;

		if ( isset( $this->groups[ $id ] ) ) {
			return $this->groups[ $id ];
		}

		$transientKey = sprintf( Plugin::TRANSIENT_GROUPS, $id );
		$cache        = get_transient( $transientKey );
		if ( is_array( $cache ) ) {
			$this->groups[ $id ] = $cache;

			return $this->groups[ $id ];
		}

		$groups              = $this->api->getGroups( $id );
		$this->groups[ $id ] = $groups;
		Log::write(function(ProcessLog $log) use ($id){
			$log
				->setMessage("Fetch groups for audience $id")
				->setChangedDataField("groups")
				->setChangedDataValueNew($this->groups[$id])
				->setEventType("mailchimp_api_fetch");
			return $log;
		});
		set_transient( $transientKey, $this->groups[ $id ], 60 * 10 );

		return $this->groups[ $id ];
	}

	/**
	 * clear all caches
	 */
	public function cacheClear() {
		$this->audiences = null;
		delete_transient( Plugin::TRANSIENT_LISTS );
		$this->audienceMap = [];
		$this->segments    = [];
		$this->groups      = [];
		global $wpdb;
		$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE '" . Plugin::TRANSIENT_DELETE_SEGMENTS_LIKE . "'" );
		$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE '" . Plugin::TRANSIENT_DELETE_GROUPS_LIKE . "'" );
		Log::write(function(ProcessLog $log){
			$log
				->setMessage("Cleared cache for audiences, segments and groups")
				->setEventType(process_log_get_plugin()::EVENT_TYPE_DELETE);
			return $log;
		});
	}

	/**
	 * @param $post_id
	 *
	 * @return Campaign[]
	 */
	public function getCampaigns( $post_id ) {
		return $this->database->getCampaigns( $post_id );
	}

	/**
	 * @param int $id
	 *
	 * @return Campaign|null
	 */
	public function getCampaign( int $id ) {
		return $this->database->getCampaign( $id );
	}

	/**
	 * @param string $campaign_id mailchimp campaign id
	 *
	 * @return Campaign|null
	 */
	public function getCampaignById( string $campaign_id ) {
		return $this->database->getCampaignById( $campaign_id );
	}

	/**
	 * @param $post_id
	 *
	 * @return Campaign|null
	 */
	public function getRecentCampaign( $post_id ) {
		return $this->database->getRecentCampaign( $post_id );
	}

	/**
	 * @param int $post_id
	 * @param string $audienceListId
	 * @param null|int $segmentId
	 *
	 * @return Campaign|WP_Error
	 */
	public function addCampaign( int $post_id, string $audienceListId, ?int $segmentId ) {

		$campaign = $this->database->addCampaign( $post_id );

		$audience = $this->getAudience( $audienceListId );

		if ( ! ( $audience instanceof Audience ) ) {
			Log::write(function(ProcessLog $log) use ($audienceListId){
				$log
					->setMessage("addCampaign -> Could not add campaign because audience is missing: $audienceListId")
					->setEventType(process_log_get_plugin()::EVENT_TYPE_ERROR);
				return $log;
			});
			return new WP_Error( 404, "Could not find audience list id.", [
				"audience" => $audienceListId,
				"campaign" => $campaign,
			] );
		}

		if ( WP_DEBUG && ! POST_TO_MAILCHIMP_DEBUG_OFF ) {
			// only local if debug
			$campaign->campaign_id = "debug-" . $campaign->id;
			$campaign->attributes  = [];
			$this->database->updateCampaign( $campaign );

			Log::write(function(ProcessLog $log) use ($campaign){
				$log
					->setMessage("addCampaign -> Add campaign DEBUG stop for campaign $campaign->id")
					->setEventType(process_log_get_plugin()::EVENT_TYPE_CREATE);
				return $log;
			});

			return $campaign;
		}

		// create campaign at mailchimp
		$args = MailchimpCampaignArgs::build()
		                             ->setTitle( html_entity_decode( get_the_title( $post_id ) ) )
		                             ->setAudience( $audience )
		                             ->setSegmentId( $segmentId );

		$response = $this->api->addCampaign( $args );
		if ( ! is_array( $response ) ) {
			Log::write(function(ProcessLog $log) use ($campaign, $args, $response){
				$log
					->setChangedDataField("campaign")
					->setChangedDataValueNew([
						"args" => $args,
						"campaign" => $campaign,
						"response" => $response,
					])
					->setMessage("addCampaign -> Could not add campaign via Mailchimp api")
					->setEventType(process_log_get_plugin()::EVENT_TYPE_ERROR);
				return $log;
			});
			return new WP_Error(
				500,
				"Bad response from mailchimp controller.",
				[
					"response" => $response,
					"campaign" => $campaign,
				]
			);
		}

		$this->database->updateCampaign( $campaign->setAttributes( $response ) );

		Log::write(function(ProcessLog $log) use ($campaign, $args, $response){
			$log
				->setChangedDataField("campaign")
				->setChangedDataValueNew([
					"args" => $args,
					"campaign" => $campaign,
					"response" => $response,
				])
				->setMessage("addCampaign -> Campaign was created via mailchimp api")
				->setEventType("mailchimp_api_add_campaign");
			return $log;
		});

		return $campaign;
	}

	/**
	 * @param int|Campaign $id
	 * @param string $audienceId
	 * @param int|null $segmentId
	 *
	 * @return bool|int|WP_Error
	 */
	public function updateCampaign( $id, string $audienceId, ?int $segmentId ) {

		$campaign = $id instanceof Campaign ? $id : $this->database->getCampaign( $id );

		if ( ! ( $campaign instanceof Campaign ) ) {
			Log::write(function(ProcessLog $log) use ($id, $campaign){
				$log
					->setChangedDataField("campaign")
					->setChangedDataValueNew([
						"campaign_id" => $id,
						"campaign" => $campaign,
					])
					->setMessage("updateCampaign -> Could not find campaign")
					->setEventType(process_log_get_plugin()::EVENT_TYPE_ERROR);
				return $log;
			});
			return new WP_Error(
				404,
				"Could not find campaign.",
				[
					"id" => $id,
				]
			);
		}

		$audience = $this->getAudience( $audienceId );
		if ( ! ( $audience instanceof Audience ) ) {
			return false;
		}

		$args = MailchimpCampaignArgs::build()
		                             ->setCampaignId( $campaign->campaign_id )
		                             ->setTitle( html_entity_decode( get_the_title( $campaign->post_id ) ) )
		                             ->setAudience( $audience )
		                             ->setSegmentId( $segmentId );

		$response = $this->api->updateCampaign( $args );

		Log::write(function(ProcessLog $log) use ($id, $args, $campaign, $response){
			$log
				->setChangedDataField("campaign")
				->setChangedDataValueNew([
					"args" => $args,
					"campaign" => $campaign,
					"response" => $response,
				])
				->setMessage("updateCampaign -> Campaign was updated via mailchimp api")
				->setEventType("mailchimp_api_update_campaign");
			return $log;
		});

		$campaign->setAttributes( $response );

		return $this->database->updateCampaign( $campaign );
	}

	/**
	 * @param int|Campaign $id
	 *
	 * @return bool|WP_Error
	 */
	public function deleteCampaign( $id ) {
		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			return new WP_Error(
				404,
				"Could not find campaign.",
				[
					"id" => $id,
				]
			);
		}
		$apiResponse = $this->api->deleteCampaign( $campaign->campaign_id );
		if ( ! $apiResponse ) {
			return new WP_Error(
				500,
				"Could not delete campaign from Mailchimp",
				[
					"response" => $apiResponse,
					"id"       => $id,
				]
			);
		}
		$dbResult = $this->database->deleteCampaign( $campaign->id );
		if ( ! $dbResult ) {
			return new WP_Error(
				500,
				"Could not delete campaign from database",
				[
					"id" => $id,
				]
			);
		}

		return true;
	}

	/**
	 * @param int|Campaign $id
	 *
	 * @return array|bool|WP_Error
	 */
	public function updateCampaignContent( $id ) {
		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			Log::write(function(ProcessLog $log) use ($id){
				$log
					->setChangedDataField("campaign")
					->setChangedDataValueNew([
						"campaign_id" => $id,
					])
					->setMessage("updateCampaignContent -> No campaign was found in local database")
					->setEventType(process_log_get_plugin()::EVENT_TYPE_ERROR);
				return $log;
			});
			return new WP_Error(
				404,
				"Could not find campaign.",
				[
					"id" => $id,
				]
			);
		}

		ob_start();
		do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT, $campaign->post_id );
		$content = ob_get_contents();
		ob_end_clean();

		ob_start();
		do_action( Plugin::ACTION_NEWSLETTER_THE_CONTENT_PLAINTEXT, $campaign->post_id );
		$content_plaintext = ob_get_contents();
		ob_end_clean();

		$response = $this->api->addContent(
			$campaign->campaign_id,
			apply_filters( Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT, $content, $campaign->post_id ),
			apply_filters( Plugin::FILTER_NEWSLETTER_CHANGE_CONTENT_PLAINTEXT, $content_plaintext, $campaign->post_id ),
			get_permalink( $campaign->post_id )
		);

		Log::write(function(ProcessLog $log) use ($id, $response){
			$log
				->setChangedDataField("campaign")
				->setChangedDataValueNew([
					"campaign_id" => $id,
					"response" => $response,
				])
				->setMessage("updateCampaignContent -> Updated campaign content via mailchimp api")
				->setEventType("mailchimp_api_add_content");
			return $log;
		});

		$this->fetchCampaign( $campaign );

		return true;

	}

	/**
	 * @param $campaign_id
	 *
	 * @return bool|int
	 */
	public function scheduleCampaignUpdate( $campaign_id ) {
		return $this->database->scheduleCampaignUpdate( $campaign_id );
	}

	public function getScheduledCampaignUpdates() {
		return $this->database->getScheduledCampaignUpdates();
	}

	public function unscheduleCampaignUpdate( $campaign_id ) {
		return $this->database->unscheduleCampaignUpdate( $campaign_id );
	}

	/**
	 * @param int|Campaign $id
	 * @param array $customs_array
	 *
	 * @return bool|WP_Error
	 */
	public function updateCampaignCustoms( $id, array $customs_array ) {
		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			return new WP_Error(
				404,
				"Could not find campaign.",
				[
					"id" => $id,
				]
			);
		}

		$this->database->updateCampaignCustoms( $campaign->id, $customs_array );

		return true;
	}

	/**
	 * delete all open campaigns of post
	 *
	 * @param int $post_id
	 *
	 * @return bool|int
	 */
	public function deletePost( int $post_id ) {

		$campaigns = $this->database->getCampaigns( $post_id );
		foreach ( $campaigns as $campaign ) {
			$this->api->deleteCampaign( $campaign->campaign_id );
		}

		return $this->database->deleteCampaigns( $post_id );
	}

	/**
	 * @param Campaign|int $id
	 *
	 * @return boolean
	 */
	public function startCampaign( $id ) {

		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			return false;
		}

		$datetime = get_post_datetime( $campaign->post_id );
		if ( time() <= $datetime->getTimestamp() ) {
			return $this->schedule( $campaign, $datetime->getTimestamp() );
		}

		return $this->send( $campaign );
	}

	/**
	 * @param Campaign|int $id
	 *
	 * @return boolean
	 */
	public function send( $id ) {

		$campaign = $id instanceof Campaign ? $id : $this->plugin->repository->getCampaign( $id );

		if ( ! ( $campaign instanceof Campaign ) ) {
			return false;
		}

		$result = $this->api->send( $campaign->campaign_id );
		if ( false === $result ) {
			return false;
		}

		Log::write(function(ProcessLog $log) use ($id, $result){
			$log
				->setChangedDataField("campaign")
				->setChangedDataValueNew([
					"campaign_id" => $id,
					"response" => $result,
				])
				->setMessage("send -> Campaign was sent via mailchimp api")
				->setEventType("mailchimp_api_send");
			return $log;
		});

		$campaign = $this->fetchCampaign( $campaign );

		do_action( Plugin::ACTION_CAMPAIGN_WAS_SENT, $campaign );

		return true;
	}

	/**
	 * @param int|Campaign $id
	 *
	 * @return bool|WP_Error
	 */
	public function cancel( $id ) {
		$campaign = $id instanceof Campaign ? $id : $this->plugin->repository->getCampaign( $id );

		if ( false === $campaign ) {
			return new WP_Error(
				404,
				"Could not find campaign.",
				[
					"id" => $id,
				]
			);
		}

		$campaign = $this->fetchCampaign( $campaign );

		if ( $campaign === Campaign::MC_STATUS_SENT ) {
			return new WP_Error(
				200,
				"Campaign already sent.",
				[
					"id" => $id,
				]
			);
		}

		$result = $this->api->cancel( $campaign->campaign_id );
		if ( false === $result ) {
			return new WP_Error(
				404,
				"Could not cancel campaign via api.",
				[
					"id"       => $campaign->id,
					"response" => $result
				]
			);
		}

		$this->fetchCampaign( $campaign );

		return true;
	}

	/**
	 * @param Campaign|int $id
	 *
	 * @param int $schedule timestamp in seconds
	 *
	 * @return array|bool|WP_Error
	 */
	public function schedule( $id, int $schedule ) {

		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			return false;
		}

		if ( $schedule < time() ) {
			return new WP_Error(
				501,
				"Campaign has no valid schedule.",
				[
					"id"       => $campaign->id,
					"schedule" => $schedule,
				]
			);
		}

		$datetime = new DateTime();
		$datetime->setTimestamp( $schedule );

		$result = $this->api->schedule( $campaign->campaign_id, $datetime );
		if ( true !== $result ) {
			return new WP_Error(
				501,
				"API rejected schedule.",
				[
					"id" => $campaign->id,
				]
			);
		}

		$campaign = $this->fetchCampaign( $campaign );

		Log::write(function(ProcessLog $log) use ($id, $result, $datetime){
			$log
				->setChangedDataField("campaign")
				->setChangedDataValueNew([
					"campaign_id" => $id,
					"datetime" => $datetime,
					"response" => $result,
				])
				->setMessage("schedule -> Campaign was scheduled  via mailchimp api")
				->setEventType("mailchimp_api_schedule");
			return $log;
		});

		do_action( Plugin::ACTION_CAMPAIGN_WAS_SCHEDULED, $campaign );

		return $result;
	}

	/**
	 * @return int[]
	 */
	public function getFutureNewsletterPostIds() {
		return get_posts( [
			"post_type"                       => "any",
			"post_status"                     => "future",
			"fields"                          => "ids",
			Plugin::WP_QUERY_ARG_HAS_CAMPAIGN => true,
		] );
	}

	/**
	 * @param int|Campaign $id
	 *
	 * @return false
	 */
	public function unschedule( $id ) {
		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			return false;
		}

		$response = $this->api->unschedule( $campaign->campaign_id );
		$this->fetchCampaign( $campaign );

		Log::write(function(ProcessLog $log) use ($id, $response){
			$log
				->setChangedDataField("campaign")
				->setChangedDataValueNew([
					"campaign_id" => $id,
					"response" => $response,
				])
				->setMessage("unschedule -> Campaign was unscheduled via mailchimp api")
				->setEventType("mailchimp_api_unschedule");
			return $log;
		});

		return true;
	}

	/**
	 * @param int|Campaign $id
	 *
	 * @return false|Campaign
	 */
	public function fetchCampaign( $id ) {
		$campaign = $this->getCampaignOrFalse( $id );
		if ( false === $campaign ) {
			return false;
		}

		$response = $this->api->getCampaign( $campaign->campaign_id );
		$campaign->setAttributes( $response );
		$this->database->updateCampaign( $campaign );

		return $campaign;
	}


	/**
	 * @param int|Campaign $id
	 *
	 * @return false|Campaign
	 */
	private function getCampaignOrFalse( $id ) {
		$campaign = $id instanceof Campaign ? $id : $this->plugin->repository->getCampaign( $id );
		if ( ! ( $campaign instanceof Campaign ) ) {
			return false;
		}

		return $campaign;
	}

}