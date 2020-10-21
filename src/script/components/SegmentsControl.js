import {BaseControl, SelectControl} from "@wordpress/components";
import {useSegments} from "../hooks/use-config";
import {useAudience, useSegment} from "../hooks/use-store";

const SegmentsControl = ()=> {

    const [audience] = useAudience()
    const segments = useSegments(audience)
    const [state, setState] = useSegment()

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
            value={state}
            onChange={(e)=> setState(e.target.value)}
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