
export const isCampaign = (campaign) => typeof campaign === typeof {} && typeof campaign.id === typeof 1;

export const campaignGetAudienceId =(attributes)=>{
    if(
        typeof attributes !== typeof {}
        ||
        typeof attributes.recipients !== typeof {}
        ||
        typeof attributes.recipients.list_id !== typeof ""
    ) return undefined;
    return attributes.recipients.list_id;
}

export const campaignGetSegmentId =(attributes)=>{
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