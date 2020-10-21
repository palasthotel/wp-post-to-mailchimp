import AudienceControl from "./AudiencesControl.js";
import SegmentsControl from "./SegmentsControl.js";
import {Button, PanelBody} from "@wordpress/components";
import {useAudience, useCampaigns, useIsRequesting, useRecentCampaign, useSegment} from "../hooks/use-store";
import { useSelect } from "@wordpress/data";
import { useAudiencesLists } from "../hooks/use-config.js";
import { CreateButton, DeleteButton, SendButton, UpdateButton } from "./Buttons.js";

const Plugin = ()=>{

    const audiences = useAudiencesLists();

    if(audiences.length < 1){
        return <PanelBody>Please make sure there is at least one Mailchimp.com audience available.</PanelBody>
    }

    return <PanelBody>
        
        <AudienceControl />
        
        <SegmentsControl />

        <CreateButton />
        <UpdateButton />
        <DeleteButton />
        <SendButton />
        
    </PanelBody>
}

export default Plugin;