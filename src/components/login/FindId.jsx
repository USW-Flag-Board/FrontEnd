import { useState } from "react";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";

const FindId = ({ setFindId }) => {
  const [state, setState] = useState({
    email: "",
    name: "",
    certification: "",
  });
  const [success, setSuccess] = useState(false);
  const { email, name, certification } = state;

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
      name: name,
    };
    try {
      const response = await instance.post("/members/find/id", data);
      if (response.status === 201) {
        document.getElementsByName("name")[0].disabled = true;
        document.getElementsByName("email")[0].disabled = true;
        setSuccess(true);
      }
    } catch (error) {
      const status = error.response.status;
      switch (status) {
        case 409:
          alert("이메일과 이름 일치하지 않습니다.");
          break;
        case 404:
          alert("존재하지 않는 사용자입니다.");
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await instance.post("/members/certification", {
        certification: certification,
        email: email,
      });
      alert(`회원님의 아이디는: ${res.data.payload.loginId}입니다.`);
      setFindId(false);
    } catch (error) {
      const status = error.response.status;
      switch (status) {
        case 409:
          alert("인증번호가 일치하지 않습니다.");
          break;
        case 404:
          alert("아이디/비밀번호 찾기 요청이 존재하지 않습니다.");
          break;
        default:
          break;
      }
    }
  };

  return (
    <ModalArea>
      <ModalBox>
        <TitleBox>
          <Title>아이디 찾기</Title>
        </TitleBox>
        <InputArea>
          <InputBox>
            <ContentLabel>이름</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="text"
                name="name"
                value={state.name}
                onChange={updateState}
              />
            </InfoBox>
          </InputBox>
          <InputBox>
            <ContentLabel>이메일</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="text"
                name="email"
                value={state.email}
                onChange={updateState}
              />
            </InfoBox>
          </InputBox>
          {!success && (
            <InfoState>회원가입 당시 입력한 이메일을 입력해주세요.</InfoState>
          )}
          {success && (
            <>
              <InputBox>
                <ContentLabel>인증번호</ContentLabel>
                <InfoBox>
                  <EditInputBox
                    type="text"
                    name="certification"
                    value={state.certification}
                    onChange={updateState}
                  />
                </InfoBox>
              </InputBox>
            </>
          )}
        </InputArea>
        <ButtonBox>
          <Button type="button" onClick={() => setFindId(false)}>
            취소
          </Button>
          {success ? (
            <Button type="button" onClick={handleSubmit}>
              전송하기
            </Button>
          ) : (
            <Button type="button" onClick={handleSave}>
              인증하기
            </Button>
          )}
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
  font-size: 0.7rem;
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
  font-size: 0.8rem;
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

export default FindId;
