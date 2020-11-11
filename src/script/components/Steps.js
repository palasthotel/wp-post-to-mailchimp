import { PanelBody } from "@wordpress/components"
import { useRecentCampaign } from "../hooks/use-store"
import { campaignStateIsReady } from "../utils/campaign"
import AudiencesControl from "./AudiencesControl"
import { SendTestButton } from "./Buttons"
import CustomConfigControl from "./CustomConfigControl"
import EMailAddressesControl from "./EMailAddressesControl"
import FinishControl from "./FinishControl"
import PreviewUrl from "./PreviewUrl"
import ScheduleControl from "./ScheduleControl"
import SegmentsControl from "./SegmentsControl"

export const Step1 = ()=>{

    return <PanelBody
        title="Step 1: Configuration"
        initialOpen={true}
    >
        <AudiencesControl />
        <SegmentsControl />
        <CustomConfigControl />
    </PanelBody>
}


export const Step2 = ()=>{

    const [campaign] = useRecentCampaign()

    if(!campaign.id) return null;

    return <PanelBody
        title="Step 2: Test"
        initialOpen={false}
    >
        <PreviewUrl>HTML Preview</PreviewUrl>
        <PreviewUrl plaintext>Plaintext Preview</PreviewUrl>
        <hr />
        <EMailAddressesControl />
        <SendTestButton />
    </PanelBody>
}

export const Step3 = ()=>{

    const [campaign] = useRecentCampaign()
    if(!campaign.id) return null;

    return <PanelBody
        title="Step 3: Deliver"
        initialOpen={false}
    >
        <ScheduleControl />
        <FinishControl />
    </PanelBody>
}