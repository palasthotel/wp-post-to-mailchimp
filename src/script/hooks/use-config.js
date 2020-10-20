
export const useAudiencesLists = ()=> PostToMailchimp.lists;
export const useSegments = (listId) => PostToMailchimp.segments[listId] || []