import { useState, useEffect } from "react";
import styled from "styled-components";
import { regExp, korExp, numExp,spaceExp, engExp, SPECIALIZED } from "../../constants/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Privacy = ({
    setButtonState,
    setName,
    setNickName,
    setMajor,
    setStudentId,
    setPhoneNumber,
  }) => {
    const [nameData, setNameData] = useState("");
    const [studentIdData, setStudentIdData] = useState("");
    const [phoneNumberData, setPhoneNumberData] = useState("");
    const [nickNameData, setNickNameData] = useState("");
    const [majorData, setMajorData] = useState("");
    const [nameMessage, setNameMessage] = useState(" ");
    const [nickNameMessage, setNickNameMessage] = useState("");
    const [majorMessage, setMajorMessage] = useState("");
    const [studentIdMessage, setStudentIdMessage] = useState("");
    const [phoneNumberMessage, setPhoneNumberMessage] = useState("");
    const [checkInfo, setCheckInfo] = useState([
      false,
      false,
      false,
      false,
      false,
    ]);
  
    const BooleanCheck = (index, state) => {
      setCheckInfo((prevState) =>
        prevState.map((item, idx) => (idx === index ? state : item))
      );
    };
  
    const NameValid = () => {
      if (nameData === "") {
        setNameMessage("이름이 입력되지 않았습니다.");
        BooleanCheck(0, false);
      } else if (regExp.test(nameData)) {
        setNameMessage("이름에는 특수문자를 입력할 수 없습니다.");
        BooleanCheck(0, false);
      } else if (numExp.test(nameData)) {
        setNameMessage("이름에는 숫자를 포함할 수 없습니다.");
        BooleanCheck(0, false);
      } else if (spaceExp.test(nameData)) {
        setNameMessage("이름에는 공백을 포함할 수 없습니다.");
        BooleanCheck(0, false);
      } else {
        setNameMessage("");
        BooleanCheck(0, true);
      }
    };
  
    const NickNameValid = () => {
      if (nickNameData === "") {
        setNickNameMessage("닉네임이 입력되지 않았습니다.");
        BooleanCheck(1, false);
      } else {
        setNickNameMessage("");
        BooleanCheck(1, true);
      }
    };
  
    const MajorValid = () => {
      if (majorData === "" || majorData === "전공을 선택하세요") {
        setMajorMessage("전공을 선택해주세요.");
        BooleanCheck(2, false);
      } else {
        setMajorMessage("");
        BooleanCheck(2, true);
      }
    };
  
    const StudentIdValid = () => {
      if (studentIdData === "") {
        setStudentIdMessage("학번을 입력해주세요.");
        BooleanCheck(3, false);
      } else if (regExp.test(studentIdData)) {
        setStudentIdMessage("학번에는 특수문자가 포함되지 않습니다.");
        BooleanCheck(3, false);
      } else if (korExp.test(studentIdData)) {
        setStudentIdMessage("학번에는 한글이 포함되지 않습니다.");
        BooleanCheck(3, false);
      } else if (spaceExp.test(studentIdData)) {
        setStudentIdMessage("학번에는 공백이 포함되지 않습니다.");
        BooleanCheck(3, false);
      } else if (engExp.test(studentIdData)) {
        setStudentIdMessage("학번에는 영문이 포함되지 않습니다.");
        BooleanCheck(3, false);
      } else if (studentIdData.length !== 8) {
        setStudentIdMessage("학번의 길이는 8자입니다.");
        BooleanCheck(3, false);
      } else {
        setStudentIdMessage("");
        BooleanCheck(3, true);
      }
    };
  
    const PhoneNumberValid = () => {
      if (phoneNumberData === "") {
        setPhoneNumberMessage("핸드폰 번호를 입력해주세요.");
        BooleanCheck(4, false);
      } else if (phoneNumberData.includes("-")) {
        setPhoneNumberMessage("전화번호는 하이폰을 제외한 숫자만 입력해주세요.");
        BooleanCheck(4, false);
      } else if (regExp.test(phoneNumberData)) {
        setPhoneNumberMessage("전화번호에는 특수문자가 포함되지 않습니다.");
        BooleanCheck(4, false);
      } else if (korExp.test(phoneNumberData)) {
        setPhoneNumberMessage("전화번호에는 한글이 포함되지 않습니다.");
        BooleanCheck(4, false);
      } else if (spaceExp.test(phoneNumberData)) {
        setPhoneNumberMessage("전화번호에는 공백이 포함되지 않습니다.");
        BooleanCheck(4, false);
      } else if (engExp.test(phoneNumberData)) {
        setPhoneNumberMessage("전화번호에는 영문이 포함되지 않습니다.");
        BooleanCheck(4, false);
      } else if (phoneNumberData.length !== 11) {
        setPhoneNumberMessage("전화번호를 정확히 입력해주세요.");
        BooleanCheck(3, false);
      } else {
        setPhoneNumberMessage("");
        BooleanCheck(4, true);
      }
    };
  
    useEffect(() => {
      setButtonState(
        checkInfo[0] & checkInfo[1] & checkInfo[2] & checkInfo[3] & checkInfo[4]
      );
      setName(nameData);
      setNickName(nickNameData);
      setMajor(majorData);
      setStudentId(studentIdData);
      setPhoneNumber(phoneNumberData);
    }, [checkInfo]);
  
    return (
      <>
        <IntroduceArea>사용자 정보를 입력하세요.</IntroduceArea>
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="이름"
            key="name"
            onChange={(e) => {
              setNameData(e.target.value);
            }}
            onBlur={() => {
              NameValid();
            }}
          />
          <InfoState style={{ marginBottom: 0 }}>{nameMessage}</InfoState>
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="닉네임"
            onChange={(e) => {
              setNickNameData(e.target.value);
            }}
            onBlur={(e) => {
              NickNameValid(e);
            }}
          />
          <InfoState style={{ marginBottom: 0 }}>{nickNameMessage}</InfoState>
        </RelativeArea>
        <RelativeArea>
          <SelectSpecialize
            onChange={(e) => {
              setMajorData(e.target.value);
            }}
            onBlur={() => {
              MajorValid();
            }}
          >
            {SPECIALIZED.map((special, index) => (
              <option value={special.value} key={index}>
                {special.label}
              </option>
            ))}
          </SelectSpecialize>
          <InfoState style={{ marginBottom: 0 }}>{majorMessage}</InfoState>
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="학번"
            onChange={(e) => {
              setStudentIdData(e.target.value);
            }}
            onBlur={() => {
              StudentIdValid();
            }}
          />
          <InfoState style={{ marginBottom: 0 }}>{studentIdMessage}</InfoState>
        </RelativeArea>
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="ex) 01012345678"
            onChange={(e) => {
              setPhoneNumberData(e.target.value);
            }}
            onBlur={() => {
              PhoneNumberValid();
            }}
          />
          <InfoState style={{ marginBottom: 0 }}>{phoneNumberMessage}</InfoState>
        </RelativeArea>
      </>
    );
  };

export default Privacy;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: black;
  margin-top: 20px;
  margin-bottom: 45px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;

const Icon = styled(FontAwesomeIcon)`
  color: black;
  position: absolute;
  left: 430px;
  top: 28px;
`;

const RelativeArea = styled.div`
  position: relative;
`;

const WriteArea = styled.input`
  font-size: 16px;
  color: black;
  padding: 0 30px 0 20px;
  height: 50px;
  width: 400px;
  background: transparent;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  outline: none;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    border-color: gainsboro;
  }
  ::placeholder {
    color: black;
  }
`;

const InfoState = styled.div`
  color: black;
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: end;
  height: 11px;
  margin-bottom: 20px;
`;

const SelectSpecialize = styled.select`
  font-size: 16px;
  color: black;
  padding-right: 30px;
  padding-left: 20px;
  height: 54px;
  width: 450px;
  background: transparent;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  outline: none;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    border-color: gainsboro;
  }

  option {
    background: #2c2c2c;
  }
`;