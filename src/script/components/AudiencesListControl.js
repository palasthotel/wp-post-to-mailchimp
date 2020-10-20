import {SelectControl} from "@wordpress/components";
import {useAudiencesLists} from "../hooks/use-config";
import {useAudience} from "../hooks/use-store";

const AudiencesListControl = ()=> {

    const [state, setState] = useAudience()
    const audiences = useAudiencesLists()

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

export default AudiencesListControl;