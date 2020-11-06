import { FormTokenField, PanelRow } from "@wordpress/components";
import { useIsSavingPost } from "../hooks/use-post";
import { useTestEmailAddresses } from "../hooks/use-store";
import { validateEmail } from "../utils/email";

const EMailAddressesControl = () => {

    const isSaving = useIsSavingPost();
    const [emails, setEmails] = useTestEmailAddresses();

    const handleChange = (values) => {
        setEmails( values.map( v => {
            return typeof v === typeof "" ? v : v.value;
        }))
    }

    return <PanelRow>
        <FormTokenField 
            label="Email addresses"
            disabled={isSaving}
            value={emails.map(e=>{
                if(validateEmail(e)){
                    return e;
                }
                return {
                    value:e, 
                    status: 'error'
                }
            })}
            onChange={handleChange}
        />
    </PanelRow>
}

export default EMailAddressesControl;