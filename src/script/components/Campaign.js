import { campaignGetAudienceId, campaignGetSegmentId } from '../utils/campaing';
import './campaign.scss';

const Campaign = (props)=>{
    
    const {id, audience_id, segment_id, state} = props;

    return <div className="ptm--campaign">
        {id} - {audience_id} - {segment_id}
    </div>
}

export default Campaign;