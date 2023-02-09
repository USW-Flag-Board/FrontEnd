import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Cookies from "universal-cookie";

const MENU_ARRAY = [{name: "아바타"}, {name: "개인정보"}];

const EditUser = ({setHeader}) => {
  const [currentTab, clickTab] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const indexSetting = (index) => {
    clickTab(index);
  };

  const DeleteUser = () => {
    setDeleteModalOpen(true);
  };

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <>
      <Mainbox>
        {deleteModalOpen && (
          <DeleteModal
            className={deleteModalOpen ? "opaque" : ""}
            setDeleteModalOpen={setDeleteModalOpen}
          />
        )}
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
            <div style={{display: "flex"}}>
              <TabMenu>
                {MENU_ARRAY.map((el, index) => (
                  <li
                    className={
                      index === currentTab ? "submenu focused" : "submenu"
                    }
                    onClick={() => indexSetting(index)}
                    key={index}
                  >
                    {el.name}
                  </li>
                ))}
              </TabMenu>
            </div>
            <TabContent>
              {currentTab === 0 && (
                <AvatarEdit
                  setName={setName}
                  setEmail={setEmail}
                  setMajor={setMajor}
                  setPhoneNumber={setPhoneNumber}
                  setStudentId={setStudentId}
                />
              )}
              {currentTab === 1 && (
                <PrivateEdit
                  name={name}
                  email={email}
                  major={major}
                  phoneNumber={phoneNumber}
                  studentId={studentId}
                />
              )}
            </TabContent>
            <DeleteBox>
              <DeleteModalButton
                onClick={() => {
                  DeleteUser();
                }}
              >
                회원탈퇴
              </DeleteModalButton>
            </DeleteBox>
          </MainContent>
        </Editbox>
      </Mainbox>
    </>
  );
};

const AvatarEdit = ({
  setName,
  setEmail,
  setMajor,
  setPhoneNumber,
  setStudentId,
}) => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [nickName, setNickName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [editable, setEditable] = useState(false);

  const ProfileUpdate = () => {
    axios
      .put("http://3.39.36.239:80/api/members/avatar", {
        bio,
        nickName,
        profileImg,
      })
      .then(() => {
        alert("값 변경 완료");
      })
      .catch(() => {
        alert("변경이 불가능합니다.");
      });
  };

  useEffect(() => {
    axios
      .get("http://3.39.36.239:80/api/members")
      .then((response) => {
        setNickName(response.data.payload.nickName);
        setBio(response.data.payload.bio);
        setName(response.data.payload.name);
        setEmail(response.data.payload.email);
        setMajor(response.data.payload.major);
        setPhoneNumber(response.data.payload.phoneNumber);
        setStudentId(response.data.payload.studentId);
      })
      .catch(() => {
        alert("데이터를 불러오는데 실패했습니다.");
      });
  }, []);

  return (
    <>
      <ProfileTitle>
        프로필 정보 수정
        {editable ? (
          <SaveButton
            onClick={() => {
              ProfileUpdate();
              setEditable(false);
            }}
          >
            저장하기
          </SaveButton>
        ) : (
          <SaveButton onClick={() => setEditable(true)}>수정하기</SaveButton>
        )}
        <SaveButton onClick={() => navigate("/ChangePw")}>
          비밀번호 변경
        </SaveButton>
      </ProfileTitle>
      <SideBox>
        <TitleBox>닉네임</TitleBox>
        <NameInput
          onChange={(e) => setNickName(e.target.value)}
          placeholder={nickName}
          disabled={!editable}
        />
      </SideBox>
      <SideBox>
        <TitleBox>한줄 소개</TitleBox>
        <OnelineInput
          onChange={(e) => setBio(e.target.value)}
          placeholder={bio}
          disabled={!editable}
        />
      </SideBox>
    </>
  );
};

const PrivateEdit = ({name, email, major, phoneNumber, studentId}) => {
  return (
    <>
      <ProfileTitle>개인정보</ProfileTitle>
      <SideBox>
        <TitleBox>이름 </TitleBox>
        <InputFiled placeholder={name} disabled />
      </SideBox>
      <SideBox>
        <TitleBox>이메일 </TitleBox>
        <InputFiled placeholder={email} disabled />
      </SideBox>
      <SideBox>
        <TitleBox>전공 </TitleBox>
        <InputFiled placeholder={major} disabled />
      </SideBox>
      <SideBox>
        <TitleBox>전화번호 </TitleBox>
        <InputFiled
          placeholder={phoneNumber.replace(
            /^(\d{2,3})(\d{3,4})(\d{4})$/,
            `$1-$2-$3`
          )}
          disabled
        />
      </SideBox>
      <SideBox>
        <TitleBox>학번 </TitleBox>
        <InputFiled placeholder={studentId} disabled />
      </SideBox>
    </>
  );
};

const DeleteModal = ({setDeleteModalOpen}) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setDeleteModalOpen(false);
  };

  const DeleteUserId = () => {
    axios
      .delete("http://3.39.36.239:80/api/members", {
        data: {
          password,
        },
      })
      .then(() => {
        alert("계정 삭제 완료");
        cookies.remove("refresh_token");
        cookies.remove("remember_id");
        localStorage.clear();
        sessionStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400:
            alert("비밀번호가 일치하지 않습니다.");
            break;
          case 404:
            alert("존재하지 않는 사용자입니다.");
            break;
          default:
            alert("서버 통신 오류.");
        }
      });
  };

  return (
    <>
      <DeleteModalBox>
        <ExitModal onClick={() => closeModal()}>X</ExitModal>
        <DeleteModalTitle>회원탈퇴</DeleteModalTitle>
        <DeleteModalContent>
          회원탈퇴를 원하신다면 비밀번호를 입력해주세요.
        </DeleteModalContent>
        <InputPassword
          onChange={(e) => setPassword(e.target.value)}
        ></InputPassword>
        <DeleteButton onClick={() => DeleteUserId()}>탈퇴하기</DeleteButton>
      </DeleteModalBox>
    </>
  );
};

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: #6c6c6c;
  borderradius: 0px 28px 28px 28px;
  padding: calc(10% + 20px) 0px 20px 20px;
  width: 90%;
`;

const DeleteModalBox = styled.div`
  width: 30%;
  height: 25%;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #6c6c6c;
  transition: 0.2s;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const DeleteModalTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
`;

const DeleteModalContent = styled.div`
  margin-top: 10%;
`;

const DeleteButton = styled.div`
  width: 15%;
  height: 8%;
  background: white;
  color: red;
  border-radius: 1vh;
  border: 1px solid red;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 0.5rem;
  font-weight: 500;
  outline: none;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

const ExitModal = styled.button`
  position: absolute;
  background: transparent;
  outline: none;
  border: none;
  left: 93%;
  top: 5%;
`;

const InputPassword = styled.input`
  width: 50%;
  height: 3vh;
  background: white;
  border-radius: 1.5vh;
  border: none;
  outline: none;
  color: black;
  padding-left: 10px;
  margin-top: 5vh;
`;

const TabMenu = styled.ul`
  background: #403e3e;
  color: #a3a2a2;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-top: 10px;
  border-radius: 10px 10px 0px 0px;

  .submenu {
    display: flex;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    background: #6c6c6c;
    color: white;
  }
`;

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
  height: auto;
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
  justify-content: center;
  align-items: center;
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

const DeleteBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 2vh;
`;

const DeleteModalButton = styled.button`
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
