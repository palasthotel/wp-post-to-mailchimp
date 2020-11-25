import { PanelBody} from "@wordpress/components";
import { getAudiencesLists, getSettingsUrl } from "../utils/config.js";
import { useRecentCampaign } from "../hooks/use-store.js";
import { campaignIsLocked, campaignStateIsDone, isCampaign } from "../utils/campaign.js";
import CampaignEditor from "./CampaignEditor.js";
import CampaignLocked from "./CampaignLocked.js";

const Plugin = ()=>{

    const audiences = getAudiencesLists();
    const [campaign] = useRecentCampaign();

    const hasRecentCampaign = isCampaign(campaign);

    if(audiences.length < 1){
        return <PanelBody>Please make sure there is at least one Mailchimp.com audience available. <a href={getSettingsUrl()}>Goto Settings</a></PanelBody>
    }

    if( hasRecentCampaign && campaignIsLocked(campaign) ){
        return <CampaignLocked />
    }

    return <CampaignEditor />;
}

export default Plugin;