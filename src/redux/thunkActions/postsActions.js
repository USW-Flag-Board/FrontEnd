import { postActions } from '../slice/toDos';
import postAPI from '../../api/postAPI';

const getPostAPI = () => {
    return async function(dispatch){
        const response = await postAPI.postsAxios();
        dispatch(postActions.setPost(response.data));
    };
};



const postsActions = {
    getPostAPI,
};

export default postsActions;