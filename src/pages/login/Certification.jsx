import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components";
import { baseInstance } from "../../apis/instance";
import { SessionStorage } from "../../utils/browserStorage";

const Certification = () => {
  const header = true;
  const [certification, setCertification] = useState("");
  const navigate = useNavigate();
  const email = SessionStorage.get("email");
  
  const handleSave = async () => {
    try{
      const res = await baseInstance.post("/members/certification", {
        certification: certification,
        email: email
      })
      SessionStorage.remove("email");
      if(SessionStorage.get("type")){
        SessionStorage.remove("type")
        navigate("/changepw");
      }else{
        alert(`회원님의 아이디는: ${res.data.payload.loginId}입니다.`);
        navigate("/login");
      };
    }catch(error){
      const status = error.response.status;
      switch(status){
        case 409:
          alert("인증번호가 일치하지 않습니다.");
          break;
        case 404:
          alert("아이디/비밀번호 찾기 요청이 존재하지 않습니다.");
          break;
        default:
          break;
      }
    }
  }
  return (
    <div>
      {header && <Header/>}
      <EditPageArea>
        <TitleArea>
          <TitleBox>이메일 인증</TitleBox>
          <EditButton 
            type="button" 
            onClick={handleSave}>
            인증하기
          </EditButton>
        </TitleArea>
        <EditPageBox>
          <InfoBox>
            <InfoTitle>이메일</InfoTitle>
            <FixBox>{email}</FixBox>
          </InfoBox>
          <InfoBox>
            <InfoTitle>인증번호</InfoTitle>
            <EditInputBox 
              type="text"
              name="certification"
              value={certification}
              onChange={(e)=>setCertification(e.target.value)}/>
          </InfoBox>
        </EditPageBox>
      </EditPageArea>
    </div>
  )
}

export default Certification

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
  width: 30%;
  height: 30%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleArea = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 1rem;
`;

const TitleBox = styled.div`
  font-size: 2rem;
  font-weight: 500;
  width: 60%;
  padding-left: 2rem;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 33%;
  width: 100%;
`;

const InfoTitle = styled.label`
  width: 20%;
`;

const EditInputBox = styled.input`
  width: 60%;
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

const FixBox = styled.div`
  width: 60%;
  height: 60%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

const EditButton = styled.button`
  
`;