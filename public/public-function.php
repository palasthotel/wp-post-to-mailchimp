<?php

use Palasthotel\PostToMailchimp\Model\Campaign;
use Palasthotel\PostToMailchimp\Plugin;

function ptm_plugin(){
	return Plugin::instance();
}

/**
 * @param string $campaign_id mailchimp campaign id
 *
 * @return Campaign|null
 */
function ptm_get_campaign_by_campaign_id(string $campaign_id){
	return ptm_plugin()->repository->getCampaignById($campaign_id);
}