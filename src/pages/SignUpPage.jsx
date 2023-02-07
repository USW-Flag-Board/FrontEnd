import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

//1. 가입 정보 props로 전달해야함
//2. 아래 동그라미
//3. 그 외 기타 레이아웃 작업

// eslint-disable-next-line
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
const numExp = /[0-9]/g;
const spaceExp = /\s/;
const engExp = /[a-zA-Z]/g;

const SPECIALIZED = [
  {
    label: "전공을 선택하세요",
    value: "전공을 선택하세요",
  },
  {
    label: "국어국문",
    value: "국어국문",
  },
  {
    label: "컴퓨터SW",
    value: "컴퓨터SW",
  },
];

const SignUpPage = ({setHeader}) => {
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(false);
  const [signUpIndex, setSignUpIndex] = useState(0);

  const NextIndex = () => {
    setSignUpIndex((signUpIndex) => signUpIndex + 1);
  };

  useEffect(() => {
    setHeader(false);
  }, []);

  return (
    <PageArea>
      <SignUpArea>
        <img
          alt="Flag 로고"
          className="Logo"
          src="../images/logo-White.PNG"
          width="200"
          height="100"
          style={{marginBottom: 40, marginTop: 40}}
          onClick={() => navigate("/")}
        />
        {signUpIndex === 0 && <Id_Password setButtonState={setButtonState} />}
        {signUpIndex === 1 && <Privacy setButtonState={setButtonState} />}
        <AccountButton
          className={buttonState ? "open" : "close"}
          disabled={!buttonState}
          onClick={() => NextIndex()}
        >
          Next
        </AccountButton>
      </SignUpArea>
    </PageArea>
  );
};

const Id_Password = ({setButtonState}) => {
  const [idStateMessage, setIdStateMessage] = useState(" ");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordVerifyMessage, setPasswordVerifyMessage] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [checkInfo, setCheckInfo] = useState([false, false, false]);

  const BooleanCheck = (index, state) => {
    setCheckInfo((prevState) =>
      prevState.map((item, idx) => (idx === index ? state : item))
    );
  };

  async function IdSet(text) {
    setLoginId(text);
  }

  function IdValid() {
    if (loginId === "") {
      setIdStateMessage("아이디를 정확히 입력해주세요.");
      BooleanCheck(0, false);
    } else if (regExp.test(loginId)) {
      setIdStateMessage("아이디에는 특수문자를 입력할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (korExp.test(loginId)) {
      setIdStateMessage("아이디에는 한글을 포함할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (spaceExp.test(loginId)) {
      setIdStateMessage("아이디에는 공백을 포함할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (loginId.length <= 2) {
      setIdStateMessage("아이디는 세글자 이상으로 설정해주세요.");
      BooleanCheck(0, false);
    } else {
      const data = {
        loginId,
      };
      axios
        .post("http://3.39.36.239:80/api/auth/check/id", data)
        .then((response) => {
          if (!response.data.payload) {
            setIdStateMessage("사용 가능한 아이디입니다.");
            BooleanCheck(0, true);
          } else {
            setIdStateMessage("이미 사용중인 아이디입니다.");
            BooleanCheck(0, false);
          }
        })
        .catch(() => {
          setIdStateMessage("서버와의 연결에 실패했습니다.");
          BooleanCheck(0, false);
        });
    }
  }

  const PasswordValid = () => {
    if (password === "") {
      setPasswordMessage("비밀번호를 정확히 입력해주세요.");

      BooleanCheck(1, false);
    } else if (password.length < 8 || password.length > 20) {
      setPasswordMessage("비밀번호의 길이는 8-20자 이내여야 합니다.");
      BooleanCheck(1, false);
    } else if (!regExp.test(password)) {
      setPasswordMessage("특수문자가 입력되지 않았습니다.");
      BooleanCheck(1, false);
    } else if (korExp.test(password)) {
      setPasswordMessage("비밀번호에는 한글을 포함할 수 없습니다.");
      BooleanCheck(1, false);
    } else if (!numExp.test(password)) {
      setPasswordMessage("비밀번호에는 숫자를 포함해야 합니다.");
      BooleanCheck(1, false);
    } else if (spaceExp.test(password)) {
      setPasswordMessage("비밀번호에는 공백을 포함할 수 없습니다.");
      BooleanCheck(1, false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
      BooleanCheck(1, true);
    }
  };

  const PasswordVerifyValid = async () => {
    console.log(passwordVerify);
    if (passwordVerify === "") {
      setPasswordVerifyMessage("비밀번호 확인을 입력해주세요.");
      BooleanCheck(2, false);
    } else if (password !== passwordVerify) {
      setPasswordVerifyMessage("비밀번호와 일치하지 않습니다.");
      BooleanCheck(2, false);
    } else {
      setPasswordVerifyMessage("비밀번호와 일치합니다.");
      BooleanCheck(2, true);
    }
  };

  useEffect(() => {
    setButtonState(checkInfo[0] & checkInfo[1] & checkInfo[2]);
  }, [checkInfo]);

  return (
    <>
      <IntroduceArea>
        로그인에 사용할
        <br />
        아이디, 비밀번호를 입력해주세요
      </IntroduceArea>
      <RelativeArea>
        <WriteArea
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            IdSet(e.target.value);
          }}
          onBlur={() => {
            IdValid();
          }}
        />
        <Icon icon={faUser} />
        <InfoState>{idStateMessage}</InfoState>
      </RelativeArea>
      <RelativeArea>
        <WriteArea
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
            PasswordValid();
          }}
        />
        <Icon icon={faLock} />
        <InfoState>{passwordMessage}</InfoState>
      </RelativeArea>
      <RelativeArea>
        <WriteArea
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPasswordVerify(e.target.value);
          }}
          onBlur={() => {
            PasswordVerifyValid();
          }}
        />
        <Icon icon={faLock} />
        <InfoState>{passwordVerifyMessage}</InfoState>
      </RelativeArea>
    </>
  );
};

const Privacy = ({setButtonState}) => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickName, setNickName] = useState("");
  const [major, setMajor] = useState("");
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
    console.log(checkInfo);
  };

  const NameValid = () => {
    if (name === "") {
      setNameMessage("이름이 입력되지 않았습니다.");
      BooleanCheck(0, false);
    } else if (regExp.test(name)) {
      setNameMessage("이름에는 특수문자를 입력할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (numExp.test(name)) {
      setNameMessage("이름에는 숫자를 포함할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (spaceExp.test(name)) {
      setNameMessage("이름에는 공백을 포함할 수 없습니다.");
      BooleanCheck(0, false);
    } else {
      BooleanCheck(0, true);
    }
  };

  const NickNameValid = () => {
    if (nickName === "") {
      setNickNameMessage("닉네임이 입력되지 않았습니다.");
      BooleanCheck(1, false);
    } else {
      BooleanCheck(1, true);
    }
  };

  const MajorValid = () => {
    if (major === "" || major === "전공을 선택하세요") {
      setMajorMessage("전공을 선택해주세요.");

      BooleanCheck(2, false);
    } else {
      BooleanCheck(2, true);
    }
  };

  const StudentIdValid = () => {
    if (studentId === "") {
      setStudentIdMessage("학번을 입력해주세요.");
      BooleanCheck(3, false);
    } else if (regExp.test(studentId)) {
      setStudentIdMessage("학번에는 특수문자가 포함되지 않습니다.");
      BooleanCheck(3, false);
    } else if (korExp.test(studentId)) {
      setStudentIdMessage("학번에는 한글이 포함되지 않습니다.");
      BooleanCheck(3, false);
    } else if (spaceExp.test(studentId)) {
      setStudentIdMessage("학번에는 공백이 포함되지 않습니다.");
      BooleanCheck(3, false);
    } else if (engExp.test(studentId)) {
      setStudentIdMessage("학번에는 영문이 포함되지 않습니다.");
      BooleanCheck(3, false);
    } else if (studentId.length !== 8) {
      setStudentIdMessage("학번의 길이는 8자입니다.");
      BooleanCheck(3, false);
    } else {
      BooleanCheck(3, true);
    }
  };

  const PhoneNumberValid = () => {
    if (phoneNumber === "") {
      setPhoneNumberMessage("핸드폰 번호를 입력해주세요.");
      BooleanCheck(4, false);
    } else if (phoneNumber.includes("-")) {
      setPhoneNumberMessage("전화번호는 하이폰을 제외한 숫자만 입력해주세요.");
      BooleanCheck(4, false);
    } else if (regExp.test(phoneNumber)) {
      setPhoneNumberMessage("전화번호에는 특수문자가 포함되지 않습니다.");
      BooleanCheck(4, false);
    } else if (korExp.test(phoneNumber)) {
      setPhoneNumberMessage("전화번호에는 한글이 포함되지 않습니다.");
      BooleanCheck(4, false);
    } else if (spaceExp.test(phoneNumber)) {
      setPhoneNumberMessage("전화번호에는 공백이 포함되지 않습니다.");
      BooleanCheck(4, false);
    } else if (engExp.test(phoneNumber)) {
      setPhoneNumberMessage("전화번호에는 영문이 포함되지 않습니다.");
      BooleanCheck(4, false);
    } else {
      BooleanCheck(4, true);
    }
  };

  useEffect(() => {
    setButtonState(
      checkInfo[0] & checkInfo[1] & checkInfo[2] & checkInfo[3] & checkInfo[4]
    );
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
            setName(e.target.value);
          }}
          onBlur={() => {
            NameValid();
          }}
        />
        <InfoState style={{marginBottom: 0}}>{nameMessage}</InfoState>
      </RelativeArea>
      <RelativeArea>
        <WriteArea
          type="text"
          placeholder="닉네임"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          onBlur={(e) => {
            NickNameValid(e);
          }}
        />
        <InfoState style={{marginBottom: 0}}>{nickNameMessage}</InfoState>
      </RelativeArea>
      <RelativeArea>
        <SelectSpecialize
          onChange={(e) => {
            setMajor(e.target.value);
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
        <InfoState style={{marginBottom: 0}}>{majorMessage}</InfoState>
      </RelativeArea>
      <RelativeArea>
        <WriteArea
          type="text"
          placeholder="학번"
          onChange={(e) => {
            setStudentId(e.target.value);
          }}
          onBlur={() => {
            StudentIdValid();
          }}
        />
        <InfoState style={{marginBottom: 0}}>{studentIdMessage}</InfoState>
      </RelativeArea>
      <RelativeArea>
        <WriteArea
          type="text"
          placeholder="ex) 01012345678"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          onBlur={() => {
            PhoneNumberValid();
          }}
        />
        <InfoState style={{marginBottom: 0}}>{phoneNumberMessage}</InfoState>
      </RelativeArea>
    </>
  );
};

const InfoState = styled.div`
  color: rgba(163, 163, 163, 0.8);
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: end;
  height: 11px;
  margin-bottom: 20px;
`;

const PageArea = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SignUpArea = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 600px;
  height: 800px;
  border: 2px solid #9a9a9a;
  border-radius: 20px;
`;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 400px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
`;

const WriteArea = styled.input`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  padding-right: 30px;
  padding-left: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 50px;
  width: 350px;
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
    color: rgba(255, 255, 255, 0.8);
  }
`;

const RelativeArea = styled.div`
  position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
  position: absolute;
  left: 390px;
  top: 32px;
`;

const AccountButton = styled.button`
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 28px;
  height: 60px;
  width: 400px;
  border: 0;
  transition: 0.2s;
  position: absolute;
  bottom: 200px;

  &.close {
    background: #8e8e8e;
    :hover {
      background: #8e8e8e;
    }
  }

  &.open {
    background: #378975;
    :hover {
      transition: 0.2s;
      background: #38b597;
    }
  }
`;

const SelectSpecialize = styled.select`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  padding-right: 30px;
  padding-left: 20px;
  height: 54px;
  width: 404px;
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

export default SignUpPage;
