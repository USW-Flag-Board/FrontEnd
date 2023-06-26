import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import {
  Header,
  Pagination,
  ReportModal,
  UserPost,
  UserActivity,
} from "../../components";
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

const PostArea = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: calc(89vh - 10rem);
  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    flex-direction: column;
    margin: 2rem 0;
  }
`;

const BoxTitle = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  width: fit-content;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid black;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const UserPageBox = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #d0ebff;
  display: flex;
  align-items: center;
`;

const ProfileArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
`;

const ProfileBox = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReportButton = styled(FontAwesomeIcon)`
  height: 50%;
  color: red;
  cursor: pointer;
`;

const NickNameArea = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

const NickNameBox = styled.div`
  width: 100%;
  height: 30%;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Introduce = styled.div`
  font-size: 1rem;
  width: 100%;
`;

const UserId = styled.div`
  font-size: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ActivityArea = styled.div`
  width: 54%;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const PostListBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const PostBox = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const PostList = styled.div`
  text-decoration: none;
  font-size: 1rem;
  width: 100%;
`;

const PostBoxHeader = styled.div`
  display: flex;
  height: 3rem;
  font-weight: bold;
  background-color: #f8f9fa;
  border-radius: 10px 10px 0 0;
  width: 100%;
  .title {
    width: 40%;
  }
  .date {
    width: 30%;
  }
  .writer {
    width: 30%;
  }
  .year {
    width: 15%;
  }
  .semester {
    width: 25%;
  }
  .status {
    width: 15%;
  }
  .name {
    width: 45%;
  }
`;

const PostBoxHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = () => {
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const [userData, setUserData] = useState({
    members: {},
    posts: [],
    activities: [],
  });
  const [postsCurrentItems, setPostsCurrentItems] = useState([]);
  const [activityCurrentItems, setActivityCurrentItems] = useState([]);
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
          <UserPageBox>
            <ProfileArea>
              <ProfileBox>
                <ProfileImg src={imgUrl + profileImg} />
              </ProfileBox>
              <NickNameArea>
                <NickNameBox>
                  <div>{nickname}</div>
                  {SessionStorage.get("User_id") &&
                    SessionStorage.get("User_id") !== loginId && (
                      <ReportButton
                        icon={faFlag}
                        onClick={() => handleModalOpen(true)}
                      />
                    )}
                </NickNameBox>
                <UserId>{loginId}</UserId>
                <Introduce>{bio}</Introduce>
              </NickNameArea>
            </ProfileArea>
          </UserPageBox>
          <PostArea>
            <PostListBox>
              <BoxTitle>작성한 게시글</BoxTitle>
              <PostBox>
                <PostBoxHeader>
                  <PostBoxHeaderItem className="title">제목</PostBoxHeaderItem>
                  <PostBoxHeaderItem className="date">작성일</PostBoxHeaderItem>
                  <PostBoxHeaderItem className="writer">
                    작성자
                  </PostBoxHeaderItem>
                </PostBoxHeader>
                {Array.isArray(userData.posts) &&
                  postsCurrentItems.map((post) => (
                    <PostList
                      key={post.id}
                      onClick={() => navigate(`/board/post/${post.id}`)}
                    >
                      <UserPost
                        title={post.title}
                        date={post.createdAt}
                        writer={post.author}
                      />
                    </PostList>
                  ))}
                <Pagination
                  items={userData.posts}
                  itemsPerPage={5}
                  setCurrentItems={setPostsCurrentItems}
                />
              </PostBox>
            </PostListBox>
            <ActivityArea>
              <BoxTitle>참여한 활동</BoxTitle>
              <PostBox>
                <PostBoxHeader>
                  <PostBoxHeaderItem className="year">연도</PostBoxHeaderItem>
                  <PostBoxHeaderItem className="semester">
                    학기
                  </PostBoxHeaderItem>
                  <PostBoxHeaderItem className="status">상태</PostBoxHeaderItem>
                  <PostBoxHeaderItem className="name">활동명</PostBoxHeaderItem>
                </PostBoxHeader>
                {Array.isArray(userData.activities) &&
                  activityCurrentItems.map(
                    ({ id, semester, name, activityStatus, year }) => (
                      <UserActivity
                        key={id}
                        semester={semester}
                        name={name}
                        year={year}
                        activityStatus={activityStatus}
                      />
                    )
                  )}
                <Pagination
                  items={userData.activities}
                  itemsPerPage={5}
                  setCurrentItems={setActivityCurrentItems}
                />
              </PostBox>
            </ActivityArea>
          </PostArea>
        </PageBox>
      </PageArea>
    </>
  );
};

export default UserInfo;
