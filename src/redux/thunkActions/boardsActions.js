import { postActions } from "../slice/boardSlice";
import { getDataAxios } from "../../apis/getDataAPI";

export const getPostAPI = (url) => {
  return async function (dispatch) {
    const response = await getDataAxios(url);
    dispatch(postActions.getPost(response.data.payload));
  };
};
