import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// eslint-disable-next-line
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
const emailExp = /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"]/g;
const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
const spaceExp = /\s/;

const FindPw = ({setHeader}) => {
  const [successState, setSuccessState] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <>
      {successState ? (
        <ShowPw email={email} />
      ) : (
        <FindPwPage setEmail={setEmail} setSuccessState={setSuccessState} />
      )}
    </>
  );
};

const ShowPw = ({email}) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordChk = (e) => {
    setPasswordError(e.target.value !== password);
    setVerifyPassword(e.target.value);
  };

  const ChangePassword = () => {
    axios
      .put("http://3.39.36.239:80/api/members/find/password", {
        email,
        newPassword: password,
      })
      .then(() => {
        alert("비밀번호를 변경했습니다.");
        navigate("/");
      })
      .catch((error) => {
        switch (error.response.status) {
          case 404:
            alert("존재하지 않는 사용자입니다.");
            break;
          case 422:
            alert("사용할 수 없는 비밀번호 입니다.");
            break;
          default:
            alert("서버 통신 오류.");
        }
      });
  };

  return (
    <>
      <Mainbox>
        <EmailTitle>
          비밀번호 변경하기
          <FindButton onClick={() => ChangePassword()}>변경하기</FindButton>
        </EmailTitle>
        <Emailbox>
          <Emailfield>
            <Box>
              <TextBox>새 비밀번호</TextBox>
              <InsertBox>
                <Insert
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InsertBox>
            </Box>
            <Box>
              <TextBox>새 비밀번호 확인</TextBox>
              <InsertBox>
                <Insert type="text" onChange={onChangePasswordChk} required />
              </InsertBox>
            </Box>
            <ErrorBox>
              {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
            </ErrorBox>
          </Emailfield>
        </Emailbox>
      </Mainbox>
    </>
  );
};

const FindPwPage = (props) => {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [auth, setAuth] = useState(false);

  const Find = () => {
    axios
      .post("http://3.39.36.239:80/api/members/find/password", {
        email,
        loginId: userId,
      })
      .then(() => {
        props.setEmail(email);
        setAuth(true);
        alert("이메일로 인증번호가 전송되었습니다.");
      })
      .catch((error) => {
        switch (error.response.status) {
          case 404:
            alert("존재하지 않는 사용자입니다.");
            break;
          case 409:
            alert("이메일과 아이디가 일치하지 않습니다.");
            break;
          default:
            alert("서버 통신 오류.");
        }
      });
  };

  const EmailValid = () => {
    if (email === "") {
      alert("이메일을 정확하게 입력하세요.");
    } else if (emailExp.test(email)) {
      alert("이메일에는 특수문자를 입력할 수 없습니다.");
    } else if (korExp.test(email)) {
      alert("이메일에는 한글을 포함할 수 없습니다.");
    } else if (spaceExp.test(email)) {
      alert("이메일에는 공백을 포함할 수 없습니다.");
    } else if (!email.includes("@suwon.ac.kr")) {
      alert("수원대학교 이메일이 아닙니다.");
    } else {
      IdValid();
    }
  };

  const IdValid = () => {
    if (userId === "") {
      alert("아이디를 정확히 입력해주세요.");
    } else if (regExp.test(userId)) {
      alert("아이디에는 특수문자를 입력할 수 없습니다.");
    } else if (korExp.test(userId)) {
      alert("아이디에는 한글을 포함할 수 없습니다.");
    } else if (spaceExp.test(userId)) {
      alert("아이디에는 공백을 포함할 수 없습니다.");
    } else {
      Find();
    }
  };

  useEffect(() => {
    props.setSuccessState(false);
  }, []);

  return (
    <>
      <Mainbox>
        <EmailTitle>
          비밀번호 찾기
          <FindButton onClick={() => EmailValid()}>찾기</FindButton>
        </EmailTitle>
        <Emailbox>
          <Emailfield>
            <Box>
              <TextBox>이메일</TextBox>
              <InsertBox>
                <Insert
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InsertBox>
            </Box>
            <Box>
              <TextBox>아이디</TextBox>
              <InsertBox>
                <Insert
                  type="text"
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </InsertBox>
            </Box>
            {auth && (
              <CertificateBox
                email={email}
                setSuccessState={props.setSuccessState}
              />
            )}
          </Emailfield>
        </Emailbox>
      </Mainbox>
    </>
  );
};

const CertificateBox = ({email, setSuccessState}) => {
  const [certification, setCertification] = useState("");

  const AuthCheck = () => {
    axios
      .post("http://3.39.36.239:80/api/members/certification", {
        certification,
        email,
      })
      .then(() => {
        setSuccessState(true);
      })
      .catch((error) => {
        switch (error.response.status) {
          case 404:
            alert("비밀번호 찾기 요청이 존재하지 않습니다. 다시 시도해주세요.");
            break;
          case 409:
            alert("인증번호가 일치하지 않습니다.");
            break;
          default:
            alert("서버 통신 오류.");
        }
      });
  };

  const CertificationValid = () => {
    if (certification === "") {
      alert("인증번호가 입력되지 않았습니다.");
    } else {
      AuthCheck();
    }
  };

  useEffect(() => {
    setSuccessState(false);
  }, []);

  return (
    <>
      <Box>
        <TextBox>인증번호</TextBox>
        <InsertBox>
          <Insert
            type="text"
            onChange={(e) => setCertification(e.target.value)}
            required
          />
        </InsertBox>
      </Box>
      <AuthButtonField>
        <AuthButton onClick={() => CertificationValid()}>인증하기</AuthButton>
      </AuthButtonField>
    </>
  );
};

const Mainbox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const EmailTitle = styled.div`
  display: flex;
  width: 500px;
  height: 55px;
  margin-top: 17vh;
  margin-right: 15%;
  font-size: 2.2rem;
  font-weight: 800;
  justify-content: flex-start;
`;

const FindButton = styled.button`
  width: 20%;
  height: 50%;
  background: #6c6c6c;
  color: white;
  border-radius: 1vh;
  border: 0px;
  outline: none;
  margin-left: 5%;
  margin-top: 1%;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

const Emailbox = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  margin-top: 3vh;
  padding-bottom: 3vh;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2.5vh;
`;

const Emailfield = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 1rem;
  margin-top: 5.5vh;
`;

const Box = styled.div`
  display: flex;
  margin: 4px;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 16px;
  width: 80%;
  height: 100%;
`;

const TextBox = styled.div`
  width: 200px;
  align-items: flex-start;
  text-align: left;
  font-size: 16px;
`;

const Insert = styled.input`
  width: 100%;
  height: 5vh;
  padding-left: 2vw;
  background-color: transparent;
  border: 2px solid gray;
  border-radius: 2vh;
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: flex-start;
`;

const InsertBox = styled.div`
  display: flex;
  margin: 4px;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 16px;
  width: 60%;
`;

const AuthButtonField = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const AuthButton = styled.button`
  width: 15%;
  height: 3vh;
  background: #6c6c6c;
  color: white;
  border-radius: 1vh;
  border: 0px;
  outline: none;
  margin-left: 5%;
  margin-top: 1%;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

const ErrorBox = styled.div`
  width: 200px;
  margin-left: 2vw;
  font-size: 0.8rem;
  align-items: center;
`;

export default FindPw;
