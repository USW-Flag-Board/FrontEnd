import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Header } from './components';
import { LoginPage, Home, BulletinBoard, WritePost, MyPage, DetailWritePage, SignUp } from "./pages";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState } from 'react';
=======
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import BulletinBoard from "./pages/BulletinBoard";
import Header from "./component/Header";
import WritePost from "./pages/WritePost";
import MyPage from "./pages/MyPage";
import WriteDetail from "./pages/DetailWritePage";
import SearchPage from "./pages/SearchPage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ChangePw from "./pages/ChangePw";
import EditUser from "./pages/EditUser";
import Resume from "./pages/Resume";
>>>>>>> 2d1f05f6a4c0df5f3a6592cd570b067123894275

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

const App = () => {
  const [header, setHeader] = useState(true);
  console.log(header);
  return (
      <BrowserRouter>
        <GlobalStyle />
        {header && <Header setHeader={setHeader}/>}
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/my" element={<MyPage />}/>
          <Route path="/board/writeDetail" element={<DetailWritePage />}/>
          <Route path="/board" element={<BulletinBoard />}/>
          <Route path="/board/write" element={<WritePost />}/>
=======
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/my" element={<MyPage />}></Route>
          <Route path="/board/writeDetail" element={<WriteDetail />}></Route>
          <Route path="/board" element={<BulletinBoard />}></Route>
          <Route path="/board/write" element={<WritePost />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/changepw" element={<ChangePw/>}></Route>
          <Route path="/edit" element={<EditUser/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
>>>>>>> 2d1f05f6a4c0df5f3a6592cd570b067123894275
        </Routes>
      </BrowserRouter>
  );
};

export default App;
