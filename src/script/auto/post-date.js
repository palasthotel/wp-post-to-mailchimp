import { subscribe, select, dispatch } from '@wordpress/data';
import { ceil15Minutes, is15MinutesStep, round15Minutes } from '../utils/date';
import { showNotice } from '../utils/notice.js';


const isValidDate = (timestamp)=> {
    const now = new Date();
    const nowTimestamp = now.getTime();

    // if it is now or in the past
    if(timestamp <= nowTimestamp) return true;

    // if it is a 15 minutes step
    const minTimestamp = ceil15Minutes(nowTimestamp);
    return timestamp >= minTimestamp && is15MinutesStep(timestamp);    
}

const buildValidDate = (timestamp) => {
    const now = new Date();
    const nowTimestamp = now.getTime();

    // if it needs no schedule it is always valid
    if(timestamp <= nowTimestamp) return new Date(timestamp);

    // schedule is only valid in steps of 15 minutes
    const minTimestamp = ceil15Minutes(nowTimestamp);

    // minimum schedule timestamp is next round 15 minutes
    if(timestamp < minTimestamp) return new Date(minTimestamp);

    // else round to nearest 15 minutes step
    return new Date(round15Minutes(timestamp));
}

// --------------------------------------------
// getter and setter for date
// --------------------------------------------
const getDate = ()=> select('core/editor').getEditedPostAttribute('date');
const setDate = (dateISOString) => dispatch('core/editor').editPost({date:dateISOString})

// ----------------------------------------
// start watching
// ----------------------------------------
let last_date = null;
let self_action = false;
subscribe(()=>{

    const date = getDate();

    if(!date) return;

    if(last_date === date) return;
    last_date = date;

    if(self_action){
        self_action = false;
        return;
    }

    const timestamp = Date.parse(date);
    if(isValidDate(timestamp)) return;

    showNotice("Date was changed to 15 minutes step.")
    

    const validDateObj = buildValidDate(timestamp);

    self_action = true;
    setDate(validDateObj.toISOString());

})