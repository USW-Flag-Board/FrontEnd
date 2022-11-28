import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
    },
  },
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

export default function MyPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs" md></Container>
      <Box>
        <Grid container>
          <Grid
            item
            alignContent="center"
            justifyContent="center"
            xs={5}
            sx={{ height: "1000px" }}
          >
            <Grid>
              <Grid item>
                <Box
                  style={{ backgroundColor: "#2C2C2C", height: "200px" }}
                ></Box>
                <Box style={{ backgroundColor: "#2C2C2C", height: "200px" }}>
                  <Grid container>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      xs={6}
                    >
                      <Avatar
                        style={{
                          width: 160,
                          height: 160,
                          float: "right",
                          marginRight: "10px",
                          marginTop: "10px",
                        }}
                        src="/broken-image.jpg"
                      />
                    </Grid>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      height="100px"
                      xs={6}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          height: "100px",
                          fontSize: "30px",
                          alignItems: "center",
                        }}
                      >
                        문희조
                      </Box>
                      <Box style={{ height: "100px" }}>
                        <p style={{ margin: "0px" }}>
                          #Spring #Java #FullStack
                        </p>
                        <p style={{ margin: "0px" }}>#Be #응애</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Box
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: "600px" }}
            >
              <div style={{ marginLeft: "150px", paddingTop: "100px" }}>
                <div>
                  <h2 style={{ fontWeight: "normal", marginBottom: "0px" }}>
                    2021
                  </h2>
                  <ul style={{ marginTop: "0px" }}>
                    <li>알고리즘 스터디(기초반)</li>
                  </ul>
                </div>
                <div>
                  <h2 style={{ fontWeight: "normal", marginBottom: "0px" }}>
                    2022
                  </h2>
                  <ul style={{ marginTop: "0px" }}>
                    <li>알고리즘 스터디(코테반)</li>
                    <li>FLAG-게시판 (BE)</li>
                  </ul>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box
              style={{
                backgroundImage: `url("/home-book.JPG")`,
                height: "1000px",
              }}
            >
              <Box style={{ height: "600px" }}></Box>
              <h3
                style={{
                  color: "white",
                  paddingLeft: "80px",
                  paddingTop: "80px",
                  margin: 0,
                }}
              >
                STUDY_WEB-BACKEND
              </h3>
              <GrassArea style={{ marginLeft: "80px" }}>
                <GrassBox />
                <GrassBox />
                <GrassBox />
              </GrassArea>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}
