import { Button, PanelRow } from "@wordpress/components";
import { getHTMLPreviewUrl, getPlaintextPreviewUrl } from "../utils/config.js";

const PreviewUrl = ({plaintext = false, children })=>{
    const htmlUrl = getHTMLPreviewUrl();
    const plaintextUrl = getPlaintextPreviewUrl();
    return <PanelRow>
        <Button 
            isSecondary
            href={plaintext ? plaintextUrl : htmlUrl} 
            target='_blank'
        >
            {children}
        </Button>
    </PanelRow>
}

export default PreviewUrl;