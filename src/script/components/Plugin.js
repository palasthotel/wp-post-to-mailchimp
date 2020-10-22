import AudienceControl from "./AudiencesControl.js";
import SegmentsControl from "./SegmentsControl.js";
import {Button, PanelBody} from "@wordpress/components";
import {useAudience, useCampaigns, useIsRequesting, useRecentCampaign, useSegment} from "../hooks/use-store";
import { useAudiencesLists } from "../hooks/use-config.js";
import { CreateButton, DeleteButton, SendButton, UpdateButton } from "./Buttons.js";
import { Step1, Step2, Step3 } from "./Steps.js";

const Plugin = ()=>{

    const audiences = useAudiencesLists();

    if(audiences.length < 1){
        return <PanelBody>Please make sure there is at least one Mailchimp.com audience available.</PanelBody>
    }

    return <>

        <Step1 />
        <Step2 />
        <Step3 />
        
        <PanelBody>
            <CreateButton />
            <UpdateButton />
            <DeleteButton />
        </PanelBody>

        <PanelBody
            title="History"
            initialOpen={false}
        >
            <p>Old campaigns</p>
        </PanelBody>
        
    </>
}

export default Plugin;