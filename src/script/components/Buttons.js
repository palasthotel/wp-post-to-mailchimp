import { Button } from "@wordpress/components";
import { useAudience, useIsRequesting, useRecentCampaign, useSegment, useSendTestEmails, useTestEmailAddresses } from "../hooks/use-store";
import { campaignStateIsDraft, campaignStateIsNew, campaignStateIsReady, isCampaign } from "../utils/campaign";
import { validateEmail } from "../utils/email";


export const DeleteButton = ()=>{

    const isRequesting = useIsRequesting();
    const [campaign, setCampaign] = useRecentCampaign();

    if(!isCampaign(campaign)){
        return null;
    }

    return <Button disabled={isRequesting} isDestructive onClick={()=>setCampaign({delete:true})}>Delete</Button>
}

export const SendTestButton = ()=>{

    const isRequesting = useIsRequesting();
    const [campaign] = useRecentCampaign();
    const [emails] = useTestEmailAddresses();
    const sendTest = useSendTestEmails();
    const isCampaignNew = campaignStateIsNew(campaign)
    const isCampaignDraft = campaignStateIsDraft(campaign)

    if(!isCampaign(campaign)){
        return null;
    }

    const validEmails = emails.filter(validateEmail)

    const disabled = isCampaignNew || isCampaignDraft || validEmails.length == 0;

    return <Button 
        disabled={disabled} 
        isSecondary 
        onClick={sendTest}
    >
        Send test
    </Button>
}

export const SendButton = ()=>{

    const isRequesting = useIsRequesting();
    const [campaign] = useRecentCampaign();

    if(!isCampaign(campaign)){
        return null;
    }

    const disabled = typeof campaign === typeof undefined || isRequesting;

    return <Button disabled={disabled} isPrimary onClick={()=>console.log("send")}>Send!</Button>
}