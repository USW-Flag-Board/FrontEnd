import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

//1. 인증번호 유효성 검사해야함 - 아직 서식을 몰라서 못함.

const EmailAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.CheckEmail;
  const [certification, setCertification] = useState("");

  const EmailAuthCheck = () => {
    const data = {
      certification,
      email,
    };
    if (certification === "") {
      alert("인증번호가 입력되지 않았습니다.");
    } else {
      axios
        .post("/api/auth/sign-up", data)
        .then((response) => {
          navigate("/login");
        })
        .catch((error) => {
          if (error.response.status === 500) {
            alert("서버 오류입니다. 관리자에게 문의하세요.");
          }
        });
    }
  };

  const RefreshEmailAuth = () => {
    const emailPost = {
      email,
    };
    axios
      .post("/api/auth/email", emailPost)
      .then((response) => {
        alert("재학생 인증 메일이 재전송 되었습니다.");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("서버 오류입니다. 관리자에게 문의하세요.");
        }
      });
  };

  return (
    <>
      <Mainbox>
        <EmailTitle>
          이메일 인증
          <AuthButton onClick={() => EmailAuthCheck()}>인증하기</AuthButton>
        </EmailTitle>
        <Emailbox>
          <Emailfield>
            <Box>
              <TextBox>인증번호 입력</TextBox>
              <InsertBox>
                <AuthNum
                  name="user-password"
                  type="text"
                  onChange={(e) => {
                    setCertification(e.target.value);
                  }}
                  required
                />
              </InsertBox>
              <ResendButton onClick={() => RefreshEmailAuth()}>
                재전송
              </ResendButton>
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

const AuthButton = styled.button`
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

const AuthNum = styled.input`
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

export default EmailAuth;
