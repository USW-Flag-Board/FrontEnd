import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FinishSignUp = () => {
  const navigate = useNavigate();

  return (
    <PageArea>
      <PageBox>
        <FontawesomeIcon icon={faCircleCheck} />
        <MessageBox>
          <Message>회원가입 완료!</Message>
          <Message>Flaground 회원이 되신 것을 환영해요.</Message>
        </MessageBox>
        <ButtonBox>
          <Button type="button" onClick={() => navigate("/login")}>
            로그인
          </Button>
          <Button type="button" className="home" onClick={() => navigate("/")}>
            홈으로 이동
          </Button>
        </ButtonBox>
      </PageBox>
    </PageArea>
  );
};

export default FinishSignUp;

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
  padding: 2rem 0;
  @media (max-width: 480px) {
    border: none;
  }
`;

const FontawesomeIcon = styled(FontAwesomeIcon)`
  color: #228be6;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Message = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 1rem;
  .home {
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
