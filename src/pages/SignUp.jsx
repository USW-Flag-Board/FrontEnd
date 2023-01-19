import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import InfoState from "../components/InfoState";
import JoinTypeButton from "../components/JoinTypeButton";

const PageArea = styled("div")({
  width: "100%",
  height: "100vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

const SignUpArea = styled("div")({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: 400,
});

const WriteArea = styled("input")({
  fontSize: "16px",
  color: "white",
  paddingRight: 30,
  paddingLeft: 20,
  height: 60,
  width: 350,
  backgroundColor: "#6c6c6c",
  borderRadius: 28,
  border: 0,
  outline: "none",
  margin: 20,
  marginTop: 10,
  marginBottom: 20,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#575757",
  },
  "::placeholder": {
    color: "#ffffffcc",
  },
});

const AddIcon = styled(FontAwesomeIcon)({
  color: "white",
  position: "absolute",
  left: 390,
  top: 42,
});

const RelativeArea = styled("div")({
  position: "relative",
});

const SuwonEmail = styled("p")({
  color: "white",
  position: "absolute",
  left: 290,
  top: 42,
});

const AccountButton = styled("button")({
  backgroundColor: "#378975",
  color: "#ffffff",
  marginTop: 30,
  marginBottom: 30,
  borderRadius: 28,
  height: 60,
  width: 400,
  border: 0,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#38b597",
  },
});

const SelectSpecialize = styled("select")({
  color: "white",
  paddingRight: 30,
  paddingLeft: 20,
  height: 60,
  width: 400,
  backgroundColor: "#6c6c6c",
  borderRadius: 28,
  border: 0,
  outline: "none",
  margin: 20,
  marginTop: 10,
  marginBottom: 20,
  transition: "0.2s",
  ":hover": {
    transition: "0.2s",
    backgroundColor: "#575757",
  },
});

export default function SignUp() {
  let [idStateMessage, setIdStateMessage] = useState(" ");
  let [passwordMessage, setPasswordMessage] = useState("");
  let [passwordVerifyMessage, setPasswordVerifyMessage] = useState("");
  let [emailStateMessage, setEmailStateMessage] = useState("");
  let [nameStateMessage, setNameStateMessage] = useState("");
  let [majorStateMessage, setMajorStateMessage] = useState("");
  let [studentIdStateMessage, setStudentIdStateMessage] = useState("");
  let [loginId, setLoginId] = useState("");
  let [email, setEmail] = useState("");
  let [originEmail, setOriginEmail] = useState("");
  let [joinType, setJoinType] = useState("");
  let [major, setMajor] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [passwordVerify, setPasswordVerify] = useState("");
  let [studentId, setStudentId] = useState("");
  // eslint-disable-next-line
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
  const numExp = /[0-9]/g;
  const spaceExp = /\s/;
  const engExp = /[a-zA-Z]/g;

  function getValue(text) {
    setJoinType(text);
  }

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

  function Sign() {
    const suwonEmail = originEmail + "@suwon.ac.kr";
    setEmail(suwonEmail);
    IdValid();
    PasswordValid();
    PasswordVerifyValid();
    EmailValid();
    NameValid();
    MajorValid();
    StudentIdValid();
    SignInfo();
  }

  function IdValid() {
    if (loginId === "") {
      setIdStateMessage("아이디를 정확히 입력해주세요.");
    } else if (regExp.test(loginId)) {
      setIdStateMessage("아이디에는 특수문자를 입력할 수 없습니다.");
    } else if (korExp.test(loginId)) {
      setIdStateMessage("아이디에는 한글을 포함할 수 없습니다.");
    } else if (spaceExp.test(loginId)) {
      setIdStateMessage("아이디에는 공백을 포함할 수 없습니다.");
    } else {
      axios
        .get(`/api/auth?id=${loginId}`)
        .then(() => {
          setIdStateMessage("사용 가능한 아이디입니다.");
        })
        .catch((error) => {
          if (error.response.status === 409) {
            setIdStateMessage("이미 사용 중인 아이디입니다.");
          }
        });
    }
  }

  function PasswordValid() {
    if (password === "") {
      setPasswordMessage("비밀번호를 정확히 입력해주세요.");
    } else if (password.length < 8 || password.length > 20) {
      setPasswordMessage("비밀번호의 길이는 8-20자 이내여야 합니다.");
    } else if (!regExp.test(password)) {
      setPasswordMessage("특수문자가 입력되지 않았습니다.");
    } else if (korExp.test(password)) {
      setPasswordMessage("비밀번호에는 한글을 포함할 수 없습니다.");
    } else if (!numExp.test(password)) {
      setPasswordMessage("비밀번호에는 숫자를 포함해야 합니다.");
    } else if (spaceExp.test(password)) {
      setPasswordMessage("비밀번호에는 공백을 포함할 수 없습니다.");
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
    }
  }

  function PasswordVerifyValid() {
    if (passwordVerify === "") {
      setPasswordVerifyMessage("비밀번호 확인을 입력해주세요.");
    } else if (password !== passwordVerify) {
      setPasswordVerifyMessage("비밀번호와 일치하지 않습니다.");
    } else {
      setPasswordVerifyMessage("비밀번호와 일치합니다.");
    }
  }

  function EmailValid() {
    if (originEmail === "") {
      setEmailStateMessage("이메일을 정확하게 입력하세요.");
    } else if (regExp.test(originEmail)) {
      setEmailStateMessage("이메일에는 특수문자를 입력할 수 없습니다.");
    } else if (korExp.test(originEmail)) {
      setEmailStateMessage("이메일에는 한글을 포함할 수 없습니다.");
    } else if (spaceExp.test(originEmail)) {
      setEmailStateMessage("이메일에는 공백을 포함할 수 없습니다.");
    } else {
      axios
        .get(`/api/auth/${originEmail}@suwon.ac.kr`)
        .then(() => {
          setEmailStateMessage("사용 가능한 이메일입니다.");
        })
        .catch((error) => {
          if (error.response.status === 409) {
            setEmailStateMessage("이미 사용 중인 이메일입니다.");
          }
        });
    }
  }

  function NameValid() {
    if (name === "") {
      setNameStateMessage("이름을 정확히 입력해주세요.");
    } else if (regExp.test(name)) {
      setNameStateMessage("이름에는 특수문자를 입력할 수 없습니다.");
    } else if (numExp.test(name)) {
      setNameStateMessage("이름에는 숫자를 포함할 수 없습니다.");
    } else if (spaceExp.test(name)) {
      setNameStateMessage("이름에는 공백을 포함할 수 없습니다.");
    } else {
      setNameStateMessage("사용 가능한 이름입니다.");
    }
  }

  function MajorValid() {
    if (major === "" || major === "전공을 선택하세요") {
      setMajorStateMessage("전공을 선택해주세요.");
    } else {
      setMajorStateMessage("");
    }
  }

  function StudentIdValid() {
    if (studentId === "") {
      setStudentIdStateMessage("학번을 입력해주세요.");
    } else if (regExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 특수문자가 포함되지 않습니다.");
    } else if (korExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 한글이 포함되지 않습니다.");
    } else if (spaceExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 공백이 포함되지 않습니다.");
    } else if (engExp.test(studentId)) {
      setStudentIdStateMessage("학번에는 영문이 포함되지 않습니다.");
    } else if (studentId.length !== 8) {
      setStudentIdStateMessage("학번의 길이는 8자입니다.");
    } else {
      setStudentIdStateMessage("");
    }
  }

  function SignInfo() {
    const data = {
      email,
      joinType,
      loginId,
      major,
      name,
      password,
      studentId,
    };
    if (joinType === "") {
      alert("가입 유형을 선택해주세요.");
    } else {
      axios
        .post("/api/auth/join", data)
        .then((response) => {
          console.log(
            email,
            joinType,
            loginId,
            major,
            name,
            password,
            studentId
          );
          alert("로그인 성공");
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("가입 정보를 정확히 입력해주세요.");
          } else if (error.response.status === 422) {
            alert("422번 비번 형식 오류");
          }
        });
    }
  }

  return (
    <PageArea>
      <SignUpArea>
        <img
          alt="Flag 로고"
          className="Logo"
          src="flag.JPG"
          width="200"
          height="100"
        />
        <RelativeArea>
          <InfoState message={idStateMessage} />
          <WriteArea
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setLoginId(e.target.value);
            }}
          />
          <AddIcon icon={faUser} />
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
          <AddIcon icon={faLock} />
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
          <AddIcon icon={faLock} />
        </RelativeArea>
        <RelativeArea>
          <InfoState message={emailStateMessage} />
          <WriteArea
            type="text"
            placeholder="E-Mail"
            onChange={(e) => {
              setOriginEmail(e.target.value);
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
        <JoinTypeButton getValue={getValue} />
        <AccountButton onClick={() => Sign()} fullWidth variant="contained">
          가입하기
        </AccountButton>
      </SignUpArea>
    </PageArea>
  );
}


