import apiFetch from "@wordpress/api-fetch";
import { registerStore } from "@wordpress/data";
import { validateEmail } from "../utils/email";

// ---------------------------------------------
// default store state
// ---------------------------------------------
// TODO: collect default from settings?
const testEmailAddressesCache = localStorage.getItem("gutenberg-post-to-mailchimp__test_email_addresses") || "[]"
const DEFAULT_STATE = {
    isRequesting: false,
    audience: localStorage.getItem("gutenberg-post-to-mailchimp__audience") || "",
    segment: localStorage.getItem("gutenberg-post-to-mailchimp__segment") || "",
    campaigns: [],
    testEmailAddresses: JSON.parse(testEmailAddressesCache).filter(validateEmail), 
};

// ---------------------------------------------
// api actions
// ---------------------------------------------
const CAMPAIGN_FETCH = (post_id)=>({
    type: 'CAMPAIGNS_FETCH',
    path: `/post-to-mailchimp/v1/campaigns/${post_id}?recent=true`,
});
const CAMPAIGNS_FETCH = (post_id)=>({
    type: 'CAMPAIGNS_FETCH',
    path: `/post-to-mailchimp/v1/campaigns/${post_id}`,
});
const CAMPAIGN_ADD = (campaign)=>({
    type: 'CAMPAIGN_ADD',
    path: `/post-to-mailchimp/v1/campaigns/${campaign.post_id}/campaign`,
    data: campaign
})
const CAMPAIGN_UPDATE = (campaign)=>({
    type: 'CAMPAIGN_UPDATE',
    path: `/post-to-mailchimp/v1/campaigns/${campaign.post_id}/campaign`,
    data: campaign
})
const CAMPAIGN_DELETE = (campaign)=>({
    type: 'CAMPAIGN_DELETE',
    path: `/post-to-mailchimp/v1/campaigns/${campaign.post_id}/campaign/${campaign.id}`,
})
const CAMPAIGN_TEST = (campaign, email_addresses)=>({
    type: 'CAMPAIGN_UPDATE',
    path: `/post-to-mailchimp/v1/campaigns/${campaign.post_id}/campaign/${campaign.id}/test`,
    data: {
        email_addresses: email_addresses,
    }
})
const CAMPAIGN_SEND = (post_id, campaign_id)=>({
    type: 'CAMPAIGN_UPDATE',
    path: `/post-to-mailchimp/v1/campaigns/${post_id}/campaign/${campaign_id}/send`,
    data: {
        email_addresses: email_addresses,
    }
})

// ---------------------------------------------
// action generators
// ---------------------------------------------
const actionNone = ()=> ({type:'none'})
const actionIsRequesting = (isRequesting) => ({type: 'SET_IS_REQUESTING', isRequesting})
const actionSetRecentCampaign = (campaign) => ({ type: 'SET_RECENT_CAMPAIGN', campaign })

// ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------
const actions = {
    // ---------------------------------------------
    // local state
    // ---------------------------------------------
    setIsRequesting: actionIsRequesting,
    setAudience: ( id )=>({ type: 'SET_AUDIENCE', id }),
    setSegment: ( id ) =>({ type: 'SET_SEGMENT', id }),
    setCampaigns: ( campaigns ) => ({ type: 'SET_CAMPAIGNS',campaigns }),
    setRecentCampaign: actionSetRecentCampaign,
    setTestEmailAddresses: (testEmailAddresses)=>({type: 'SET_TEST_EMAIL_ADDRESSES', testEmailAddresses}),

    // ---------------------------------------------
    // ajax state
    // ---------------------------------------------
    * addCampaign( campaign ){
        yield actionIsRequesting(true);
        const result = yield CAMPAIGN_ADD(campaign);
        yield {
            type: 'ADD_CAMPAIGN',
            campaign: result
        }
        yield actionSetRecentCampaign(result);
        return actionIsRequesting(false);
    },
    * updateCampaign( campaign ){
        yield actionIsRequesting(true);
        const result = yield CAMPAIGN_UPDATE(campaign)
        yield {
            type: 'UPDATE_CAMPAIGN',
            campaign: result
        }
        return yield actionIsRequesting(false);
    },
    * deleteCampaign( campaign ){
        yield actionIsRequesting(true);
        const success = yield CAMPAIGN_DELETE(campaign);
        if(success) yield actionSetRecentCampaign(undefined);
        return actionIsRequesting(false);
    },
    * fetchCampaigns(post_id){
        yield actionIsRequesting(true);
        const campaigns = yield CAMPAIGNS_FETCH(post_id)
        yield {
            type: 'SET_CAMPAIGNS',
            campaigns,
        }
        return actionIsRequesting(false);
    },
    * fetchRecentCampaign(post_id){
        yield actionIsRequesting(true);
        const campaign = yield CAMPAIGN_FETCH(post_id)
        yield actionSetRecentCampaign(campaign)
        return actionIsRequesting(true);
    },
    * sendTestMail(campaign, emailAddresses){
        yield actionIsRequesting(true);
        const result = yield CAMPAIGN_TEST(campaign, emailAddresses)
        console.log(result);
        return actionIsRequesting(false);
    }
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
            case 'SET_IS_REQUESTING':
                return {
                    ...state,
                    isRequesting: action.isRequesting,
                }
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
            case 'SET_RECENT_CAMPAIGN':
                return {
                    ...state,
                    recentCampaign: action.campaign
                }
            case 'SET_TEST_EMAIL_ADDRESSES':
                localStorage.setItem("gutenberg-post-to-mailchimp__test_email_addresses", JSON.stringify(action.testEmailAddresses))
                return {
                    ...state,
                    testEmailAddresses: action.testEmailAddresses
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
        isRequesting(state){
            return state.isRequesting;
        },
        getAudience(state){
            return state.audience;
        },
        getSegment(state){
            return state.segment;
        },
        getCampaigns(state, post_id){
            return state.campaigns;
        },
        getRecentCampaign(state, post_id){
            return state.recentCampaign;
        },
        getTestEmailAddresses(state){
            return state.testEmailAddresses;
        },
    },
     // ----------------------------------------------------------------
    //  helps resolving the equivalent selector function
    // ----------------------------------------------------------------
    resolvers: {
        * getCampaigns(post_id){
            if(typeof post_id === typeof undefined) return actionNone();
            yield actionIsRequesting(true)
            const campaigns = yield CAMPAIGNS_FETCH(post_id);
            yield actionIsRequesting(false)
            return actions.setCampaigns(campaigns);
        },
        * getRecentCampaign(post_id){
            if(typeof post_id === typeof undefined) return actionNone();
            yield actionIsRequesting(true)
            const campaign = yield CAMPAIGN_FETCH(post_id);
            yield actionIsRequesting(false)
            if(typeof campaign.id !== typeof 1) return actionNone();
            return actions.setRecentCampaign(campaign)
        }
    },
    // ----------------------------------------------------------------
    //  controls will be executed as side effects of generator actions
    // ----------------------------------------------------------------
    controls: {
        CAMPAIGN_FETCH(action){
            console.debug("action fetch recent", action)
            return apiFetch({path:action.path})
        },
        CAMPAIGNS_FETCH(action){
            console.debug("action fetch", action)
            return apiFetch({path:action.path});
        },
        CAMPAIGN_ADD(action){
            console.debug("action add", action)
            return apiFetch({path:action.path, data:action.data, method: "POST"})
        },
        CAMPAIGN_UPDATE(action){
            console.debug("action update", action)
            return apiFetch({path:action.path, data:action.data, method: "PUT"})
        },
        CAMPAIGN_DELETE(action){
            console.debug("action delete", action)
            return apiFetch({path:action.path, method: "DELETE"})
        },
        CAMPAIGN_TEST(action){
            console.debug("action test", action);
            return apiFetch({path:action.path, data:action.data, method: "POST"})
        }
    },
})