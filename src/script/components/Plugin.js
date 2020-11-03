import { PanelBody} from "@wordpress/components";
import { useAudiencesLists } from "../hooks/use-config.js";
import { CreateButton, DeleteButton } from "./Buttons.js";
import NextStepsInfo from "./NextStepsInfo.js";
import { Step1, Step2, Step3 } from "./Steps.js";

const Plugin = ()=>{

    const audiences = useAudiencesLists();

    if(audiences.length < 1){
        return <PanelBody>Please make sure there is at least one Mailchimp.com audience available.</PanelBody>
    }

    return <>

        <Step1 />
        <Step2 />
        <Step3 />
        
        <PanelBody>
            <NextStepsInfo />
            <DeleteButton />
        </PanelBody>

        <PanelBody
            title="History"
            initialOpen={false}
        >
            <p>TODO: list of all campaigns</p>
        </PanelBody>
        
    </>
}

export default Plugin;