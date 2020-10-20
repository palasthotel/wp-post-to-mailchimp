import "../data/store.js";
import {useDispatch, useSelect} from "@wordpress/data";
import {useEffect} from "@wordpress/element";
import {useSegments} from "./use-config";
import { STORE_NAME } from "../data/store.js";


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

export const useCampaigns = (postId) => {
    const campaigns = useSelect(select=>select(STORE_NAME).getCampaigns(postId))
    const dispatch = useDispatch(STORE_NAME)
    return [
        campaigns,
        (campaign) => {
            console.log("update campaign", campaign)
            dispatch.updateCampaign(campaign)
        },
        (campaign) => {
            console.log("add campaign", campaign)
            dispatch.addCampaign(campaign)
        }
    ];
}

