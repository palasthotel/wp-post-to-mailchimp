import { __experimentalGetSettings, date } from '@wordpress/date';


// To know if the current timezone is a 12 hour time with look for an "a" in the time format.
// We also make sure this a is not escaped by a "/".
export const is12HourTime = ()=> /a(?!\\)/i.test(
    __experimentalGetSettings().formats.time
         .toLowerCase() // Test only the lower case a
         .replace( /\\\\/g, '' ) // Replace "//" with empty strings
         .split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
);

export const dateFormat = (timestamp) =>{
    const settings = __experimentalGetSettings();
    return date( settings.formats.datetime ,timestamp);
}

const ReadableTimestamp = ({timestamp})=>{
    return <>{dateFormat(timestamp)}</>
}

export default ReadableTimestamp;