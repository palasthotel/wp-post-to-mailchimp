import { dateFormat } from "../utils/date";


const ReadableTimestamp = ({timestamp})=>{
    return <>{dateFormat(timestamp)}</>
}

export default ReadableTimestamp;