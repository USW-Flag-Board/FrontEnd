import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components";
import { SessionStorage } from "../../utils/browserStorage";
import { cookiesOption } from "../../utils/cookiesOption";
import instance from "../../apis/AxiosInterceptorSetup";
import { loginRegex } from "../../constants/signUp";
import { baseInstance } from "../../apis/instance";

const ChangePw = () => {
  const header = true;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
    newPasswordMessage: "",
    passwordConfirmMessage: "",
  });
  const { currentPassword, newPassword, passwordConfirm } = password;
  const { newPasswordMessage, passwordConfirmMessage } = password;
  const accessToken = SessionStorage.get("UserToken");
  
  useEffect(()=>{
    if(SessionStorage.get("email")) {
      const emailState = SessionStorage.get("email")
      setEmail(emailState)
    };
  },[])

  useEffect(() => {
    updatePassword("passwordConfirmMessage", newPassword.trim() !== "" && passwordConfirm.trim() !== "" && newPassword === passwordConfirm ? "입력한 비밀번호와 일치합니다." : (newPassword.trim() === "" && passwordConfirm.trim() === "" ? "" : "비밀번호와 비밀번호 확인이 일치하지 않습니다."));
  }, [newPassword, passwordConfirm]);

  const updatePassword = (key, value) => {
    setPassword(prevState => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSave = () => {
    const headers = {
      'Authorization': `Bearer ${accessToken}`
    };
    const data = {
      currentPassword: currentPassword,
      newPassword: newPassword 
    };
    instance
      .put("/members/password", data, {headers: headers})
      .then((response) => {
        if(response.status === 200){
          SessionStorage.clear();
          cookiesOption.remove("refresh_token");
          navigate("/login");
        }
      })
      .catch((error) => {
        const status = error.response.status;
        switch(status){
          case 409:
            alert("기존과 같은 비밀번호는 사용할 수 없습니다.");
            break;
          case 404:
            alert("존재하지 않는 사용자입니다.");
            break;
          default:
            break;
        }
      })
    }

  const handlePasswordEdit = async () => {
    try{
      await baseInstance.put("/members/find/password", {
        newPassword: newPassword,
        email: email
      })
      alert("변경된 비밀번호로 로그인을 시도해주세요.")
      SessionStorage.remove("email");
      navigate("/login");
    }catch(error){
      const status = error.response.status;
      if(status === 404) alert("존재하지 않는 사용자입니다.")
    }
  }

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    updatePassword(name, value);
    if(name === "newPassword") updatePassword("newPasswordMessage", loginRegex.password.test(value) ? "사용가능한 비밀번호입니다." : "최소 8자 이상 20자 이하의 비밀번호를 입력해주세요. 비밀번호는 알파벳, 숫자, 특수문자를 모두 포함해야 합니다.");
  };
  
  return (
    <>
      {header && <Header />}
      <EditPageArea>
        <TitleArea>
          {email ? <TitleBox>새 비밀번호 변경</TitleBox> : <TitleBox>비밀번호 변경</TitleBox>}
          <EditButton 
            type="button" 
            onClick={email ? handlePasswordEdit : handleSave} >
            저장하기
          </EditButton>
        </TitleArea>
        <EditPageBox>
          {email ? "" : <InfoBox>
            <InfoTitle 
              htmlFor="currentPassword">현재 비밀번호</InfoTitle>
            <EditInputBox 
              type="password"
              name="currentPassword"
              value={currentPassword}
              onChange={handleInputChange}
              aria-label="현재 비밀번호"/>
          </InfoBox>}
          <InfoBox>
            <InfoTitle htmlFor="newPassword">새 비밀번호</InfoTitle>
            <EditInputBox 
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleInputChange}
              autoComplete="new-password"
              aria-label="새 비밀번호"
              />
              <InfoState>{newPasswordMessage}</InfoState>
          </InfoBox>
          <InfoBox>
            <InfoTitle htmlFor="passwordConfirm">새 비밀번호 확인</InfoTitle>
            <EditInputBox
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handleInputChange}
              aria-label="새 비밀번호 확인"
            />
            <InfoState>{passwordConfirmMessage}</InfoState>
          </InfoBox>
        </EditPageBox>
      </EditPageArea>
    </>
  );
};

export default ChangePw;

const EditPageArea = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditPageBox = styled.div`
  border: 2px solid #9A9A9A;
  border-radius: 2rem;
  width: 60%;
  height: 35%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleArea = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 1rem;
`;

const TitleBox = styled.div`
  font-size: 2rem;
  font-weight: 500;
  width: 30%;
  margin-right: 1rem;
  padding-left: 2rem;
`;

const InfoBox = styled.form`
  display: flex;
  align-items: center;
  height: 33%;
  width: 100%;
  
  .introduce{
    width: 80%;
    height: 100%;
  }
`;

const InfoTitle = styled.label`
  width: 20%;
`;

const EditInputBox = styled.input`
  width: 35%;
  height: 60%;
  font-size: 1rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  outline: none;
  border-radius: 10px;
  border: 1px solid #9A9A9A;
  margin-right: 1rem;
`;

const EditButton = styled.button`
`;

const InfoState = styled.div`
  width: 40%;
  color: black;
  font-size: 0.8rem;
`;
