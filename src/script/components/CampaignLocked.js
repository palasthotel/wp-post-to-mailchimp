import { Button, PanelBody } from "@wordpress/components";
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
    return <p>This campaign is scheduled at <ReadableTimestamp timestamp={timestamp} />.</p>
}

const CampaignLocked = ()=>{

    const [campaign, changeCampaign] = useRecentCampaign();

    const {
        unschedule = false,
        schedule,
    } = campaign;
    console.log(campaign)

    const isSending = campaignIsSending(campaign)
    const isSent = campaignIsSent(campaign)
    const isScheduled = campaignIsScheduled(campaign)



    const handleAbortSchedule = ()=>{
        changeCampaign({unschedule:true});
    }

    return <PanelBody>
        {isScheduled ? <ScheduleInfo timestamp={schedule} /> : null}
        {isSending ? <SendingInfos />: null}
        {isSent ? <SentInfo />: null}
        
        {isScheduled && !unschedule ? <Button onClick={handleAbortSchedule} isDestructive>Unschedule</Button> : null}
        {unschedule ? <p>Save to unschedule.</p>: null}

    </PanelBody>
}

export default CampaignLocked;

