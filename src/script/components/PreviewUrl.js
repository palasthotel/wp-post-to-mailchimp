import { Button, PanelRow } from "@wordpress/components";
import {useIsSavingPost} from '../hooks/use-post.js'
import { getHTMLPreviewUrl, getPlaintextPreviewUrl } from "../utils/config.js";

const PreviewUrl = ({plaintext = false, children })=>{
    const isSaving = useIsSavingPost();
    const htmlUrl = getHTMLPreviewUrl();
    const plaintextUrl = getPlaintextPreviewUrl();
    return <PanelRow>
        <Button 
            disabled={isSaving}
            isSecondary
            href={plaintext ? plaintextUrl : htmlUrl} 
            target='_blank'
        >
            {children}
        </Button>
    </PanelRow>
}

export default PreviewUrl;