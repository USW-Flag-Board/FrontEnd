import styled from "styled-components";
import { SideBar } from "../components/";

const contents = [
  {title: "STUDY", content: ["ALGORITHM", "WEB-BACKEND"]},
  {title: "PROJECT", content: ["FLAG-게시판"]},
];

const homeItem = [
  { id: 1,
    krName: "USER",
    engName: ""
  }, 
  { id: 2,
    krName: "마이페이지",
    engName: ""
  }, 
  { id: 3,
    krName: "내가 쓴 글",
    engName: ""
  }, 
  { id: 4,
    krName: "댓글 단 글",
    engName: ""
  }, 
  { id: 5,
    krName: "스트랩",
    engName: ""
  }, 
];

const Home = () => {
  return (
    <HomeArea>
      <HomeBox>
        <HomeContents>
          <MyActivity>MY ACTIBITY</MyActivity>
          <MyActivityArea>
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
              <NoticeArea>
                <NoticeTitle>NOTICE</NoticeTitle>
                <FeedItem style={{height: "70%"}}>
                  <FeedContent>공지 안녕하세요 현회장 정충일입니다.</FeedContent>
                  <FeedContent>공지 안녕하세요 차기회장 이수빈입니다.</FeedContent>
                </FeedItem>
              </NoticeArea>
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
              <FlagContents style={{marginBottom: "0.8rem", justifyContent: "flex-start"}}>
                <FlagContent style={{width: "50%", margin: "0 0.5rem 0 0"}}>좋아요순</FlagContent>
                <FlagContent style={{width: "50%"}}>최근순</FlagContent>
              </FlagContents>
              <HeartdAndRecent>
                <FeedContent/>
                <FeedContent style={{width: "45%", height: "65%", margin: 0, borderRadius: "14px"}}/>
              </HeartdAndRecent>
            </MyActivityBox>
          </MyActivityArea>
        </HomeContents>
      </HomeBox>
      <SideBar
        subColor="#3E3E3E"
        mainWidth="20%"
        subWidth="100%"
        items={homeItem}
        title="FLAG"
        height="100%"
        borderRadius="50px 0 0 50px"
        paddingTopMain="7rem"
      />
    </HomeArea>
  );
};

const HomeArea = styled.div`
  width: 100vw;
  height: 87vh;
  display: flex;
`;

const HomeBox = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 100%;
`;

const HomeContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
`;

const MyActivityArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

const MyActivityBox = styled.div`
  width: 45%;
  height: 100%;
  margin-left: 2rem;
`;

const FlagContents = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
`;

const FlagContent = styled.li`
  box-sizing: border-box;
`;

const BookImgBox = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 3rem;
`;

const BookImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1.6px solid #9A9A9A;
  border-radius: 1.8rem;
`;
const FeedArea = styled.div`
  height: 60%;
  margin-bottom: 3rem;
`;

const FeedBox = styled.div`
  width: 100%;
  height: 100%;
`;

const FeedItem = styled.div`
  width: 100%;
  height: 48%;
  border: 1px solid #9a9a9a;
  border-radius: 30px;
  box-sizing: border-box;
  &:first-of-type {
    margin-bottom: 1rem;
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
  font-size: 12px;
`;

const NoticeArea = styled.div`
  height: 30%;
  width: 100%;
`;

const MyActivity = styled.h1`
  font-size: 1.6rem;
  width: 90%;
  margin-bottom: 3rem;
  padding-left: 3rem;
`;

const ContentsTitle = styled.h4`
  color: white;
  padding-bottom: 20px;
`;

const NoticeTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  padding-left: 1.4rem;
`;

const FeedTitle = styled.h3`
  font-size: 1.1rem;
  padding-bottom: 20px;
  padding-left: 1.2rem;
`
const FeedItemTitle = styled.h3`
  width: 87%;
  margin-bottom: 0.4rem;
`

const HeartdAndRecent = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  &:first-child{
    width: 45%;
    height: 65%; 
    margin: 0 0.5rem 0 0; 
    border-radius: 14px;
  }
`;

const HeartBox = styled.div`

`

export default Home;
