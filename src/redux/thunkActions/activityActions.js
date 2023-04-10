import { activityActions } from '../slice/activitySlice';
import { getDataAxios } from '../../apis/getDataAPI';

const getAllactivitiesAPI = (url) => {
    return async function(dispatch){
        const response = await getDataAxios(url);
        dispatch(activityActions.getAllActivities(response));
    };
};

const activitiesActions = {
    getAllactivitiesAPI,
};

export default activitiesActions;