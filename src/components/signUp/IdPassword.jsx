import { useEffect, useState } from "react";
import styled from "styled-components";
import { regExp, korExp, numExp, spaceExp } from "../../constants/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const IdPassword = ({ setButtonState, setIdPassword, signUpData}) => {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const IdSet = (text) => {
      setLoginId(text);
    };
  
    const IdValid = () => {
      if (loginId === "") {
      } else if (regExp.test(loginId)) {
      } else if (korExp.test(loginId)) {
      } else if (spaceExp.test(loginId)) {
      } else if (loginId.length <= 2) {
      } else {

      }
    };
  
    const PasswordValid = () => {
      if (password === "") {
      } else if (password.length < 8 || password.length > 20) {
      } else if (!regExp.test(password)) {
      } else if (korExp.test(password)) {
      } else if (!numExp.test(password)) {
      } else if (spaceExp.test(password)) {
      } else {
      }
    };
  
    const PasswordVerifyValid = () => {
      if (passwordVerify === "") {
      } else if (password !== passwordVerify) {
      } else {
      }
    };
  

    return (
      <>
        <IntroduceArea>
          로그인에 사용할
          <br />
          아이디, 비밀번호를 입력해주세요
        </IntroduceArea>
        <RelativeArea>
          <div>
            <WriteArea
              type="text"
              placeholder="아이디"
              onChange={(e) => {
                IdSet(e.target.value);
              }}
              onBlur={() => {
                IdValid();
              }}
            />
            <Icon icon={faUser} />
          </div>
          {/* <InfoState>{message.idMessage}</InfoState> */}
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
              PasswordValid();
            }}
          />
          <Icon icon={faLock} />
          {/* <InfoState>{message.passwordMessage}</InfoState> */}
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setPasswordVerify(e.target.value);
            }}
            onBlur={() => {
              PasswordVerifyValid();
            }}
          />
          <Icon icon={faLock} />
          {/* <InfoState>{message.passwordVerifyMessage}</InfoState> */}
        </RelativeArea>
      </>
    );
  };

export default IdPassword;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;

const Icon = styled(FontAwesomeIcon)`
  color: black;
  left: 430px;
  top: 28px;
`;

const RelativeArea = styled.div`

`;

const WriteArea = styled.input`
  font-size: 16px;
  color: black;
  padding: 0 30px 0 20px;
  height: 50px;
  width: 400px;
  background: transparent;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  outline: none;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    border-color: gainsboro;
  }
  ::placeholder {
    color: black;
  }
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: end;
  height: 11px;
  margin-bottom: 20px;
`;