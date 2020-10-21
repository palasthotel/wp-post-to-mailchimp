import { Button } from "@wordpress/components";
import { useAudience, useIsRequesting, useRecentCampaign, useRecentCampaignHasChanges, useSegment } from "../hooks/use-store";

export const CreateButton = ()=>{

    const isRequesting = useIsRequesting();
    const [audience] = useAudience();
    const [segment] = useSegment();

    const [campaign, _, addCampaign] = useRecentCampaign();

    if(typeof campaign !== typeof undefined){
        return null;
    }

    const handleCreateCampaign = ()=> addCampaign({
        audience_id: audience,
        segment_id: segment,
    })

    const disabled = isRequesting;

    return <Button 
        disabled={disabled} 
        isSecondary 
        onClick={handleCreateCampaign}
    >Create Campaign</Button>

}

export const UpdateButton = ()=>{

    const isRequesting = useIsRequesting();
    const [audience] = useAudience();
    const [segment] = useSegment();

    const [campaign, updateCampaign] = useRecentCampaign();
    const hasChange = useRecentCampaignHasChanges();

    if(typeof campaign === typeof undefined){
        return null;
    }

    const disabled = isRequesting || ! hasChange;

    return <Button disabled={disabled} isSecondary onClick={()=>updateCampaign({
        ...campaign,
        audience_id: audience,
        segment_id: segment,
    })}>Save</Button>
}

export const DeleteButton = ()=>{

    const isRequesting = useIsRequesting();
    const [campaign, _1, _2, deleteCampaign] = useRecentCampaign();

    if(typeof campaign === typeof undefined) return null;

    return <Button disabled={isRequesting} isDestructive onClick={()=>deleteCampaign()}>Delete</Button>
}

export const SendButton = ()=>{

    const isRequesting = useIsRequesting();
    const hasChanges = useRecentCampaignHasChanges();
    const [campaign] = useRecentCampaign();

    if(typeof campaign === typeof undefined) return null;

    const disabled = isRequesting || hasChanges;

    return <Button disabled={disabled} isPrimary onClick={()=>console.log("send")}>Send!</Button>
}