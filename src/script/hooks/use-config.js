
export const useAudiencesLists = ()=> PostToMailchimp.lists;
export const useSegments = (listId) => PostToMailchimp.segments[listId] || []
export const useIsEmptySegmentAllowed = (listId) => PostToMailchimp.audienceIdsWithEmptySegmentsAllowed.includes(listId)
export const useHTMLPreviewUrl = ()=> PostToMailchimp.preview.html;
export const usePlaintextPreviewUrl = ()=> PostToMailchimp.preview.plaintext;
export const useDefaultScheduleTime = ()=> PostToMailchimp.defaultScheduleTime;
export const useDefaultScheduleNextDateTime = ()=>{
    const time = useDefaultScheduleTime();
    const date = new Date();
    if(time === "") return date;
    const parts = time.split(":");
    if(parts.length !== 2) return date;
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    if(hours < 0 || hours > 23 || minutes < 0 || minutes > 60) return date;
    date.setDate(date.getDate()+1)
    date.setHours(hours, minutes);
    return date;
}