import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {
  LoginPage,
  SignUp,
  Home,
  BulletinBoard,
  WritePost,
  MyPage,
  DetailWritePage,
  SearchPage,
  ChangePw,
  EditUser,
  Resume,
  Activity,
  EmailAuth,
  FindId,
  FindPw,
} from "./pages";
import {Header} from "./components";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import Cookies from "universal-cookie";
import axios from "axios";

const App = () => {
  const [header, setHeader] = useState(true);
  const [postId, setPostId] = useState("");
  const cookies = new Cookies();
  useEffect(() => {
    const LocalState = async () => {
      if (localStorage.getItem("UserToken")) {
        if (cookies.get("refresh_token")) {
          const accessToken = localStorage.getItem("UserToken");
          const refreshToken = await cookies.get("refresh_token", {
            path: "/",
          });
          const {data} = await axios.post(
            "http://3.39.36.239:80/api/auth/reissue",
            {
              accessToken: accessToken,
              refreshToken: refreshToken,
            }
          );
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            data.payload;
          localStorage.setItem("UserToken", newAccessToken);
          cookies.remove("refresh_token", {
            path: "/",
          });
          cookies.set("refresh_token", newRefreshToken, {
            path: "/",
          });
        }
      }
    };
    LocalState();
    const SessionState = async () => {
      if (sessionStorage.getItem("UserToken")) {
        if (cookies.get("refresh_token")) {
          const accessToken = sessionStorage.getItem("UserToken");
          const refreshToken = await cookies.get("refresh_token", {
            path: "/",
          });
          const {data} = await axios.post(
            "http://3.39.36.239:80/api/auth/reissue",
            {
              accessToken: accessToken,
              refreshToken: refreshToken,
            }
          );
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            data.payload;
          sessionStorage.setItem("UserToken", newAccessToken);
          cookies.set("refresh_token", newRefreshToken, {
            path: "/",
          });
        }
      }
    };
    SessionState();
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {header ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Home setHeader={setHeader} />} />
        <Route path="/login" element={<LoginPage setHeader={setHeader} />} />
        <Route path="/signup" element={<SignUp setHeader={setHeader} />} />
        <Route path="/my" element={<MyPage setHeader={setHeader} />} />
        <Route
          path="/board/writeDetail"
          element={<DetailWritePage post={postId} setHeader={setHeader} />}
        />
        <Route
          path="/board"
          element={
            <BulletinBoard
              postId={postId}
              setPostId={setPostId}
              setHeader={setHeader}
            />
          }
        />
        <Route
          path="/board/write"
          element={<WritePost setHeader={setHeader} />}
        />
        <Route path="/search" element={<SearchPage setHeader={setHeader} />} />
        <Route path="/changepw" element={<ChangePw setHeader={setHeader} />} />
        <Route path="/edit" element={<EditUser setHeader={setHeader} />} />
        <Route path="/resume" element={<Resume setHeader={setHeader} />} />
        <Route path="/activity" element={<Activity setHeader={setHeader} />} />
        <Route
          path="/emailAuth"
          element={<EmailAuth setHeader={setHeader} />}
        />
        <Route path="/findid" element={<FindId setHeader={setHeader} />} />
        <Route path="/findpw" element={<FindPw setHeader={setHeader} />} />
      </Routes>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    
  }
  body{
    color: white;
    margin: 0;
    background-color: #2C2C2C;
  }
`;

export default App;
