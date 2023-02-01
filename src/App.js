import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignUp, Home, BulletinBoard, WritePost, MyPage, DetailWritePage, SearchPage, ChangePw, EditUser, Resume, Activity, EmailAuth, FindId, FindPw} from "./pages";
import { Header, }from "./components";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import Cookies from "universal-cookie";
import axios from "axios";


const App = () => {
  const [header, setHeader] = useState(true);
  const cookies = new Cookies();
  useEffect(() => {
    const LocalState = async () => {
      if (localStorage.getItem("UserToken")) {
        if (cookies.get("refresh_token")) {
          const accessToken = localStorage.getItem("UserToken");
          const refreshToken = await cookies.get("refresh_token");
          const {data} = await axios.post(
            "http://3.39.36.239:8080/api/auth/reissue",
            {
              accessToken,
              refreshToken,
            }
          );
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            data;
          localStorage.setItem("UserToken", newAccessToken);
          await cookies.set("refresh_token", newRefreshToken);
        }
      }
    };
    LocalState();
    const SessionState = async () => {
      if (sessionStorage.getItem("UserToken")) {
        if (cookies.get("refresh_token")) {
          const accessToken = sessionStorage.getItem("UserToken");
          const refreshToken = await cookies.get("refresh_token");
          const {data} = await axios.post(
            "http://3.39.36.239:8080/api/auth/reissue",
            {
              accessToken,
              refreshToken,
            }
          );
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            data;
          sessionStorage.setItem("UserToken", newAccessToken);
          await cookies.set("refresh_token", newRefreshToken);
        }
      }
    };
    SessionState();
  }, [cookies]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {header ? <Header/> : ""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage setHeader={setHeader} />}/>
        <Route path="/signup" element={<SignUp setHeader={setHeader} />}/>
        <Route path="/my" element={<MyPage />}/>
        <Route path="/board/writeDetail" element={<DetailWritePage />}/>
        <Route path="/board" element={<BulletinBoard />}/>
        <Route path="/board/write" element={<WritePost />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/changepw" element={<ChangePw />}/>
        <Route path="/edit" element={<EditUser />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/activity" element={<Activity />}/>
        <Route path="/emailAuth" element={<EmailAuth />}/>
        <Route path="/findid" element={<FindId />}/>
        <Route path="/findpw" element={<FindPw />}/>
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
