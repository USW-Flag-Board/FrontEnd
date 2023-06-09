import { useEffect, useState } from "react";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { Header, ReportModal } from "../../components";
import { useParams } from "react-router-dom";
import { SessionStorage } from "../../utils/browserStorage";

const UserInfo = () => {
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const [userData, setUserData] = useState("");
  const { bio, nickname, profileImg, loginId } = userData;
  const { userId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = (state) => {
    setModalOpen(state);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(`/members/${userId}`);
        console.log(response);
        setUserData(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <>
      <Header />
      {modalOpen && (
        <ReportModal
          handleModalOpen={handleModalOpen}
          loginId={loginId}
          nickname={nickname}
          type="USER"
        />
      )}
      <PageArea>
        <PageBox>
          <TopPage>
            <UserPageBox>
              <ProfileArea>
                <ProfileBox>
                  <ProfileImg src={imgUrl + profileImg} />
                  {SessionStorage.get("User_id") !== loginId && (
                    <ReportButton
                      type="button"
                      onClick={() => handleModalOpen(true)}
                    >
                      신고하기
                    </ReportButton>
                  )}
                </ProfileBox>
                <NickNameArea>
                  <NickName>{nickname}</NickName>
                  <UserId>{loginId}</UserId>
                  <Introduce>{bio}</Introduce>
                </NickNameArea>
              </ProfileArea>
            </UserPageBox>
            <HistoryArea></HistoryArea>
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
`;

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

const UserPageBox = styled.div`
  width: 40%;
  height: 100%;
  background-color: #e7f5ff;
  display: flex;
`;

const ProfileArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProfileBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReportButton = styled.button`
  padding: 0.4rem;
  border-radius: 0.2rem;
  border: 1px solid white;
  color: white;
  background-color: #339af0;
  cursor: pointer;
`;

const NickNameArea = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NickName = styled.div`
  width: 100%;
  height: 40%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.5rem;
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
  display: flex;
  align-items: center;
`;

const HistoryArea = styled.div`
  background-color: #f1f3f5;
  width: 60%;
  height: 100%;
`;

export default UserInfo;
