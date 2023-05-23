import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";
import { Header, HomeFeedBox, ImageSlider } from "../components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const navigate = useNavigate();
  const [postsData, setPostData] = useState({
    likePostData: "",
    latestPostData: "",
    activityPostData: "",
  });

  const [searchContent, setSearchContent] = useState("");

  const handleSearchCotent = (e) => {
    e.preventDefault();
    navigate(`/search/${searchContent}`);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const likeResponse = await instance.get("posts/top/like");
        const latestResponse = await instance.get("posts/top/latest");
        const activityResponse = await instance.get("activities/recruit");
        setPostData({
          likePostData: likeResponse.data.payload,
          latestPostData: latestResponse.data.payload,
          activityPostData: activityResponse.data.payload,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <HomeArea>
        <BookImgBox>
          <ImageSlider />
        </BookImgBox>
        <HomeContents>
          <HomeSearchBox onSubmit={handleSearchCotent}>
            <SearchInputBox>
              <FaMagnifyingGlass icon={faMagnifyingGlass} />
              <SearchInput
                placeholder="유저, 게시글, 활동을 검색해보세요"
                type="text"
                value={searchContent}
                onChange={(e) => setSearchContent(e.target.value)}
              />
            </SearchInputBox>
          </HomeSearchBox>
          <PostsArea>
            <HomeFeedBox
              post={postsData.activityPostData}
              title={"모집중인 활동"}
            />
            <HomeFeedBox
              post={postsData.activityPostData}
              title={"모집중인 활동"}
            />
            <HomeFeedBox post={postsData.likePostData} title={"인기글"} />
            <HomeFeedBox post={postsData.latestPostData} title={"최신글"} />
          </PostsArea>
        </HomeContents>
      </HomeArea>
    </>
  );
};

const HomeArea = styled.div`
  width: 100%;
`;

const HomeContents = styled.div`
  margin: 0 auto;
  width: 65%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* 스마트폰 */
  @media (max-width: 480px) {
    width: 95%;
    padding: 0;
    margin-top: 1rem;
  }
`;

const BookImgBox = styled.div`
  overflow: hidden;
`;

const PostsArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4.5rem;
  row-gap: 2rem;
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`;

const HomeSearchBox = styled.form`
  display: none;
  @media (max-width: 480px) {
    display: block;
    padding: 0;
    width: 100%;
  }
`;

const SearchInputBox = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  border: 2px solid #74c0fc;
  border-radius: 1.4rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-top: 0.4rem;
`;

const FaMagnifyingGlass = styled(FontAwesomeIcon)`
  width: 3rem;
  font-size: 1.5rem;
  color: #bababa;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: calc(100% - 3rem);
  height: 80%;
  padding-right: 0.6rem;
  outline: none;
  border: none;
`;

export default Home;
