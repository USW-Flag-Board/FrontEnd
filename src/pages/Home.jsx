import styled from "styled-components";
import { Header, ImageSlider, HomeFeedBox } from "../components";
import { useEffect, useState } from "react";
import instance from "../apis/AxiosInterceptorSetup";
import recruit from "../assets/images/recruit.png";
const Home = () => {
  const [postsData, setPostData] = useState({
    likePostData: "",
    latestPostData: "",
    activityPostData: "",
  });

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
          <SideArea>
            <RecruitImgBox>
              <RecruitImg src={recruit} />
            </RecruitImgBox>
          </SideArea>
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
  width: 80%;
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  /* 스마트폰 */
  @media (max-width: 480px) {
    width: 95%;
    padding: 0;
    margin-top: 1rem;
  }

  /* 태블릿 */
  @media (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    padding: 0 2rem;
  }

  /* 노트북 */
  @media (min-width: 1025px) and (max-width: 1366px) {
  }

  /* 데스크탑 */
  @media (min-width: 1367px) {
    /* 데스크탑에서 적용할 스타일 */
  }
`;

const SideArea = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 480px) {
    display: none;
  }
`;

const RecruitImgBox = styled.div`
  width: 100%;
`;

const RecruitImg = styled.img`
  border-radius: 0.5rem;
  max-width: 100%;
`;

const BookImgBox = styled.div`
  overflow: hidden;
`;

const PostsArea = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`;

export default Home;
