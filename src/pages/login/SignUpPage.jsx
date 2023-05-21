import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../../assets/images/logo2.png";
import {
  ServiceAgree,
  JoinTypeSelect,
  IdPassword,
  Privacy,
  EmailAuth,
} from "../../components/signUp";

import instance from "../../apis/AxiosInterceptorSetup";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(false);
  const [signUpIndex, setSignUpIndex] = useState(0);
  const [signUpData, setSignUpData] = useState({
    joinType: "",
    loginId: "",
    major: "",
    name: "",
    nickname: "",
    password: "",
    studentId: "",
  });
  const [certification, setCertification] = useState("");
  console.log(signUpData);
  const handleUpdateUserData = (updateData) => {
    setSignUpData((prev) => ({
      ...prev,
      ...updateData,
    }));
  };

  const handleButtonState = (state) => {
    setButtonState(state);
  };

  const NextIndex = async () => {
    if (signUpIndex === 4) {
      try {
        await instance.post("/auth/sign-up", {
          certification: certification,
          email: signUpData.email,
        });
        navigate("/login");
      } catch (error) {
        if (error.response.status === 400) {
          navigate("/signup");
        } else if (error.response.status === 404) {
          alert("존재하지 않는 가입정보입니다.");
        } else if (error.response.status === 409) {
          alert("인증번호가 일치하지 않습니다.");
        }
      }
    }
    if (signUpIndex !== 4) {
      setSignUpIndex((signUpIndex) => signUpIndex + 1);
    }
  };

  return (
    <PageArea>
      <PageBox>
        <Logo
          alt="Flag 로고"
          className="Logo"
          src={logo2}
          onClick={() => navigate("/")}
        />
        <SignUpArea>
          {signUpIndex === 0 && (
            <ServiceAgree setButtonState={handleButtonState} />
          )}

          {signUpIndex === 1 && (
            <JoinTypeSelect
              setButtonState={handleButtonState}
              setJoinType={handleUpdateUserData}
            />
          )}

          {signUpIndex === 2 && (
            <IdPassword
              setButtonState={handleButtonState}
              setIdPassword={handleUpdateUserData}
            />
          )}

          {signUpIndex === 3 && (
            <Privacy
              setButtonState={handleButtonState}
              setPrivacy={handleUpdateUserData}
            />
          )}

          {signUpIndex === 4 && (
            <EmailAuth
              setButtonState={handleButtonState}
              setEmailAuth={handleUpdateUserData}
              certification={certification}
              setCertification={setCertification}
            />
          )}

          <AccountButton
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={() => NextIndex()}
          >
            {signUpIndex === 4 ? "회원가입 완료" : "Next"}
          </AccountButton>
          <RadioArea>
            <Radio className={signUpIndex === 0 && "current"} />
            <Radio className={signUpIndex === 1 && "current"} />
            <Radio className={signUpIndex === 2 && "current"} />
            <Radio className={signUpIndex === 3 && "current"} />
            <Radio className={signUpIndex === 4 && "current"} />
          </RadioArea>
        </SignUpArea>
      </PageBox>
    </PageArea>
  );
};

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
`;

const SignUpArea = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #495057;
`;

const Logo = styled.img`
  width: 35%;
  cursor: pointer;
`;

const RadioArea = styled.div`
  width: 50%;
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Radio = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 0.3rem 1rem 0.3rem;
  transition: 0.2s;
  background: none;
  border: 2px solid #228be6;
  border-radius: 20px;

  &.current {
    transition: 0.2s;
    background: #228be6;
  }
`;

const AccountButton = styled.button`
  color: black;
  margin-bottom: 1.9rem;
  height: 4rem;
  width: 80%;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  &.close {
    background: #a5d8ff;
  }

  &.open {
    background: #228be6;
  }
`;

export default SignUpPage;
