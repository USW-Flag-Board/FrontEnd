import { postActions } from '../slice/toDos';
import boardAPI from '../../apis/boardAPI';


// Board 클릭시 게시판 가져오기
const getBoardAPI = () => {
    return async function(dispatch){
        const response = await boardAPI.getBoardAxios();
        dispatch(postActions.getPosts(response.data));
    };
};

// 게시글 등록하기
const setPostAPI = () => {
    return async function(){
        const response = await boardAPI.setWritePostAxios();
        return response;
    };
};

// 수정하기 버튼 클릭시 입력된 데이터 가져오기
const getEditAPI = () => {
    return async function(dispatch){
        const response = await boardAPI.eiditAxios();
        dispatch();
    };
};


const boardsActions = {
    getBoardAPI,
    setPostAPI,
    getEditAPI,
};

export default boardsActions;