import { PanelBody} from "@wordpress/components";
import { useAudiencesLists } from "../hooks/use-config.js";
import { useRecentCampaign } from "../hooks/use-store.js";
import { campaignStateIsDone, isCampaign } from "../utils/campaign.js";
import CampaignEditor from "./CampaignEditor.js";
import CampaignLocked from "./CampaignLocked.js";

const Plugin = ()=>{

    const audiences = useAudiencesLists();
    const [campaign] = useRecentCampaign();

    const hasRecentCampaign = isCampaign(campaign);

    if(audiences.length < 1){
        return <PanelBody>Please make sure there is at least one Mailchimp.com audience available.</PanelBody>
    }

    if( hasRecentCampaign && campaignStateIsDone(campaign) ){
        return <CampaignLocked />
    }

    return <CampaignEditor />;
}

export default Plugin;