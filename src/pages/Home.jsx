import styled from "styled-components";
import {SideBar, Grass} from "../components/";

const contents = [
  {title: "STUDY", content: ["ALGORITHM", "WEB-BACKEND"]},
  {title: "PROJECT", content: ["FLAG-게시판"]},
];

const homeItem = [
  "USER",
  "마이페이지",
  "내가 쓴 글",
  "댓글 단 글",
  "스트랩",
  "관리자 페이지",
  "유저 관리",
  "게시판 관리",
];

const Home = () => {
  return (
    <HomeArea>
      <HomeBox>
        <HomeContents>
          <h1
            style={{
              fontSize: "1.6rem",
              width: "90%",
              marginBottom: "3rem",
              paddingLeft: "3rem",
            }}
          >
            MY ACTIBITY
          </h1>
          <MyActivityArea>
            <MyActivityBox>
              <FlagContents>
                {contents.map((item) => (
                  <FlagContent key={item.title}>
                    <h4 style={{color: "white", paddingBottom: "20px"}}>
                      {item.title}
                    </h4>
                  </FlagContent>
                ))}
              </FlagContents>
              <BookImgBox>
                <img
                  src="images/home-book.jpg"
                  alt="home-book"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1.6px solid #9A9A9A",
                    borderRadius: "1.8rem",
                  }}
                />
              </BookImgBox>
              <NoticeArea>
                <h1
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.8rem",
                    paddingLeft: "1.4rem",
                  }}
                >
                  NOTICE
                </h1>
                <FeedItem style={{height: "70%"}}>
                  <FeedContent>
                    공지 안녕하세요 현회장 정충일입니다.
                  </FeedContent>
                  <FeedContent>
                    공지 안녕하세요 차기회장 이수빈입니다.
                  </FeedContent>
                </FeedItem>
              </NoticeArea>
            </MyActivityBox>
            <MyActivityBox>
              <h1
                style={{
                  fontSize: "1.1rem",
                  paddingBottom: "20px",
                  paddingLeft: "1.2rem",
                }}
              >
                FEED
              </h1>
              <FeedArea>
                <FeedBox>
                  <FeedItem>
                    <h3 style={{width: "87%", marginBottom: "0.4rem"}}>
                      #STUDY_ALGOLITHM
                    </h3>
                    <FeedContent>
                      공지 이번주 주제는 DP, 브르투포스입니다!
                    </FeedContent>
                    <FeedContent>
                      백준 12345번 푸는 중에 사고회로가 멈췄습니다..
                    </FeedContent>
                    <FeedContent>
                      다음주에 개인사정으로 빠져야 할것 같습니다. 스터디 준비
                      자료는 함께 첨부할게요!
                    </FeedContent>
                  </FeedItem>
                  <FeedItem>
                    <h3 style={{width: "87%", marginBottom: "0.4rem"}}>
                      #PROJECT_FLAG
                    </h3>
                    <FeedContent>
                      공지 12.20(화) 전체 회의 내용입니다.
                    </FeedContent>
                    <FeedContent>
                      우리 쪽지 기능 넣으면 여러분 많이 쓰실 것 같나요?
                    </FeedContent>
                    <FeedContent>
                      관리자 페이지 기능은 다음과 같습니다!
                    </FeedContent>
                  </FeedItem>
                </FeedBox>
              </FeedArea>
              <h1
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.8rem",
                  paddingLeft: "1.4rem",
                }}
              >
                JANDI
              </h1>
              <Grass />
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
        paddingTopMain="5rem"
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

export default Home;
