import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import instance from "../../apis/AxiosInterceptorSetup";

const WithdrawalModal = ({ setModal }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const navigate = useNavigate();
  const handleWithdraw = async () => {
    try {
      const response = await instance.put("/members/withdraw", {
        currentPassword: currentPassword,
      });
      if (response.status === 200) {
        alert("회원탈퇴가 완료되었습니다.");
        setModal("withdraw", false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalArea>
      <ModalBox>
        <TitleBox>
          <Title>회원탈퇴</Title>
        </TitleBox>
        <InputArea>
          <InputBox>
            <ContentLabel>유의 사항</ContentLabel>
            <InfoBox>
              회원탈퇴 처리 후에는 회원님의 개인정보를 복원할 수 없습니다.
            </InfoBox>
          </InputBox>
          <InputBox>
            <ContentLabel>비밀번호</ContentLabel>
            <InfoBox>
              <Input
                type="password"
                value={currentPassword}
                placeholder="현재 비밀번호를 입력하세요"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </InfoBox>
          </InputBox>
        </InputArea>
        <ButtonBox>
          <Button type="button" onClick={() => setModal("withdraw", false)}>
            취소
          </Button>
          <Button type="button" onClick={handleWithdraw}>
            탈퇴
          </Button>
        </ButtonBox>
      </ModalBox>
    </ModalArea>
  );
};

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  width: 40%;
  @media screen and (max-width: 480px) {
    width: 85%;
  }
`;

const TitleBox = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;

const Title = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
`;

const InputArea = styled.div`
  padding: 1rem 3rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1rem;
  &:nth-child(3) {
    margin-bottom: 0;
  }
`;

const ContentLabel = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
  ::after {
    content: "*";
    color: rgb(240, 61, 12);
    margin-left: 0.4rem;
  }
  margin: 1rem 0;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 2.8rem;
  font-size: 0.8rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  outline: none;
  border-radius: 10px;
  border: 1.8px solid #e9ecef;
`;

const InfoState = styled.div`
  width: 100%;
  height: 1rem;
  color: #98a8b9;
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 3rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const Button = styled.button`
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  width: 20%;
  height: 100%;
  border: none;
  padding: 0.3rem 0 0 0;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
`;

export default WithdrawalModal;
