import { useState } from "react";
import { PostEmail, PostCurrentEmail } from "../../apis/auth";
import styled from "styled-components";
import { useEffect } from "react";

const EmailAuth = ({
    setButtonState,
    setEmailAuth,
    signUpData,
  }) => {
    const [state, setState] = useState({
      email: "",
      emailMessage: "",
      repost: false,
      certification: ""
    });
    const { email, emailMessage, repost, certification } = state;
    console.log(signUpData)
    const handleAuthClick = () => {

    }

    const updateState = () => {

    }

    

    useEffect(()=>{

    }, [])
  
    return (
      <IdPasswordArea>
        <IntroduceArea>수원대학교 이메일 인증</IntroduceArea>
        <EmailInputArea>
          <EmailInputBox>
            <WriteArea
              type="text"
              placeholder="이메일@suwon.ac.kr"
              onChange={updateState}
            />
            <AuthButton 
              onClick={handleAuthClick}>
              {repost ? "재전송" : "인증번호 발송"}
            </AuthButton>
          </EmailInputBox>
        </EmailInputArea>
        <InfoState>{emailMessage}</InfoState>
        <EmailInputArea>
          <EmailInputBox>
            <WriteArea
              placeholder="인증번호를 입력해주세요."
              onChange={updateState}
            />
            <AuthButton 
              onClick={handleAuthClick}>
            </AuthButton>
          </EmailInputBox>
        </EmailInputArea>
        <RowLine/>
        <IntroduceArea>
          FLAGround 가입을 환영합니다.
        </IntroduceArea>
      </IdPasswordArea>
    );
  };

export default EmailAuth;

const IdPasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const EmailInputArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;


const EmailInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AuthButton = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 0.8rem;
  border: 2px solid gainsboro;
  border-radius: 1.9rem;
  width: 25%;
  height: 3.1rem;
  padding: 0 0.8rem 0 0.8rem;
  transition: 0.2s;
  white-space: pre-line;
  &:hover {
    transition: 0.2s;
    border-color: #228be6;
  }
`;

const RowLine = styled.hr`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #9a9a9a;
  width: 100%;
  opacity: 0.6;
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  justify-content: end;
  width: 75%;
  font-size: 0.75rem;
  height: 0.7rem;
  margin-bottom: 1.25rem;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-top: 1.25rem;
  margin-bottom: 2.8rem;
  display: flex;
  align-items: flex-end;
`;

const WriteArea = styled.input`
  font-size: 1rem;
  color: black;
  padding: 0 1.9rem 0 1.25rem;
  height: 3.1rem;
  width: 80%;
  border-radius: 1.9rem;
  border: 2px solid gainsboro;
  outline: none;
  transition: 0.2s;
  &:nth-child(1){
    width: 70%;
  }
  :focus {
    transition: 0.2s;
    border-color: black;
  }
  ::placeholder {
    color: black;
  }
`;
