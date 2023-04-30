import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import instance from "../../apis/AxiosInterceptorSetup";

const MyProfile = ({
  nickName,
  bio,
  profileImg,
  setUserData,
  studentId,
  major,
  setProfileImg,
}) => {
  const updateState = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    const data = {
      bio: bio,
      major: major,
      nickName: nickName,
      studentId: studentId,
    };
    try {
      const reponse1 = await instance.put("/members/avatar", data);
      const reponse2 = await instance.post(
        "/members/avatar/image",
        profileImg,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(reponse1);
      console.log(reponse2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TitleBox>프로필 수정</TitleBox>
      <EditPage>
        <ProfileImgBox>
          <ProfileImg src={profileImg} />
          <IdButtonBox>
            <label htmlFor="file">
              <FontAwesomeIcon icon={faPen} className="btn-upload">
                프로필 사진 변경
              </FontAwesomeIcon>
            </label>
            <ImgEditButton
              type="file"
              id="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </IdButtonBox>
        </ProfileImgBox>
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
          <ContentButton>취소</ContentButton>
          <ContentButton onClick={handleSave}>저장</ContentButton>
        </ContentButtonBox>
      </EditPage>
    </>
  );
};

export default MyProfile;

const EditPage = styled.div`
  border: 1px solid #ced4da;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem;

  .bio-box {
    height: 8rem;
  }
`;

const TitleBox = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
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

const ProfileImgBox = styled.div`
  height: 9rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1.4rem;
`;

const ProfileImg = styled.img`
  width: 25%;
  border-radius: 50%;
`;

const IdButtonBox = styled.div`
  #file {
    display: none;
  }
  .btn-upload {
    border-radius: 1rem;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    position: relative;
    top: 7rem;
    right: 2.5rem;
    cursor: pointer;
  }
`;

const ImgEditButton = styled.input`
  width: 100%;
  height: 100%;
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

const ContentButtonBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
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
`;
