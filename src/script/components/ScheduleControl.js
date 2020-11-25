import { Button, DateTimePicker, Dropdown, PanelRow } from "@wordpress/components";
import ReadableTimestamp from "./ReadableTimestamp";
import { useIsSavingPost } from "../hooks/use-post";
import { isFutureDate, isPastDay, is12HourTime } from "../utils/date";
import { useSchedule } from "../hooks/use-schedule";

const ScheduleControl = ()=>{

    const isSaving = useIsSavingPost();
    const [scheduleDate, setScheduleDate] = useSchedule();

    return <PanelRow className="edit-post-post-schedule">
        <span>Schedule</span>
        <Dropdown
            position="bottom left"
            renderToggle={({isOpen, onToggle})=>
                <Button isTertiary onClick={onToggle}>
                    {null === scheduleDate || !isFutureDate(scheduleDate, 60) ? 
                        "Immediately"
                        :  
                        <ReadableTimestamp timestamp={Date.parse(scheduleDate)} />
                    }
                </Button>
            }
            contentClassName="edit-post-post-schedule__dialog"
            renderContent={()=> 
                <div>
                    <DateTimePicker 
                        currentDate={scheduleDate}
                        onChange={(_date) => {
                            if(isSaving) return;
                            setScheduleDate(_date);
                        }}
                        is12Hour={is12HourTime()}
                        isInvalidDate={(date)=> isSaving || isPastDay(date)}
                    />
                </div>
            }
        />
    </PanelRow>
}

export default ScheduleControl