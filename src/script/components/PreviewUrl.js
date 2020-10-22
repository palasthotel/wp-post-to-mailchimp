import { Button, PanelRow } from "@wordpress/components";
import { useHTMLPreviewUrl, usePlaintextPreviewUrl } from "../hooks/use-config";

const PreviewUrl = ({plaintext = false, children })=>{
    const htmlUrl = useHTMLPreviewUrl();
    const plaintextUrl = usePlaintextPreviewUrl();
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