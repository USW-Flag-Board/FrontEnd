import { activityActions } from '../slice/activitySlice';
import { getDataAPI } from '../../apis/getDataAPI';

const getAllactivitiesAPI = (url) => {
    return async function(dispatch){
        const response = await getDataAPI(url);
        dispatch(activityActions.getAllActivities(response));
    };
};

const activitiesActions = {
    getAllactivitiesAPI,
};

export default activitiesActions;