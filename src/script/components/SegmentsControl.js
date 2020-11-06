import {BaseControl, TextControl} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { getIsEmptySegmentAllowed, getSegments, isSegment, isTag} from "../utils/config.js";
import {useRecentCampaign} from "../hooks/use-store.js";
import { useIsSavingPost } from "../hooks/use-post.js";

const SegmentsControl = ()=> {
    const isSaving = useIsSavingPost();
    const [campaign = {}, setCampaign ] = useRecentCampaign();
    const { audience_id:audience = "", segment_id:state = "" } = campaign;
    const segments = getSegments(audience);
    const isEmptySegmentAllowed = getIsEmptySegmentAllowed(audience);

    const setState = (_segment_id) => {
        if(isSaving) return;
        setCampaign({
            ...campaign,
            segment_id: _segment_id,
        })
    }

    useEffect(()=>{
        if(segments.length === 1 && !isEmptySegmentAllowed){
            const id = segments[0].id;
            if(state != id) setState(id);
        } else if(segments.length === 0){
            if(state !== "") setState("");
        }
    }, [segments.length, state])

    if(typeof segments !== typeof [] || segments.length === 0){
        return null;
    }

    if(segments.length === 1 && !isEmptySegmentAllowed){
        return <TextControl 
            label={isTag(segments[0]) ? "Tag": "Segment"}
            value={segments[0].name}
            readOnly
        />
    }

    const _segments = segments.filter(isSegment);
    const _tags = segments.filter(isTag);

    return <BaseControl
        id="mailchimp-segment"
        label="Segment or tag"
    >
        <select 
            id="mailchimp-segment" 
            style={{width:'100%'}}
            value={state || ""}
            onChange={(e)=> setState(parseInt(e.target.value))}
            disabled={isSaving}
        >
            { isEmptySegmentAllowed ? <option value=''>-</option> : null }
            <optgroup label="Segments">
                {_segments.map(({id, name})=><option key={id} value={id}>{name}</option>)}
            </optgroup>
            <optgroup label="Tags">
                {_tags.map(({id, name})=><option key={id} value={id}>{name}</option>)}
            </optgroup>
        </select>
    </BaseControl>
}

export default SegmentsControl;