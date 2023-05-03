import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostContentPage, BulletinBoard, EditPost, WritePost, EditUser, ChangePw, MyPage, SignUpPage, LoginPage, FindId, FindPw, Home, SearchPage, Resume, Activity, Certification } from "./pages";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/board/detail" element={<PostContentPage />} />
        <Route path="/board" element={<BulletinBoard />} />
        <Route path="/board/write" element={<WritePost />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/changepw" element={<ChangePw />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/login/certification" element={<Certification />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/board/edit" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
