import {SelectControl, TextControl} from "@wordpress/components";
import {useEffect} from '@wordpress/element'
import {useAudiencesLists} from "../hooks/use-config";
import {useRecentCampaign} from "../hooks/use-store";

const AudiencesControl = ()=> {

    const audiences = useAudiencesLists();
    const [campaign, setCampaign] = useRecentCampaign();

    const {
        audience_id: state = "",
    } = campaign

    const setState = (_audience_id)=>{
        setCampaign({audience_id: _audience_id});
    }

    useEffect(()=>{
        if(audiences.length === 1){
            const id = audiences[0].listId;
            if(state != id) setState(id);
        }
    }, [audiences.length, state])

    if(audiences.length === 1){
        const audienceOption = audiences.find(a=>state === a.listId)
        return <TextControl 
            label="Audience"
            value={audienceOption? audienceOption.name:""}
            readOnly
        />
    }

    const options = [
        {value:"", label: '- Choose audience -'},
        ...(audiences.map(({listId, name})=>({value: listId, label: name})))
    ]

    return <SelectControl
        label="Audience"
        value={state || ""}
        onChange={setState}
        options={options}
    />
}

export default AudiencesControl;