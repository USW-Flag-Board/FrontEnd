import { postActions } from '../slice/toDos';
import getPostsAPI from '../../api/getPostsAPI';

const getListAPI = () => {
    return async function(dispatch){
        const response = await getPostsAPI.getPostAxios();
        console.log(response)
        dispatch(postActions.getPost(response));
    };
};

const getPostsActions = {getListAPI};

export default getPostsActions;