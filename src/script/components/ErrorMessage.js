
import './ErrorMessage.scss'

const dataKeys = ["title", "detail"];

const ErrorMessage = ({message, code, data = null })=>{

    if(!data || Object.keys(data).length === 0) return null;

    let additional = null;
    if(data && Object.keys(data).length){
        if(
            data.title && data.detail
        ){
            additional = <div key={Math.random()*10000} className="ptm-error__detail" >
                <strong>{data.title}</strong>
                <br/>
                {data.detail}
            </div>
        } else {
            additional = [];
            for(const key in data){
                if(!dataKeys.includes(key)) continue;
                additional.push(<div key={key} className="ptm-error__detail"><strong>{key}:</strong> {data[key]}</div>)
            }
        }
    }

    return <div className="ptm-error">
        <div className="ptm-error__message">{message}</div>
        {additional}
    </div>
}

export default ErrorMessage;