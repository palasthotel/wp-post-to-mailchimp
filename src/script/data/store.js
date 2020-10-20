import apiFetch from "@wordpress/api-fetch";
import { registerStore } from "@wordpress/data";

// ---------------------------------------------
// default store state
// ---------------------------------------------
const DEFAULT_STATE = {
    audience: localStorage.getItem("gutenberg-post-to-mailchimp__audience") || "",
    segment: localStorage.getItem("gutenberg-post-to-mailchimp__segment") || "",
    campaigns: [],
};

// ---------------------------------------------
// api actions
// ---------------------------------------------
const CAMPAIGNS_FETCH = (post_id)=>({
    type: 'CAMPAIGNS_FETCH',
    path: `/post-to-mailchimp/v1/campaigns/${post_id}`,
});
const CAMPAIGN_ADD = (campaign)=>({
    type: 'CAMPAIGN_ADD',
    path: `/post-to-mailchimp/v1/campaigns`,
    data: campaign
})
const CAMPAIGN_UPDATE = (campaign)=>({
    type: 'CAMPAIGN_UPDATE',
    path: `/post-to-mailchimp/v1/campaigns`,
    data: campaign
})

// ---------------------------------------------
// local actions
// ---------------------------------------------
const actions = {
    setAudience( id ) {
        return {
            type: 'SET_AUDIENCE',
            id,
        };
    },
    setSegment( id ) {
        return {
            type: 'SET_SEGMENT',
            id,
        };
    },
    setCampaigns( campaigns ){
        return {
            type: 'SET_CAMPAIGNS',
            campaigns,
        }
    },
    * addCampaign( campaign ){
        const result = yield CAMPAIGN_ADD(campaign)
        console.log(result)
        return {
            type: 'ADD_CAMPAIGN',
            campaign: result
        }

    },
    * updateCampaign( campaign ){
        const result = yield CAMPAIGN_UPDATE(campaign)
        console.log(result)
        return {
            type: 'UPDATE_CAMPAIGN',
            campaign: result
        }

    },
    * reloadCampaigns(post_id){
        const campaigns = yield CAMPAIGNS_FETCH(post_id)
        return {
            type: 'SET_CAMPAIGNS',
            campaigns,
        }
    },
}

// ------------------------------------------------------
// register our custom store
// ------------------------------------------------------
export const STORE_NAME = 'post-to-mailchimp';
registerStore( STORE_NAME, {
    // ------------------------------------------------------
    // reduce actions to new state
    // ------------------------------------------------------
    reducer( state = DEFAULT_STATE, action  ) {
        switch ( action.type ) {
            case 'SET_AUDIENCE':
                localStorage.setItem("gutenberg-post-to-mailchimp__audience",action.id)
                return {
                    ...state,
                    audience: action.id,
                };

            case 'SET_SEGMENT':
                localStorage.setItem("gutenberg-post-to-mailchimp__segment",action.id)
                return {
                    ...state,
                    segment: action.id,
                };
            case 'SET_CAMPAIGNS':
                return {
                    ...state,
                    campaigns: action.campaigns,
                }
            case 'ADD_CAMPAIGN':                
                return {
                    ...state,
                    campaigns: [
                        action.campaign,
                        ...state.campaigns
                    ]
                }
            case 'UPDATE_CAMPAIGN':                
                return {
                    ...state,
                    campaigns: state.campaigns.map(c=> c.campaign_id === action.campaign.campaign_id ? action.campaign: c)
                }
        }
        return state;
    },
    // ------------------------------------------------------
    // public actions that can be used with dispatch
    // ------------------------------------------------------
    actions,

    // ------------------------------------------------------
    // selectors that can be used with select
    // ------------------------------------------------------
    selectors: {
        getAudience(state){
            return state.audience;
        },
        getSegment(state){
            return state.segment;
        },
        getCampaigns(state, post_id){
            return state.campaigns;
        },
    },
     // ----------------------------------------------------------------
    //  helps resolving the equivalent selector function
    // ----------------------------------------------------------------
    resolvers: {
        * getCampaigns(post_id){
            if(typeof post_id === typeof undefined) return {
                type: "none",
            };
            const campaigns = yield CAMPAIGNS_FETCH(post_id);
            return actions.setCampaigns(campaigns);
        },
    },
    // ----------------------------------------------------------------
    //  controls will be executed as side effects of generator actions
    // ----------------------------------------------------------------
    controls: {
        CAMPAIGNS_FETCH(action){
            console.log("action fetch", action)
            return apiFetch({path:action.path});
        },
        CAMPAIGN_ADD(action){
            console.log("action add", action)
            return apiFetch({path:action.path, data:action.data, method: "POST"})
        },
        CAMPAIGN_UPDATE(action){
            console.log("action update", action)
            return apiFetch({path:action.path, data:action.data, method: "PUT"})
        },
    },
})