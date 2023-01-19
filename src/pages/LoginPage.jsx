import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {styled} from "@mui/material/styles";
import CheckButton from "../components/CheckButton";
import {useState} from "react";
import axios from "axios";

const PageArea = styled("div")({
  width: "100%",
  height: "100vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

const LoginArea = styled("div")({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: 400,
});

const WriteArea = styled("input")({
  fontSize: "16px",
  color: "white",
  paddingLeft: 50,
  height: 60,
  width: 350,
  backgroundColor: "#6c6c6c",
  borderRadius: 28,
  border: 0,
  outline: "none",
  margin: 20,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#575757",
  },
  "::placeholder": {
    color: "#ffffffcc",
  },
});

const AddIcon = styled(FontAwesomeIcon)({
  color: "white",
  position: "absolute",
  left: 40,
  top: 42,
});

const SortArea = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
});

const RelativeArea = styled("div")({
  position: "relative",
});

const CheckArea = styled("label")({
  display: "flex",
  alignItems: "center",
});
const CheckLabel = styled("p")({
  marginLeft: 10,
});

const LoginButton = styled("button")({
  backgroundColor: "#378975",
  color: "#ffffff",
  marginTop: 30,
  marginBottom: 30,
  borderRadius: 28,
  height: 60,
  width: 400,
  border: 0,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#38b597",
  },
});

const LinkText = styled("a")({
  color: "#ffffffcc",
  ":visited": {
    color: "#ffffffcc",
  },
  ":hover": {
    color: "#e1e1e1d9",
  },
});

export default function LoginPage() {
  let [loginId, setLoginId] = useState("");
  let [password, setPassword] = useState("");

  function OnLogin(loginId, password) {
    const data = {
      loginId,
      password,
    };
    if (loginId === "") {
      alert("아이디를 입력해주세요.");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      axios
        .post("/api/auth/login", data)
        .then((response) => {
          const {accessToken} = response.data;
          localStorage.setItem("jwtToken", response.accessToken);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            alert("존재하지 않는 사용자입니다.");
            // localStorage.setItem("jwtToken", "asd");
          }
        });
    }
  }

  return (
    <PageArea>
      <LoginArea>
        <img
          alt="Flag 로고"
          className="Logo"
          src="flag.JPG"
          width="200"
          height="100"
        />
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setLoginId(e.target.value);
            }}
          />
          <AddIcon icon={faUser} />
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <AddIcon icon={faLock} />
        </RelativeArea>
        <SortArea>
          <CheckArea>
            <CheckButton />
            <CheckLabel>로그인 상태 유지</CheckLabel>
          </CheckArea>
          <CheckArea>
            <CheckButton />
            <CheckLabel>아이디 기억하기</CheckLabel>
          </CheckArea>
        </SortArea>
        <LoginButton
          onClick={() => OnLogin(loginId, password)}
          fullWidth
          variant="contained"
        >
          로그인
        </LoginButton>
        <SortArea>
          <LinkText href="#" variant="body2">
            아이디 찾기
          </LinkText>
          <LinkText href="#" variant="body2">
            비밀번호 찾기
          </LinkText>
          <LinkText href="/signup" variant="body2">
            회원가입
          </LinkText>
        </SortArea>
      </LoginArea>
    </PageArea>
  );
}
