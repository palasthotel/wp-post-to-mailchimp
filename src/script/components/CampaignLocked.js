import { BaseControl, Button, PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useIsSavingPost } from "../hooks/use-post.js";
import { useUnschedule } from "../hooks/use-schedule.js";
import { useCancelCampaign, useRecentCampaign } from "../hooks/use-store.js";
import { campaignIsScheduled, campaignIsSending, campaignIsSent } from "../utils/campaign.js";
import { getAudience, getSegment, isSegment } from "../utils/config.js";
import { showError } from "../utils/notice.js";
import ReadableTimestamp from "./ReadableTimestamp.js";

const CampaignAudienceInfo = ()=>{
    const [campaign] = useRecentCampaign();
    
    const audience = getAudience(campaign.audience_id)
    const segment = campaign.segment_id !== null ? getSegment(campaign.audience_id, campaign.segment_id) : null;

    useEffect(()=>{
        if(!audience){
            showError(`Missing audience with id ${campaign.audience_id}`)
        }
    }, [audience])

    useEffect(()=>{
        if(campaign.segment_id !== null && !segment){
            showError(`Missing segment with id ${campaign.segment_id}`)
        }
    }, [audience])

    return <>
        <TextControl 
            label="Audience"
            value={audience? audience.name:"<ERROR: missing audience>"}
            readOnly
        />
        {
            segment ? 
                <TextControl 
                    label={isSegment(segment) ? "Segment": "Tag"}
                    value={segment? segment.name:"<ERROR: missing segment>"}
                    readOnly
                />
                :
                null
        }
        
    </>
}

const SendingInfo = ()=>{
    return <p>This campaign is being sent.</p>
}
const SentInfo = ()=>{
    return <p>This campaign was completely delivered.</p>
}
const ScheduleInfo = ({timestamp})=>{
    return <p>This campaign is scheduled for <ReadableTimestamp timestamp={timestamp} />.</p>
}

const CampaignLocked = ()=>{

    const [campaign, changeCampaign] = useRecentCampaign();
    const isSaving = useIsSavingPost();
    const executeUnschedule = useUnschedule();
    const executeCancelCampaign = useCancelCampaign();

    const {
        cancel = false,
        schedule,
    } = campaign;

    const isSending = campaignIsSending(campaign)
    const isSent = campaignIsSent(campaign)
    const isScheduled = campaignIsScheduled(campaign)

    return <PanelBody>

        <CampaignAudienceInfo />
        
        <PanelRow>
            {isSending ? <SendingInfo />: null}
            {isScheduled ? <ScheduleInfo timestamp={schedule} /> : null}
            {isSent ? <SentInfo />: null}
        </PanelRow>

        {isSending ? <Button disabled={isSaving} onClick={executeCancelCampaign} isDestructive>Cancel campaign</Button>: null}

        {isScheduled ? <Button disabled={isSaving} onClick={executeUnschedule} isDestructive>Unschedule</Button> : null}

    </PanelBody>
}

export default CampaignLocked;

