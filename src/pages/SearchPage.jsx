import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";
import { Header, ListThem } from "../components";

const SearchPage = () => {
  const params = useParams();
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState({
    resultCount: 0,
    searchResults: [],
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const userSearchResponse = await instance.get(
          `/members/search?name=${params.something}`
        );
        setUsers(userSearchResponse.data.payload);
        const postSearchResponse = await instance.get(
          `/posts/integration-search?keyword=${params.something}`
        );
        const { resultCount, searchResults } = postSearchResponse.data.payload;
        setPosts({
          resultCount,
          searchResults: searchResults.slice(0, 5),
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
          <div>
            <SearchResult>{`'${params.something}' 검색결과`}</SearchResult>
          </div>
          {users.length ? (
            <PostsListBox>
              <ResultCount>{`유저 (${users.length})`}</ResultCount>
              <SearchUser>
                {users.map(({ name, major }, index) => (
                  <UserBox key={index}>
                    {name} ({major})
                  </UserBox>
                ))}
              </SearchUser>
            </PostsListBox>
          ) : null}
          {posts.resultCount ? (
            <PostsListBox>
              <ResultCount>{`게시글 (${posts.resultCount})`}</ResultCount>
              <SearchResultBox>
                {posts.searchResults.map((post) => (
                  <div key={post.id}>
                    <ListThem post={post} />
                  </div>
                ))}
              </SearchResultBox>
            </PostsListBox>
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
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const SearchResultBox = styled.div`
  padding-left: 1rem;
`;

const ResultCount = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 2px solid #9a9a9a;
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

const PostsListBox = styled.div`
  margin-bottom: 2rem;
`;
