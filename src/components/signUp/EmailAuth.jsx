import { useState } from "react";
import { PostEmail, PostCurrentEmail } from "../../apis/auth";
import styled from "styled-components";

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
        return setEmailStateMessage("이메일을 정확히 입력해주세요.");
      }
  
      PostEmail(originEmailData)
        .then((response) => {
          if (response.data.payload) {
            return setEmailStateMessage("이미 사용중인 이메일입니다.");
          }
          setEmailStateMessage("");
          return setButtonState(true);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setEmailStateMessage("이메일 앞부분만 정확하게 입력해주세요.");
          }
        });
    };
  
    const AuthEmailPost = () => {
      PostCurrentEmail(
        originEmailData,
        joinType,
        loginId,
        major,
        name,
        nickName,
        password,
        phoneNumber,
        studentId
      )
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
          <StaticText style={{ left: 270 }}>@suwon.ac.kr</StaticText>
          <AuthButton onClick={() => AuthEmailPost()}>
            {rePost ? "재전송" : "인증번호\n발송"}
          </AuthButton>
        </EmailInputArea>
        <InfoState style={{ width: "40%" }}>{emailStateMessage}</InfoState>
        <WriteArea
          onChange={(e) => {
            setCertification(e.target.value);
          }}
        ></WriteArea>
        <RowLine style={{ marginTop: 50, width: 450 }} />
        <IntroduceArea style={{ fontSize: 15, justifyContent: "center" }}>
          FLAGround 가입을 환영합니다.
        </IntroduceArea>
      </>
    );
  };

export default EmailAuth;

const EmailInputArea = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const AuthButton = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: black;
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

const RowLine = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #9a9a9a;
  width: 100%;
  opacity: 0.6;
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

const StaticText = styled.div`
  color: black;
  position: absolute;
  font-size: 16px;
  left: 95px;
  top: 28px;
`;