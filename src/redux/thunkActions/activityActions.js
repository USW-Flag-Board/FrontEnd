import { activityActions } from '../slice/activitySlice';
import { getAllActivitiesAxios } from '../../apis/activityAPI';

const getAllactivitiesAPI = () => {
    return async function(dispatch){
        const response = await getAllActivitiesAxios();
        dispatch(activityActions.getAllActivities(response));
    };
};

const activitiesActions = {
    getAllactivitiesAPI,
};

export default activitiesActions;