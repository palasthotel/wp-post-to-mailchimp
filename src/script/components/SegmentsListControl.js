import {SelectControl} from "@wordpress/components";
import {useSegments} from "../hooks/use-config";
import {useAudience, useSegment} from "../hooks/use-store";

const SegmentsListControl = ()=> {

    const [audience] = useAudience()
    const segments = useSegments(audience)
    const [state, setState] = useSegment()


    if(typeof segments !== typeof [] || segments.length === 0){
        return null;
    }

    const options = [
        {value:"", label: '- Choose segment (optional) -'},
        ...(segments.map(({id, name})=>({value: id, label: name})))
    ]

    return <SelectControl
        label="Segments"
        value={state}
        onChange={setState}
        options={options}
    />
}

export default SegmentsListControl;