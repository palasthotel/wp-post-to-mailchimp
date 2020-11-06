
import { useDispatch, useSelect } from "@wordpress/data";

export const usePost = ()=> useSelect( select => select('core/editor').getCurrentPost() );
export const useIsSavingPost = ()=> useSelect( select => select('core/editor').isSavingPost() );

export const usePostDate = ()=> {
    const state = useSelect( select => select('core/editor').getEditedPostAttribute('date'))
    const dispatch = useDispatch('core/editor')

    return [
        state,
        (date) => dispatch.editPost({date})
    ]
}