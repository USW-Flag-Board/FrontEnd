import {useEffect} from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";

const searchItem = ["자유게시판(2)", "동아리 이모저모(0)"];
const searchContent = ["'조던'"];
const allUser = ["조던1", "조던2", "조던 범고래", "조던던"];

const SearchPage = ({setHeader}) => {
  const count = Object.keys(allUser).length;

  useEffect(() => {
    setHeader(true);
  });

  return (
    <>
      <SearchResults>{searchContent} 검색결과</SearchResults>
      <MainBox>
        <SideBox>
          <SideBar
            title={searchContent}
            mainColor="#4B4B4B"
            subColor="#3C3C3C"
            mainWidth="210px"
            subWidth="90%"
            items={searchItem}
            paddingTop="0"
            borderRadius="0 15px 15px 0"
          />
        </SideBox>
        <ResultBox>
          <Box>
            <TitleBox>유저 ({count})</TitleBox>
            <UserBox>
              <User />
            </UserBox>
          </Box>
          <Box>
            <TitleBox>{searchContent} 인기 글</TitleBox>
            <PopularBox>
              <PopularPosts />
              <PopularPosts />
            </PopularBox>
          </Box>
        </ResultBox>
      </MainBox>
    </>
  );
};

const User = () => {
  return (
    <>
      {allUser.map((i) => (
        <SearchUser>
          <img
            className="logo"
            src="img/logo.JPG"
            style={{
              height: "30px",
              width: "30%",
              margin: "10px",
              borderRadius: "7px",
            }}
          />
          {i}
        </SearchUser>
      ))}
    </>
  );
};

const PopularPosts = () => {
  return (
    <>
      <PopularCard />
    </>
  );
};

const Box = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const SideBox = styled.div`
  width: auto;
  height: 100vh;
  margin-right: 2vw;
  border: 1px solid gray;
`;

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid gray;
`;

const ResultBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  border: 1px solid gray;
`;

const SearchResults = styled.div`
  width: 70vw;
  padding-left: 220px;
  margin-top: 100px;
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

const TitleBox = styled.div`
  marginleft: 2vw;
  width: 10vw;
  height: 20px;
  verticalalign: middle;
  color: white;
  fontweight: bold;
`;

const UserBox = styled.div`
  width: 34vw;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid gray;
  border-radius: 15px;
`;

const SearchUser = styled.div`
  width: 200px;
  height: 40px;
  background-color: #3b3b3b;
  color: white;
  margin: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
`;

const PopularCard = styled.div`
  width: 20vw;
  height: 100px;
  background-color: #3b3b3b;
  color: white;
  margin: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
`;
const PopularBox = styled.div`
  width: 43vw;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid gray;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export default SearchPage;
