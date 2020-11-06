import { useEffect, useState } from "@wordpress/element";
import { CheckboxControl, DateTimePicker, ToggleControl } from "@wordpress/components";
import { useRecentCampaign } from "../hooks/use-store";
import { getDefaultScheduleNextTimestamp } from "../utils/config.js";
import ReadableTimestamp, { is12HourTime } from "./ReadableTimestamp";
import { useIsSavingPost } from "../hooks/use-post";
import { isPastDay } from "../utils/date";
import { useSchedule } from "../hooks/use-schedule";

const Schedule = ()=>{
    const isSaving = useIsSavingPost();
    const [dateState, setSchedule] = useSchedule();
    const [_, setRendered] = useState(0);

    return <DateTimePicker 
        currentDate={dateState}
        onChange={(_date) => {
            if(isSaving) return;
            setSchedule(_date);
            setRendered( value => ++value ); // force re-render to show date restrictions from useSchedule
        }}
        is12Hour={is12HourTime()}
        isInvalidDate={(date)=> isSaving || isPastDay(date)}
    />
}

const FinishControl = ()=>{
    const isSaving = useIsSavingPost();
    const [campaign, changeCampaign] = useRecentCampaign()
    const nextScheduleTimestamp = getDefaultScheduleNextTimestamp();

    const {
        schedule,
        audience_id,
        segment_id,
        is_ready = false
    } =  campaign

    const isSchedule = typeof schedule !== typeof undefined && null !== schedule;

    useEffect(()=>{
        // if something changed uncheck ready checkbox
        changeCampaign({is_ready: false})
    }, [audience_id, segment_id, schedule])

    const handleScheduleCheckbox = (_isSchedule) => {
        if(isSaving) return;
        if(_isSchedule){
            changeCampaign({schedule: nextScheduleTimestamp})
        } else {
            changeCampaign({schedule: undefined})
        }
    }
    const handleStartCheckbox = (isChecked)=>{
        if(isSaving) return;
        changeCampaign({
            is_ready: isChecked
        })
    }

    const style = {
        marginLeft: -16,
        marginRight: -16,
        marginBottom: -16,
        padding: 16,
        paddingBottom: 8,
        backgroundColor: is_ready ? "#AED581" :"#ECEFF1"
    }

    return <>
        
            <ToggleControl
                checked={isSchedule}
                label="Schedule campaign"
                onChange={handleScheduleCheckbox}
            />

            {isSchedule ? <><hr/><Schedule /></> : null}   
            
            <div style={style}>
                <CheckboxControl 
                    checked={is_ready}
                    disabled={isSaving}
                    label="I'm ready to start this campaign"
                    onChange={handleStartCheckbox}
                />
                {is_ready ? 
                    isSchedule ? 
                        <p>As soon as you save this campaign will be scheduled to be started at <ReadableTimestamp timestamp={schedule} />.</p> 
                        : 
                        <p>As soon as you save this campaign will be started.</p>
                    :
                    null
                }
            </div>
            
            

    </>
}

export default FinishControl;