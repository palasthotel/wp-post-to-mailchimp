import AudiencesListControl from "./AudiencesListControl";
import SegmentsListControl from "./SegmentsListControl";
import {Button, PanelBody} from "@wordpress/components";
import {useAudience, useCampaigns, useSegment} from "../hooks/use-store";
import { useSelect } from "@wordpress/data";

const PluginComponent = ()=>{

    const Post = useSelect(select => select('core/editor').getCurrentPost())

    console.log(Post)

    const [audience, setAudience] = useAudience()
    const [segment, setSegment] = useSegment()

    const [campaigns, updateCampaign, addCampaign] = useCampaigns(Post.id)

    console.log("campaigns", campaigns)

    const handleCreateCampaign = ()=>{
        console.log("create campaign with", audience, segment)
        addCampaign({
            post_id: Post.id,
            audience_id: audience,
            segment_id: segment,
        })
    }

    return <PanelBody>
        <p><a href="#preview">Preview</a></p>
        <AudiencesListControl />
        <SegmentsListControl />
        <Button isSecondary onClick={handleCreateCampaign}>Create Campaign</Button>
        <p>Send Campaign</p>
    </PanelBody>
}

export default PluginComponent;