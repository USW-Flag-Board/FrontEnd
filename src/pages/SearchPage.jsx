import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";
import { ActivityCard, Header, ListThem, Pagination } from "../components";

const SearchPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState({ resultCount: 0, searchResults: [] });
  const [posts, setPosts] = useState({ resultCount: 0, searchResults: [] });
  const [activities, setActivities] = useState([]);
  const [currentItems, setCurrentItems] = useState({
    postsItems: [],
    activitiesItems: [],
  });

  const updateCurrentItems = (name, value) => {
    setCurrentItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  async function fetchData() {
    try {
      const [userSearchResponse, postSearchResponse, activitySearchResponse] =
        await Promise.all([
          instance.get(`/members/search?name=${params.something}`),
          instance.get(`/posts/integration-search?keyword=${params.something}`),
          instance.get(`/activities/search?keyword=${params.something}`),
        ]);

      setUsers({
        resultCount: userSearchResponse.data.payload.resultCount,
        searchResults: userSearchResponse.data.payload.searchResults,
      });

      setPosts({
        resultCount: postSearchResponse.data.payload.resultCount,
        searchResults: postSearchResponse.data.payload.searchResults,
      });

      setActivities({
        resultCount: activitySearchResponse.data.payload.resultCount,
        searchResults: activitySearchResponse.data.payload.searchResults,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <SearchPageArea>
        <SearchBox>
          <SearchResult>{`'${params.something}' 검색결과`}</SearchResult>
          {Array.isArray(users.searchResults) &&
          users.searchResults.length !== 0 ? (
            <SearchListBox>
              <ResultCount>{`유저 (${users.resultCount})`}</ResultCount>
              <SearchUser>
                {users.searchResults.map(({ name, major, loginId }) => (
                  <UserBox
                    key={loginId}
                    onClick={() => navigate(`/userInfo/${loginId}`)}
                  >
                    {name} ({major})
                  </UserBox>
                ))}
              </SearchUser>
            </SearchListBox>
          ) : null}
          {Array.isArray(posts.searchResults) &&
          posts.searchResults.length !== 0 ? (
            <SearchListBox>
              <ResultCount>{`게시글 (${posts.resultCount})`}</ResultCount>
              <PostsResultBox>
                {posts.searchResults.map((post) => (
                  <PostBox
                    key={post.id}
                    onClick={() => navigate(`/board/post/${post.id}`)}
                  >
                    <ListThem post={post} />
                  </PostBox>
                ))}
              </PostsResultBox>
              <Pagination
                items={posts.searchResults}
                itemsPerPage={5}
                updateCurrentItems={updateCurrentItems}
                itemsTitle={"postsItems"}
              />
            </SearchListBox>
          ) : null}
          {Array.isArray(activities.searchResults) &&
          activities.searchResults.length !== 0 ? (
            <SearchListBox>
              <ResultCount>{`활동 (${activities.resultCount})`}</ResultCount>
              <ActivitiesResultBox>
                {activities.searchResults.map(
                  ({ name, type, semester, id, leader }) => (
                    <Card
                      key={id}
                      onClick={() => navigate(`/activity/content/${id}`)}
                    >
                      <ActivityCard
                        title={name}
                        name={leader}
                        type={type}
                        semester={semester}
                      />
                    </Card>
                  )
                )}
              </ActivitiesResultBox>
            </SearchListBox>
          ) : null}
        </SearchBox>
      </SearchPageArea>
    </>
  );
};

export default SearchPage;

const SearchPageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.div`
  width: 80%;
`;

const SearchResult = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem 0 3rem 0;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PostsResultBox = styled.div`
  padding-left: 1rem;
`;

const ActivitiesResultBox = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const Card = styled.div`
  width: 23%;
  height: 10rem;
  @media screen and (max-width: 480px) {
    width: 45%;
    height: 8rem;
  }
`;

const ResultCount = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 2px solid #9a9a9a;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SearchUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9a9a9a;
  cursor: pointer;
  font-size: 0.9rem;
  height: 2.5rem;
  margin: 0.3rem;
  border-radius: 0.6rem;
  padding: 0 0.5rem;
`;

const SearchListBox = styled.div`
  margin-bottom: 3rem;
`;

const PostBox = styled.div`
  cursor: pointer;
`;
