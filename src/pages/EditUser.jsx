import React from 'react'
import { styled } from '@mui/system';

const EditUser = () => {

    return(
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
                  <SideBox><TitleBox>이름</TitleBox>  <NameInput/></SideBox>
                  <SideBox><TitleBox>한줄 소개</TitleBox> <OnelineInput/></SideBox>
                  <SideBox>
                    <TitleBox>태그</TitleBox> <TagInput/>
                  </SideBox>
                  <InfoTitle>상세 정보 수정</InfoTitle>
                  <SideBox><TitleBox>아이디 </TitleBox><InputFiled/></SideBox>
                  <SideBox><TitleBox>이메일 </TitleBox><InputFiled/></SideBox>
                  <SideBox><TitleBox>전화번호 </TitleBox><InputFiled/></SideBox>
                  <SideBox><TitleBox>전공 </TitleBox><InputFiled/></SideBox>
                  <SideBox><TitleBox>학번 </TitleBox><InputFiled/></SideBox>
                </MainContent>
            </Editbox>
        </Mainbox>
        
    </>

    );
}

export default EditUser;

const Mainbox = styled("div")({
    display: 'flex',
    width: 'auto',
    height: 'auto',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10vh',
  });

  const Editbox = styled("div")({
    display: 'flex',
    border: '1px solid gray',
    width: '65vw',
    height: '75vh',
    borderRadius:"2.5vh",
    fontSize: '1vw',
  });

  const MainContent = styled("div")({
    display: 'flex',
    width: '80%',
    height: '80%',
    flexDirection: 'column', 
    marginLeft: '2vw',
    marginBottom: '3vw',
    marginTop: '3vw',
  })

  const SideBox = styled("div")({
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: '800',
  });

  const EditTitle = styled("div")({
    display: 'flex',
    width: '500px',
    height: '55px',
    marginRight:'25vw',
    marginTop: '3vh',
    fontSize: '2.5rem',
    fontWeight: '800',
  });

  const Box = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2vh',
  });

  const ImgBox = styled("div")({
    marginTop: '3vw',
    marginBottom: '3vw',
    width: '15vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid gray',
  });

  const ProFile = styled("div")({
    borderRadius: "50%",
    border: '2px solid white',
    width: '60%',
    height: '60%',
    marginBottom: '2vh',
  });

  const BackGround = styled("div")({
    border: '2px solid white',
    width: '60%',
    height: '60%',
    borderRadius:"2vh",
    marginBottom: '2vh',
  });

  const NameInput = styled("input")({
    width: '30%',
    height: '3vh',
    background: 'transparent',
    borderRadius:"1.5vh",
    border: '1px solid gray',
    marginTop: '1vh',
    marginBottom: '1vh',
    marginLeft: '4vw',
    color: 'white',
    paddingLeft: '1vw',

  });

  const OnelineInput = styled("textarea")({
    width: '65%',
    height: '6vh',
    background: 'transparent',
    borderRadius:"1.5vh",
    border: '1px solid gray',
    marginTop: '1vh',
    marginBottom: '1vh',
    marginLeft: '4vw',
    color: 'white',
    paddingLeft: '1vw',

  });

  const TagInput = styled("input")({
    width: '65%',
    height: '2vh',
    background: 'transparent',
    borderRadius:"1.5vh",
    border: '1px solid gray',
    marginTop: '1vh',
    marginBottom: '1vh',
    marginLeft: '4vw',
    color: 'white',
    paddingLeft: '1vw',

  });
  
  const TitleBox = styled("div")({
    width: '100px',
  });

  const InputFiled = styled("input")({
    width: '30%',
    height: '3vh',
    background: 'transparent',
    borderRadius:"2vh",
    border: '1px solid gray',
    marginLeft: '4vw',
    marginTop: '1vh',
    marginBottom: '1vh',
  });

  const SaveButton = styled("button")({
    width:'13%',
    height: '90%',
    background: 'gray',
    color: 'white',
    borderRadius:"1vh",
    border: '2px solid gray',
    marginLeft: '5%',
    fontSize: '0.5rem',
    fontWeight: '500',
  });

  const ImgSaveButton = styled("button")({
    width:'50%',
    height: '15%',
    background: 'gray',
    color: 'white',
    borderRadius:"1vh",
    border: '2px solid gray',
    marginLeft: '5%',
    fontSize: '0.5rem',
    fontWeight: '500',
  });

  const ProfileTitle = styled("div")({
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: '800',
    marginBottom: '2vh',

  });

  const InfoTitle = styled("div")({
    display: 'flex',
    marginBottom: '2vh',
    alignItems: 'center',
    fontSize: '1.5rem',
    marginTop: '5vh',
    fontWeight: '800',

  });