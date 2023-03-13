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
import { DetailWritePage, BulletinBoard, EditPost, WritePost } from "../src/pages/board"
import {Header} from "./components";
import {cookiesOption} from "./utils/cookiesOption";
import {LocalStorage, SessionStorage} from "./utils/browserStorage";
import AxiosInterceptorsSetup from "./apis/AxiosInterceptorSetup";
import {PostRefreshToken} from "./apis/auth";
import GlobalStyle from "./styles/GlobalStyle";
function AxiosInterceptoNavigate() {
  let navigate = useNavigate();
  const [ran, setRan] = useState(false);
  if (!ran) {
    AxiosInterceptorsSetup(navigate);
    setRan(true);
  }
  return <></>;
}

const App = () => {
  const [header, setHeader] = useState(true);
  useEffect(() => {
    const LocalState = async () => {
      if (LocalStorage.get("UserToken")) {
        if (cookiesOption.get("refresh_token")) {
          const accessToken = LocalStorage.get("UserToken");
          const refreshToken = await cookiesOption.get("refresh_token", {
            path: "/",
          });
          const {data} = await PostRefreshToken(accessToken, refreshToken);
          const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            accessTokenExpiresIn: newAccessTokenExpiresIn,
          } = data.payload;
          const expireTime = new Date(newAccessTokenExpiresIn).getTime();
          LocalStorage.set("expire", expireTime);
          LocalStorage.set("UserToken", newAccessToken);
          cookiesOption.setRefresh("refresh_token", newRefreshToken);
        }
      }
    };
    LocalState();
    const SessionState = async () => {
      if (SessionStorage.get("UserToken")) {
        if (cookiesOption.get("refresh_token")) {
          const accessToken = SessionStorage.get("UserToken");
          const refreshToken = await cookiesOption.get("refresh_token", {
            path: "/",
          });
          const {data} = await PostRefreshToken(accessToken, refreshToken);
          const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            accessTokenExpiresIn: newAccessTokenExpiresIn,
          } = data.payload;
          const expireTime = new Date(newAccessTokenExpiresIn).getTime();
          SessionStorage.set("expire", expireTime);
          SessionStorage.set("UserToken", newAccessToken);
          cookiesOption.setRefresh("refresh_token", newRefreshToken);
        }
      }
    };
    SessionState();
  }, []);
  return (
    <BrowserRouter>
      {<AxiosInterceptoNavigate />}
      <GlobalStyle />
      {header ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Home setHeader={setHeader} />} />
        <Route path="/login" element={<LoginPage setHeader={setHeader} />} />
        <Route path="/signup" element={<SignUp setHeader={setHeader} />} />
        <Route path="/my" element={<MyPage setHeader={setHeader} />} />
        <Route path="/board/detail" element={<DetailWritePage setHeader={setHeader} />}/>
        <Route path="/board" element={<BulletinBoard setHeader={setHeader}/>}/>
        <Route path="/board/write" element={<WritePost setHeader={setHeader} />}/>
        <Route path="/search" element={<SearchPage setHeader={setHeader} />}/>
        <Route path="/changepw" element={<ChangePw setHeader={setHeader} />}/>
        <Route path="/edit" element={<EditUser setHeader={setHeader} />}/>
        <Route path="/resume" element={<Resume setHeader={setHeader} />}/>
        <Route path="/activity" element={<Activity setHeader={setHeader}/>}/>
        <Route path="/findid" element={<FindId setHeader={setHeader} />}/>
        <Route path="/findpw" element={<FindPw setHeader={setHeader} />}/>
        <Route path="/board/edit" element={<EditPost setHeader={setHeader} />}/>
      </Routes>
    </BrowserRouter>
  );
};



export default App;
