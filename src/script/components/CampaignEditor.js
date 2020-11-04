import { PanelBody} from "@wordpress/components";
import NextStepsInfo from "./NextStepsInfo.js";
import { Step1, Step2, Step3 } from "./Steps.js";

const CampaignEditor = ()=>{

    return <>

        <Step1 />
        <Step2 />
        <Step3 />

        <NextStepsInfo />
        
    </>
}

export default CampaignEditor;