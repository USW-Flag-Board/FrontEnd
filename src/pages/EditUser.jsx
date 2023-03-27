import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {cookiesOption} from "../utils/cookiesOption";
import {LocalStorage, SessionStorage} from "../utils/browserStorage";
import {PutAvatarInfo, GetUserInfo, DeleteUser} from "../apis/user";
import {baseInstance} from "../apis/instance";

const MENU_ARRAY = [{name: "아바타"}, {name: "개인정보"}];

const EditUser = ({setHeader}) => {
  const [currentTab, clickTab] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [profileImg, setProfileImg] = useState("");
  let navigate = useNavigate();

  const indexSetting = (index) => {
    clickTab(index);
  };

  const onUpload = (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("profile-Image", file);
    // for (var key of formData.values()) {
    //   console.log(key);
    // }

    // baseInstance.post("http://3.39.36.239:8080/members/avatar/image", formData);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        setProfileImg(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    setHeader(true);
  }, []);

  useEffect(() => {
    console.log(profileImg);
  }, [profileImg]);

  return (
    <>
      <MainBox>
        <EditTitle>회원 정보 수정</EditTitle>
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
          {currentTab === 0 && (
            <TabContent>
              <ImgBox>
                <ProFile
                  style={
                    profileImg === "default"
                      ? {
                          backgroundImage: `url("../images/base-profile.png")`,
                        }
                      : {backgroundImage: `url(${profileImg})`}
                  }
                ></ProFile>
                <InputProfileLabel htmlFor="profileImg">
                  프로필 사진 변경
                </InputProfileLabel>
                <InputProfileImg
                  id="profileImg"
                  type="file"
                  accept="image/*"
                  onChange={(e) => onUpload(e)}
                ></InputProfileImg>
              </ImgBox>
              <ContentBox>
                <AvatarEdit
                  setName={setName}
                  setEmail={setEmail}
                  setMajor={setMajor}
                  setPhoneNumber={setPhoneNumber}
                  setStudentId={setStudentId}
                  setProfileImg={setProfileImg}
                />
              </ContentBox>
            </TabContent>
          )}
          {currentTab === 1 && (
            <TabContent>
              <ContentBox>
                <PrivateEdit
                  name={name}
                  email={email}
                  major={major}
                  phoneNumber={phoneNumber}
                  studentId={studentId}
                />
              </ContentBox>
            </TabContent>
          )}
        </MainContent>
      </MainBox>
    </>
  );
};

const AvatarEdit = ({
  setName,
  setEmail,
  setMajor,
  setPhoneNumber,
  setStudentId,
  setProfileImg,
}) => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [nickName, setNickName] = useState("");
  const [editable, setEditable] = useState(false);

  const ProfileUpdate = () => {
    PutAvatarInfo(bio, nickName)
      .then(() => {
        alert("값 변경 완료");
      })
      .catch(() => {
        alert("변경이 불가능합니다.");
      });
  };

  useEffect(() => {
    if (nickName) {
      return;
    }
    GetUserInfo()
      .then((response) => {
        setNickName(response.data.payload.nickName);
        setBio(response.data.payload.bio);
        setProfileImg(response.data.payload.profileImg);
        setName(response.data.payload.name);
        setEmail(response.data.payload.email);
        setMajor(response.data.payload.major);
        setPhoneNumber(response.data.payload.phoneNumber);
        setStudentId(response.data.payload.studentId);
      })
      .catch(() => {});
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
        <OneLineInput
          onChange={(e) => setBio(e.target.value)}
          placeholder={bio}
          disabled={!editable}
        />
      </SideBox>
    </>
  );
};

const PrivateEdit = ({name, email, major, phoneNumber, studentId}) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const DeleteUser = () => {
    setDeleteModalOpen(true);
  };

  return (
    <>
      {deleteModalOpen && (
        <DeleteModal
          className={deleteModalOpen ? "opaque" : ""}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}
      <ProfileTitle>상세정보</ProfileTitle>
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
      <DeleteBox>
        <DeleteModalButton
          onClick={() => {
            DeleteUser();
          }}
        >
          회원 탈퇴
        </DeleteModalButton>
      </DeleteBox>
    </>
  );
};

const DeleteModal = ({setDeleteModalOpen}) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [exitModalNumber, setExitModalNumber] = useState(1);

  const closeModal = () => {
    setDeleteModalOpen(false);
  };

  const DeleteUserId = () => {
    DeleteUser(password)
      .then((response) => {
        alert("계정 삭제 완료");
        console.log(response);
        closeModal();
        cookiesOption.remove("refresh_token");
        cookiesOption.remove("remember_id");
        LocalStorage.clear();
        SessionStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
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

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      DeleteUserId();
    }
  };

  return (
    <>
      <DeleteModalBox>
        <ExitModal onClick={() => closeModal()}>X</ExitModal>
        {exitModalNumber === 1 && (
          <>
            <DeleteModalContent>정말로 탈퇴하시겠습니까?</DeleteModalContent>
            <DeleteButtonArea>
              <DeleteCancelButton onClick={() => closeModal()}>
                아니오
              </DeleteCancelButton>

              <DeleteButton
                onClick={() => setExitModalNumber(exitModalNumber + 1)}
              >
                탈퇴하기
              </DeleteButton>
            </DeleteButtonArea>
          </>
        )}
        {exitModalNumber === 2 && (
          <>
            <DeleteModalContent type="password">
              비밀번호를 입력하세요.
            </DeleteModalContent>
            <InputPassword
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                handleOnKeyPress(e);
              }}
            ></InputPassword>
            <DeleteButtonArea style={{width: "30%", flex: "4 0 0"}}>
              <DeleteCancelButton onClick={() => DeleteUserId()}>
                비밀번호 확인
              </DeleteCancelButton>
            </DeleteButtonArea>
          </>
        )}
      </DeleteModalBox>
    </>
  );
};

const ContentBox = styled.div`
  display: flex;
  flex: 10 0 auto;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: 10%;
`;

const InputProfileLabel = styled.label`
  font-size: 1rem;
  width: 90%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #434343;
  padding: 5% 0;
  display: flex;
  justify-content: center;
`;

const InputProfileImg = styled.input`
  display: none;
`;

const TabContent = styled.div`
  display: flex;
  border: 1px solid;
  border-color: #6c6c6c;
  align-items: center;
  border-radius: 0px 28px 28px 28px;
  width: 90%;
  height: 50vh;
`;

const DeleteButtonArea = styled.div`
  display: flex;
  flex: 2 0 0;
  width: 70%;
  height: 20%;
  justify-content: center;
  align-items: base-line;
`;

const DeleteModalBox = styled.div`
  width: 30%;
  height: 20%;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const DeleteModalContent = styled.div`
  display: flex;
  flex: 4 0 0;
  align-items: center;
  margin-top: 10px;
  color: #434343;
  font-size: 1rem;
`;

const DeleteCancelButton = styled.div`
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  background-color: #4d6ec6;
  color: white;
  margin: 10px 5%;
  border-radius: 30px;
  transition: 0.2s;
  font-size: 0.8rem;
  :hover {
    transition: 0.2s;
    background-color: #577de6;
  }
`;

const DeleteButton = styled.div`
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  align-items: center;
  background-color: #404040;
  color: white;
  margin: 10px 5%;
  border-radius: 30px;
  transition: 0.2s;
  font-size: 0.8rem;

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
  display: flex;
  flex: 2 0 0;
  width: 55%;
  background: white;
  border-radius: 30px;
  border: 1px solid #8e8e8e;
  outline: none;
  color: #434343;
  margin-bottom: 20px;
  padding-left: 10px;
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

const MainBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
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

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2 0 auto;
`;

const ProFile = styled.div`
  border-radius: 50%;
  border: 2px solid white;
  width: 220px;
  height: 220px;
  margin-bottom: 2vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
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

const OneLineInput = styled.textarea`
  width: 60%;
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
  margin-left: 20px;
  width: 100px;
  height: 23px;
  background: #434343;
  color: white;
  border-radius: 5px;
  border: 0px;
  font-size: 0.7rem;
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
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800px;
  margin-bottom: 2vh;
`;

const DeleteBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeleteModalButton = styled.button`
  width: 120px;
  height: 23px;
  background: #434343;
  color: white;
  border-radius: 5px;
  border: 0px;
  margin-right: 50px;
  font-size: 0.7rem;
  font-weight: 500;
  outline: none;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: #575757;
  }
`;

export default EditUser;
