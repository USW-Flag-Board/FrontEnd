import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignUp, Home, BulletinBoard, WritePost, MyPage, DetailWritePage, SearchPage, ChangePw, EditUser, Resume, Activity, EmailAuth, FindId, FindPw} from "./pages";
import { Header, }from "./components";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const App = () => {
  const [header, setHeader] = useState(true);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {header ? <Header/> : ""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage setHeader={setHeader} />}></Route>
        <Route path="/signup" element={<SignUp setHeader={setHeader} />}></Route>
        <Route path="/my" element={<MyPage />}></Route>
        <Route path="/board/writeDetail" element={<DetailWritePage />}></Route>
        <Route path="/board" element={<BulletinBoard />}></Route>
        <Route path="/board/write" element={<WritePost />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/changepw" element={<ChangePw />}></Route>
        <Route path="/edit" element={<EditUser />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/activity" element={<Activity/>}></Route>
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
