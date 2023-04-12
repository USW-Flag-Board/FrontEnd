import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../../assets/images/logo2.png";
import { ServiceAgree, JoinTypeSelect, IdPassword, Privacy, EmailAuth } from "../../components/signUp";
import { baseInstance } from "../../apis/instance";

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
    studentId: "",
  })
  const [certification, setCertification] = useState("");
  console.log(certification)
  const NextIndex = async () => {
    setSignUpIndex((signUpIndex) => signUpIndex + 1);
    if (signUpIndex + 1 === 5) {
      setButtonState(false);
      try {
        await baseInstance.post("/auth/sign-up", {
          certification: certification,
          email: signUpData.email,
        });
        navigate("/login");
      } catch (error) {
        console.error(error);
        if (error.response.status === 400) {
          navigate("/signup");
        } else if (error.response.status === 404) {
          alert("존재하지 않는 가입정보입니다.");
        } else if (error.response.status === 409) {
          alert("인증번호가 일치하지 않습니다.");
        }
      } finally {
        setButtonState(true);
      }
    }
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
              signUpData={signUpData}
            />
          )}
          {signUpIndex === 4 && (
            <EmailAuth
              setButtonState={setButtonState}
              setEmailAuth={setSignUpData}
              signUpData={signUpData}
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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpArea = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  height: 100%;
  border: 2px solid #9a9a9a;
  border-radius: 1.25rem;
`;

const Logo = styled.img`
  margin-bottom: 1rem;
  margin-top: 2rem;
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
  border: 2px solid #9a9a9a;
  border-radius: 20px;

  &.current {
    transition: 0.2s;
    background: #9a9a9a;
  }
`;


const AccountButton = styled.button`
  color: black;
  margin-top: 0.6rem;
  margin-bottom: 1.9rem;
  border-radius: 1.75rem;
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
