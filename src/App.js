import {BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignUp,
  Home,
  MyPage,
  SearchPage,
  ChangePw,
  EditUser,
  Resume,
  Activity,
  FindId,
  FindPw,
} from "./pages";
import { PostContentPage, BulletinBoard, EditPost, WritePost } from "../src/pages/board"
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/my" element={<MyPage/>} />
        <Route path="/board/detail" element={<PostContentPage/>}/>
        <Route path="/board" element={<BulletinBoard/>}/>
        <Route path="/board/write" element={<WritePost/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/changepw" element={<ChangePw/>}/>
        <Route path="/edit" element={<EditUser/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/findid" element={<FindId/>}/>
        <Route path="/findpw" element={<FindPw/>}/>
        <Route path="/board/edit" element={<EditPost/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
