import axios from "axios";
import {LocalStorage, SessionStorage} from "../utils/browserStorage";

const {REACT_APP_DEV_API_END_POINT} = process.env;
const accessToken = sessionStorage.getItem("UserToken");

const baseInstance = axios.create({
  baseURL: REACT_APP_DEV_API_END_POINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem(accessToken)}`
  }
});

export { baseInstance };