import { PanelBody} from "@wordpress/components";
import { DeleteButton } from "./Buttons.js";
import NextStepsInfo from "./NextStepsInfo.js";
import { Step1, Step2, Step3 } from "./Steps.js";

const CampaignEditor = ()=>{

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

export default CampaignEditor;