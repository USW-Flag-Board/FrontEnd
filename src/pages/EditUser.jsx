import styled from "styled-components";

const EditUser = () => {
  return (
    <>
      <Mainbox>
        <EditTitle>회원 정보 수정</EditTitle>
        <Editbox>
          <ImgBox>
            <Box>
              <ProFile></ProFile>
              <ImgSaveButton>프로필 사진 변경</ImgSaveButton>
            </Box>
            <Box>
              <BackGround></BackGround>
              <ImgSaveButton>배경사진 변경</ImgSaveButton>
            </Box>
          </ImgBox>
          <MainContent>
            <ProfileTitle>
              프로필 정보 수정
              <SaveButton>저장하기</SaveButton>
              <SaveButton>비밀번호 변경</SaveButton>
            </ProfileTitle>
            <SideBox>
              <TitleBox>이름</TitleBox> <NameInput />
            </SideBox>
            <SideBox>
              <TitleBox>한줄 소개</TitleBox> <OnelineInput />
            </SideBox>
            <SideBox>
              <TitleBox>태그</TitleBox> <TagInput />
            </SideBox>
            <InfoTitle>상세 정보 수정</InfoTitle>
            <SideBox>
              <TitleBox>아이디 </TitleBox>
              <InputFiled />
            </SideBox>
            <SideBox>
              <TitleBox>이메일 </TitleBox>
              <InputFiled />
            </SideBox>
            <SideBox>
              <TitleBox>전화번호 </TitleBox>
              <InputFiled />
            </SideBox>
            <SideBox>
              <TitleBox>전공 </TitleBox>
              <InputFiled />
            </SideBox>
            <SideBox>
              <TitleBox>학번 </TitleBox>
              <InputFiled />
            </SideBox>
          </MainContent>
        </Editbox>
      </Mainbox>
    </>
  );
};

const Mainbox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const Editbox = styled.div`
  display: flex;
  border: 1px solid gray;
  width: 65vw;
  height: 75vh;
  border-radius: 2.5vh;
  font-size: 1vw;
`;

const MainContent = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  flex-direction: column;
  margin-left: 2vw;
  margin-bottom: 3vw;
  margin-top: 3vw;
`;

const SideBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 800px;
`;

const EditTitle = styled.div`
  display: flex;
  width: 500px;
  height: 55px;
  margin-right: 25vw;
  margin-top: 3vh;
  font-size: 2.5rem;
  font-weight: 800px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
`;

const ImgBox = styled.div`
  margin-top: 3vw;
  margin-bottom: 3vw;
  width: 15vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid gray;
`;

const ProFile = styled.div`
  border-radius: 50%;
  border: 2px solid white;
  width: 60%;
  height: 60%;
  margin-bottom: 2vh;
`;

const BackGround = styled.div`
  border: 2px solid white;
  width: 60%;
  height: 60%;
  border-radius: 2vh;
  margin-bottom: 2vh;
`;

const NameInput = styled.input`
  width: 30%;
  height: 3vh;
  background: transparent;
  border-radius: 1.5vh;
  border: 1px solid gray;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 4vw;
  color: white;
  padding-left: 1vw;
`;

const OnelineInput = styled.textarea`
  width: 65%;
  height: 6vh;
  background: transparent;
  border-radius: 1.5vh;
  border: 1px solid gray;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 4vw;
  color: white;
  padding-left: 1vw;
`;

const TagInput = styled.input`
  width: 65%;
  height: 2vh;
  background: transparent;
  border-radius: 1.5vh;
  border: 1px solid gray;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 4vw;
  color: white;
  padding-left: 1vw;
`;

const TitleBox = styled.div`
  width: 100px;
`;

const InputFiled = styled.input`
  width: 30%;
  height: 3vh;
  background: transparent;
  border-radius: 2vh;
  border: 1px solid gray;
  margin-left: 4vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const SaveButton = styled.button`
  width: 13%;
  height: 90%;
  background: gray;
  color: white;
  border-radius: 1vh;
  border: 2px solid gray;
  margin-left: 5%;
  font-size: 0.5rem;
  font-weight: 500;
`;

const ImgSaveButton = styled.button`
  width: 50%;
  height: 15%;
  background: gray;
  color: white;
  border-radius: 1vh;
  border: 2px solid gray;
  margin-left: 5%;
  font-size: 0.5rem;
  font-weight: 500;
`;

const ProfileTitle = styled.div`
  display: flex;
  alignitems: center;
  font-size: 1.5rem;
  font-weight: 800px;
  margin-bottom: 2vh;
`;

const InfoTitle = styled.div`
  display: flex;
  margin-bottom: 2vh;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 5vh;
  font-weight: 800px;
`;

export default EditUser;
