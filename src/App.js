import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import BulletinBoard from "./pages/BulletinBoard";
import Header from "./components/Header";
import WritePost from "./pages/WritePost";
import MyPage from "./pages/MyPage";
import WriteDetail from "./pages/DetailWritePage";
import SearchPage from "./pages/SearchPage";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import ChangePw from "./pages/ChangePw";
import EditUser from "./pages/EditUser";
import Resume from "./pages/Resume";
import Activity from "./pages/Activity";
import EmailAuth from "./pages/EmailAuth";
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";
import Cookies from "universal-cookie";
import axios from "axios";

const App = () => {
  const [header, setHeader] = useState(true);
  console.log(header);
  const cookies = new Cookies();

  useEffect(() => {
    const LocalState = async () => {
      if (localStorage.getItem("UserToken")) {
        if (cookies.get("refresh_token")) {
          const accessToken = localStorage.getItem("UserToken");
          const refreshToken = await cookies.get("refresh_token");
          const {data} = await axios.post(
            `http://3.39.36.239:8080/api/auth/reissue`,
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
            `http://3.39.36.239:8080/api/auth/reissue`,
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
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      {header && <Header setHeader={setHeader} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/my" element={<MyPage />}></Route>
        <Route path="/board/writeDetail" element={<WriteDetail />}></Route>
        <Route path="/board" element={<BulletinBoard />}></Route>
        <Route path="/board/write" element={<WritePost />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/changepw" element={<ChangePw />}></Route>
        <Route path="/edit" element={<EditUser />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/emailAuth" element={<EmailAuth />}></Route>
        <Route path="/findid" element={<FindId />}></Route>
        <Route path="/findpw" element={<FindPw />}></Route>
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
