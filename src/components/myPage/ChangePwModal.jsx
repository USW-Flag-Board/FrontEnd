import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";
import { loginRegex } from "../../constants/signUp";
import { baseInstance } from "../../apis/instance";
import { cookiesOption } from "../../utils/cookiesOption";
const ChangePwModal = ({ setPwModal }) => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
    passwordConfirmMessage: "",
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const {
    currentPassword,
    newPassword,
    passwordConfirm,
    passwordConfirmMessage,
  } = password;

  const handleSave = async () => {
    const data = {
      currentPassword: currentPassword,
      newPassword: newPassword,
    };
    try {
      const response = await instance.put("/members/password", data);
      if (response.status === 200) {
        SessionStorage.clear();
        cookiesOption.remove("refresh_token");
        alert("변경된 비밀번호로 로그인을 시도해주세요.");
        navigate("/login");
      }
    } catch (error) {
      const status = error.response.status;
      switch (status) {
        case 409:
          alert("기존과 같은 비밀번호는 사용할 수 없습니다.");
          break;
        case 404:
          alert("존재하지 않는 사용자입니다.");
          break;
        default:
          break;
      }
    }
  };

  const handlePasswordEdit = async () => {
    try {
      await baseInstance.put("/members/find/password", {
        newPassword: newPassword,
        email: email,
      });
      alert("변경된 비밀번호로 로그인을 시도해주세요.");
      SessionStorage.remove("email");
      navigate("/login");
    } catch (error) {
      const status = error.response.status;
      if (status === 404) alert("존재하지 않는 사용자입니다.");
    }
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    updatePassword(name, value);
  };

  const updatePassword = (key, value) => {
    setPassword((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (SessionStorage.get("email")) {
      const emailState = SessionStorage.get("email");
      setEmail(emailState);
    }
  }, []);

  useEffect(() => {
    if (newPassword === "") {
      updatePassword("passwordConfirmMessage", "");
      if (passwordConfirm !== "")
        updatePassword(
          "passwordConfirmMessage",
          "비밀번호와 일치하지 않습니다."
        );
    } else if (newPassword !== "") {
      if (passwordConfirm === "") {
        updatePassword("passwordConfirmMessage", "");
      } else {
        if (newPassword === passwordConfirm)
          updatePassword("passwordConfirmMessage", "비밀번호와 일치합니다.");
        else
          updatePassword(
            "passwordConfirmMessage",
            "비밀번호와 일치하지 않습니다."
          );
      }
    }
  }, [newPassword, passwordConfirm]);
  return (
    <ModalArea>
      <ModalBox>
        <TitleBox>
          <Title>비밀번호 변경</Title>
        </TitleBox>
        <InputArea>
          <InputBox>
            <ContentLabel>현재 비밀번호</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="password"
                name="currentPassword"
                value={currentPassword}
                onChange={handleInputChange}
              />
            </InfoBox>
          </InputBox>
          <InputBox>
            <ContentLabel>비밀번호</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={handleInputChange}
              />
            </InfoBox>
            <InfoState>
              비밀번호 (영문자, 숫자, 특수문자 포함 최소 8~20자)
            </InfoState>
          </InputBox>
          <InputBox>
            <ContentLabel>비밀번호 확인</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleInputChange}
              />
            </InfoBox>
            <InfoState>{passwordConfirmMessage}</InfoState>
          </InputBox>
        </InputArea>
        <ButtonBox>
          <Button type="button" onClick={() => setPwModal(false)}>
            취소
          </Button>
          <Button type="button" onClick={handleSave}>
            저장
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
  width: 500px;
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
`;

const EditInputBox = styled.input`
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

export default ChangePwModal;
