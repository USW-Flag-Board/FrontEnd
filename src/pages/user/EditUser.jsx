import { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { MyProfile } from "../../components";
import { BAR_NAME } from "../../constants/user";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { SessionStorage } from "../../utils/browserStorage";
import { cookiesOption } from "../../utils/cookiesOption";

const EditUser = () => {
  const [barName, setBarName] = useState("내프로필");
  const [userData, setUserData] = useState({
    loginId: "",
    bio: "",
    email: "",
    major: "",
    nickName: "",
    studentId: "",
  });
  const [profileImg, setProfileImg] = useState(null);
  const { bio, email, major, name, nickName, studentId, loginId } = userData;
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    SessionStorage.clear();
    cookiesOption.remove("refresh_token");
    navigate("/login");
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const formData = new FormData();
    formData.append("image", file);

    try {
      await instance.post("/members/avatar/image", formData);

      reader.onload = () => {
        setProfileImg(reader.result);
      };
    } catch (error) {
      console.log(error);
    }

    reader.readAsDataURL(file);
  };

  const handleBarNameClick = (name) => {
    switch (name) {
      case "내프로필":
        setBarName("내프로필");
        break;
      case "나의활동":
        setBarName("나의활동");
        break;
      case "로그아웃":
        if (window.confirm("로그아웃 하시겠습니까?")) {
          handleLogOutClick();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get("/members");
        const data = response.data.payload;
        setProfileImg(data.profileImg);
        setUserData((prevState) => ({
          ...prevState,
          bio: data.bio,
          name: data.name,
          email: data.email,
          major: data.major,
          nickName: data.nickName,
          studentId: data.studentId,
          loginId: data.loginId,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <EditPageArea>
        <EditPageBox>
          <Aside>
            <LogoBox>
              <LogoImg
                src={logo}
                alt="blog-logo"
                onClick={() => navigate("/")}
              />
            </LogoBox>
            <ProfileBox>
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
              <NameBox>{name}</NameBox>
              <EmailBox>{email}</EmailBox>
            </ProfileBox>
            <BarItemBox>
              {BAR_NAME.map(({ id, name }) => (
                <BarItem key={id} onClick={() => handleBarNameClick(name)}>
                  {name}
                </BarItem>
              ))}
            </BarItemBox>
          </Aside>
        </EditPageBox>
        <EditPageBox>
          {barName === "내프로필" && (
            <MyProfile
              profileImg={profileImg}
              nickName={nickName}
              bio={bio}
              major={major}
              studentId={studentId}
              loginId={loginId}
              setUserData={setUserData}
              setProfileImg={setProfileImg}
            />
          )}
        </EditPageBox>
      </EditPageArea>
    </div>
  );
};

export default EditUser;

const EditPageArea = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 0 0 8rem;
  display: flex;
`;

const EditPageBox = styled.div`
  width: 70%;
  &:nth-child(1) {
    width: 30%;
    z-index: 1;
  }
  &:nth-child(2) {
    /* background-color: #f8f9fa; */
  }
`;

const Aside = styled.div`
  height: 100%;
  overflow: auto;
  border-left: 1px solid #ced4da;
  border-right: 1px solid #ced4da;
  box-shadow: 5px 1px 8px 0 rgba(0, 0, 0, 0.126);
`;

const LogoBox = styled.div`
  width: 50%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  margin-bottom: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImgBox = styled.div`
  width: 100%;
  height: 9rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 40%;
  height: 100%;
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

const NameBox = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.6rem;
`;

const EmailBox = styled.p`
  font-size: 0.9rem;
  color: #ced4da;
`;

const BarItemBox = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-top: 3rem;
`;

const BarItem = styled.p`
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  height: 3rem;
  margin-bottom: 1rem;
`;
