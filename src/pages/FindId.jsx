import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// eslint-disable-next-line
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
const emailExp = /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"]/g;
const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
const numExp = /[0-9]/g;
const spaceExp = /\s/;

const FindId = ({setHeader}) => {
  const navigate = useNavigate();
  const [successState, setSuccessState] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    setHeader(true);
  });

  return (
    <>
      {successState ? (
        <ShowId id={id} />
      ) : (
        <FindIdPage setId={setId} setSuccessState={setSuccessState} />
      )}
    </>
  );
};

const ShowId = (props) => {
  return (
    <>
      <Pagebox>
        <Mainbox>
          <Emailbox
            style={{margin: 0, padding: 50, paddingLeft: 0, paddingRight: 0}}
          >
            <Emailfield
              style={{margin: 0, padding: 0, justifyContent: "center"}}
            >
              <Box>당신의 아이디는 "{props.id}" 입니다.</Box>
            </Emailfield>
          </Emailbox>
        </Mainbox>
      </Pagebox>
    </>
  );
};

const FindIdPage = ({setId, setSuccessState}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState(false);

  const Find = () => {
    axios
      .post("http://3.39.36.239:8080/api/members/find/id", {
        email: email,
        name: name,
      })
      .then(() => {
        setAuth(true);
        alert("이메일로 인증번호가 전송되었습니다.");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("이메일 형식이 아닙니다.");
        } else if (error.response.status === 404) {
          alert("존재하지 않는 사용자입니다.");
        } else if (error.response.status === 422) {
          alert("수원대학교 이메일 주소가 아닙니다.");
        }
      });
  };

  const NameValid = () => {
    if (name === "") {
      alert("이름을 정확히 입력해주세요.");
    } else if (regExp.test(name)) {
      alert("이름에는 특수문자를 입력할 수 없습니다.");
    } else if (numExp.test(name)) {
      alert("이름에는 숫자를 포함할 수 없습니다.");
    } else if (spaceExp.test(name)) {
      alert("이름에는 공백을 포함할 수 없습니다.");
    } else {
      EmailValid();
    }
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
      setEmail(email);
      Find();
    }
  };

  useEffect(() => {
    setSuccessState(false);
  });

  return (
    <>
      <Mainbox>
        <EmailTitle>
          아이디 찾기
          <FindButton onClick={() => NameValid()}>찾기</FindButton>
        </EmailTitle>
        <Emailbox>
          <Emailfield>
            <Box>
              <TextBox>이름</TextBox>
              <InsertBox>
                <Insert
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InsertBox>
            </Box>
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
            {auth && (
              <CertificateBox
                setId={setId}
                email={email}
                setSuccessState={setSuccessState}
              />
            )}
          </Emailfield>
        </Emailbox>
      </Mainbox>
    </>
  );
};

const CertificateBox = (props) => {
  const [certification, setCertification] = useState("");

  const AuthCheck = () => {
    axios
      .post("http://3.39.36.239:8080/api/members/certification", {
        certification: certification,
        email: props.email,
      })
      .then((response) => {
        props.setSuccessState(true);
        props.setId(response.data.payload);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("아이디 찾기 요청이 존재하지 않습니다. 다시 시도해주세요.");
        } else if (error.response.status === 409) {
          alert("인증번호가 일치하지 않습니다.");
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
    props.setSuccessState(false);
  });

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

const Pagebox = styled.div`
  display: flex;
  width: 100%;
  height: 88vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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

export default FindId;