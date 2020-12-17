import apiFetch from "@wordpress/api-fetch";
import { registerStore } from "@wordpress/data";
import { validateEmail } from "../utils/email";

// ---------------------------------------------
// default store state
// ---------------------------------------------
const testEmailAddressesCache = localStorage.getItem("gutenberg-post-to-mailchimp__test_email_addresses") || "[]"
const DEFAULT_STATE = {
    isRequesting: false,
    campaigns: [],
    testEmailAddresses: JSON.parse(testEmailAddressesCache).filter(validateEmail), 
    errors: [],
};

// ---------------------------------------------
// api actions
// ---------------------------------------------
const CAMPAIGNS_FETCH = (post_id)=>({
    type: 'CAMPAIGNS_FETCH',
    path: `/post-to-mailchimp/v1/campaigns/${post_id}`,
});
const CAMPAIGN_TEST = (campaign, email_addresses)=>({
    type: 'CAMPAIGN_TEST',
    path: `/post-to-mailchimp/v1/campaigns/${campaign.post_id}/campaign/${campaign.id}/test`,
    data: {
        email_addresses: email_addresses,
    }
});
const CAMPAIGN_SEND = (post_id, campaign_id)=>({
    type: 'CAMPAIGN_UPDATE',
    path: `/post-to-mailchimp/v1/campaigns/${post_id}/campaign/${campaign_id}/send`,
});

// ---------------------------------------------
// action generators
// ---------------------------------------------
const actionNone = ()=> ({type:'none'})
const actionIsRequesting = (isRequesting) => ({type: 'SET_IS_REQUESTING', isRequesting});
const actionAddError = (error) => ({type: 'ADD_ERROR', error});

// ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------
const actions = {
    // ---------------------------------------------
    // local state
    // ---------------------------------------------
    setIsRequesting: actionIsRequesting,
    setCampaigns: ( campaigns ) => ({ type: 'SET_CAMPAIGNS',campaigns }),
    setTestEmailAddresses: (testEmailAddresses)=>({type: 'SET_TEST_EMAIL_ADDRESSES', testEmailAddresses}),

    // ---------------------------------------------
    // ajax state
    // ---------------------------------------------
    * fetchCampaigns(post_id){
        yield actionIsRequesting(true);
        const campaigns = yield CAMPAIGNS_FETCH(post_id)
        yield {
            type: 'SET_CAMPAIGNS',
            campaigns,
        }
        return actionIsRequesting(false);
    },
    * sendTestMail(campaign, emailAddresses){
        yield actionIsRequesting(true);
        let result = null;
        try{
            result = yield CAMPAIGN_TEST(campaign, emailAddresses);
        } catch(e){
            result = e;
        }
        
        if(typeof result === typeof {} && typeof result.code === typeof ""){
            yield actionAddError(result);
        } else if(typeof result === typeof [] && result.length > 0){
            for(const item of result){
                if(typeof item === typeof {} && typeof item.code === typeof ""){
                    yield actionAddError(item);
                }
            }
        }
        return actionIsRequesting(false);
    },
    * sendCampaign(campaign){
        yield actionIsRequesting(true);
        const result = yield CAMPAIGN_SEND(campaign);
        return actionIsRequesting(false)
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
            case 'SET_IS_REQUESTING':
                return {
                    ...state,
                    isRequesting: action.isRequesting,
                }
            case 'SET_CAMPAIGNS':
                return {
                    ...state,
                    campaigns: action.campaigns,
                }
            case 'SET_TEST_EMAIL_ADDRESSES':
                localStorage.setItem("gutenberg-post-to-mailchimp__test_email_addresses", JSON.stringify(action.testEmailAddresses))
                return {
                    ...state,
                    testEmailAddresses: action.testEmailAddresses
                }
            case 'ADD_ERROR':
                return {
                    ...state,
                    errors:[
                        ...state.errors,
                        action.error,
                    ]
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
        getCampaigns(state, post_id){
            return state.campaigns;
        },
        getTestEmailAddresses(state){
            return state.testEmailAddresses;
        },
        getErrors(state){
            return state.errors;
        },
    },
     // ----------------------------------------------------------------
    //  helps resolving the equivalent selector function
    // ----------------------------------------------------------------
    resolvers: {
        * getCampaigns(post_id){
            if(typeof post_id === typeof undefined) return actionNone();
            yield actionIsRequesting(true);
            const campaigns = yield CAMPAIGNS_FETCH(post_id);
            yield actionIsRequesting(false);
            return actions.setCampaigns(campaigns);
        },
    },
    // ----------------------------------------------------------------
    //  controls will be executed as side effects of generator actions
    // ----------------------------------------------------------------
    controls: {
        CAMPAIGNS_FETCH(action){
            console.debug("action fetch", action)
            return apiFetch({path:action.path});
        },
        CAMPAIGN_TEST(action){
            console.debug("action test", action);
            return apiFetch({path:action.path, data:action.data, method: "POST"})
        },
        CAMPAIGN_SEND(action){
            console.debug("action send");
            return apiFetch({path:action.path, method: "POST"})
        }
    },
})