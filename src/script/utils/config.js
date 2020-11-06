
//------------------------------------------------------------
// audience and segments
//------------------------------------------------------------
export const getAudiencesLists = ()=> PostToMailchimp.lists;
export const getAudience = (audienceId) => getAudiencesLists().find(({listId})=> listId === audienceId);

export const getSegments = (listId) => PostToMailchimp.segments[listId] || []
export const getSegment = (audienceId,segmentId) => getSegments(audienceId).find(({id})=> id === segmentId)
export const isTag = (segment) => segment && segment.type === "static"
export const isSegment = (segment) => segment && segment.type !== "static"

export const getIsEmptySegmentAllowed = (listId) => PostToMailchimp.audienceIdsWithEmptySegmentsAllowed.includes(listId)

//------------------------------------------------------------
// preview
//------------------------------------------------------------
export const getHTMLPreviewUrl = ()=> PostToMailchimp.preview.html;
export const getPlaintextPreviewUrl = ()=> PostToMailchimp.preview.plaintext;

//------------------------------------------------------------
// schedule
//------------------------------------------------------------
export const getDefaultScheduleTime = ()=> PostToMailchimp.defaultScheduleTime;
export const getDefaultScheduleNextDateTime = ()=>{
    const time = getDefaultScheduleTime();
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