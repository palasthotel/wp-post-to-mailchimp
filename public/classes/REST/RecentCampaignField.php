<?php


namespace Palasthotel\PostToMailchimp\REST;


use Palasthotel\PostToMailchimp\_Component;
use Palasthotel\PostToMailchimp\Model\Campaign;
use Palasthotel\PostToMailchimp\Option;
use Palasthotel\PostToMailchimp\Plugin;

class RecentCampaignField extends _Component {

	public function onCreate() {
		$post_types = Option::getPostTypes();
		if(empty($post_types)) return;

		register_rest_field(

			$post_types,

			Plugin::REST_FIELD_RECENT_CAMPAIGN,
			[
				'get_callback'        => function ( $post ) {
					$postId   = $post["id"];
					$campaign = $this->plugin->repository->getRecentCampaign( $postId );

					return null === $campaign ? new \stdClass() : $campaign;
				},
				'update_callback'     => function ( $value, $post ) {
					if ( !is_array( $value ) )  return; // there is nothing to change for us

					// check for recent campaign to exist
					$campaign = $this->plugin->repository->getRecentCampaign( $post->ID );


					if ( isset( $value["delete"] ) && true === $value["delete"] ) {
						// if delete flag is set, delete campaign
						if ( $campaign instanceof Campaign ) {
							$this->plugin->repository->deleteCampaign( $campaign );
						}
						return;
					}

					if( isset($value["unschedule"]) && true === $value["unschedule"]){
						if ( $campaign instanceof Campaign ) {
							$this->plugin->repository->unschedule( $campaign );
						}
						return;
					}

					if( isset($value["cancel"]) && true === $value["cancel"]){
						if ( $campaign instanceof Campaign ) {
							$this->plugin->repository->cancel( $campaign );
						}
						return;
					}

					if ( isset( $value["id"] ) && $campaign instanceof Campaign) {
						// if id is set and recent campaign exists, this should be an update request

						// always check and update schedule because if not set it was removed
						$campaign->schedule = isset($value["schedule"]) ? intval($value["schedule"]) : null;
						$this->plugin->database->updateCampaign($campaign);

						if(!empty($value["audience_id"])){
							// update campaign configuration
							$this->plugin->repository->updateCampaign(
								$campaign,
								sanitize_text_field( $value["audience_id"] ),
								isset( $value["segment_id"] ) ? intval( $value["segment_id"] ) : null
							);

							// fetch fresh instance of campaign to get changes of update
							$campaign = $this->plugin->repository->getCampaign($campaign->id);
						}

						if(isset($value["is_ready"]) && true === $value["is_ready"]){

							// update content of campaign
							$this->plugin->repository->updateCampaignContent($campaign->id);

							// we are ready to deliver the campaign
							if($campaign->schedule){
								$this->plugin->repository->schedule($campaign);
							} else {
								$this->plugin->repository->send($campaign);
							}
						}

						return;
					}

					if(!empty($value["audience_id"])){
						// someone selected an audience and there is no recent campaign yet. Add one!
						$campaign = $this->plugin->repository->addCampaign(
							$post->ID,
							sanitize_text_field( $value["audience_id"] ),
							isset( $value["segment_id"] ) ? intval( $value["segment_id"] ) : null
						);
						$this->plugin->repository->updateCampaignContent($campaign);
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