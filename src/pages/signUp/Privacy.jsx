import { useEffect, useState } from "react";
import styled from "styled-components";
import { SPECIALIZED, nameRegex, studentIdRegex } from "../../constants/signUp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/slice/signUpSlice";

const Privacy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState(false);
  const [state, setState] = useState({
    name: "",
    studentId: "",
    nickname: "",
    major: "",
    nameMessage: "",
    nickNameMessage: "",
    studentIdMessage: "",
  });
  const { name, major, nickname, studentId } = state;
  const { studentIdMessage, nickNameMessage, nameMessage } = state;
  const data = useSelector((state) => state.signUpSlice);
  console.log(data);
  const updateState = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    updateState(name, value);

    switch (name) {
      case "name":
        updateState(
          "nameMessage",
          nameRegex.test(value)
            ? true
            : "이름은 한글, 영문 대소문자, 띄어쓰기, 특수문자(-, ')만 입력 가능하며, 최소 2자 이상, 최대 20자 이하로 입력해야 합니다."
        );
        break;
      case "nickname":
        updateState(
          "nickNameMessage",
          value.length >= 3
            ? "사용가능한 닉네임입니다."
            : "3글자 이상 입력해주세요."
        );
        break;
      case "studentId":
        updateState(
          "studentIdMessage",
          studentIdRegex.test(value)
            ? true
            : "학번은 숫자 8자리로 입력해야 합니다."
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const isAllValid =
      nameMessage === true &&
      major !== "전공을 선택해주세요" &&
      studentIdMessage === true &&
      nickNameMessage === "사용가능한 닉네임입니다.";
    setButtonState(isAllValid);
    if (isAllValid) {
      dispatch(
        setUserData({
          major: major,
          name: name,
          nickname: nickname,
          studentId: studentId,
        })
      );
    }
  }, [nameMessage, nickNameMessage, major, studentIdMessage]);

  return (
    <PageArea>
      <PageBox>
        <InputArea>
          <IntroduceArea>사용자 정보를 입력하세요.</IntroduceArea>
          <WriteArea
            type="text"
            placeholder="이름"
            name="name"
            onChange={handleInputChange}
          />
          <InfoState>{nameMessage}</InfoState>
          <WriteArea
            type="text"
            placeholder="닉네임"
            name="nickname"
            onChange={handleInputChange}
          />
          <InfoState>{nickNameMessage}</InfoState>
          <SelectSpecialize name="major" onChange={handleInputChange}>
            <option value="전공을 선택해주세요">전공을 선택해주세요.</option>
            {SPECIALIZED.map((special, index) => (
              <option
                className="major-option"
                value={special.value}
                key={index}
              >
                {special.label}
              </option>
            ))}
          </SelectSpecialize>
          <InfoState />
          <WriteArea
            type="text"
            placeholder="학번"
            name="studentId"
            onChange={handleInputChange}
          />
          <InfoState>{studentIdMessage}</InfoState>
        </InputArea>
        <ButtonBox>
          <Button
            type="button"
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={() => navigate("/signUp/emailAuth")}
          >
            계속
          </Button>
        </ButtonBox>
      </PageBox>
    </PageArea>
  );
};

export default Privacy;

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
  @media (max-width: 480px) {
    border: none;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
`;

const WriteArea = styled.input`
  font-size: 1rem;
  color: black;
  padding: 0 1.9rem 0 1.25rem;
  height: 3.1rem;
  width: 80%;
  border: 1px solid #495057;
  outline: none;
  border-radius: 10px;
  margin: 0.6rem 1.25rem;
  :focus {
    border-color: black;
  }
  ::placeholder {
    color: #9a9a9a;
  }
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  width: 75%;
  font-size: 0.75rem;
  justify-content: end;
  height: 0.7rem;
  margin-bottom: 1.2rem;
`;

const SelectSpecialize = styled.select`
  font-size: 1rem;
  color: #9a9a9a;
  padding-left: 1.25rem;
  border-radius: 10px;
  height: 3.4rem;
  width: 80%;
  border: 1px solid #495057;
  outline: none;
  margin: 1.25rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  .major-option {
    color: black;
  }
`;

const ButtonBox = styled.div`
  width: 80%;
  margin-bottom: 2rem;
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
  &.close {
    background: #a5d8ff;
  }

  &.open {
    background: #228be6;
  }
`;
