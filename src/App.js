import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
