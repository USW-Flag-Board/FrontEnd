import { useEffect } from "react";
import styled from "styled-components";

const contents = [
  {title: "STUDY", content: ["ALGORITHM", "WEB-BACKEND"]},
  {title: "PROJECT", content: ["FLAG-게시판"]},
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
            <MyActivityContents>
              <MyActivityBox>
                <FlagImgTitle>
                  <ContentsTitle>FLAG</ContentsTitle>
                </FlagImgTitle>
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
  width: calc(100vw - 8rem);
  height: calc(91vh - 5rem);
`;

const HomeBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 3rem 4rem 0 4rem;
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
    height: 30%;
  }
`;

const MyActivityArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const MyActivityContents = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
`;

const MyActivityBox = styled.div`
  height: 80%;
  width: 50%;
  margin-left: 2.1rem;
  &:nth-of-type(1) {
    width: 50%;
    height: 81%;
    margin: 0;
  }
`;

const FlagImgTitle = styled.div`
  box-sizing: border-box;
  padding-left: 1.2rem;
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
  margin: 0.3rem 0;
  font-size: 0.8rem;
`;

const ContentsTitle = styled.h4`
  color: white;
  padding-bottom: 1.3rem;
  font-weight: bold;
`;

const FeedTitle = styled.h3`
  font-size: 1.1rem;
  padding-bottom: 1rem;
  padding-left: 1.2rem;
`
const FeedItemTitle = styled.h3`
  font-size: 0.8rem;
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

export default Home;
