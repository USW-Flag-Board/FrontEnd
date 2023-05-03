import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookiesOption } from "../../utils/cookiesOption";
import { SessionStorage } from "../../utils/browserStorage";
import { Header } from "../../components";
import { baseInstance } from "../../apis/instance";

const MyPage = () => {
  const header = true;
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const { bio, nickName, profileImg, loginId } = userData;
  
  useEffect(()=> {
    const loginId = SessionStorage.get("User_id");
    baseInstance.get(`/members/${loginId}`)
      .then(response => {
        setUserData(response.data.payload);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <>
      {header && <Header/>}
      <PageArea>
        <PageBox>
          <TopPage>
            <UserPage>
              <ProfileArea>
                <ProfileBox>
                  <ProfileImg src={profileImg} />
                </ProfileBox>
                <NickNameArea>
                  <NickName>{nickName}</NickName>
                  <UserId>{loginId}</UserId>
                  <Introduce>{bio}</Introduce>
                </NickNameArea>
              </ProfileArea>
              <ProfileButtonBox>
                <EditProfile>프로필 수정</EditProfile>
              </ProfileButtonBox>
            </UserPage>
            <HistoryArea>

            </HistoryArea>
          </TopPage>
          <BottomPage>내가 쓴 글</BottomPage>
        </PageBox>
      </PageArea>
    </>
  );
};

const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border: 3px solid gray;
  border-radius: 50%;
`;

const PageArea = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
`;

const PageBox = styled.div`
  width: calc(100vw - 16rem);
  box-sizing: border-box;
`

const TopPage = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
`;

const BottomPage = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
`;

const UserPage = styled.div`
  width: 40%;
  height: 100%;
  background-color: #e7f5ff;
`;

const ProfileArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

const ProfileButtonBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ProfileBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditProfile = styled.button`
  font-size: 1rem;
  width: 30%;
  height: 50%;
  color: white;
  background-color: #434343;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-radius: 10px;
  :hover {
    background-color: #4d4d4d;
  }
`;

const NickNameArea = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const NickName = styled.div`
  width: 100%;
  height: 40%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
`;

const Introduce = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 50%;
  padding-top: 1rem;
`;

const UserId = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 10%;
`;

const HistoryArea = styled.div`
  background-color: #f1f3f5;
  width: 60%;
  height: 100%;
`;

export default MyPage;
