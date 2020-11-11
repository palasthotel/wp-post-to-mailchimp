import "../data/store.js";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { getSegments } from "../utils/config.js";
import { STORE_NAME } from "../data/store.js";
import { usePost } from "./use-post.js";
import { validateEmail } from "../utils/email.js";

export const useIsRequesting = ()=>{
    const state = useSelect(select=>select(STORE_NAME).isRequesting(), []);
    return state;
}

export const useCancelCampaign = ()=>{
    const dispatch = useDispatch('core/editor')
    const [_, changeCampaign] = useRecentCampaign();
    return ()=>{
        dispatch.editPost({
            status: "draft"
        });
        changeCampaign({cancel: true});
        dispatch.savePost();
    }
}

export const useRecentCampaign = ()=>{
    const value = useSelect(select => select('core/editor').getEditedPostAttribute("recent_campaign"))
    const dispatch = useDispatch('core/editor')
    return [
        value || {},
        (changeSet)=>{
            dispatch.editPost({recent_campaign: {
                ...value,
                ...changeSet,
            }})
        },
    ]
}

export const useRecentCampaignCustomized = ()=>{
    const [campaign, changeCampaign] = useRecentCampaign();
    return [
        campaign.custom || {},
        (changeSet)=>{
            changeCampaign({
                custom:{
                    ...campaign.custom,
                    ...changeSet
                }
            })
        },
    ]
}

export const useAudience = ()=>{
    const [campaign, setValue] = useRecentCampaign();
    return [
        campaign.audience_id,
        (id) => setValue({audience_id:id})
    ];
}

export const useSegment = ()=>{
    const [audience_id] = useAudience();
    const [campaign, setValue] = useRecentCampaign()
    const segments = getSegments(audience_id);
    const state = campaign.segment_id;

    useEffect(()=>{
        if( segments.find(s=>s.id+"" === state+"") ) return;
        const timeout = setTimeout(()=>{
            setValue({segment_id:""})
        }, 600)
        return ()=> clearTimeout(timeout)
    }, [audience_id])

    return [
        state,
        (id) =>setValue({segment_id:id})
    ];
}

export const useCampaigns = () => {
    const {id} = usePost();
    const campaigns = useSelect(select=>select(STORE_NAME).getCampaigns(id))
    const dispatch = useDispatch(STORE_NAME)
    return [
        campaigns,
        () => {
            dispatch.fetchCampaigns(id)
        },
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