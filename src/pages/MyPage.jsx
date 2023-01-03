import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grass from "../component/Grass";
import { styled } from "@mui/system";

const ProfileArea = styled(Box)({
  height: "400px",
  position: "relative",
  marginRight: "200px",
});

const Profile = styled(Avatar)({
  position: "absolute",
  width: 160,
  height: 160,
  marginTop: "10px",
  left: "100%",
  zIndex: "1",
});

const EditProfile = styled(Button)({
  position: "absolute",
  marginBottom: "10px",
  marginLeft: "60px",
  zIndex: "2",
  fontSize: "12px",
  color: "white",
  backgroundColor: "#434343",
  height: "25px",
  width: "100px",
  left: "100%",
  top: "150px",
  borderRadius: "28px",
  "&:hover": {
    backgroundColor: "#4d4d4d",
  },
});

const NickName = styled(Box)({
  display: "flex",
  height: "80px",
  fontSize: "40px",
  fontWeight: "bold",
  alignItems: "start",
});

const Introduce = styled(Box)({
  display: "flex",
  height: "60px",
  fontSize: "20px",
  alignItems: "center",
});

const IntroduceTag = styled(Box)({
  display: "flex",
  height: "60px",
  alignItems: "center",
});

const Tag = styled("p")({
  margin: 0,
});

const HistoryArea = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  height: "600px",
});

const HistoryContent = styled(Box)({
  marginLeft: "150px",
  paddingTop: "100px",
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

const BackgroundArea = styled(Box)({
  backgroundImage: `url("/home-book.JPG")`,
  height: "1000px",
});

const GrassArea = styled("div")({
  paddingLeft: "80px",
  height: "1000px",
});

const GrassName = styled("h3")({
  color: "white",
  paddingTop: "80px",
  margin: 0,
  fontWeight: "bold",
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
    },
  },
});

export default function MyPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs" md></Container>
      <Box>
        <Grid container>
          <Grid item alignContent="center" justifyContent="center" xs={5}>
            <Grid>
              <Grid item>
                <Box sx={{ backgroundColor: "#2C2C2C", height: "100px" }}></Box>
                <Box sx={{ backgroundColor: "#2C2C2C", height: "300px" }}>
                  <Grid container>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      xs={6}
                    >
                      <ProfileArea>
                        <Profile src="/broken-image.jpg" />
                        <EditProfile>Edit Profile</EditProfile>
                      </ProfileArea>
                    </Grid>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      height="100px"
                      xs={6}
                    >
                      <NickName>문희조</NickName>
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
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <HistoryArea>
              <HistoryContent>
                <HistoryYear>2021</HistoryYear>
                <HistoryYearList>
                  <HistoryYearListItem>
                    알고리즘 스터디(기초반)
                  </HistoryYearListItem>
                </HistoryYearList>
                <HistoryYear>2022</HistoryYear>
                <HistoryYearList>
                  <HistoryYearListItem>
                    알고리즘 스터디(코테반)
                  </HistoryYearListItem>
                  <HistoryYearListItem>FLAG-게시판 (BE)</HistoryYearListItem>
                </HistoryYearList>
              </HistoryContent>
            </HistoryArea>
          </Grid>
          <Grid item xs={7}>
            <BackgroundArea>
              <GrassArea>
                <Box style={{ height: "600px" }}></Box>
                <GrassName>STUDY_WEB-BACKEND</GrassName>
                <Grass />
              </GrassArea>
            </BackgroundArea>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
