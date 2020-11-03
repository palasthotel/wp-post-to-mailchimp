import { useEffect } from "@wordpress/element";
import { CheckboxControl, DateTimePicker, PanelRow, ToggleControl } from "@wordpress/components";
import { __experimentalGetSettings, date } from '@wordpress/date';
import { useRecentCampaign } from "../hooks/use-store";

const Schedule = ()=>{
    const [campaign, changeCampaign] = useRecentCampaign()

    const {
        schedule = (new Date()).getTime(),
    } = campaign

    const date = new Date(schedule)

    const setDate = (_date)=>{
        if(_date){
            changeCampaign({schedule: Date.parse(_date)})
        } else {
            changeCampaign({schedule: (new Date()).getTime()})
        }
    }

    const settings = __experimentalGetSettings();

    // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
   // We also make sure this a is not escaped by a "/".
    const is12HourTime = /a(?!\\)/i.test(
        settings.formats.time
            .toLowerCase() // Test only the lower case a
            .replace( /\\\\/g, '' ) // Replace "//" with empty strings
            .split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
    );

    return <DateTimePicker 
        currentDate={date}
        onChange={setDate}
        is12Hour={is12HourTime}
    />
}

const FinishControl = ()=>{
    const [campaign, changeCampaign] = useRecentCampaign()

    const {
        schedule,
        audience_id,
        segment_id,
        isReady = false
    } =  campaign

    const isSchedule = typeof schedule !== typeof undefined && null !== schedule;

    useEffect(()=>{
        // if something changed uncheck ready checkbox
        changeCampaign({isReady: false})
    }, [audience_id, segment_id, schedule])

    const handleScheduleCheckbox = (_isSchedule) => {
        if(_isSchedule){
            changeCampaign({schedule: (new Date()).getTime()})
        } else {
            changeCampaign({schedule: undefined})
        }
    }
    const handleStartCheckbox = (isChecked)=>{
        changeCampaign({
            isReady: isChecked
        })
    }

    const style = {
        marginLeft: -16,
        marginRight: -16,
        marginBottom: -16,
        padding: 16,
        paddingBottom: 8,
        backgroundColor: isReady ? "#AED581" :"#ECEFF1"
    }

    const settings = __experimentalGetSettings();
    const schedule_date_string = schedule ? date( settings.formats.datetime ,schedule) :""

    return <>
        
            <ToggleControl 
                checked={isSchedule}
                label="Schedule campaign"
                onChange={handleScheduleCheckbox}
            />

            {isSchedule ? <><hr/><Schedule /></> : null}   
            
            <div style={style}>
                <CheckboxControl 
                    checked={isReady}
                    label="I'm ready to start this campaign"
                    onChange={handleStartCheckbox}
                />
                {isReady ? 
                    isSchedule ? 
                        <p>As soon as you save this campaign will be scheduled to be started at {schedule_date_string}.</p> 
                        : 
                        <p>As soon as you save this campaign will be started.</p>
                    :
                    null
                }
            </div>
            
            

    </>
}

export default FinishControl;