const { useRecentCampaign } = require("../hooks/use-store");
const { isCampaign } = require("../utils/campaign");

const NextStepsInfo = ()=>{

    const [campaign] = useRecentCampaign();

    if(isCampaign(campaign)) return null;

    return <p>You need to save the post to proceed to next steps.</p>
}

export default NextStepsInfo;