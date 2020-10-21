import { useSelect } from "@wordpress/data"

export const usePost = ()=> useSelect(select => select('core/editor').getCurrentPost());