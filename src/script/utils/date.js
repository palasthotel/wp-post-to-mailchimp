
export const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
}

export const isPastDay = (date)=>{
    const today = new Date();
    const hoursPastInSeconds = today.getHours() * 60 * 60 * 1000;
    const minutesPastInSeconds = today.getMinutes() * 60 * 1000;
    const secondsPast = today.getSeconds() * 1000;
    const startOfDay = today.getTime() - (hoursPastInSeconds + minutesPastInSeconds + secondsPast);
    const isPastDay = date.getTime() - startOfDay  <= -1 * (1000 * 5 * 60); // offset of 5 minutes because of calculation problems
    return isPastDay;
}

export const isFutureDate = (date_string, tolerance_in_seconds = 0)=>{
    if(!date_string ) return false;
    const timestamp = Date.parse(date_string);
    const now = new Date();
    return (now.getTime() - tolerance_in_seconds * 1000) < timestamp;
}

export const is15MinutesStep = (timestamp) => {
    return (timestamp / (1000 * 60) % 15) === 0
}

export const ceil15Minutes = (timestamp) => {
    const minutes = timestamp / (1000 * 60);
    return Math.ceil(minutes/15) * 15 * 60 * 1000;
}

export const floor15Minutes = (timestamp) => {
    const minutes = timestamp / (1000 * 60);
    return Math.floor(minutes/15) * 15 * 60 * 1000;
}

export const round15Minutes = (timestamp) => {
    const minutes = timestamp / (1000 * 60);
    return minutes % 15 > 7 ? ceil15Minutes(timestamp) : floor15Minutes(timestamp);
}