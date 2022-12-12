import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";

const Profile = styled(Avatar)({
  width: 160,
  height: 160,
  float: "right",
  marginRight: "10px",
  marginTop: "10px",
});

const NickName = styled(Box)({
  display: "flex",
  height: "100px",
  fontSize: "30px",
  alignItems: "center",
});

const IntroduceTag = styled(Box)({
  height: "100px",
});

const Tag = styled("p")({
  margin: 0,
});

const HistoryArea = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  height: "600px",
});

const HistoryYear = styled("h2")({
  marginBottom: "0px",
});

const HistoryYearList = styled("ul")({
  marginTop: 0,
});

const BackgroundArea = styled(Box)({
  backgroundImage: `url("/home-book.JPG")`,
  height: "1000px",
});

const GrassName = styled("h3")({
  color: "white",
  paddingLeft: "80px",
  paddingTop: "80px",
  margin: 0,
});

const GrassArea = styled("div")({
  width: "80%",
  height: "20%",
  marginTop: "10px",
  backgroundColor: "black",
  display: "flex",
});

const GrassBox = styled("div")({
  width: "33.3%",
  margin: "5px",
  backgroundColor: "white",
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
                <Box sx={{ backgroundColor: "#2C2C2C", height: "200px" }}></Box>
                <Box sx={{ backgroundColor: "#2C2C2C", height: "200px" }}>
                  <Grid container>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      xs={6}
                    >
                      <Profile src="/broken-image.jpg" />
                    </Grid>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      height="100px"
                      xs={6}
                    >
                      <NickName>문희조</NickName>
                      <IntroduceTag>
                        <Tag>#Spring #Java #FullStack</Tag>
                        <Tag>#Be #응애</Tag>
                      </IntroduceTag>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <HistoryArea>
              <Box style={{ marginLeft: "150px", paddingTop: "100px" }}>
                <HistoryYear>2021</HistoryYear>
                <HistoryYearList>
                  <li>알고리즘 스터디(기초반)</li>
                </HistoryYearList>
                <HistoryYear>2022</HistoryYear>
                <HistoryYearList>
                  <li>알고리즘 스터디(코테반)</li>
                  <li>FLAG-게시판 (BE)</li>
                </HistoryYearList>
              </Box>
            </HistoryArea>
          </Grid>
          <Grid item xs={7}>
            <BackgroundArea>
              <Box style={{ height: "600px" }}></Box>
              <GrassName>STUDY_WEB-BACKEND</GrassName>
              <GrassArea>
                <GrassBox />
                <GrassBox />
                <GrassBox />
              </GrassArea>
            </BackgroundArea>
          </Grid>
        </Grid>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}
