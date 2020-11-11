import { useRecentCampaignCustomized } from "../hooks/use-store";
import { getCustomConfig } from "../utils/config";

const CustomConfigControl = ()=>{

    const [custom, changeCustomAttribute] = useRecentCampaignCustomized();

    return <div>
        {getCustomConfig().map(({key, Element})=>{
            return <Element 
                key={key}
                value={custom[key]}
                onChange={(value)=>{
                    changeCustomAttribute({[key]: value});
                }}
            />
        })}
    </div>
}

export default CustomConfigControl;