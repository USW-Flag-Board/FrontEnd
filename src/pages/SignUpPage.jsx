import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faCircle} from "@fortawesome/free-regular-svg-icons";
import {faLock, faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {JoinTypeButton} from "../components";
import axios from "axios";

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

//1. 잘못된 값 입력시, 빨간색으로 ㄱㄱ
//2. 동그라미 누르면 뒤로 가기? 고민중

const SignUpPage = ({setHeader}) => {
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(false);
  const [signUpIndex, setSignUpIndex] = useState(0);
  const [joinType, setJoinType] = useState("");
  const [loginId, setLoginId] = useState("");
  const [major, setMajor] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");

  const NextIndex = () => {
    setSignUpIndex((signUpIndex) => signUpIndex + 1);
  };

  useEffect(() => {
    setHeader(false);
    if (signUpIndex === 5) {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  }, [signUpIndex]);

  return (
    <PageArea>
      <SignUpArea>
        <img
          alt="Flag 로고"
          className="Logo"
          src="../images/logo-White.PNG"
          width="200"
          height="100"
          style={{marginBottom: 20, marginTop: 40}}
          onClick={() => navigate("/")}
        />
        {signUpIndex === 0 && <ServiceAgree setButtonState={setButtonState} />}
        {signUpIndex === 1 && (
          <JoinTypeSelect
            setButtonState={setButtonState}
            joinType={joinType}
            setJoinType={setJoinType}
          />
        )}
        {signUpIndex === 2 && (
          <Id_Password
            setButtonState={setButtonState}
            setLoginId={setLoginId}
            setPassword={setPassword}
          />
        )}
        {signUpIndex === 3 && (
          <Privacy
            setButtonState={setButtonState}
            setName={setName}
            setNickName={setNickName}
            setMajor={setMajor}
            setStudentId={setStudentId}
            setPhoneNumber={setPhoneNumber}
          />
        )}
        {signUpIndex === 4 && (
          <EmailAuth
            setButtonState={setButtonState}
            joinType={joinType}
            loginId={loginId}
            major={major}
            name={name}
            nickName={nickName}
            password={password}
            phoneNumber={phoneNumber}
            studentId={studentId}
          />
        )}
        <AccountButton
          className={buttonState ? "open" : "close"}
          disabled={!buttonState}
          onClick={() => NextIndex()}
        >
          {signUpIndex === 4 ? "회원가입 완료" : "Next"}
        </AccountButton>
      </SignUpArea>
      <RadioArea>
        <Radio className={signUpIndex === 0 && "current"} />
        <Radio className={signUpIndex === 1 && "current"} />
        <Radio className={signUpIndex === 2 && "current"} />
        <Radio className={signUpIndex === 3 && "current"} />
        <Radio className={signUpIndex === 4 && "current"} />
      </RadioArea>
    </PageArea>
  );
};

const ServiceAgree = ({setButtonState}) => {
  const [allAgree, setAllAgree] = useState(false);
  const [AccountAgree, setAccountAgree] = useState(false);
  const [personalAgree, setPersonalAgree] = useState(false);

  useEffect(() => {
    if (AccountAgree & personalAgree) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [AccountAgree, personalAgree]);

  return (
    <>
      <IntroduceArea>
        Flaground
        <br />
        서비스 약관에 동의해 주세요.
      </IntroduceArea>
      <ServiceAgreeArea>
        <AllCheckButton setAllAgree={setAllAgree} />
        <AllAgreeMessage>
          전체 동의는 필수/선택 정보에 대한 동의가 포함되어 있으며
          <br />
          개별적으로도 동의하실 수 있습니다.
        </AllAgreeMessage>
        <RowLine />
        <CheckButton
          setAccountAgree={setAccountAgree}
          message={"[필수] FLAG 계정 약관"}
          allAgree={allAgree}
        />
        <CheckButton
          setAccountAgree={setPersonalAgree}
          message={"[필수] 개인정보 수집 및 이용 동의"}
          allAgree={allAgree}
        />
      </ServiceAgreeArea>
    </>
  );
};
const AllCheckButton = ({setAllAgree}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setAllAgree(toggle);
  }, [toggle]);

  return (
    <>
      {toggle ? (
        <RelativeArea>
          <AgreeButton
            icon={faCircleCheck}
            onClick={() => setToggle(!toggle)}
          />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            모두 동의합니다.
          </AgreeMessage>
        </RelativeArea>
      ) : (
        <RelativeArea>
          <AgreeButton icon={faCircle} onClick={() => setToggle(!toggle)} />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            모두 동의합니다.
          </AgreeMessage>
        </RelativeArea>
      )}
    </>
  );
};

const CheckButton = ({setAccountAgree, message, allAgree}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(allAgree);
  }, [allAgree]);

  useEffect(() => {
    setAccountAgree(toggle);
  }, [toggle]);

  return (
    <>
      {toggle ? (
        <RelativeArea>
          <AgreeButton
            icon={faCircleCheck}
            onClick={() => setToggle(!toggle)}
          />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            {message}
          </AgreeMessage>
        </RelativeArea>
      ) : (
        <RelativeArea>
          <AgreeButton icon={faCircle} onClick={() => setToggle(!toggle)} />
          <AgreeMessage onClick={() => setToggle(!toggle)}>
            {message}
          </AgreeMessage>
        </RelativeArea>
      )}
    </>
  );
};

const JoinTypeSelect = ({setButtonState, joinType, setJoinType}) => {
  const getJoinTypeValue = (text) => {
    setJoinType(text);
  };

  useEffect(() => {
    if (joinType !== "") {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [joinType]);

  return (
    <>
      <IntroduceArea>회원구분</IntroduceArea>
      <JoinTypeButton getJoinTypeValue={getJoinTypeValue} />
    </>
  );
};

const Id_Password = ({setButtonState, setLoginId, setPassword}) => {
  const [idStateMessage, setIdStateMessage] = useState(" ");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordVerifyMessage, setPasswordVerifyMessage] = useState("");
  const [loginIdData, setLoginIdData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [checkInfo, setCheckInfo] = useState([false, false, false]);

  const BooleanCheck = (index, state) => {
    setCheckInfo((prevState) =>
      prevState.map((item, idx) => (idx === index ? state : item))
    );
  };

  async function IdSet(text) {
    setLoginIdData(text);
  }

  function IdValid() {
    if (loginIdData === "") {
      setIdStateMessage("아이디를 정확히 입력해주세요.");
      BooleanCheck(0, false);
    } else if (regExp.test(loginIdData)) {
      setIdStateMessage("아이디에는 특수문자를 입력할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (korExp.test(loginIdData)) {
      setIdStateMessage("아이디에는 한글을 포함할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (spaceExp.test(loginIdData)) {
      setIdStateMessage("아이디에는 공백을 포함할 수 없습니다.");
      BooleanCheck(0, false);
    } else if (loginIdData.length <= 2) {
      setIdStateMessage("아이디는 세글자 이상으로 설정해주세요.");
      BooleanCheck(0, false);
    } else {
      axios
        .post("http://3.39.36.239:80/api/auth/check/id", {
          loginId: loginIdData,
        })
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
    if (passwordData === "") {
      setPasswordMessage("비밀번호를 정확히 입력해주세요.");

      BooleanCheck(1, false);
    } else if (passwordData.length < 8 || passwordData.length > 20) {
      setPasswordMessage("비밀번호의 길이는 8-20자 이내여야 합니다.");
      BooleanCheck(1, false);
    } else if (!regExp.test(passwordData)) {
      setPasswordMessage("특수문자가 입력되지 않았습니다.");
      BooleanCheck(1, false);
    } else if (korExp.test(passwordData)) {
      setPasswordMessage("비밀번호에는 한글을 포함할 수 없습니다.");
      BooleanCheck(1, false);
    } else if (!numExp.test(passwordData)) {
      setPasswordMessage("비밀번호에는 숫자를 포함해야 합니다.");
      BooleanCheck(1, false);
    } else if (spaceExp.test(passwordData)) {
      setPasswordMessage("비밀번호에는 공백을 포함할 수 없습니다.");
      BooleanCheck(1, false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
      BooleanCheck(1, true);
    }
  };

  const PasswordVerifyValid = async () => {
    if (passwordVerify === "") {
      setPasswordVerifyMessage("비밀번호 확인을 입력해주세요.");
      BooleanCheck(2, false);
    } else if (passwordData !== passwordVerify) {
      setPasswordVerifyMessage("비밀번호와 일치하지 않습니다.");
      BooleanCheck(2, false);
    } else {
      setPasswordVerifyMessage("비밀번호와 일치합니다.");
      BooleanCheck(2, true);
    }
  };

  useEffect(() => {
    setButtonState(checkInfo[0] & checkInfo[1] & checkInfo[2]);
    setLoginId(loginIdData);
    setPassword(passwordData);
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
            setPasswordData(e.target.value);
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
        <InfoState style={{marginBottom: 0}}>{nameMessage}</InfoState>
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
        <InfoState style={{marginBottom: 0}}>{nickNameMessage}</InfoState>
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
        <InfoState style={{marginBottom: 0}}>{majorMessage}</InfoState>
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
        <InfoState style={{marginBottom: 0}}>{studentIdMessage}</InfoState>
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
        <InfoState style={{marginBottom: 0}}>{phoneNumberMessage}</InfoState>
      </RelativeArea>
    </>
  );
};

const EmailAuth = ({
  setButtonState,
  joinType,
  loginId,
  major,
  name,
  nickName,
  password,
  phoneNumber,
  studentId,
}) => {
  const [originEmailData, setOriginEmailData] = useState("");
  const [emailStateMessage, setEmailStateMessage] = useState("");
  const [rePost, setRePost] = useState(false);
  const [certification, setCertification] = useState("");

  const EmailValid = () => {
    if (originEmailData === "") {
      setEmailStateMessage("이메일을 정확히 입력해주세요.");
    } else {
      axios
        .post("http://3.39.36.239:80/api/auth/check/email", {
          email: originEmailData + "@suwon.ac.kr",
        })
        .then((response) => {
          if (response.data.payload) {
            setEmailStateMessage("이미 사용중인 이메일입니다.");
          } else {
            setEmailStateMessage("");
            setButtonState(true);
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setEmailStateMessage("이메일 앞부분만 정확하게 입력해주세요.");
          }
        });
    }
  };

  const AuthEmailPost = () => {
    axios
      .post("http://3.39.36.239:80/api/auth/join", {
        email: originEmailData + "@suwon.ac.kr",
        joinType: joinType,
        loginId: loginId,
        major: major,
        name: name,
        nickName: nickName,
        password: password,
        phoneNumber: phoneNumber,
        studentId: studentId,
      })
      .then(() => {
        alert("메일이 전송되었습니다.");
        setRePost(true);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("서버 에러입니다. 관리자에게 문의해주세요.");
        }
      });
  };

  return (
    <>
      <IntroduceArea>수원대학교 이메일 인증</IntroduceArea>
      <EmailInputArea>
        <StaticText>이메일</StaticText>
        <WriteArea
          style={{
            marginLeft: 73,
            paddingLeft: 80,
            width: 210,
            marginRight: 10,
          }}
          onChange={(e) => {
            setOriginEmailData(e.target.value);
          }}
          onBlur={() => EmailValid()}
        ></WriteArea>
        <StaticText style={{left: 270}}>@suwon.ac.kr</StaticText>
        <AuthButton onClick={() => AuthEmailPost()}>
          {rePost ? "재전송" : "인증번호\n발송"}
        </AuthButton>
      </EmailInputArea>
      <InfoState style={{width: "40%"}}>{emailStateMessage}</InfoState>
      <WriteArea
        onChange={(e) => {
          setCertification(e.target.value);
        }}
      ></WriteArea>
      <RowLine style={{marginTop: 50, width: 450}} />
      <IntroduceArea style={{fontSize: 15, justifyContent: "center"}}>
        FLAGround 가입을 환영합니다.
      </IntroduceArea>
    </>
  );
};

const EmailInputArea = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justifycontent: flex-start;
`;

const AuthButton = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  background: #181818;
  width: 90px;
  height: 50px;
  margin: 10px 0px 10px 0px;
  padding: 0px 13px 0px 13px;
  transition: 0.2s;
  white-space: pre-line;
  &:hover {
    transition: 0.2s;
    border-color: gainsboro;
    background: #2b2b2b;
  }
`;

const ServiceAgreeArea = styled.div`
  display: flex;
  width: 450px;
  justifycontent: flex-start;
  flex-direction: column;
`;

const AgreeMessage = styled.div`
  font-size: 20px;
  font-weight: 100;
  line-height: 33px;
  width: 400px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  margin-left: 5px;
  text-align: left;
  display: inline-flex;
  user-select: none;
`;

const AllAgreeMessage = styled.div`
  color: rgba(150, 150, 150, 0.8);
  font-size: 16px;
  width: 450px;
  padding-left: 25px;
  line-height: 25px;
  font-weight: 600;
`;

const RowLine = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #9a9a9a;
  width: 100%;
  opacity: 0.6;
`;

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

const RadioArea = styled.div`
  width: 220px;
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Radio = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 5px;
  transition: 0.2s;
  background: none;
  border: 2px solid #9a9a9a;
  border-radius: 20px;

  &.current {
    transition: 0.2s;
    background: #9a9a9a;
  }
`;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  margin-bottom: 45px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;

const WriteArea = styled.input`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  padding-right: 30px;
  padding-left: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
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
    color: rgba(255, 255, 255, 0.8);
  }
`;

const RelativeArea = styled.div`
  position: relative;
`;

const StaticText = styled.div`
  color: white;
  position: absolute;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  left: 95px;
  top: 28px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
  position: absolute;
  left: 430px;
  top: 28px;
`;

const AccountButton = styled.button`
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 28px;
  height: 60px;
  width: 450px;
  border: 0;
  transition: 0.2s;
  bottom: 230px;

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

const AgreeButton = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: 0px;
  display: inline-flex;
`;

export default SignUpPage;
