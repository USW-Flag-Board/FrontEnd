import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./component/SignUp";
import Home from "./pages/Home";
import BulletinBoard from "./pages/BulletinBoard";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    // box-sizing: border-box;
    
  }  
  body{
    background-color: "#212529",
  }
`;
    

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        <Header>
          <SideBar></SideBar>
        </Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/board" element={<BulletinBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
