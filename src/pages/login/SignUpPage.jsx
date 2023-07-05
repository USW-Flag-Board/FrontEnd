import { useState } from "react";
import { useNavigate, createSearchParams, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../../assets/images/logo2.png";
import {
  EmailAuth,
  IdPassword,
  JoinTypeSelect,
  Privacy,
  ServiceAgree,
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
  const [progressValue, setProgressValue] = useState(20);
  const handleUpdateUserData = (updateData) => {
    setSignUpData((prev) => ({
      ...prev,
      ...updateData,
    }));
  };
  const handleButtonState = (state) => {
    setButtonState(state);
  };

  const NextIndex = () => {
    if (signUpIndex !== 4) {
      setProgressValue((prev) => (prev += 20));
      setSignUpIndex((signUpIndex) => signUpIndex + 1);
    }
    switch (signUpIndex) {
      case 0:
        navigate("joinType");
        break;
      case 1:
        navigate({
          pathname: `/signUp`,
          search: createSearchParams({
            stage: "id&password",
          }).toString(),
        });
        break;
      case 2:
        navigate({
          pathname: `/signUp`,
          search: createSearchParams({
            stage: "id&password",
          }).toString(),
        });
        break;
      case 3:
        navigate({
          pathname: `/signUp`,
          search: createSearchParams({
            stage: "email",
          }).toString(),
        });
        break;
    }
  };

  const finishSignUp = async () => {
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
  };

  const handleCertification = (value) => {
    setCertification(value);
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
          <ProgressBox>
            <Progress value={progressValue} max={100} />
          </ProgressBox>
          <ServiceAgree setButtonState={handleButtonState} />
          <Outlet />
          {/* {signUpIndex === 0 && (
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
              signUpData={signUpData}
              setButtonState={handleButtonState}
              setEmailAuth={handleUpdateUserData}
              certification={certification}
              setCertification={handleCertification}
            />
          )} */}

          <AccountButton
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={
              signUpIndex !== 4 ? () => NextIndex() : () => finishSignUp()
            }
          >
            {signUpIndex === 4 ? "회원가입 완료" : "다음 단계로 이동"}
          </AccountButton>
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
  @media (max-width: 480px) {
    width: 25rem;
  }
`;

const SignUpArea = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #495057;
  @media (max-width: 480px) {
    border: none;
  }
`;

const Logo = styled.img`
  width: 13rem;
  cursor: pointer;
`;

const AccountButton = styled.button`
  color: white;
  margin-bottom: 1.9rem;
  height: 4rem;
  width: 80%;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  &.close {
    background: #a5d8ff;
  }

  &.open {
    background: #228be6;
  }
`;

const ProgressBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const Progress = styled.progress`
  width: 60%;
`;

export default SignUpPage;
