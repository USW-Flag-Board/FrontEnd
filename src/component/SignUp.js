import * as React from "react";
import { InputAdornment, MenuItem, rgbToHex } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Flag
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const TextFieldCustom01 = styled(TextField)`
  & .MuiFilledInput-root {
    background-color: #6c6c6c;
    border-radius: 28px;
  }
  & .MuiFilledInput-root:hover {
    background-color: #575757;
  }
`;
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
    },
  },
});

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className="Logo" src="flag.JPG" width="120" height="60" />

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <TextFieldCustom01
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
              }}
              margin="normal"
              fullWidth
              id="
              id"
              name="id"
              autoComplete="email"
              label="아이디"
              autoFocus
            />
            <TextFieldCustom01
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
              }}
              margin="normal"
              fullWidth
              type="password"
              id="
              password"
              name="password"
              autoComplete="current-password"
              label="비밀번호"
              autoFocus
            />
            <TextFieldCustom01
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
              }}
              margin="normal"
              fullWidth
              type="password"
              id="
              passwordVerify"
              name="passwordVerify"
              autoComplete="current-password"
              label="비밀번호 확인"
              autoFocus
            />
            <TextFieldCustom01
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
              }}
              margin="normal"
              fullWidth
              id="
              name"
              name="userName"
              autoComplete="name"
              label="이름"
              autoFocus
            />
            <TextFieldCustom01
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
              }}
              margin="normal"
              fullWidth
              id="
              major"
              name="major"
              autoComplete="major"
              label="전공"
              autoFocus
              select
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem>직접 입력</MenuItem>
            </TextFieldCustom01>
            <TextFieldCustom01
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
              }}
              margin="normal"
              fullWidth
              id="
              studentId"
              name="studentId"
              autoComplete="studentId"
              label="학번"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#378975",

                color: "#ffffff",
                mt: 5,
                mb: 2,
                borderRadius: 28,
                height: 60,
              }}
            >
              가입하기
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
