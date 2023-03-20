import styled from "styled-components";
import { Header, Footer } from "../components";

const SearchPage = () => {
  const header = true;
  
  return (
    <>
      {header && <Header/>}
      <SearchPageArea>
        <SearchBox>
          <SearchResultBox>
            <SearchResult>
              '강지은' 검색결과
            </SearchResult>
          </SearchResultBox>
          <SearchUserBox>
            <UserResultCount>유저 (4)</UserResultCount>
            <SearchUser>
              <UserBox>강지은 (정보보호)</UserBox>
              <UserBox>강지은 (정보보호)</UserBox>
              <UserBox>강지은 (정보보호)</UserBox>
              <UserBox>강지은 (정보보호)</UserBox>
            </SearchUser>
          </SearchUserBox>
        </SearchBox>
      </SearchPageArea>
      <Footer/>
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

const SearchResultBox = styled.div`
  display: flex;
  align-items: center;
`;

const SearchResult = styled.h3`
  font-weight: bold;
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const SearchUserBox = styled.div`
`;

const UserResultCount = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  padding: 0 0 1rem 1rem;
`;

const SearchUser = styled.div`
  border: 1px solid #9A9A9A;
  border-radius: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 2.5rem;
  background-color: #363636;
  margin: 0.3rem;
  border-radius: 0.6rem;
  padding: 0 0.5rem;
`;

const BoardResultBox = styled.div`
  
`;

const BoardResultTitle = styled.div`
  
`;



