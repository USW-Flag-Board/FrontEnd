import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components';
import { LoginPage, Home, BulletinBoard, WritePost, MyPage, DetailWritePage, SignUp } from "./pages";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState } from 'react';

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
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/my" element={<MyPage />}/>
          <Route path="/board/writeDetail" element={<DetailWritePage />}/>
          <Route path="/board" element={<BulletinBoard />}/>
          <Route path="/board/write" element={<WritePost />}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
