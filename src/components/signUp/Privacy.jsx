import { useEffect, useState } from "react";
import styled from "styled-components";
import { SPECIALIZED, nameRegex, studentIdRegex } from "../../constants/signUp";

const Privacy = ({ setButtonState, setPrivacy, signUpData }) => {
  const [state, setState] = useState({
    name: "",
    studentId: "",
    nickname: "",
    major: "",
    nameMessage: "",
    studentIdMessage: "",
    nickNameMessage: "",
    majorMessage: "",
  });
  const { name, major, nickname, studentId } = state;
  const { studentIdMessage, nickNameMessage, majorMessage, nameMessage } =
    state;
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
            ? "O"
            : "이름은 한글, 영문 대소문자, 띄어쓰기, 특수문자(-, ')만 입력 가능하며, 최소 2자 이상, 최대 20자 이하로 입력해야 합니다."
        );
        break;
      case "nickname":
        updateState(
          "nickNameMessage",
          value.length >= 3 ? "O" : "3글자 이상 입력해주세요."
        );
        break;
      case "major":
        updateState("majorMessage", value === "전공을 선택해주세요" ? "" : "O");
        break;
      case "studentId":
        updateState(
          "studentIdMessage",
          studentIdRegex.test(value)
            ? "O"
            : "학번은 숫자 8자리로 입력해야 합니다."
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const isAllValid =
      Object.values(state)
        .slice(0, 5)
        .every((value) => value !== "" && value !== undefined) &&
      Object.values(state)
        .slice(5)
        .every((message) => message === "O");
    setButtonState(isAllValid);
    if (isAllValid) {
      setPrivacy({
        ...signUpData,
        major: major,
        name: name,
        nickname: nickname,
        studentId: studentId,
      });
    }
  }, [state]);

  return (
    <IdPasswordArea>
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
          <option value={special.value} key={index}>
            {special.label}
          </option>
        ))}
      </SelectSpecialize>
      <InfoState>{majorMessage}</InfoState>
      <WriteArea
        type="text"
        placeholder="학번"
        name="studentId"
        onChange={handleInputChange}
      />
      <InfoState>{studentIdMessage}</InfoState>
    </IdPasswordArea>
  );
};

export default Privacy;

const IdPasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-top: 1.25rem;
  margin-bottom: 2.8rem;
`;

const WriteArea = styled.input`
  font-size: 1rem;
  color: black;
  padding: 0 1.9rem 0 1.25rem;
  height: 3.1rem;
  width: 80%;
  border-radius: 1.9rem;
  border: 2px solid gainsboro;
  outline: none;
  margin: 0.6rem 1.25rem;
  :focus {
    border-color: black;
  }
  ::placeholder {
    color: black;
  }
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  width: 75%;
  font-size: 0.75rem;
  justify-content: end;
  height: 0.7rem;
  margin-bottom: 1.25rem;
`;

const SelectSpecialize = styled.select`
  font-size: 1rem;
  color: black;
  padding-left: 1.25rem;
  height: 3.4rem;
  width: 80%;
  border-radius: 1.9rem;
  border: 2px solid gainsboro;
  outline: none;
  margin: 1.25rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  :focus {
    border-color: black;
  }
`;
