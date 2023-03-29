import { baseInstance } from "./instance";

export const GetAllFlagHistory = () => {
  return baseInstance.get("/activities");
};

export const setPostActivity = async (data, accessToken) => {
  try{
    const res = await baseInstance.post("/activities", data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
      }
    });
      return res;
    }catch(error){
      console.log(error);
  }
}
