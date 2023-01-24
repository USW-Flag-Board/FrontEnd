import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const profileUpdateExample = [
  "백엔드 개발자 문희조입니다.",
  "컴퓨터SW",
  "010-1234-5678",
  "19017041",
];

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, SetPassword] = useState("password");
  const [bio, setBio] = useState(profileUpdateExample[0]);
  const [major, setMajor] = useState(profileUpdateExample[1]);
  const [phoneNumber, setPhoneNumber] = useState(profileUpdateExample[2]);
  const [studentId, setStudentId] = useState(profileUpdateExample[3]);

  const ProfileUpdate = () => {
    const data = {
      bio,
      major,
      phoneNumber,
      studentId,
    };
    axios
      .patch("http://3.39.36.239:8080/api/member/profile", data)
      .then((response) => {
        alert("값 변경 완료");
      })
      .catch((error) => {
        alert("변경이 불가능합니다.");
      });
  };

  const DeleteUser = () => {
    //나중에 여기에 모달창 추가해서 삭제 디자인에 맞게 적용 예정
    const passwordPost = {
      password,
    };
    axios
      .delete("http://3.39.36.239:8080/api/member", passwordPost)
      .then((response) => {
        alert("계정 삭제 완료");
      })
      .catch((error) => {
        if (error.response.state === 400) {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (error.response.state === 404) {
          alert("존재하지 않는 사용자입니다?");
        }
      });
  };

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
              <SaveButton onClick={() => ProfileUpdate()}>저장하기</SaveButton>
              <SaveButton
                onClick={() =>
                  navigate("/ChangePw", {
                    state: {
                      pw: password,
                    },
                  })
                }
              >
                비밀번호 변경
              </SaveButton>
            </ProfileTitle>
            <SideBox>
              <TitleBox>이름</TitleBox>
              <NameInput placeholder="김철수" />
            </SideBox>
            <SideBox>
              <TitleBox>한줄 소개</TitleBox>
              <OnelineInput placeholder={profileUpdateExample[0]} />
            </SideBox>
            <InfoTitle>상세 정보 수정</InfoTitle>
            <SideBox>
              <TitleBox>아이디 </TitleBox>
              <InputFiled placeholder="asdasdasd" />
            </SideBox>
            <SideBox>
              <TitleBox>이메일 </TitleBox>
              <InputFiled placeholder="example@suwon.ac.kr" />
            </SideBox>
            <SideBox>
              <TitleBox>전화번호 </TitleBox>
              <InputFiled placeholder="010-xxxx-xxxx" />
            </SideBox>
            <SideBox>
              <TitleBox>전공 </TitleBox>
              <InputFiled placeholder="컴퓨터SW" />
            </SideBox>
            <SideBox>
              <TitleBox>학번 </TitleBox>
              <InputFiled placeholder="11111111" />
            </SideBox>
            <DeleteBox>
              <DeleteButton onClick={() => DeleteUser()}>회원탈퇴</DeleteButton>
            </DeleteBox>
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
  width: 35%;
  height: 3vh;
  background: transparent;
  border-radius: 1.5vh;
  border: 1px solid gray;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 4vw;
  color: white;
  padding-left: 10px;
  ::placeholder {
    color: white;
  }
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
  padding-left: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  resize: none;
  font-family: Arial;
  ::placeholder {
    color: white;
  }
`;

const TitleBox = styled.div`
  width: 100px;
`;

const InputFiled = styled.input`
  width: 35%;
  height: 3vh;
  color: white;
  background: transparent;
  border-radius: 2vh;
  border: 1px solid gray;
  margin-left: 4vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding-left: 10px;
  ::placeholder {
    color: white;
  }
`;

const SaveButton = styled.button`
  width: 13%;
  height: 90%;
  background: #6c6c6c;
  color: white;
  border-radius: 1vh;
  border: 0px;
  margin-left: 5%;
  font-size: 0.5rem;
  font-weight: 500;
  outline: none;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

const ImgSaveButton = styled.button`
  width: 50%;
  height: 15%;
  background: #6c6c6c;
  color: white;
  border-radius: 1vh;
  border: 0px;
  margin-left: 5%;
  font-size: 0.5rem;
  font-weight: 500;
  outline: none;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
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

const DeleteBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2vh;
`;

const DeleteButton = styled.button`
  width: 150px;
  height: 23px;
  background: #6c6c6c;
  color: white;
  border-radius: 1vh;
  border: 0px;
  margin-right: 50px;
  font-size: 0.5rem;
  font-weight: 500;
  outline: none;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

export default EditUser;
