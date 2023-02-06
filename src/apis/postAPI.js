import axios from "axios";


// BulletinBoard 게시판 가져오기
const getBoardAxios = async () => {
    try {
      const res = await axios.get("http://3.39.36.239:8080/boards?name=free_board");
        return res;      
    } catch (error) {
      console.error(error);
    }
  };


// 게시글 가져오기


// 게시글 등록하기
const writePostAxios = async (data) => {
  try{
    const res = await axios
      .post("http://3.39.36.239:8080/api/posts", data)
      .then((response)=>{
        window.alert("등록이 완료되었습니다.");
        console.log("서버에서 내려온 값: ", response);
      })
    }catch(error){
        console.log(error);
  }
}


// 게시글 수정하기
const eiditPostAxios = async () => {
  try{
    const res = await axios.get();
      return res;
  }catch(error){
    console.log(error);
  }
};


const postAPI = {
  getBoardAxios,
  writePostAxios,
  eiditPostAxios,
};
  
export default postAPI;