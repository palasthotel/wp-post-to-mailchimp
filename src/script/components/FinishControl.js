import { useEffect } from "@wordpress/element";
import { CheckboxControl } from "@wordpress/components";
import { useRecentCampaign } from "../hooks/use-store";
import ReadableTimestamp from "./ReadableTimestamp";
import { useIsSavingPost, usePostDate } from "../hooks/use-post";
import { isFutureDate } from "../utils/date";

const FinishControl = ()=>{
    const isSaving = useIsSavingPost();
    const [campaign, changeCampaign] = useRecentCampaign();
    const [postDate] = usePostDate();

    const {
        audience_id,
        segment_id,
        is_ready = false
    } =  campaign

    const schedule = postDate ? Date.parse(postDate) : null;

    useEffect(()=>{
        // if something changed uncheck ready checkbox
        changeCampaign({is_ready: false})
    }, [audience_id, segment_id, schedule])

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
        marginTop: 16,
        padding: 16,
        paddingBottom: 8,
        backgroundColor: is_ready ? "#AED581" :"#ECEFF1"
    }

    return <>

            
            <div style={style}>
                <CheckboxControl 
                    checked={is_ready}
                    disabled={isSaving}
                    label="I'm ready to start this campaign"
                    onChange={handleStartCheckbox}
                />
                {is_ready ? 
                    isFutureDate(postDate) ? 
                        <p>As soon as you plan this campaign will be scheduled to be started at <ReadableTimestamp timestamp={schedule} />.</p> 
                        : 
                        <p>As soon as you publish this campaign will be started.</p>
                    :
                    null
                }
            </div>
            
            

    </>
}

export default FinishControl;