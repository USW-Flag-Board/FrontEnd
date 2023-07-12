import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { emailRegex } from "../../constants/signUp";
import { setUserData } from "../../redux/slice/signUpSlice";

const EmailAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [repost, setRepost] = useState(false);
  const [certification, setCertification] = useState("");
  const userData = useSelector((state) => state.signUpSlice.signUpData);
  const handleEmailInput = (event) => {
    const { value } = event.target;
    setEmail(value);
    emailRegex.test(value)
      ? setMessage("")
      : setMessage("이메일을 형식에 맞게 정확히 입력해주세요.");
  };

  const handleAuthNumInput = (event) => {
    const { value } = event.target;
    setCertification(value);
  };

  const handleEmailCheck = async () => {
    try {
      const response = await instance.post("/auth/check/email", {
        email: email,
      });
      if (response.data.payload.exist === false) {
        dispatch(setUserData({ email: email }));
        handleAuthNumSend();
        setRepost(true);
      } else alert("이미 가입된 이메일입니다.");
    } catch (error) {
      if (error.response.status === 400) {
        alert("이메일 형식이 아닙니다.");
        setRepost(false);
      }
    }
  };

  const handleAuthNumSend = async () => {
    try {
      const response = await instance.post("/auth/join", {
        userData,
      });
      if (response.status === 200) setButtonState(true);
    } catch (error) {
      if (error.response.status === 500)
        alert("서버 에러입니다. 관리자에게 문의해주세요.");
    }
  };

  return (
    <PageArea>
      <PageBox>
        <EmailAuthArea>
          <IntroduceArea>수원대학교 이메일 인증</IntroduceArea>
          <EmailInputArea>
            <EmailInputBox>
              <WriteArea
                type="text"
                placeholder="이메일@suwon.ac.kr"
                value={email}
                onChange={handleEmailInput}
              />
              <AuthButton onClick={handleEmailCheck}>
                {repost ? "재전송" : "인증번호 발송"}
              </AuthButton>
            </EmailInputBox>
          </EmailInputArea>
          <InfoState>{message}</InfoState>
          <EmailInputArea>
            <EmailInputBox>
              <WriteArea
                value={certification}
                type="text"
                placeholder="인증번호를 입력해주세요."
                onChange={handleAuthNumInput}
              />
            </EmailInputBox>
          </EmailInputArea>
        </EmailAuthArea>
        <ButtonBox>
          <Button
            type="button"
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={() => navigate("/login")}
          >
            회원가입 완료
          </Button>
        </ButtonBox>
      </PageBox>
    </PageArea>
  );
};

export default EmailAuth;

const PageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageBox = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  @media (max-width: 480px) {
    border: none;
  }
`;

const EmailAuthArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
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
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 0.7rem;
  border: 2px solid gainsboro;
  width: 25%;
  height: 3.1rem;
  padding: 0 0.8rem 0 0.8rem;
  transition: 0.2s;
  white-space: pre-line;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    border-color: #228be6;
  }
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  justify-content: end;
  width: 75%;
  font-size: 0.75rem;
  height: 0.7rem;
  margin: 0.5rem 0;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: flex-end;
`;

const WriteArea = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  color: black;
  padding: 0 1.9rem 0 1.25rem;
  height: 3.1rem;
  width: 80%;
  border: 1px solid #495057;
  outline: none;
  transition: 0.2s;
  &:nth-child(1) {
    width: 70%;
  }
  :focus {
    transition: 0.2s;
    border-color: black;
  }
  ::placeholder {
    color: #9a9a9a;
  }
`;

const ButtonBox = styled.div`
  width: 80%;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  color: white;
  height: 4rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background: #228be6;
  border-radius: 10px;
  &.close {
    background: #a5d8ff;
  }

  &.open {
    background: #228be6;
  }
`;
