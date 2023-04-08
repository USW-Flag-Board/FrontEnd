import { baseInstance } from "./instance";

// BulletinBoard 게시판 가져오기
const getBoardAxios = async (selectBoard) => {
    try {
      const res = await baseInstance.get(`/boards?name=${selectBoard}`);
        return res;      
    }catch (error) {
      console.error(error);
    }
  };

// 게시글 내용 불러오기(수정시)
const getPostAxios = async (selectPost) => {
  try{
    const res = await baseInstance.get(`/posts?id=${selectPost}`);
      return res.data.payload;
  }catch(error){
    console.log(error);
  }
};

// 게시글 등록하기
const setWritePostAxios = async (data) => {
  try{
    const res = await baseInstance.post("/posts", data);
      return res;
    }catch(error){
      console.log(error);
  }
}

// 게시글 수정하기
const setEditedPostAxios = async (data) => {
  try{
    const res = await baseInstance.patch("/posts", data);
      return res;
    }catch(error){
      console.log(error);
  }
}

// 게시글 삭제하기
const deletePostAxios = async (postId) => {
  try{
    const res = await baseInstance.delete(`/posts/${postId}`)
      console.log(res)
      return res;
  }catch(error){
    console.log(error);
  }
}

const boardAPI = {
  getBoardAxios,
  setWritePostAxios,
  getPostAxios,
  setEditedPostAxios,
  deletePostAxios,
};
  
export default boardAPI;