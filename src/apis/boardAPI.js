import axios from "axios";


// BulletinBoard 게시판 가져오기
const getBoardAxios = async () => {
    try {
      const res = await axios.get("http://3.39.36.239:8080/boards?name=free_board");
        return res;      
    }catch (error) {
      console.error(error);
    }
  };


// 게시글 가져오기


// 게시글 등록하기
const setWritePostAxios = async (data) => {
  try{
    const res = await axios.post("http://3.39.36.239:8080/api/posts", data);
      return res;
    }catch(error){
      console.log(error);
  }
}


// 게시글 내용 불러오기(수정시)
const getEiditPostAxios = async () => {
  try{
    const res = await axios.get();
      return res;
  }catch(error){
    console.log(error);
  }
};




const boardAPI = {
  getBoardAxios,
  setWritePostAxios,
  getEiditPostAxios,
};
  
export default boardAPI;