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
const getPostAxios = async ()=>{
  try{
    
  } catch(error){
    console.log(error);
  }
}

// 게시글 등록하기
const writePostAxios = (data) => {
  axios
    .post("http://3.39.36.239:8080/api/posts", data)
  // {
  //   data: data,
  //   headers: {
  //     'Authorization': `Bearer ${sessionStorage.getItem("UserToken")}`,
  //     'Content-Type': 'application/json'
  //   },
  // })
    .then((response) => {
        console.log("서버에서 내려온 값:", response);
  })
    .catch((error) => {
        // 에러 핸들링
        console.log(error);
  });
};


// 게시글 수정하기
const editPostAxios = async () => {
  try{
    const res = await axios.get();
      return res;
  }catch(error){
    console.log(error);
  }
};


const postAPI = {
  getBoardAxios,
  getPostAxios,
  writePostAxios,
  editPostAxios,
};
  
export default postAPI;