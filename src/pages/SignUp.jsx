import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import InfoState from "../components/InfoState";
import JoinTypeButton from "../components/JoinTypeButton";
import {useNavigate} from "react-router-dom";

const specialized = [
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

// eslint-disable-next-line
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
const numExp = /[0-9]/g;
const spaceExp = /\s/;
const engExp = /[a-zA-Z]/g;

const SignUp = ({setHeader}) => {
  const [idStateMessage, setIdStateMessage] = useState(" ");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordVerifyMessage, setPasswordVerifyMessage] = useState("");
  const [emailStateMessage, setEmailStateMessage] = useState("");
  const [nameStateMessage, setNameStateMessage] = useState("");
  const [majorStateMessage, setMajorStateMessage] = useState("");
  const [studentIdStateMessage, setStudentIdStateMessage] = useState("");
  const [loginId, setLoginId] = useState("");
  const email = "";
  const [originEmail, setOriginEmail] = useState("");
  const [joinType, setJoinType] = useState("");
  const [major, setMajor] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();
  setHeader(false);

  const getValue = (text) => {
    setJoinType(text);
  };

  async function IdSet(text) {
    setLoginId(text);
  }

  async function OriginEmailSet(text) {
    setOriginEmail(text);
  }

  async function Sign() {
    if (
      (await IdValid()) &
      (await EmailValid()) &
      PasswordValid() &
      PasswordVerifyValid() &
      NameValid() &
      MajorValid() &
      StudentIdValid()
    ) {
      SignInfo();
    } else {
      console.log(
        originEmail,
        joinType,
        loginId,
        major,
        name,
        password,
        studentId,
        phoneNumber,
        nickName
      );
      alert("가입정보를 정확히 입력해주세요.");
    }
  }

  function IdValid() {
    return new Promise((resolve) => {
      if (loginId === "") {
        setIdStateMessage("아이디를 정확히 입력해주세요.");
        resolve(false);
      } else if (regExp.test(loginId)) {
        setIdStateMessage("아이디에는 특수문자를 입력할 수 없습니다.");
        resolve(false);
      } else if (korExp.test(loginId)) {
        setIdStateMessage("아이디에는 한글을 포함할 수 없습니다.");
        resolve(false);
      } else if (spaceExp.test(loginId)) {
        setIdStateMessage("아이디에는 공백을 포함할 수 없습니다.");
        resolve(false);
      } else if (loginId.length <= 2) {
        setIdStateMessage("아이디는 세글자 이상으로 설정해주세요.");
      } else {
        const data = {
          loginId,
        };
        axios
          .post("http://3.39.36.239:8080/api/auth/check/id", data)
          .then(() => {
            setIdStateMessage("사용 가능한 아이디입니다.");
            resolve(true);
          })
          .catch((error) => {
            if (error.response.status === 409) {
              setIdStateMessage("이미 사용 중인 아이디입니다.");
            }
            resolve(false);
          });
      }
    });
  }

  const PasswordValid = () => {
    if (password === "") {
      setPasswordMessage("비밀번호를 정확히 입력해주세요.");
      return false;
    } else if (password.length < 8 || password.length > 20) {
      setPasswordMessage("비밀번호의 길이는 8-20자 이내여야 합니다.");
      return false;
    } else if (!regExp.test(password)) {
      setPasswordMessage("특수문자가 입력되지 않았습니다.");
      return false;
    } else if (korExp.test(password)) {
      setPasswordMessage("비밀번호에는 한글을 포함할 수 없습니다.");
      return false;
    } else if (!numExp.test(password)) {
      setPasswordMessage("비밀번호에는 숫자를 포함해야 합니다.");
      return false;
    } else if (spaceExp.test(password)) {
      setPasswordMessage("비밀번호에는 공백을 포함할 수 없습니다.");
      return false;
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
      return true;
    }
  };

  const PasswordVerifyValid = () => {
    if (passwordVerify === "") {
      setPasswordVerifyMessage("비밀번호 확인을 입력해주세요.");
      return false;
    } else if (password !== passwordVerify) {
      setPasswordVerifyMessage("비밀번호와 일치하지 않습니다.");
      return false;
    } else {
      setPasswordVerifyMessage("비밀번호와 일치합니다.");
      return true;
    }
  };

  function EmailValid() {
    return new Promise((resolve) => {
      if (originEmail === "") {
        setEmailStateMessage("이메일을 정확하게 입력하세요.");
        resolve(false);
      } else if (regExp.test(originEmail)) {
        setEmailStateMessage("이메일에는 특수문자를 입력할 수 없습니다.");
        resolve(false);
      } else if (korExp.test(originEmail)) {
        setEmailStateMessage("이메일에는 한글을 포함할 수 없습니다.");
        resolve(false);
      } else if (spaceExp.test(originEmail)) {
        setEmailStateMessage("이메일에는 공백을 포함할 수 없습니다.");
        resolve(false);
      } else {
        const data = {
          email: originEmail + "@suwon.ac.kr",
        };
        axios
          .post("http://3.39.36.239:8080/api/auth/check/email", data)
          .then(() => {
            setEmailStateMessage("사용 가능한 이메일입니다.");
            resolve(true);
          })
          .catch((error) => {
            if (error.response.status === 409) {
              setEmailStateMessage("이미 사용 중인 이메일입니다.");
            }
            resolve(false);
          });
      }
    });
  }

  const NameValid = () => {
    if (name === "") {
      setNameStateMessage("이름을 정확히 입력해주세요.");
      return false;
    } else if (regExp.test(name)) {
      setNameStateMessage("이름에는 특수문자를 입력할 수 없습니다.");
      return false;
    } else if (numExp.test(name)) {
      setNameStateMessage("이름에는 숫자를 포함할 수 없습니다.");
      return false;
    } else if (spaceExp.test(name)) {
      setNameStateMessage("이름에는 공백을 포함할 수 없습니다.");
      return false;
    } else {
      setNameStateMessage("사용 가능한 이름입니다.");
      return true;
    }
  };

  const MajorValid = () => {
    if (major === "" || major === "전공을 선택하세요") {
      setMajorStateMessage("전공을 선택해주세요.");
      return false;
    } else {
      setMajorStateMessage("");
      return true;
    }
  };

  const StudentIdValid = () => {
    if (studentId === "") {
      setStudentIdStateMessage("학번을 입력해주세요.");
      return false;
    } else if (regExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 특수문자가 포함되지 않습니다.");
      return false;
    } else if (korExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 한글이 포함되지 않습니다.");
      return false;
    } else if (spaceExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 공백이 포함되지 않습니다.");
      return false;
    } else if (engExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 영문이 포함되지 않습니다.");
      return false;
    } else if (studentId.length !== 8) {
      setStudentIdStateMessage("학번의 길이는 8자입니다.");
      return false;
    } else {
      setStudentIdStateMessage("");
      return true;
    }
  };
  setHeader(false);
  const SignInfo = () => {
    const data = {
      email: originEmail + "@suwon.ac.kr",
      joinType,
      loginId,
      major,
      name,
      password,
      studentId,
      phoneNumber,
      nickName,
    };
    if (joinType === "") {
      alert("가입 유형을 선택해주세요.");
    } else {
      axios
        .post("http://3.39.36.239:8080/api/auth/join", data)
        .then((response) => {
          console.log(
            email,
            joinType,
            loginId,
            major,
            name,
            password,
            studentId,
            phoneNumber,
            nickName
          );
          alert("재학생 인증 메일 전송 완료");
          navigate("/EmailAuth", {state: {CheckEmail: data}});
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("가입 정보를 정확히 입력해주세요.");
          } else if (error.response.status === 422) {
            alert("422번 비번 형식 오류");
          }
          if (error.response.status === 500) {
            alert("서버 오류입니다. 관리자에게 문의하세요.");
          }
        });
    }
  };

  return (
    <PageArea>
      <img
        alt="Flag 로고"
        className="Logo"
        src="../images/logo-White.PNG"
        width="200"
        height="100"
        style={{marginBottom: 40}}
        onClick={() => navigate("/")}
      />
      <SignUpArea>
        <RelativeArea>
          <InfoState message={idStateMessage} />
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
          <FontAwesomeIcon
            icon={faUser}
            style={{
              color: "white",
              position: "absolute",
              left: "390px",
              top: "42px",
            }}
          />
        </RelativeArea>
        <RelativeArea>
          <InfoState message={passwordMessage} />
          <WriteArea
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FontAwesomeIcon
            icon={faLock}
            style={{
              color: "white",
              position: "absolute",
              left: "390px",
              top: "42px",
            }}
          />
        </RelativeArea>
        <RelativeArea>
          <InfoState message={passwordVerifyMessage} />
          <WriteArea
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setPasswordVerify(e.target.value);
            }}
          />
          <FontAwesomeIcon
            icon={faLock}
            style={{
              color: "white",
              position: "absolute",
              left: "390px",
              top: "42px",
            }}
          />
        </RelativeArea>
        <RelativeArea>
          <InfoState message={emailStateMessage} />
          <WriteArea
            type="text"
            placeholder="E-Mail"
            onChange={(e) => {
              OriginEmailSet(e.target.value);
            }}
            onBlur={() => {
              EmailValid();
            }}
          />
          <SuwonEmail>@suwon.ac.kr</SuwonEmail>
        </RelativeArea>
        <RelativeArea>
          <InfoState message={nameStateMessage} />
          <WriteArea
            type="text"
            placeholder="이름"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </RelativeArea>
        <RelativeArea>
          <InfoState message={majorStateMessage} />
          <SelectSpecialize
            onChange={(e) => {
              setMajor(e.target.value);
            }}
          >
            {specialized.map((special) => (
              <option value={special.value}>{special.label}</option>
            ))}
          </SelectSpecialize>
        </RelativeArea>
        <RelativeArea>
          <InfoState message={studentIdStateMessage} />
          <WriteArea
            type="text"
            placeholder="학번"
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
          />
        </RelativeArea>
        <WriteArea
          type="text"
          placeholder="전화번호"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <RelativeArea>
          <WriteArea
            type="text"
            placeholder="닉네임"
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </RelativeArea>
        <JoinTypeButton getValue={getValue} />
        <AccountButton onClick={() => Sign()} fullWidth variant="contained">
          가입하기
        </AccountButton>
      </SignUpArea>
    </PageArea>
  );
};

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
  justify-content: center;
  display: flex;
  width: 600px;
  border: 1px solid;
  border-radius: 28px;
`;

const WriteArea = styled.input`
  font-size: 16px;
  color: white;
  padding-right: 30px;
  padding-left: 20px;
  height: 60px;
  width: 350px;
  background-color: #6c6c6c;
  border-radius: 28px;
  border: 0;
  outline: none;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
  ::placeholder {
    color: #ffffffcc;
  }
`;

const RelativeArea = styled.div`
  position: relative;
`;

const SuwonEmail = styled.p`
  color: white;
  position: absolute;
  left: 290px;
  top: 42px;
`;

const AccountButton = styled.button`
  background-color: #378975;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 28px;
  height: 60px;
  width: 400px;
  border: 0;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #38b597;
  }
`;

const SelectSpecialize = styled.select`
  color: white;
  padding-right: 30px;
  padding-left: 20px;
  height: 60px;
  width: 400px;
  background-color: #6c6c6c;
  border-radius: 28px;
  border: 0;
  outline: none;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

export default SignUp;
