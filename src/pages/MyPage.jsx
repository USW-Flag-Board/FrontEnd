import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import Grass from "../components/Grass";
import {styled} from "@mui/system";

const PageArea = styled("div")({
  width: "100%",
  height: "82.5vh",
  display: "flex",
});

const LeftPage = styled("div")({
  width: "40%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const RightPage = styled("div")({
  width: "60%",
  height: "100%",
  backgroundImage: `url("/home-book.JPG")`,
});

const UserPage = styled("div")({
  width: "100%",
  height: "40%",
  display: "flex",
});

const RelativeArea = styled("div")({
  position: "relative",
});

const ProfileArea = styled("div")({
  width: "45%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginRight: 40,
});

const Profile = styled(FontAwesomeIcon)({
  width: 120,
  height: 120,
  marginBottom: 30,
});

const EditProfile = styled("button")({
  position: "absolute",
  fontSize: "5px",
  color: "white",
  backgroundColor: "#434343",
  height: "25px",
  width: "80px",
  left: 70,
  top: 100,
  outline: "none",
  borderRadius: "28px",
  "&:hover": {
    backgroundColor: "#4d4d4d",
  },
});

const NickNameArea = styled("div")({
  display: "flex",
  width: "55%",
  height: "100%",
  flexDirection: "column",
});

const NickName = styled("div")({
  display: "flex",
  height: "40%",
  fontSize: "40px",
  fontWeight: "bold",
  alignItems: "flex-end",
});

const IntroduceArea = styled("div")({
  width: "100%",
  height: "60%",
});

const Introduce = styled("div")({
  display: "flex",
  fontSize: "20px",
  alignItems: "flex-end",
  height: "40%",
});

const IntroduceTag = styled("div")({
  display: "flex",
  fontSize: "15px",
  alignItems: "center",
  height: "40%",
});

const Tag = styled("p")({
  margin: 0,
});

const HistoryArea = styled("div")({
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: "100%",
  height: "60%",
  display: "flex",
});

const HistoryContent = styled("div")({
  marginLeft: "20%",
  paddingTop: "10%",
});

const HistoryYear = styled("h1")({
  fontSize: "25px",
  paddingTop: "20px",
});

const HistoryYearList = styled("ul")({
  marginBottom: "10px",
});

const HistoryYearListItem = styled("li")({
  marginBottom: "3px",
  listStyleType: "disc",
  marginLeft: "20px",
});

const GrassArea = styled("div")({
  paddingLeft: "80px",
  height: "100%",
  top: 700,
  display: "flex",
  flexDirection: "column",
});

const GrassName = styled("h3")({
  color: "white",
  paddingTop: "600px",
  margin: 0,
  fontWeight: "bold",
});

export default function MyPage() {
  return (
    <PageArea>
      <LeftPage>
        <UserPage>
          <ProfileArea>
            <RelativeArea>
              <Profile icon={faUser} />
              <EditProfile>Edit Profile</EditProfile>
            </RelativeArea>
          </ProfileArea>
          <NickNameArea>
            <NickName>문희조</NickName>
            <IntroduceArea>
              <Introduce>
                Hi
                <br />
                Korean Language Is Broken...
              </Introduce>
              <IntroduceTag>
                <Tag>
                  #Spring #Java #FullStack
                  <br />
                  #Be #응애
                </Tag>
              </IntroduceTag>
            </IntroduceArea>
          </NickNameArea>
        </UserPage>
        <HistoryArea>
          <HistoryContent>
            <HistoryYear>2021</HistoryYear>
            <HistoryYearList>
              <HistoryYearListItem>알고리즘 스터디(기초반)</HistoryYearListItem>
            </HistoryYearList>
            <HistoryYear>2022</HistoryYear>
            <HistoryYearList>
              <HistoryYearListItem>알고리즘 스터디(코테반)</HistoryYearListItem>
              <HistoryYearListItem>FLAG-게시판 (BE)</HistoryYearListItem>
            </HistoryYearList>
          </HistoryContent>
        </HistoryArea>
      </LeftPage>
      <RightPage>
        <GrassArea>
          <GrassName>STUDY_WEB-BACKEND</GrassName>
          <Grass />
        </GrassArea>
      </RightPage>
    </PageArea>
  );
}
