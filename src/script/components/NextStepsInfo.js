import { PanelBody } from "@wordpress/components";
import { useRecentCampaign } from "../hooks/use-store";
import { isCampaign } from "../utils/campaign";

const NextStepsInfo = ()=>{

    const [campaign] = useRecentCampaign();

    if(isCampaign(campaign)) return null;

    return <PanelBody>
            <p>You need to save the post to proceed to next steps.</p>
    </PanelBody>
}

export default NextStepsInfo;