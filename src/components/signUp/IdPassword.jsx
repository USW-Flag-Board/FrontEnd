import { useEffect, useState } from "react";
import styled from "styled-components";
import { regExp, korExp, numExp,spaceExp, engExp, SPECIALIZED } from "../../constants/user";
import { PostLoginId } from "../../apis/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const IdPassword = ({ setButtonState, setLoginId, setPassword }) => {
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
  
    const IdSet = async (text) => {
      setLoginIdData(text);
    };
  
    const IdValid = () => {
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
        PostLoginId(loginIdData)
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
    };
  
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

export default IdPassword;

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