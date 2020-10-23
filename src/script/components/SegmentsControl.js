import {BaseControl} from "@wordpress/components";
import {useSegments} from "../hooks/use-config";
import {useRecentCampaign} from "../hooks/use-store";

const SegmentsControl = ()=> {

    const [campaign = {}, setCampaign ] = useRecentCampaign();
    const { audience_id:audience = "", segment_id:state = "" } = campaign;
    const segments = useSegments(audience);

    const setState = (_segment_id) => {
        setCampaign({
            ...campaign,
            segment_id: _segment_id,
        })
    }

    if(typeof segments !== typeof [] || segments.length === 0){
        return null;
    }

    const _segments = segments.filter(({type})=>type !== "static");
    const _tags = segments.filter(({type})=>type === "static");

    return <BaseControl
        id="mailchimp-segment"
        label="Segment or tag"
    >
        <select 
            id="mailchimp-segment" 
            style={{width:'100%'}}
            value={state || ""}
            onChange={(e)=> setState(parseInt(e.target.value))}
        >
            <option value=''>-</option>
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