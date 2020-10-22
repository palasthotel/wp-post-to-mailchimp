
export const useAudiencesLists = ()=> PostToMailchimp.lists;
export const useSegments = (listId) => PostToMailchimp.segments[listId] || []
export const useHTMLPreviewUrl = ()=> PostToMailchimp.preview.html;
export const usePlaintextPreviewUrl = ()=> PostToMailchimp.preview.plaintext;