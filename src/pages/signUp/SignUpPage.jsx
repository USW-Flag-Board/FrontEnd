import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../../assets/images/logo2.png";

const SignUpPage = () => {
  const navigate = useNavigate();

  // const NextIndex = () => {
  //   if (signUpIndex !== 4) {
  //     setProgressValue((prev) => (prev += 20));
  //     setSignUpIndex((signUpIndex) => signUpIndex + 1);
  //   }
  // };

  // const finishSignUp = async () => {
  //   try {
  //     await instance.post("/auth/sign-up", {
  //       certification: certification,
  //       email: signUpData.email,
  //     });
  //     navigate("/login");
  //   } catch (error) {
  //     if (error.response.status === 400) {
  //       navigate("/signup");
  //     } else if (error.response.status === 404) {
  //       alert("존재하지 않는 가입정보입니다.");
  //     } else if (error.response.status === 409) {
  //       alert("인증번호가 일치하지 않습니다.");
  //     }
  //   }
  // };

  // const handleCertification = (value) => {
  //   setCertification(value);
  // };
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
          <StartTitle>가입을 시작합니다!</StartTitle>
          <StartMessageBox>
            <StartMessage>Flagound에서</StartMessage>
            <StartMessage>
              IT지식을 서로 공유하거나 동아리 활동에 참여해보세요.
            </StartMessage>
          </StartMessageBox>
          <ButtonBox>
            <Button
              type="button"
              onClick={() => navigate("/signUp/serviceAgree")}
            >
              시작하기
            </Button>
            <Button
              type="button"
              className="login"
              onClick={() => navigate("/login")}
            >
              이미 계정이 있나요?<Span>로그인</Span>
            </Button>
          </ButtonBox>
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
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1 rem 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  @media (max-width: 480px) {
    border: none;
  }
`;

const Logo = styled.img`
  width: 13rem;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 1rem;
  .login {
    background-color: #f1f3f5;
    color: black;
  }
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
`;

const StartTitle = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  margin: 1rem 0;
`;

const StartMessageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StartMessage = styled.p`
  font-weight: 500;
  color: #868e96;
`;

const Span = styled.span`
  color: #228be6;
  padding-left: 1rem;
  font-weight: 700;
`;

export default SignUpPage;
