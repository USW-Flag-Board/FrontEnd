import styled from "styled-components";
import { Header, ImageSlider } from "../components";

const Home = () => {
  const header = true;

  return (
    <>
      {header && <Header/>}
      <HomeArea>
        <BookImgBox>
          <ImageSlider/>
        </BookImgBox>
        <HomeContents>
          <FlagInfo>
            <FlagCountArea>
              <FlagCountBox>현재 Flag의 동아리원은<br/><FlagCount>174</FlagCount> 명 입니다.</FlagCountBox>
              <FlagContent>Flag는 수원대생에게 더 큰 소통의 장을 <br/>마련하기위해 만들어진 개발동아리입니다.</FlagContent>
              <FlagButtonBox>
                <FlagButton>동아리 가입하기</FlagButton>
              </FlagButtonBox>
            </FlagCountArea>
            <FlagCountArea>
              <FlagCountBox>모집중인 Activity는<br/><FlagCount>30</FlagCount> 개 입니다.</FlagCountBox>
              <FlagContent>Flag는 수원대생에게 더 큰 소통의 장을 <br/>마련하기위해 만든 개발동아리입니다.</FlagContent>
              <FlagButtonBox>
                <FlagButton>Activity 참여하기</FlagButton>
              </FlagButtonBox> 
            </FlagCountArea>
            <FlagCountArea>
              <FlagCountBox>현재까지 작성된 게시글은<br/><FlagCount>174</FlagCount> 개 입니다.</FlagCountBox>
              <FlagContent>Flag는 수원대생에게 더 큰 소통의 장을 <br/>마련하기위해 만든 개발동아리입니다.</FlagContent>
              <FlagButtonBox>
                <FlagButton>게시글 작성하기</FlagButton>
              </FlagButtonBox>
            </FlagCountArea>
          </FlagInfo>
          <PostsArea>
            <FeedBox>
              <FeedTitle>공지사항</FeedTitle>
              <FeedPostsBox></FeedPostsBox>
            </FeedBox>
            <FeedBox>
              <FeedTitle>인기글</FeedTitle>
              <FeedPostsBox></FeedPostsBox>
            </FeedBox>
            <FeedBox>
              <FeedTitle>최신글</FeedTitle>
              <FeedPostsBox></FeedPostsBox>
            </FeedBox>
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
  padding: 0 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* 스마트폰 */
  @media (max-width: 480px) {
    padding: 0;
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

const BookImgBox = styled.div`
  overflow: hidden;
`;

const PostsArea = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: 480px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const FlagInfo = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 480px) {
    display: none;
  }
`;

const FlagCountArea = styled.div`
  height: 16rem;
  margin-top: 2rem;
  @media (min-width: 481px) and (max-width: 1024px) {
    height: 11rem;
  }
`;

const FlagCountBox = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  box-sizing: border-box;
  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const FlagCount = styled.span`
  line-height: 150%;
  color: #47c880;
`;

const FlagContent = styled.div`
  color: #757575;
  line-height: 170%;
  font-size: 1rem;
  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const FlagButton = styled.button`
  cursor: pointer;
  width: 50%;
  height: 3rem;
  border: 1px solid #1dc078;
  background: none;
  @media (min-width: 481px) and (max-width: 1024px) {
    height: 2.5rem;
    width: 60%;
    font-size: 0.7rem;
  }
`;

const FlagButtonBox = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const FeedBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
`;

const FeedTitle = styled.h3`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  border-bottom: 2px solid black;
  height: 15%;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;

const FeedPostsBox = styled.div`
  height: 85%;
`;

export default Home;
