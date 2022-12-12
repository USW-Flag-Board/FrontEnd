import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import Test from "../component/test";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
    },
  },
});

export default function DetailWritePage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" sx={{ width: "100%", margin: 0 }}>
        <Test></Test>
        <div>
          <Box
            sx={{
              marginTop: "0",
              border: "1px solid white",
            }}
          >
            글 목록 컴포넌트 자리
          </Box>
        </div>
        <div>
          <Box
            sx={{
              marginTop: "25px",
              width: "100%",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "28px",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "60px",
                marginRight: "60px",
              }}
            >
              <div style={{ display: "inline-block", marginRight: "20px" }}>
                글쓴이 강지은
              </div>
              <div style={{ display: "inline-block" }}>2022.10.09 22:07</div>
              <div>
                <h2 style={{ marginTop: "10px" }}>3번 개복잡하게 풀었음</h2>
              </div>
              <div>
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </div>
              <div
                style={{
                  marginTop: "20px",
                  fontSize: "10px",
                  display: "inline-block",
                }}
              >
                view 21
              </div>
              <div
                style={{
                  marginTop: "20px",
                  marginLeft: "15px",
                  fontSize: "10px",
                  display: "inline-block",
                }}
              >
                ♡ 4
              </div>
            </div>
          </Box>
          <TextField
            sx={{
              marginTop: "25px",
              width: "100%",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "28px",
              input: {
                color: "white",
                padding: "20px",
                paddingLeft: "60px",
              },
              "& .MuiFilledInput-root": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderRadius: "28px",
              },
              "& .MuiFilledInput-root:hover": {
                backgroundColor: "rgba(0, 0, 0, 0)",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
            fullWidth
            autoComplete="email"
            defaultValue="댓글을 입력하세요."
            autoFocus
          ></TextField>
        </div>
        <div>
          <Box
            sx={{
              marginTop: "25px",
              width: "100%",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "28px",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "60px",
                marginRight: "60px",
              }}
            >
              여기에 댓글 컴포넌트 넣을 예정
            </div>
          </Box>
        </div>
      </Container>
      <CssBaseline />
    </ThemeProvider>
  );
}
