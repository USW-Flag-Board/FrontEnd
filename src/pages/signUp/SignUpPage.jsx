import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../../assets/images/logo2.png";

const SignUpPage = () => {
  const navigate = useNavigate();

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
          <Title>가입을 시작합니다!</Title>
          <MessageBox>
            <Message>Flaground에서</Message>
            <Message>
              IT지식을 서로 공유하거나 동아리 활동에 참여해보세요.
            </Message>
          </MessageBox>
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
  border: 1px solid #dee2e6;
  border-radius: 12px;
  @media (max-width: 480px) {
    border: none;
    padding: 0;
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

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  margin: 1rem 0;
`;

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-weight: 500;
  color: #868e96;
`;

const Span = styled.span`
  color: #228be6;
  padding-left: 1rem;
  font-weight: 700;
`;

export default SignUpPage;
