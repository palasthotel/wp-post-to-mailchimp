import { getDefaultScheduleNextTimestamp } from "../utils/config.js";
import { useRecentCampaign } from "./use-store.js";
import { ceil15Minutes, floor15Minutes, isFutureDate } from "../utils/date.js";
import { useEffect } from "@wordpress/element";
import { dispatch, useDispatch } from "@wordpress/data";
import { usePostDate } from "./use-post.js";



export const useUnschedule = ()=>{
    const dispatch = useDispatch('core/editor')
    const [_, changeCampaign] = useRecentCampaign();
    return ()=>{
        dispatch.editPost({
            status: "draft"
        });
        changeCampaign({unschedule: true});
        dispatch.savePost();
    }
}

export const useSchedule = ()=>{
    const [value, setValue] = usePostDate()
    return [
        value,
        (date) => {
            if(!date){
                // null is used for NOW
                setValue(date);
                return;
            }
            const isFuture = isFutureDate(date);
            if(!isFuture){
                // schedule can min be set to now
                setValue((new Date(ceil15Minutes(Date.now()))).toISOString());
                return;
            }
            setValue(date);
        }
    ];

    const [campaign] = useRecentCampaign();
    const [postDate, setPostDate] = usePostDate();
    const nextScheduleTimestamp = getDefaultScheduleNextTimestamp();

    const {
        schedule,
    } = campaign    

    const dateState = new Date(schedule);

    const setTimestamp = (timestsamp)=>{
        dispatch('core/editor').editPost({
            date: (new Date(timestsamp)).toISOString(),
            status: "future",
        })
    }

    const setSchedule = (_date)=>{
        if(_date){
            const minTimestamp = ceil15Minutes((new Date()).getTime() + 1000 * 60 * 30);
            const timestamp = Date.parse(_date);
            const newSchedule = schedule < timestamp ? ceil15Minutes(timestamp) : floor15Minutes(timestamp);

            if( timestamp > minTimestamp ){
                setTimestamp( newSchedule )
            } else {
                setTimestamp( minTimestamp )
            }
            return;
        }
        setTimestamp( nextScheduleTimestamp )
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