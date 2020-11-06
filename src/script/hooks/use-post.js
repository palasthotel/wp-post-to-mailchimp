
import { useSelect } from "@wordpress/data";

export const usePost = ()=> useSelect( select => select('core/editor').getCurrentPost() );
export const useIsSavingPost = ()=> useSelect( select => select('core/editor').isSavingPost() );
