import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Activity,
  BulletinBoard,
  EditPost,
  EditUser,
  Home,
  LoginPage,
  MyPage,
  PostContentPage,
  SearchPage,
  SignUpPage,
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
        <Route path="/search/:something" element={<SearchPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/board/post/:postId" element={<PostContentPage />} />
        <Route path="/board/post/:postId/edit" element={<EditPost />} />
        <Route path="/userInfo" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
