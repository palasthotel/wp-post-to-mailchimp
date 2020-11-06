import { getDefaultScheduleNextTimestamp } from "../utils/config.js";
import { useRecentCampaign } from "./use-store.js";
import { ceil15Minutes, floor15Minutes } from "../utils/date.js";
import { useEffect } from "@wordpress/element";

export const useSchedule = ()=>{

    const [campaign, changeCampaign] = useRecentCampaign();
    const nextScheduleTimestamp = getDefaultScheduleNextTimestamp();

    const {
        schedule,
    } = campaign    

    const dateState = new Date(schedule);

    const setSchedule = (_date)=>{
        if(_date){
            const minTimestamp = ceil15Minutes((new Date()).getTime() + 1000 * 60 * 30);
            const timestamp = Date.parse(_date);
            const newSchedule = schedule < timestamp ? ceil15Minutes(timestamp) : floor15Minutes(timestamp);

            if( timestamp > minTimestamp ){
                changeCampaign({schedule: newSchedule })
            } else {
                changeCampaign({schedule: minTimestamp })
            }
            return;
        }
        changeCampaign({schedule: nextScheduleTimestamp})
    };

    useEffect(()=>{
        if(typeof schedule === typeof undefined || schedule < nextScheduleTimestamp){
            setSchedule();
        }
    }, [schedule])

    return [
        dateState,
        setSchedule,
    ]
}