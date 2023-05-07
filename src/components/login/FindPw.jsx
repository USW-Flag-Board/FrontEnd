import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components";
import { baseInstance } from "../../apis/instance";
import { SessionStorage } from "../../utils/browserStorage";

const FindPw = () => {
  const header = true;
  const [state, setState] = useState({
    email: "",
    loginId: "",
  });
  const { email, loginId } = state;
  const navigate = useNavigate();

  const updateState = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const data = {
      email: email,
      loginId: loginId,
    };
    try {
      const response = await baseInstance.post("/members/find/password", data);
      if (response.status === 201) {
        SessionStorage.set("email", email);
        SessionStorage.set("type", "password");
        navigate("/login/certification");
      }
    } catch (error) {
      const status = error.response.status;
      switch (status) {
        case 409:
          alert("이메일과 아이디가 일치하지 않습니다.");
          break;
        case 404:
          alert("존재하지 않는 사용자입니다.");
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <EditPageArea>
        <TitleArea>
          <TitleBox>비밀번호 찾기</TitleBox>
          <EditButton type="button" onClick={handleSave}>
            저장하기
          </EditButton>
        </TitleArea>
        <EditPageBox>
          <InfoBox>
            <InfoTitle>아이디</InfoTitle>
            <EditInputBox
              type="text"
              name="loginId"
              value={loginId}
              onChange={updateState}
            />
          </InfoBox>
          <InfoBox>
            <InfoTitle>이메일</InfoTitle>
            <EditInputBox
              type="text"
              name="email"
              value={email}
              onChange={updateState}
            />
          </InfoBox>
        </EditPageBox>
      </EditPageArea>
    </>
  );
};

export default FindPw;

const EditPageArea = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditPageBox = styled.div`
  border: 2px solid #9a9a9a;
  border-radius: 2rem;
  width: 30%;
  height: 30%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleArea = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 1rem;
`;

const TitleBox = styled.div`
  font-size: 2rem;
  font-weight: 500;
  width: 60%;
  padding-left: 2rem;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 33%;
  width: 100%;
`;

const InfoTitle = styled.label`
  width: 20%;
`;

const EditInputBox = styled.input`
  width: 60%;
  height: 60%;
  font-size: 1rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  outline: none;
  border-radius: 10px;
  border: 1px solid #9a9a9a;
  margin-right: 1rem;
`;

const EditButton = styled.button``;
