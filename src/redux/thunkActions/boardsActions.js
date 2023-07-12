import { signUpActionsActions } from "../slice/boardSlice";
import { getDataAxios } from "../../apis/getDataAPI";

export const getPostAPI = (url) => {
  return async function (dispatch) {
    const response = await getDataAxios(url);
    dispatch(signUpActionsActions.getPost(response.data.payload));
  };
};
