import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useIsSavingPost } from "../hooks/use-post.js";
import { useRecentCampaign } from "../hooks/use-store.js";
import { campaignIsScheduled, campaignIsSending, campaignIsSent } from "../utils/campaign.js";
import ReadableTimestamp from "./ReadableTimestamp.js";

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

    const {
        unschedule = false,
        cancel = false,
        schedule,
    } = campaign;

    const isSending = campaignIsSending(campaign)
    const isSent = campaignIsSent(campaign)
    const isScheduled = campaignIsScheduled(campaign)

    const toggleUnschedule = ()=>{
        changeCampaign({unschedule:!unschedule});
    }
    const toggleCancel = ()=>{
        changeCampaign({cancel:!cancel});
    }

    return <PanelBody>
        
        <PanelRow>
            {isSending ? <SendingInfo />: null}
            {isScheduled ? <ScheduleInfo timestamp={schedule} /> : null}
            {isSent ? <SentInfo />: null}
        </PanelRow>

        {isSending && !cancel ? <Button disabled={isSaving} onClick={toggleCancel} isDestructive>Cancel campaign</Button>: null}
        {isSending && cancel ? <Button disabled={isSaving} onClick={toggleCancel} isSecondary>Nope, don't cancel</Button> : null}

        {isScheduled && !unschedule ? <Button disabled={isSaving} onClick={toggleUnschedule} isDestructive>Unschedule</Button> : null}
        {isScheduled && unschedule ? <Button disabled={isSaving} onClick={toggleUnschedule} isSecondary>Cancel unschedule</Button> : null}
        
        {
            unschedule || cancel ? 
            <PanelRow><p className="description">Save post to apply changes.</p></PanelRow>
            : 
            null
        }


        

    </PanelBody>
}

export default CampaignLocked;

