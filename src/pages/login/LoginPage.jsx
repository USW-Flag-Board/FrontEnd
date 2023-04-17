import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { SessionStorage } from "../../utils/browserStorage";
import { cookiesOption } from "../../utils/cookiesOption";
import logo from "../../assets/images/logo2.png"
import { baseInstance } from "../../apis/instance";

const LoginPage = () => {
  const navigate = useNavigate();
  const [idPassword, setIdPassword] = useState({
    loginId: "",
    password: "", 
  });
  
  const updateIdPassword = (event) => {
    const { name, value } = event.target;
    setIdPassword({
      ...idPassword,
      [name]: value
    })
  };

  const handleLogin = async () => {
    try{
      const response = await baseInstance.post("/auth/login", {
        loginId: idPassword.loginId,
        password: idPassword.password
      });
      const accessToken = response.data.payload.accessToken;
      const accessTokenExpiresIn =
        response.data.payload.accessTokenExpiresIn;
      SessionStorage.set("expire", accessTokenExpiresIn);
      SessionStorage.set("UserToken", accessToken);
      SessionStorage.set("User_id", idPassword.loginId);
      SessionStorage.remove("email");
      cookiesOption.setRefresh(
        "refresh_token",
        response.data.payload.refreshToken
      );
      navigate("/")
    }catch(error){
      const status = error.response.status;
      switch(status){
        case 400:
          alert("비밀번호가 틀립니다.");
          break;
        case 404:
          alert("존재하지 않는 사용자입니다.");
          break;
        default:
          break;
      }
    }
  }

  return (
    <PageArea>
      <LoginArea>
        <img
          alt="Flag 로고"
          className="Logo"
          src={logo}
          onClick={() => navigate("/")}
        />
        <RelativeArea>
          <WriteArea
            type="text"
            name="loginId"
            placeholder="아이디"
            onChange={updateIdPassword}
          />
          <Icon icon={faUser} />
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={updateIdPassword}
          />
          <Icon icon={faLock} />
        </RelativeArea>
        <LoginButton onClick={handleLogin} fullWidth variant="contained">
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
  color: black;
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
  font-size: 1rem;
  padding-left: 50px;
  height: 60px;
  width: 350px;
  border: 1px solid #adb5bd;
  outline: none;
  margin: 1.25rem;
  transition: 0.2s;
  ::placeholder {
    color: black;
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


const LoginButton = styled.button`
  background-color: #4dabf7;
  color: #ffffff;
  margin-top: 1.9rem;
  margin-bottom: 1.9rem;
  height: 60px;
  width: 350px;
  border: 0px;
  transition: 0.2s;
  font-size: 1rem;
`;

const LinkText = styled.a`
  color: black;
  :visited {
    color: black;
  }
  :hover {
    color: #adb5bd;
  }
`;

export default LoginPage;