import "../data/store.js";
import {useDispatch, useSelect} from "@wordpress/data";
import {useEffect} from "@wordpress/element";
import {useSegments} from "./use-config";
import { STORE_NAME } from "../data/store.js";
import { usePost } from "./use-post.js";
import { validateEmail } from "../utils/email.js";

export const useIsRequesting = ()=>{
    const state = useSelect(select=>select(STORE_NAME).isRequesting(), []);
    return state;
}

export const useAudience = ()=>{
    const state = useSelect(select=>select(STORE_NAME).getAudience(), []);
    const dispatch = useDispatch(STORE_NAME);
    return [
        state,
        (id) =>{
            dispatch.setAudience(id)
        }
    ];
}

export const useSegment = ()=>{
    const [audienceListId] = useAudience();
    const segments = useSegments(audienceListId);
    const state = useSelect(select=>select(STORE_NAME).getSegment(), []);
    const dispatch = useDispatch(STORE_NAME);

    useEffect(()=>{
        if( segments.find(s=>s.id+"" === state+"") ) return;
        const timeout = setTimeout(()=>{
            dispatch.setSegment("")
        }, 600)
        return ()=> clearTimeout(timeout)
    }, [audienceListId])

    return [
        state,
        (id) =>{
            dispatch.setSegment(id)
        }
    ];
}

export const useRecentCampaign = () => {
    const {id} = usePost();
    const campaign = useSelect(select=>select(STORE_NAME).getRecentCampaign(id));
    const isRequesting = useIsRequesting();
    const dispatch = useDispatch(STORE_NAME);
    return [
        campaign,
        (campaign) => {
            dispatch.updateCampaign(campaign)
        },
        (new_campaign) => {
            if(isRequesting){
                console.error("Wait for running requst to be finished")
                return;
            }
            if(typeof campaign !== typeof undefined){
                console.error("Can only add new campaign if there is no recent one for this post.", campaign)
                return;
            }
            dispatch.addCampaign({
                post_id: id,
                ...new_campaign,
            })
        },
        ()=>{
            dispatch.deleteCampaign(campaign);
        },
    ];
}

export const useRecentCampaignHasChanges = ()=>{
    const Post = usePost()
    const [campaign] = useRecentCampaign(Post.id)
    const [audience] = useAudience();
    const [segment] = useSegment();

    if(typeof campaign === typeof undefined) return false;

    return typeof campaign !== typeof undefined &&
        (campaign.audience_id !== audience || campaign.segment_id !== parseInt(segment));
}

export const useCampaigns = () => {
    const {id} = usePost();
    const campaigns = useSelect(select=>select(STORE_NAME).getCampaigns(id))
    const dispatch = useDispatch(STORE_NAME)
    return [
        campaigns,
        (campaign) => {
            dispatch.updateCampaign(campaign)
        },
        (campaign) => {
            dispatch.addCampaign(campaign)
        }
    ];
}

export const useTestEmailAddresses = ()=>{
    const emails = useSelect(select => select(STORE_NAME).getTestEmailAddresses())
    const dispatch = useDispatch(STORE_NAME)
    return [
        emails,
        (_emails)=>{
            dispatch.setTestEmailAddresses(_emails);
        }
    ]
}

export const useValidTestEmailAddresses = ()=>{
    return useSelect(select => select(STORE_NAME).getTestEmailAddresses()).filter(validateEmail)
}

export const useSendTestEmails = ()=>{
    const emails = useValidTestEmailAddresses();
    const [campaign] = useRecentCampaign();
    const dispatch = useDispatch(STORE_NAME);

    return ()=>{
        if(typeof campaign !== typeof undefined && emails.length > 0){
            dispatch.sendTestMail(campaign, emails)
        }
    }
}