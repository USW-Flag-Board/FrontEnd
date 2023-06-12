import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { Header, ListThem, Pagination, ReportModal } from "../../components";
import { SessionStorage } from "../../utils/browserStorage";

const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

const PageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PageBox = styled.div`
  width: 80%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const TopPage = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const BottomPage = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const UserPageBox = styled.div`
  width: 40%;
  background-color: #e7f5ff;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ProfileArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const PostListBox = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const PostList = styled.div`
  text-decoration: none;
  font-size: 1rem;
`;

const ActivitiesBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityBox = styled.div`
  width: 100%;
  display: flex;
  font-weight: bold;
`;

const ActivityYear = styled.div`
  width: 10%;
  @media screen and (max-width: 480px) {
    width: 20%;
  }
`;
const ActivityStatus = styled.div`
  width: 10%;
  margin-right: 1rem;
  @media screen and (max-width: 480px) {
    width: 20%;
  }
`;
const ActivityName = styled.div`
  width: 50%;
`;
const ActivitySemester = styled.div`
  width: 30%;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Activity = ({ activityStatus, name, semester, year }) => {
  return (
    <ActivityBox>
      <ActivityYear>{year}</ActivityYear>
      <ActivitySemester>{semester}</ActivitySemester>
      <ActivityStatus>
        {activityStatus === "RECRUIT" && "모집중"}
        {activityStatus === "ON" && "활동중"}
        {activityStatus === "OFF" && "활동종료"}
      </ActivityStatus>
      <ActivityName>{name}</ActivityName>
    </ActivityBox>
  );
};

const UserInfo = () => {
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const [userData, setUserData] = useState({
    members: {},
    posts: [],
    activities: [],
  });
  const [postsCurrentItems, setpostsCurrentItems] = useState([]);
  const { bio, nickname, profileImg, loginId } = userData.members;
  const { userId } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = (state) => {
    setModalOpen(state);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const [membersResponse, postsResponse, activitiesResponse] =
          await Promise.all([
            instance.get(`/members/${userId}`),
            instance.get(`/posts/${userId}/profile`),
            instance.get(`/activities/${userId}/profile`),
          ]);
        setUserData({
          members: membersResponse.data.payload,
          posts: postsResponse.data.payload,
          activities: activitiesResponse.data.payload,
        });
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
            <HistoryArea>
              <ActivitiesBox>
                {Array.isArray(userData.activities) &&
                  userData.activities.map(
                    ({ id, semester, name, activityStatus, year }) => (
                      <Activity
                        key={id}
                        semester={semester}
                        name={name}
                        year={year}
                        activityStatus={activityStatus}
                      />
                    )
                  )}
              </ActivitiesBox>
            </HistoryArea>
          </TopPage>
          <BottomPage>
            <PostListBox>
              {Array.isArray(userData.posts) &&
                postsCurrentItems.map((post) => (
                  <PostList
                    key={post.id}
                    onClick={() => navigate(`/board/post/${post.id}`)}
                  >
                    <ListThem post={post} />
                  </PostList>
                ))}
            </PostListBox>
            <Pagination
              items={userData.posts}
              itemsPerPage={5}
              setCurrentItems={setpostsCurrentItems}
            />
          </BottomPage>
        </PageBox>
      </PageArea>
    </>
  );
};

export default UserInfo;
