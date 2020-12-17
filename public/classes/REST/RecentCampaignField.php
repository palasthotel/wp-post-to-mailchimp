<?php


namespace Palasthotel\PostToMailchimp\REST;


use Palasthotel\PostToMailchimp\_Component;
use Palasthotel\PostToMailchimp\Model\Campaign;
use Palasthotel\PostToMailchimp\Option;
use Palasthotel\PostToMailchimp\Plugin;

class RecentCampaignField extends _Component {

	public function onCreate() {

		$post_types = Option::getPostTypes();
		if ( empty( $post_types ) ) {
			return;
		}

		register_rest_field(

			$post_types,

			Plugin::REST_FIELD_RECENT_CAMPAIGN,
			[
				'get_callback'        => function ( $post ) {
					$postId   = $post["id"];
					$campaign = $this->plugin->repository->getRecentCampaign( $postId );

					if($campaign instanceof Campaign){
						if($campaign->state === Campaign::MC_STATUS_SCHEDULED || $campaign->state === Campaign::MC_STATUS_SENDING){
							$time = intval(get_post_meta($postId, Plugin::POST_META_CAMPAIGN_SYNC_TIMESTAMP, true));
							$now = time();
							if( $time < $now - 8 ){
								update_post_meta($postId, Plugin::POST_META_CAMPAIGN_SYNC_TIMESTAMP, time());
								$campaign = $this->plugin->repository->fetchCampaign($campaign);
							}
						}
						if($campaign->state === Campaign::MC_STATUS_SENT){
							delete_post_meta($postId, Plugin::POST_META_CAMPAIGN_SYNC_TIMESTAMP);
						}
					}

					return null === $campaign ? new \stdClass() : $campaign;
				},
				'update_callback'     => function ( $value, $post ) {

					if ( ! is_array( $value ) ) {
						return;
					} // there is nothing to change for us

					// check for recent campaign to exist
					$campaign = $this->plugin->repository->getRecentCampaign( $post->ID );

					// custom values
					$customs = [];
					if(is_array($value["custom"])){
						foreach ($value["custom"] as $custom_key => $custom_value){
							$customs[sanitize_text_field($custom_key)] = sanitize_textarea_field($custom_value);
						}
					}

					if ( isset( $value["delete"] ) && true === $value["delete"] ) {
						// if delete flag is set, delete campaign
						if ( $campaign instanceof Campaign ) {
							$this->plugin->repository->deleteCampaign( $campaign );
						}

						return;
					}

					if ( isset( $value["unschedule"] ) && true === $value["unschedule"] ) {
						// is done with post status transition planed -> draft in Post.php
						return;
					}

					if ( isset( $value["cancel"] ) && true === $value["cancel"] ) {
						// is done with  post status transition publish -> draft, planed or delete in Post.php
						return;
					}

					if ( isset( $value["id"] ) && $campaign instanceof Campaign ) {
						// if id is set and recent campaign exists, this should be an update request

						if($value["id"] !== $campaign->id){
							return;
						}

						$this->plugin->repository->updateCampaignCustoms($campaign->id, $customs);

						if ( ! empty( $value["audience_id"] ) ) {
							// update campaign configuration
							$this->plugin->repository->updateCampaign(
								$campaign,
								sanitize_text_field( $value["audience_id"] ),
								isset( $value["segment_id"] ) ? intval( $value["segment_id"] ) : null
							);

							// fetch fresh instance of campaign to get changes of update
							$campaign = $this->plugin->repository->getCampaign( $campaign->id );
						}

						// update content of campaign
						$this->plugin->repository->updateCampaignContent( $campaign );
						$this->plugin->repository->unscheduleCampaignUpdate($campaign->id);

						if (
							isset( $value["is_ready"] ) && true === $value["is_ready"]
							&&
							in_array(get_post_status($post->ID), ["future", "publish"])
						) {
							$this->plugin->repository->startCampaign($campaign);
						}

						return;
					}

					if ( ! empty( $value["audience_id"] ) ) {
						// someone selected an audience and there is no recent campaign yet. Add one!
						$campaign = $this->plugin->repository->addCampaign(
							$post->ID,
							sanitize_text_field( $value["audience_id"] ),
							isset( $value["segment_id"] ) ? intval( $value["segment_id"] ) : null
						);
						$this->plugin->repository->updateCampaignContent( $campaign );
						$this->plugin->repository->unscheduleCampaignUpdate($campaign->id);
						$this->plugin->repository->updateCampaignCustoms($campaign->id, $customs);
					}

				},
				'permission_callback' => function ( $request ) {
					return current_user_can( 'edit_post', $request["id"] );
				},
//				'schema' => array(
//					'description' => "Recent campaign",
//					'type'        => 'array'
//				),
			]
		);
	}

}