import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BulletinBoard,
  MyPage,
  SignUpPage,
  LoginPage,
  Home,
  EditUser,
  SearchPage,
  Resume,
  Activity,
  PostContentPage,
  EditPost,
  WritePost,
} from "./pages";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/board" element={<BulletinBoard />} />
        <Route path="/board/write" element={<WritePost />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/board/post/:postId" element={<PostContentPage />} />
        <Route path="/board/post/:postId/edit" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
