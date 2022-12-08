import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./component/SignUp";
import Home from "./pages/Home";
import BulletinBoard from "./pages/BulletinBoard";
import Header from "./component/Header";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    
  }
  h1{
    padding-bottom: 20px;
    font-size: 20px;
  }
  h4{
    padding-bottom: 10px;
  }  
  body{
    color: white;
    margin: 0;
    background-color: #2C2C2C;
  }
`;


const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/board" element={<BulletinBoard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
