import {useEffect} from "react";
import styled from "styled-components";
import {SideBar} from "../components/";

const contents = [
  {title: "STUDY", content: ["ALGORITHM", "WEB-BACKEND"]},
  {title: "PROJECT", content: ["FLAG-게시판"]},
];

const homeItem = [
  {id: 1, krName: "USER", engName: ""},
  {id: 2, krName: "마이페이지", engName: ""},
  {id: 3, krName: "내가 쓴 글", engName: ""},
  {id: 4, krName: "댓글 단 글", engName: ""},
  {id: 6, krName: "관리자페이지", engName: ""},
  {id: 7, krName: "유저관리", engName: ""},
  {id: 8, krName: "게시판관리", engName: ""},
];

const Home = ({setHeader}) => {
  useEffect(() => {
    setHeader(true);
  });

  return (
    <HomeArea>
      <HomeBox>
        <HomeContents>
          <MyActivityArea>
            <MyActivityTitle>MY ACTIBITY</MyActivityTitle>
            <MyActivityContents>
              <MyActivityBox>
                <FlagContents>
                {contents.map(({title}) => (
                  <FlagContent key={title}>
                    <ContentsTitle>{title}</ContentsTitle>
                  </FlagContent>
                ))}
                </FlagContents>
                <BookImgBox>
                  <BookImg
                    src="images/home-book.jpg"
                    alt="home-book"
                  />
                </BookImgBox>
              </MyActivityBox>
              <MyActivityBox>
                <FeedTitle>FEED</FeedTitle>
                <FeedArea>
                  <FeedBox>
                    <FeedItem>
                      <FeedItemTitle>#STUDY_ALGOLITHM</FeedItemTitle>
                      <FeedContent>공지 이번주 주제는 DP, 브르투포스입니다!</FeedContent>
                      <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
                      <FeedContent>다음주에 개인사정으로 빠져야 할것 같습니다. 스터디 준비자료는 함께 첨부할게요!</FeedContent>
                    </FeedItem>
                    <FeedItem>
                      <FeedItemTitle>#PROJECT_FLAG</FeedItemTitle>
                      <FeedContent>공지 12.20(화) 전체 회의 내용입니다.</FeedContent>
                      <FeedContent>우리 쪽지 기능 넣으면 여러분 많이 쓰실 것 같나요?</FeedContent>
                      <FeedContent>관리자 페이지 기능은 다음과 같습니다!</FeedContent>
                    </FeedItem>
                  </FeedBox>
                </FeedArea>
              </MyActivityBox>
            </MyActivityContents>
            </MyActivityArea>
            <HomeSideBar>
              <SideBar
                subColor="#3E3E3E"
                mainWidth="100%"
                subWidth="100%"
                items={homeItem}
                title="FLAG"
                height="100%"
                borderRadius="50px 0 0 50px"
              />
            </HomeSideBar>
        </HomeContents>
        <HomeContents>
          <FilteredPostArea>
            <FilteredPostBox>
              <PostTitle>NOTICE</PostTitle>
              <HeartBox>
                <FeedContent>공지 이번주 주제는 DP, 브르투포스입니다!</FeedContent>
                <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
                <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
              </HeartBox>
            </FilteredPostBox>
            <FilteredPostBox>
              <PostTitle>인기글</PostTitle>
              <HeartBox>
                <FeedContent>공지 이번주 주제는 DP, 브르투포스입니다!</FeedContent>
                <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
                <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
              </HeartBox>
            </FilteredPostBox>
            <FilteredPostBox>
              <PostTitle>최신글</PostTitle>
              <HeartBox>
                <FeedContent>공지 이번주 주제는 DP, 브르투포스입니다!</FeedContent>
                <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
                <FeedContent>백준 12345번 푸는 중에 사고회로가 멈췄습니다..</FeedContent>
              </HeartBox>
            </FilteredPostBox>
          </FilteredPostArea>
        </HomeContents>
      </HomeBox>
    </HomeArea>
  );
};

const HomeArea = styled.div`
  width: calc(100vw - 4rem);
  height: calc(91vh - 5rem);
`;

const HomeBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 3rem 0 0 4rem;
`;

const HomeContents = styled.div`
  box-sizing: border-box;
  width: 100%;
  &:nth-of-type(1) {
    display: flex;
    height: 70%;
    margin-bottom: 2rem;
  }
  &:nth-of-type(2){
    padding-right: 4rem;
    height: 30%;
  }
`;

const MyActivityArea = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 100%;
`;

const MyActivityTitle = styled.h1`
  font-size: 1.6rem;
  width: 100%;
  height: 5%;
  margin-bottom: 2rem;
`;

const MyActivityContents = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 95%;
`;

const MyActivityBox = styled.div`
  height: 80%;
  &:nth-of-type(1) {
    width: 37.5%;
  }
  &:nth-of-type(2){
    margin-left: 2.1rem;
    width: 50%;
  }
`;

const FlagContents = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
`;

const FlagContent = styled.li`
  box-sizing: border-box;
`;

const BookImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

const BookImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1.6px solid #9A9A9A;
  border-radius: 1.8rem;
`;

const FeedArea = styled.div`
  width: 100%;
  height: 100%;
`;

const FeedBox = styled.div`
  width: 100%;
  height: 100%;
`;

const FeedItem = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid #9a9a9a;
  border-radius: 30px;
  box-sizing: border-box;
  &:nth-of-type(1) {
    margin-bottom: 0.7rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeedContent = styled.div`
  width: 85%;
  height: 18%;
  border: 1px solid #9a9a9a;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.7rem;
  margin: 0.2rem 0;
  font-size: 0.8rem;
`;

const ContentsTitle = styled.h4`
  color: white;
  padding-bottom: 1.3rem;
`;

const FeedTitle = styled.h3`
  font-size: 1.1rem;
  padding-bottom: 1rem;
  padding-left: 1.2rem;
`
const FeedItemTitle = styled.h3`
  width: 87%;
  margin-bottom: 0.4rem;
`

const HeartBox = styled.div`
  width: 100%;
  height: 75%; 
  border: 1px solid #9a9a9a;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.1rem 0.7rem;
  font-size: 0.8rem;
`;

const FilteredPostArea = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 80%;
  margin-bottom: 0.8rem;
`;

const FilteredPostBox = styled.div`
  width: 30%;
  height: 100%;
  &:nth-of-type(2){
    margin: 0 3.4rem; 
  }
`;

const PostTitle = styled.h3`
  width: 50%;
  margin: 0  0 0.8rem 1rem;
`;

const HomeSideBar = styled.div`
  width: 20%;
  height: 100%;
`



export default Home;
