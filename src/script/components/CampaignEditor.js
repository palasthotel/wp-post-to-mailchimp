import { useErrors } from "../hooks/use-store.js";
import ErrorMessage from "./ErrorMessage.js";
import NextStepsInfo from "./NextStepsInfo.js";
import { Step1, Step2, Step3 } from "./Steps.js";

const CampaignEditor = ()=>{

    const errors = useErrors();

    return <>
        { errors.length > 0 && errors.map((e,i)=><ErrorMessage key={i} {...e} />)}
        <Step1 />
        <Step2 />
        <Step3 />

        <NextStepsInfo />
        
    </>
}

export default CampaignEditor;