import axios from "axios";

const getPostAxios = async () => {
    try {
      const res = await axios.get(`http://3.39.36.239:80/api/posts?postId=1&viaBoard=true`);
        return res;      
    } catch (error) {
      console.error(error);
    }
  };
  
  const getPostAPI = {
    getPostAxios,
  };
  
export default getPostAPI;