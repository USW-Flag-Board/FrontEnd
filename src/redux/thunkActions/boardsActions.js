import { postActions } from '../slice/toDos';
import boardAPI from '../../apis/boardAPI';

// Board 클릭시 게시판 가져오기
const getBoardAPI = (selectBoard) => {
    return async function(dispatch){
        const response = await boardAPI.getBoardAxios(selectBoard);
        dispatch(postActions.getPosts(response.data));
    };
};

// 게시글 가져오기
const getPostAPI = (selectPost) => {
    return async function(dispatch){
        const response = await boardAPI.getPostAxios(selectPost);
        dispatch(postActions.getPost(response))
    };
};

// 게시글 삭제
const deletePostAPI = (PostId) => {
    return async function(){
        const response = await boardAPI.deletePostAxios(PostId);
            return response;
    }
}


const boardsActions = {
    getBoardAPI,
    getPostAPI,
    deletePostAPI,
};

export default boardsActions;