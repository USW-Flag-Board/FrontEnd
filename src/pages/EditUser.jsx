import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Cookies from "universal-cookie";
import {PropaneSharp} from "@mui/icons-material";

const profileUpdateExample = [
  "백엔드 개발자 문희조입니다.",
  "컴퓨터SW",
  "010-1234-5678",
  "19017041",
];

const menuArray = [{name: "아바타"}, {name: "개인정보"}];

const EditUser = ({setHeader}) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [currentTab, clickTab] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");

  const indexSetting = (index) => {
    clickTab(index);
  };

  const DeleteUser = () => {
    //나중에 여기에 모달창 추가해서 삭제 디자인에 맞게 적용 예정
    axios
      .delete("http://3.39.36.239:8080/api/members", {
        data: {
          password: "asdasd72!@",
        },
      })
      .then((response) => {
        alert("계정 삭제 완료");
        cookies.remove("refresh_token");
        cookies.remove("remember_id");
        localStorage.clear();
        sessionStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        if (error.response.state === 400) {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (error.response.state === 404) {
          alert("존재하지 않는 사용자입니다?");
        }
      });
  };

  useEffect(() => {
    setHeader(true);
  }, []);

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
            <div style={{display: "flex"}}>
              <TabMenu>
                {menuArray.map((el, index) => (
                  <li
                    className={
                      index === currentTab ? "submenu focused" : "submenu"
                    }
                    onClick={() => indexSetting(index)}
                    key={el.name}
                  >
                    {el.name}
                  </li>
                ))}
              </TabMenu>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                borderColor: "#6c6c6c",
                borderRadius: "0px 28px 28px 28px",
                padding: "calc(10% + 20px) 0px 20px 20px",
                width: "90%",
              }}
            >
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
            </div>
            <DeleteBox>
              <DeleteButton onClick={() => DeleteUser()}>회원탈퇴</DeleteButton>
            </DeleteBox>
          </MainContent>
        </Editbox>
      </Mainbox>
    </>
  );
};

const AvatarEdit = (props) => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [nickName, setNickName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [editable, setEditable] = useState(false);

  const ProfileUpdate = () => {
    axios
      .put("http://3.39.36.239:8080/api/members/avatar", {
        bio: bio,
        nickName: nickName,
        profileImg: profileImg,
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
      .get("http://3.39.36.239:8080/api/members")
      .then((response) => {
        setNickName(response.data.payload.nickName);
        setBio(response.data.payload.bio);
        props.setName(response.data.payload.name);
        props.setEmail(response.data.payload.email);
        props.setMajor(response.data.payload.major);
        props.setPhoneNumber(response.data.payload.phoneNumber);
        props.setStudentId(response.data.payload.studentId);
      })
      .catch((error) => {
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

const PrivateEdit = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ProfileTitle>개인정보</ProfileTitle>
      <SideBox>
        <TitleBox>이름 </TitleBox>
        <InputFiled placeholder={props.name} />
      </SideBox>
      <SideBox>
        <TitleBox>이메일 </TitleBox>
        <InputFiled placeholder={props.email} />
      </SideBox>
      <SideBox>
        <TitleBox>전공 </TitleBox>
        <InputFiled placeholder={props.major} />
      </SideBox>
      <SideBox>
        <TitleBox>전화번호 </TitleBox>
        <InputFiled
          placeholder={props.phoneNumber.replace(
            /^(\d{2,3})(\d{3,4})(\d{4})$/,
            `$1-$2-$3`
          )}
        />
      </SideBox>
      <SideBox>
        <TitleBox>학번 </TitleBox>
        <InputFiled placeholder={props.studentId} />
      </SideBox>
    </>
  );
};

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
