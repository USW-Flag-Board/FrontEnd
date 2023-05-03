import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { useState } from "react";

const MyProfile = ({
  nickName,
  bio,
  setUserData,
  studentId,
  major,
  loginId,
}) => {
  const [editOn, setEditOn] = useState(false);
  const updateState = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const data = {
      bio: bio,
      major: major,
      nickName: nickName,
      studentId: studentId,
    };
    try {
      await instance.put("/members/avatar", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EditPageBox>
      <TitleBox className="profile-title">프로필 수정</TitleBox>
      <EditPage>
        {editOn && (
          <>
            <ContentLabel>별명</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="text"
                name="nickName"
                value={nickName}
                onChange={updateState}
              />
            </InfoBox>
            <ContentLabel>전공</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="text"
                name="major"
                value={major}
                onChange={updateState}
              />
            </InfoBox>
            <ContentLabel>학번</ContentLabel>
            <InfoBox>
              <EditInputBox
                type="text"
                name="studentId"
                value={studentId}
                onChange={updateState}
              />
            </InfoBox>
            <ContentLabel>자기소개</ContentLabel>
            <InfoBox className="bio-box">
              <IntroduceInputBox name="bio" value={bio} onChange={updateState} />
            </InfoBox>
            <ContentButtonBox>
              <ContentButton onClick={()=> setEditOn(false)}>취소</ContentButton>
              <ContentButton onClick={handleSave}>저장</ContentButton>
            </ContentButtonBox>
          </>
        )}

        {!editOn && (
          <EditBox>
            <IdBox>
              <span>아이디: </span>
              <span>{loginId}</span>
            </IdBox>
            <ContentButton 
              onClick={()=> setEditOn(true)}
              className="edit-off"
              >
                수정
            </ContentButton>
          </EditBox>
        )}
      </EditPage>
      <TitleBox>비밀번호 변경</TitleBox>
      <EditPage className="box">
        <IdBox>
        <span>비밀번호</span>
        </IdBox>
        <ContentButton 
          onClick={()=> setEditOn(true)}
          className="edit-password"
          >
            비밀번호 변경
        </ContentButton>
      </EditPage>
      <TitleBox>회원탈퇴</TitleBox>
      <EditPage className="box">
        <IdBox>
          <span>회원탈퇴 시 프로필 및 모든 정보가 삭제 됩니다.</span>
        </IdBox>
        <ContentButton 
          onClick={()=> setEditOn(true)}
          className="edit-password"
          >
            탈퇴하기
        </ContentButton>
      </EditPage>
    </EditPageBox>
  );
};

export default MyProfile;

const EditPageBox =styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 4rem;
  .box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 3rem;
  }
  .profile-title{
    margin-top: 5.8rem;
  }
`;


const TitleBox = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-left: 1.4rem;
`;

const ContentLabel = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
  ::after {
    content: "*";
    color: rgb(240, 61, 12);
    margin-left: 0.4rem;
  }
  margin: 1rem 0;
  `;

const InfoBox = styled.div`
  width: 100%;
  height: 4rem;
  `;

const IntroduceInputBox = styled.textarea`
  outline: none;
  resize: none;
  border-radius: 10px;
  border: 1.8px solid #e9ecef;
  padding: 1rem 0.5rem;
  width: 100%;
  height: 80%;
  `;

const EditInputBox = styled.input`
  width: 50%;
  height: 70%;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  outline: none;
  border-radius: 10px;
  border: 1.8px solid #e9ecef;
  `;

const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 1rem 2rem;
  .edit-off{
    height: 2.2rem;
    :hover{
      background-color: #1c7ed6;
    }
  }
  `;

const IdBox = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ContentButtonBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  .edit-password{
    background-color: none;
  }
  `;

const ContentButton = styled.button`
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  width: 6rem;
  height: 100%;
  border: none;
  padding: 0.3rem 0 0 0;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
  cursor: pointer;
  `;

const EditPage = styled.div`
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 1rem;
  width: 100%;
  .bio-box {
    height: 8rem;
  }
  .edit-password{
    background-color: white;
    width: 8rem;
    height: 2.3rem;
    color: black;
    border: 1px solid #ced4da;
    border-radius: 0.5rem;
    :hover{
      background-color: #ced4da;
    }
  }
`;