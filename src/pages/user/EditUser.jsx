import { faPen, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import logo from "../../assets/images/logo2.png";
import { MyProfile } from "../../components";
import { BAR_NAME } from "../../constants/user";
import { SessionStorage } from "../../utils/browserStorage";
import { cookiesOption } from "../../utils/cookiesOption";

const EditUser = () => {
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const [barName, setBarName] = useState("내프로필");
  const [userData, setUserData] = useState({
    loginId: "",
    bio: "",
    email: "",
    major: "",
    nickname: "",
    studentId: "",
  });
  const [profileImg, setProfileImg] = useState("");
  const { bio, email, major, name, nickname, studentId, loginId } = userData;
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    SessionStorage.clear();
    cookiesOption.remove("refresh_token");
    navigate("/login");
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await instance.post("/images/profile", formData);
      if (response.status === 201) {
        await instance.put("/members/avatar/profile-image", {
          profileImage: response.data.message,
        });
        setProfileImg(imgUrl + response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgReset = async () => {
    const defaultImg = "avatar/default_image.jpg";
    try {
      await instance.put("/members/avatar/profile-image", {
        profileImage: defaultImg,
      });
      setProfileImg(imgUrl + defaultImg);
    } catch (error) {
      console.log(error);
    }
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
        setProfileImg(imgUrl + data.profileImg);
        setUserData((prevState) => ({
          ...prevState,
          bio: data.bio,
          name: data.name,
          email: data.email,
          major: data.major,
          nickname: data.nickname,
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
        <EditPage>
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
                  <IdButtonBox>
                    <label htmlFor="img-reset">
                      <FontAwesomeIcon
                        icon={faTrashArrowUp}
                        className="btn-reset"
                      >
                        프로필 사진 변경
                      </FontAwesomeIcon>
                    </label>
                    <ImgResetButton
                      type="button"
                      id="img-reset"
                      onClick={handleImgReset}
                    />
                  </IdButtonBox>
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
                  <BarItem
                    key={id}
                    onClick={() => handleBarNameClick(name)}
                    selected={barName === name}
                  >
                    {name}
                  </BarItem>
                ))}
              </BarItemBox>
            </Aside>
          </EditPageBox>
          <EditPageBox>
            {barName === "내프로필" && (
              <MyProfile
                nickname={nickname}
                bio={bio}
                major={major}
                studentId={studentId}
                loginId={loginId}
                setUserData={setUserData}
              />
            )}
          </EditPageBox>
        </EditPage>
      </EditPageArea>
    </div>
  );
};

export default EditUser;

const EditPageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

const EditPage = styled.div`
  width: 80%;
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 90%;
  }
`;

const EditPageBox = styled.div`
  &:nth-child(1) {
    width: 30%;
    z-index: 1;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
  &:nth-child(2) {
    width: 70%;
    @media screen and (max-width: 480px) {
      width: 100%;
      border: none;
      box-shadow: none;
    }
  }
`;

const Aside = styled.div`
  height: 100%;
  overflow: auto;
  border-left: 1px solid #ced4da;
  border-right: 1px solid #ced4da;
  box-shadow: 5px 1px 8px 0 rgba(0, 0, 0, 0.126);
  @media screen and (max-width: 480px) {
    width: 100%;
    border: none;
    box-shadow: none;
  }
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
  @media screen and (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

const ProfileImgBox = styled.div`
  width: 100%;
  height: 9rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 9rem;
  height: 100%;
  border-radius: 50%;
`;

const IdButtonBox = styled.div`
  #file {
    display: none;
  }
  #img-reset {
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
    top: 7.5rem;
    right: 2.5rem;
    cursor: pointer;
  }
  .btn-reset {
    border-radius: 1rem;
    background-color: #adb5bd;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    position: relative;
    top: 7.5rem;
    left: 2.5rem;
    cursor: pointer;
  }
`;

const ImgEditButton = styled.input`
  width: 100%;
  height: 100%;
`;

const ImgResetButton = styled.button`
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
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin-top: 0;
  }
`;

const BarItem = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  height: 3rem;
  margin-bottom: 1rem;
  border-bottom: ${(props) =>
    props.selected ? "2px solid black" : "2px solid white"};
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    font-size: 0.9rem;
  }
`;
