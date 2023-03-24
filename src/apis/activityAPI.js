import {baseInstance} from "./instance";


export const GetAllFlagHistory = () => {
  return baseInstance.get("/activities");
};

export const setPostActivity = async (data) => {
  try{
    const res = await baseInstance.post("http://3.39.36.239:8080/activities", data);
      return res;
    }catch(error){
      console.log(error);
  }
}
