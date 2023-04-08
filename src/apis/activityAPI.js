import { baseInstance } from "./instance";

export const getAllActivitiesAxios = async () => {
  try{
    const res = await baseInstance.get("/activities");
    return res.data.payload.allActivities;
  }catch(error){
    console.log(error);
  }
};

export const getActivityAxios = async (id) => {
  try {
    const res = await baseInstance.get(`/activities/${id}`);
    return res;
  }catch(error){
    console.log(error);
  }
}

