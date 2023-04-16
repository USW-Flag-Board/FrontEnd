import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { baseInstance } from "../../apis/instance";
import { SessionStorage } from "../../utils/browserStorage";


const EditUser = () => {
  const [userData, setUserData] = useState({
    bio: "",
    email: "",
    major: "",
    nickName: "",
    profileImg: "",
    studentId: "",
  });
  const UserId = SessionStorage.get("User_id")
  const accessToken = SessionStorage.get("UserToken");
  const { bio, email, major, name, nickName, profileImg, studentId} = userData;
  
  useEffect(()=> {
    baseInstance.get("/members",{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        const data = response.data.payload
        setUserData((prevState) => ({
          ...prevState,
          bio: data.bio,
          name: data.name,
          email: data.email,
          major: data.major,
          nickName: data.nickName,
          profileImg: data.profileImg,
          studentId: data.studentId,
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const updateState = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  
  return (
    <EditPageArea>
      <TitleBox>회원 정보 수정</TitleBox>
      <EditPageBox>
        <ProfileImgBoxArea>
          <ProfileImgBox>
            <ProfileImg src={profileImg}/>
          </ProfileImgBox>
          <IdButtonBox>
            <label>
              <div className="btn-upload">프로필 사진 변경</div>
            </label>
            <ImgEditButton type="file" name="file" id="file"/>
          </IdButtonBox>
        </ProfileImgBoxArea>
        <UserInfoArea>
          <UserInfoBox>
            <TitleButtonBox className="edit-button">
              <span>프로필 정보 수정</span>
              <EditButton>저장하기</EditButton>
              <EditButton>비밀번호 변경</EditButton>
              <EditButton>회원탈퇴</EditButton>
            </TitleButtonBox>
            <InfoBox>
              <InfoTitle>이름</InfoTitle>
              <FixBox>{name}</FixBox>
            </InfoBox>
            <InfoBox className="introduce-box">
              <InfoTitle>소개</InfoTitle>
              <EditInputBox type="text" className="introduce" name="bio" value={bio} onChange={updateState}/>
            </InfoBox>
          </UserInfoBox>
          <UserInfoBox>
            <TitleButtonBox>상세 정보 수정</TitleButtonBox>
              <InfoBox>
                <InfoTitle>아이디</InfoTitle>
                <FixBox>{UserId}</FixBox>
              </InfoBox>
              <InfoBox>
                <InfoTitle>닉네임</InfoTitle>
                <EditInputBox type="text" name="nickName" value={nickName} onChange={updateState}/>
              </InfoBox>
              <InfoBox>
                <InfoTitle>이메일</InfoTitle>
                <FixBox>{email}</FixBox>
              </InfoBox>
              <InfoBox>
                <InfoTitle>전공</InfoTitle>
                <EditInputBox type="text" name="major" value={major} onChange={updateState}/>
              </InfoBox>
              <InfoBox>
                <InfoTitle>학번</InfoTitle>
                <EditInputBox type="text" name="studentId" value={studentId} onChange={updateState}/>
              </InfoBox>
          </UserInfoBox>
        </UserInfoArea>
      </EditPageBox>
    </EditPageArea>
  );
};

export default EditUser;

const EditPageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditPageBox = styled.div`
  border: 2px solid #9A9A9A;
  border-radius: 2rem;
  width: 70%;
  height: 80%;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  font-size: 2rem;
  font-weight: 500;
  width: 70%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
`;

const ProfileImgBoxArea = styled.div`
  width: 30%;
  height: 90%;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-right: 1.5px solid #9A9A9A;
`;

const ProfileImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 60%;
  border: 3px solid gray;
  border-radius: 50%;
`;

const IdButtonBox = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  #file {
    display: none;
  }
  .btn-upload{
    border: 1px solid #9A9A9A;
    border-radius: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    &:hover{
      background-color: #9A9A9A;
    }
  }
`;

const ImgEditButton = styled.input`
  height: 100%;
`;

const UserInfoArea = styled.div`
  width: 70%;
  height: 90%;
`;

const UserInfoBox = styled.div`
  width: 90%;
  height: 60%;
  padding-left: 2rem;
  &:nth-child(1){
    height: 40%;
  }
  &:nth-child(2){
    display: flex;
    flex-direction: column;
  }
  .edit-button{
    width: 80%;
    justify-content: space-between;
  }
  .introduce-box{
    height: 40%
  }
`;

const TitleButtonBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 25%;
  width: 100%;
  
  .introduce{
    width: 80%;
    height: 100%;
  }
`;

const InfoTitle = styled.label`
  width: 15%;
`;

const EditInputBox = styled.input`
  width: 40%;
  height: 60%;
  font-size: 1rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: flex-start;
  outline: none;
  border-radius: 10px;
  border: 1px solid #9A9A9A;
`;

const FixBox = styled.div`
  border: 1px solid #9A9A9A;
  width: 40%;
  height: 60%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 10px;
  border: 1px solid #9A9A9A;
`;

const EditButton = styled.button`
  
`