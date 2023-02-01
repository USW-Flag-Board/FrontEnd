import axios from "axios";

const postsAxios = async () => {
    try {
      const res = await axios.get("http://3.39.36.239:80/api/boards?name=free_board");
        return res;      
    } catch (error) {
      console.error(error);
    }
  };

  const getPostsAxios = async (postId) => {
    try {
      const res = await axios.get(`http://3.39.36.239:8080/api/posts?postId=${postId}&viaBoard=true`);
        return res;      
    } catch (error) {
      console.error(error);
    }
  }
  
  const postAPI = {
    postsAxios,
    getPostsAxios,
  };
  
export default postAPI;