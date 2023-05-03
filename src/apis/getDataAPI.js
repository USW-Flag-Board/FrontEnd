import { baseInstance } from "./instance";

export const getDataAxios = async (url) => {
    try{
        const res = await baseInstance.get(url);
        return res;
    }catch(error){
        console.log(error);
    }
}