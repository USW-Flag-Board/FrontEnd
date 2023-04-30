import { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { MyProfile } from "../../components";
import { BAR_NAME } from "../../constants/user";

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
  
  const handleBarNameClick = (name) => {
    switch (name) {
      case "내프로필":
        setBarName("내프로필");
        break;
      case "보안설정":
        setBarName("보안설정");
        break;
      case "나의활동":
        setBarName("나의활동");
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
      {/* <ListBar>
        <BarItemBox>
          {BAR_NAME.map(({ id, name }) => (
            <BarItem key={id} onClick={() => handleBarNameClick(name)}>
              {name}
            </BarItem>
          ))}
        </BarItemBox>
      </ListBar> */}
      <EditPageArea>
        <EditPageBox>
          <div>
            <div></div>
          </div>
        </EditPageBox>
        <EditPageBox>
          {barName === "내프로필" && (
            <MyProfile
              profileImg={profileImg}
              nickName={nickName}
              bio={bio}
              major={major}
              studentId={studentId}
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
  padding: 0 8rem;
  display: flex;
`;

const EditPageBox = styled.div`
  width: 60%;
  &:nth-child(1){
    width: 40%;
  }
`

const ListBar = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 8rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
`;

const BarItemBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const BarItem = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
`;
