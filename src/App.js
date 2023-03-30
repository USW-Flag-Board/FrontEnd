import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {
  LoginPage,
  SignUp,
  Home,
  MyPage,
  SearchPage,
  ChangePw,
  EditUser,
  Resume,
  Activity,
  FindId,
  FindPw,
} from "./pages";
import { PostContentPage, BulletinBoard, EditPost, WritePost } from "../src/pages/board"
import {cookiesOption} from "./utils/cookiesOption";
import {LocalStorage, SessionStorage} from "./utils/browserStorage";
import AxiosInterceptorsSetup from "./apis/AxiosInterceptorSetup";
import {PostRefreshToken} from "./apis/auth";
import GlobalStyle from "./styles/GlobalStyle";
// function AxiosInterceptoNavigate() {
//   let navigate = useNavigate();
//   const [ran, setRan] = useState(false);
//   if (!ran) {
//     AxiosInterceptorsSetup(navigate);
//     setRan(true);
//   }
//   return <></>;
// }

const App = () => {
  // useEffect(() => {
  //   const LocalState = async () => {
  //     if (LocalStorage.get("UserToken")) {
  //       if (cookiesOption.get("refresh_token")) {
  //         const accessToken = LocalStorage.get("UserToken");
  //         const refreshToken = await cookiesOption.get("refresh_token", {
  //           path: "/",
  //         });
  //         const {data} = await PostRefreshToken(accessToken, refreshToken);
  //         const {
  //           accessToken: newAccessToken,
  //           refreshToken: newRefreshToken,
  //           accessTokenExpiresIn: newAccessTokenExpiresIn,
  //         } = data.payload;
  //         const expireTime = new Date(newAccessTokenExpiresIn).getTime();
  //         LocalStorage.set("expire", expireTime);
  //         LocalStorage.set("UserToken", newAccessToken);
  //         cookiesOption.setRefresh("refresh_token", newRefreshToken);
  //       }
  //     }
  //   };
  //   LocalState();
  //   const SessionState = async () => {
  //     if (SessionStorage.get("UserToken")) {
  //       if (cookiesOption.get("refresh_token")) {
  //         const accessToken = SessionStorage.get("UserToken");
  //         const refreshToken = await cookiesOption.get("refresh_token", {
  //           path: "/",
  //         });
  //         const {data} = await PostRefreshToken(accessToken, refreshToken);
  //         const {
  //           accessToken: newAccessToken,
  //           refreshToken: newRefreshToken,
  //           accessTokenExpiresIn: newAccessTokenExpiresIn,
  //         } = data.payload;
  //         const expireTime = new Date(newAccessTokenExpiresIn).getTime();
  //         SessionStorage.set("expire", expireTime);
  //         SessionStorage.set("UserToken", newAccessToken);
  //         cookiesOption.setRefresh("refresh_token", newRefreshToken);
  //       }
  //     }
  //   };
  //   SessionState();
  // }, []);
  return (
    <BrowserRouter>
      {/* {<AxiosInterceptoNavigate />} */}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/my" element={<MyPage/>} />
        <Route path="/board/detail" element={<PostContentPage/>}/>
        <Route path="/board" element={<BulletinBoard/>}/>
        <Route path="/board/write" element={<WritePost/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/changepw" element={<ChangePw/>}/>
        <Route path="/edit" element={<EditUser/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/findid" element={<FindId/>}/>
        <Route path="/findpw" element={<FindPw/>}/>
        <Route path="/board/edit" element={<EditPost/>}/>
      </Routes>
    </BrowserRouter>
  );
};



export default App;
