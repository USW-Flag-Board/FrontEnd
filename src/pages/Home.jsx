import styled from "styled-components";
import { Header } from "../components";
import ImageSlider from "../components/ImageSlider";
const Home = () => {
  const header = true;

  return (
    <>
      {header && <Header/>}
      <HomeArea>
        <HomeBox>
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
                <FlagCountBox>진행중인 Activity는<br/><FlagCount>30</FlagCount> 개 입니다.</FlagCountBox>
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
        </HomeBox>
      </HomeArea>
    </>
  );
};

const HomeArea = styled.div`
  width: 100vw;
`;

const HomeBox = styled.div`
  width: 100%;
`;

const HomeContents = styled.div`
  width: calc(100% - 16rem);
  margin: 0 8rem;
`;

const BookImgBox = styled.div`
  overflow: hidden;
`;

const PostsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FlagInfo = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

const FlagCountArea = styled.div`
  height: 300px;
  margin-top: 2rem;
`;

const FlagCountBox = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  box-sizing: border-box;
  `;

const FlagCount = styled.span`
  line-height: 150%;
  color: #47c880;
  `;

const FlagContent = styled.div`
  color: #757575;
  line-height: 170%;
`;

const FlagButton = styled.button`
  cursor: pointer;
  width: 50%;
  height: 50px;
  border: 1px solid #1dc078;
  background: none;
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
`;

const FeedPostsBox = styled.div`
  height: 85%;
`;

export default Home;
