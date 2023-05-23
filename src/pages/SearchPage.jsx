import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";
import { ActivityCard, Header, ListThem } from "../components";

const SearchPage = () => {
  const params = useParams();
  const [users, setUsers] = useState({
    resultCount: 0,
    searchResults: [],
  });
  const [posts, setPosts] = useState({
    resultCount: 0,
    searchResults: [],
  });
  const [activities, setActivities] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const userSearchResponse = await instance.get(
          `/members/search?name=${params.something}`
        );
        setUsers({
          resultCount: userSearchResponse.data.payload.resultCount,
          searchResults: userSearchResponse.data.payload.searchResults,
        });
        const postSearchResponse = await instance.get(
          `/posts/integration-search?keyword=${params.something}`
        );
        setPosts({
          resultCount: postSearchResponse.data.payload.resultCount,
          searchResults: postSearchResponse.data.payload.searchResults.slice(
            0,
            5
          ),
        });
        const activitySearchResponse = await instance.get(
          `/activities/search?keyword=${params.something}`
        );
        setActivities({
          resultCount: activitySearchResponse.data.payload.resultCount,
          searchResults: activitySearchResponse.data.payload.searchResults,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [params]);

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
                  <UserBox key={loginId}>
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
                  <div key={post.id}>
                    <ListThem post={post} />
                  </div>
                ))}
              </PostsResultBox>
            </SearchListBox>
          ) : null}
          {Array.isArray(activities.searchResults) &&
          activities.searchResults.length !== 0 ? (
            <SearchListBox>
              <ResultCount>{`활동 (${activities.resultCount})`}</ResultCount>
              <ActivitiesResultBox>
                {activities.searchResults.map(
                  ({ name, type, semester, id, leader }) => (
                    <Card key={id}>
                      <ActivityCard
                        title={name}
                        name={leader}
                        type={type}
                        semester={semester}
                        status={status}
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
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.div`
  width: 80%;
`;

const SearchResult = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem 0;
  @media (max-width: 480px) {
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
  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const Card = styled.div`
  width: 23%;
  height: 10rem;
  @media (max-width: 480px) {
    width: 30%;
    height: 8rem;
  }
`;

const ResultCount = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 2px solid #9a9a9a;
  @media (max-width: 480px) {
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
  margin-bottom: 2rem;
`;
