import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Activity,
  ActivityContent,
  ActivityEdit,
  ActivityWrite,
  Admin,
  BulletinBoard,
  EditPost,
  EditUser,
  Home,
  LoginPage,
  PostContentPage,
  SearchPage,
  SignUpPage,
  UserInfo,
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
        <Route path="/board/:boardName" element={<BulletinBoard />} />
        <Route path="/board/write" element={<WritePost />} />
        <Route path="/search/:something" element={<SearchPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route
          path="/activity/content/:activityId"
          element={<ActivityContent />}
        />

        <Route path="/activity/write" element={<ActivityWrite />} />
        <Route path="/activity/edit/:activityId" element={<ActivityEdit />} />
        <Route path="/board/post/:postId" element={<PostContentPage />} />
        <Route path="/board/post/:postId/edit" element={<EditPost />} />
        <Route path="/userInfo/:userId" element={<UserInfo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
