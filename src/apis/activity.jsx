import {baseInstance} from "./instance";

export const GetAllFlagHistory = () => {
  return baseInstance.get("/activities");
};
