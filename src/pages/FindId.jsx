import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

//1. 메일 관련 유효성 검사 추가 예정 ( suwon.ac.kr 이 아닐 경우 등등 )

// eslint-disable-next-line
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
const emailExp = /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"]/g;
const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
const numExp = /[0-9]/g;
const spaceExp = /\s/;

const FindId = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const Find = () => {
    const data = {
      email,
    };
    axios
      .post("/api/member/mail/id", data)
      .then((response) => {
        alert("아이디 찾기 결과 메일 발송 성공");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("가입된 아이디가 없습니다.");
        } else if (error.response.status === 500) {
          alert("서버 에러입니다.");
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
    } else {
      setEmail(email + "@suwon.ac.kr");
      Find();
    }
  };
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
          </Emailfield>
        </Emailbox>
      </Mainbox>
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
  height: 26vh;
  margin-top: 3vh;
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
  height: 15vh;
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

const ResendButton = styled.button`
  width: 100px;
  height: 27.5px;
  background: #6c6c6c;
  color: white;
  border-radius: 1vh;
  border: 0px;
  outline: none;
  margin-left: 20px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 1px;
  padding-bottom: 1px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

export default FindId;
