import {SelectControl, TextControl} from "@wordpress/components";
import {useEffect} from '@wordpress/element'
import {useAudiencesLists} from "../hooks/use-config";
import {useAudience} from "../hooks/use-store";

const AudiencesControl = ()=> {

    const [state, setState] = useAudience()
    const audiences = useAudiencesLists()

    useEffect(()=>{
        if(audiences.length === 1){
            const id = audiences[0].listId;
            if(state != id) setState(id);
        }
    }, [audiences.length])

    if(audiences.length === 1){
        return <TextControl 
            label="Audience"
            value={audiences[0].name}
            readOnly
        />
    }

    const options = [
        {value:"", label: '- Choose audience -'},
        ...(audiences.map(({listId, name})=>({value: listId, label: name})))
    ]

    return <SelectControl
        label="Audience"
        value={state}
        onChange={setState}
        options={options}
    />
}

export default AudiencesControl;