import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/my" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
