import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import AutoLoginButton from "../components/AutoLoginButton";
import IdRememberButton from "../components/IdRememberButton";
import Cookies from "universal-cookie";

const LoginPage = ({setHeader}) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(1);
  const [idRemember, setIdRemember] = useState(false);

  const getValue = (text) => {
    setLoginType(text);
  };

  const RememberState = (text) => {
    setIdRemember(text);
  };

  const RememberCookie = () => {
    if (idRemember) {
      cookies.set("remember_id", loginId);
    } else {
      cookies.remove("remember_id");
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      OnLogin();
    }
  };

  function OnLogin() {
    const data = {
      loginId: loginId,
      password: password,
    };
    if (loginId === "") {
      alert("아이디를 입력해주세요.");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      if (loginType === 1) {
        axios
          .post("http://3.39.36.239:80/api/auth/login", data)
          .then((response) => {
            RememberCookie();
            const accessToken = response.data.payload.accessToken;
            sessionStorage.setItem("UserToken", accessToken);
            sessionStorage.setItem("id", loginId);
            cookies.set("refresh_token", response.data.payload.refreshToken, {
              path: "/",
            });
            navigate("/");
          })
          .catch((error) => {
            if (error.response.status === 404) {
              alert("존재하지 않는 사용자입니다.");
            }
          });
      } else if (loginType === 2) {
        axios
          .post("http://3.39.36.239:80/api/auth/login", data)
          .then((response) => {
            RememberCookie();
            const accessToken = response.data.payload.accessToken;
            localStorage.setItem("UserToken", accessToken);
            localStorage.setItem("id", loginId);
            cookies.set("refresh_token", response.data.payload.refreshToken, {
              path: "/",
            });
            navigate("/");
          })
          .catch((error) => {
            if (error.response.status === 404) {
              alert("존재하지 않는 사용자입니다.");
            }
          });
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("UserToken")) {
      navigate("/my");
    } else if (localStorage.getItem("UserToken")) {
      navigate("/my");
    }
    setHeader(false);
    if (cookies.get("remember_id") !== undefined) {
      setLoginId(cookies.get("remember_id"));
    }
  }, []);

  return (
    <PageArea>
      <LoginArea>
        <img
          alt="Flag 로고"
          className="Logo"
          src="../images/logo-White.PNG"
          width="200"
          height="100"
          style={{
            marginBottom: 50,
          }}
          onClick={() => navigate("/")}
        />
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="아이디"
            defaultValue={loginId}
            onChange={(e) => {
              setLoginId(e.target.value);
            }}
          />
          <Icon icon={faUser} />
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyPress={(e) => {
              handleOnKeyPress(e);
            }}
          />
          <Icon icon={faLock} />
        </RelativeArea>
        <SortArea>
          <CheckArea>
            <AutoLoginButton getValue={getValue} />
            <CheckLabel>로그인 상태 유지</CheckLabel>
          </CheckArea>
          <CheckArea>
            <IdRememberButton getValue={RememberState} />
            <CheckLabel>아이디 기억하기</CheckLabel>
          </CheckArea>
        </SortArea>
        <LoginButton onClick={() => OnLogin()} fullWidth variant="contained">
          로그인
        </LoginButton>
        <SortArea>
          <LinkText href="/findid" variant="body2">
            아이디 찾기
          </LinkText>
          <LinkText href="/findpw" variant="body2">
            비밀번호 찾기
          </LinkText>
          <LinkText href="/signup" variant="body2">
            회원가입
          </LinkText>
        </SortArea>
      </LoginArea>
    </PageArea>
  );
};

const Icon = styled(FontAwesomeIcon)`
  color: white;
  position: absolute;
  left: 40px;
  top: 42px;
`;

const PageArea = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LoginArea = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 400px;
`;

const WriteArea = styled.input`
  font-size: 16px;
  color: white;
  padding-left: 50px;
  height: 60px;
  width: 350px;
  background-color: #6c6c6c;
  border-radius: 28px;
  border: 0px;
  outline: none;
  margin: 20px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
  ::placeholder {
    color: #ffffffcc;
  }
`;

const SortArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const RelativeArea = styled.div`
  position: relative;
`;

const CheckArea = styled.label`
  display: flex;
  align-items: center;
`;
const CheckLabel = styled.p`
  margin-left: 10px;
`;

const LoginButton = styled.button`
  background-color: #378975;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 28px;
  height: 60px;
  width: 400px;
  border: 0px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #38b597;
  }
`;

const LinkText = styled.a`
  color: #ffffffcc;
  :visited {
    color: #ffffffcc;
  }
  :hover {
    color: #e1e1e1d9;
  }
`;

export default LoginPage;
