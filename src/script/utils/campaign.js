
export const isCampaign = campaign => typeof campaign === typeof {} && typeof campaign.id === typeof 1 && campaign.id > 0;

const getAttributes = campaign => isCampaign(campaign) ? campaign.attributes : {};

export const campaignGetState = (campaign)=>{
    const attributes = getAttributes(campaign);
    return attributes?.status || "";
}

// mailchimp campaign status
export const campaignIsSaved =  campaign => campaignGetState(campaign) === "saved";
export const campaignIsPaused =  campaign => campaignGetState(campaign) === "paused";
export const campaignIsScheduled = campaign => campaignGetState(campaign) === "schedule";
export const campaignIsSending =  campaign => campaignGetState(campaign) === "sending";
export const campaignIsSent =  campaign => campaignGetState(campaign) === "sent";

// internal state
export const campaignIsLocked = campaign => campaignIsScheduled(campaign) || campaignIsSending(campaign) || campaignIsSent(campaign);

export const campaignStateIsNew = campaign => isCampaign(campaign) && campaign.state === "new";
export const campaignStateIsDraft = campaign => isCampaign(campaign) && campaign.state === "draft";
export const campaignStateIsReady = campaign => isCampaign(campaign) && campaign.state === "ready";
export const campaignStateIsDone = campaign => isCampaign(campaign) && campaign.state === "done";


export const campaignGetAudienceId =(campaign) => {
    const attributes = getAttributes(campaign);
    if(
        typeof attributes !== typeof {}
        ||
        typeof attributes.recipients !== typeof {}
        ||
        typeof attributes.recipients.list_id !== typeof ""
    ) return undefined;
    return attributes.recipients.list_id;
}

export const campaignGetSegmentId =(campaign)=>{
    const attributes = getAttributes(campaign);
    if(
        typeof attributes !== typeof {}
        ||
        typeof attributes.recipients !== typeof {}
        ||
        typeof attributes.recipients.segment_opts !== typeof {}
        ||
        typeof attributes.recipients.segment_opts.saved_segment_id !== typeof 1
    ) return undefined;
    return attributes.recipients.segment_opts.saved_segment_id;
}