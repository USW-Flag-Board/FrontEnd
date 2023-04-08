import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../../assets/images/logo2.png";
import { ServiceAgree, JoinTypeSelect, IdPassword, Privacy, EmailAuth } from "../../components/signUp";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(false);
  const [signUpIndex, setSignUpIndex] = useState(0);
  const [signUpData, setSignUpData] = useState({
    joinType: "",
    loginId: "",
    major: "",
    name: "",
    nickName: "",
    password: "",
    phoneNumber: "",
    studentId: "",
  })
  console.log(signUpData)
  const NextIndex = () => {
    setSignUpIndex((signUpIndex) => signUpIndex + 1);
  };

  return (
    <PageArea>
      <PageBox>
        <SignUpArea>
          <Logo
            alt="Flag 로고"
            className="Logo"
            src={logo2}
            onClick={() => navigate("/")}
          />
          {signUpIndex === 0 && <ServiceAgree setButtonState={setButtonState} />}
          {signUpIndex === 1 && (
            <JoinTypeSelect
              setButtonState={setButtonState}
              signUpData={signUpData}
              setJoinType={setSignUpData}
            />
          )}
          {signUpIndex === 2 && (
            <IdPassword
              setButtonState={setButtonState}
              signUpData={signUpData}
              setIdPassword={setSignUpData}
            />
          )}
          {signUpIndex === 3 && (
            <Privacy
              setButtonState={setButtonState}
              setPrivacy={setSignUpData}
              signUpData={setSignUpData}
            />
          )}
          {signUpIndex === 4 && (
            <EmailAuth
              setButtonState={setButtonState}
              setEmailAuth={setSignUpData}
              signUpData={signUpData}
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
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpArea = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 600px;
  height: 100%;
  border: 2px solid #9a9a9a;
  border-radius: 20px;
`;

const Logo = styled.img`
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const RadioArea = styled.div`
  width: 220px;
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Radio = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px 1rem 5px;
  transition: 0.2s;
  background: none;
  border: 2px solid #9a9a9a;
  border-radius: 20px;

  &.current {
    transition: 0.2s;
    background: #9a9a9a;
  }
`;


const AccountButton = styled.button`
  color: black;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 28px;
  height: 60px;
  width: 80%;
  transition: 0.2s;

  &.close {
    background: #8e8e8e;
    :hover {
      background: #8e8e8e;
    }
  }

  &.open {
    background: #378975;
    :hover {
      transition: 0.2s;
      background: #38b597;
    }
  }
`;

export default SignUpPage;
