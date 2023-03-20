import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";
import {PatchChangePw} from "../apis/user";
import { Header } from "../components";

const ChangePw = () => {
  const header = true;
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== passwordCheck) {
      return setPasswordError(true);
    }
  };

  const onChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const onChangePassword = (e) => {
    setNewPassword(e.target.value);
  };

  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== newPassword);
    setPasswordCheck(e.target.value);
  };

  const ReplacePassword = () => {
    if (!passwordError & (newPassword !== "") & (passwordCheck !== "")) {
      PatchChangePw(currentPassword, newPassword)
        .then(() => {
          alert("비밀번호 변경 완료");
          navigate("/edit");
        })
        .catch((error) => {
          switch (error.response.status) {
            case 404:
              alert("존재하지 않는 사용자입니다.");
              break;
            case 409:
              alert("기존과 같은 비밀번호는 사용할 수 없습니다.");
              break;
            case 422:
              alert(
                "사용할 수 없는 비밀번호 입니다. (8~20자 이내 영문, 숫자, 특수문자를 모두 포함)"
              );
              break;
            default:
              alert("서버 통신 오류.");
          }
        });
    }
  };



  return (
    <>
      {header && <Header/>}
      <Mainbox>
        <PwTitle>
          새 비밀번호{" "}
          <SaveButton onClick={() => ReplacePassword()}>저장하기</SaveButton>
        </PwTitle>
        <Pwbox>
          <Pwfield>
            <Box>
              <TextBox>현재 비밀번호</TextBox>
              <Box>
                <PwChange
                  name="user-current-password"
                  type="password"
                  value={currentPassword}
                  required
                  onChange={onChangeCurrentPassword}
                ></PwChange>
              </Box>
              <ErrorBox></ErrorBox>
            </Box>
            <Box>
              <TextBox>비밀번호</TextBox>
              <Box>
                <PwChange
                  name="user-password"
                  type="password"
                  value={newPassword}
                  required
                  onChange={onChangePassword}
                ></PwChange>
              </Box>
              <ErrorBox></ErrorBox>
            </Box>
            <Box>
              <TextBox>비밀번호 확인</TextBox>
              <Box>
                <PwChange
                  name="user-password-check"
                  type="password"
                  value={passwordCheck}
                  required
                  onChange={onChangePasswordChk}
                ></PwChange>
              </Box>
              <ErrorBox>
                {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
              </ErrorBox>
            </Box>
          </Pwfield>
        </Pwbox>
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

const Pwbox = styled.div`
  display: flex;
  width: 60%;
  height: 26vh;
  margin-top: 3vh;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2.5vh;
`;

const Box = styled.div`
  display: flex;
  margin: 4px;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 1rem;
  width: 80%;
`;

const TextBox = styled.div`
  width: 110px;
  align-items: center;
  text-align: left;
  font-size: 1rem;
`;

const PwChange = styled.input`
  width: 100%;
  height: 5vh;
  margin-left: 3vw;
  padding-left: 2vw;
  background-color: transparent;
  border: 2px solid gray;
  border-radius: 2vh;
  font-size: 1rem;
  color: white;
`;

const Pwfield = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 15vh;
  font-size: 1rem;
  margin-top: 5.5vh;
`;

const PwTitle = styled.div`
  display: flex;
  width: 500px;
  height: 55px;
  margin-top: 17vh;
  margin-right: 15%;
  font-size: 2.2rem;
  font-weight: 800;
  justify-content: flex-start;
`;

const ErrorBox = styled.div`
  width: 200px;
  margin-left: 2vw;
  font-size: 0.8rem;
  align-items: center;
`;

const SaveButton = styled.button`
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

export default ChangePw;
