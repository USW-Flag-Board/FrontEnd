import { activityActions } from '../slice/activitySlice';
import { GetAllFlagHistory } from '../../apis/activityAPI';

const getAllactivitiesAPI = () => {
    return async function(dispatch){
        const response = await GetAllFlagHistory();
        dispatch(activityActions.getAllActivities(response));
    };
};

const activitiesActions = {
    getAllactivitiesAPI,
};

export default activitiesActions;