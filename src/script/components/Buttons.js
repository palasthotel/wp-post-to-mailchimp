import { Button } from "@wordpress/components";
import { useAudience, useIsRequesting, useRecentCampaign, useRecentCampaignHasChanges, useSegment, useSendTestEmails, useTestEmailAddresses } from "../hooks/use-store";
import { validateEmail } from "../utils/email";

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

    const disabled = typeof campaign === typeof undefined || isRequesting || ! hasChange;

    return <Button disabled={disabled} isSecondary onClick={()=>updateCampaign({
        ...campaign,
        audience_id: audience,
        segment_id: segment,
    })}>Save</Button>
}

export const DeleteButton = ()=>{

    const isRequesting = useIsRequesting();
    const [campaign, _1, _2, deleteCampaign] = useRecentCampaign();

    if(typeof campaign === typeof undefined){
        return null;
    }

    const disabled = typeof campaign === typeof undefined || isRequesting;

    return <Button disabled={disabled} isDestructive onClick={()=>deleteCampaign()}>Delete</Button>
}

export const SendTestButton = ()=>{

    const isRequesting = useIsRequesting();
    const hasChanges = useRecentCampaignHasChanges();
    const [campaign] = useRecentCampaign();
    const [emails] = useTestEmailAddresses();
    const sendTest = useSendTestEmails();

    if(typeof campaign === typeof undefined){
        return null;
    }

    const validEmails = emails.filter(validateEmail)

    const disabled = isRequesting || hasChanges || validEmails.length == 0;

    return <Button disabled={disabled} isSecondary onClick={sendTest}>Send test</Button>
}

export const SendButton = ()=>{

    const isRequesting = useIsRequesting();
    const hasChanges = useRecentCampaignHasChanges();
    const [campaign] = useRecentCampaign();

    if(typeof campaign === typeof undefined){
        return null;
    }

    const disabled = typeof campaign === typeof undefined || isRequesting || hasChanges;

    return <Button disabled={disabled} isPrimary onClick={()=>console.log("send")}>Send!</Button>
}