import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PostContentPage,
  BulletinBoard,
  EditPost,
  WritePost,
  MyPage,
  SignUpPage,
  LoginPage,
  Home,
  SearchPage,
  Resume,
  Activity,
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
        <Route path="/my" element={<MyPage />} />
        <Route path="/board/post" element={<PostContentPage />} />
        <Route path="/board" element={<BulletinBoard />} />
        <Route path="/board/write" element={<WritePost />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/board/edit" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
