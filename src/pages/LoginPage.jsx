import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CircleUnchecked from "@mui/icons-material/CheckCircleOutline";
import CircleChecked from "@mui/icons-material/CheckCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CopyRightArea = styled(CopyRight)({
  marginTop: 160,
  marginBottom: 32,
});

const LoginArea = styled(Box)({
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const WriteArea = styled(TextField)({
  input: {
    color: "white",
    paddingLeft: 8,
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#6c6c6c",
    borderRadius: "28px",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#575757",
  },
});

const CheckLoginState = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    color: "#ffffff",
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "#378975",
  color: "#ffffff",
  marginTop: 30,
  marginBottom: 30,
  borderRadius: 28,
  height: 60,
});

const FindId = styled(Link)({});

const FindPassword = styled(Link)({});

const Account = styled(Link)({});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
    },
  },
  primary: {
    background: {
      default: "#ffffff",
    },
  },
});

function CopyRight(props) {
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

export default function LoginPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <LoginArea>
          <img className="Logo" src="flag.JPG" width="120" height="60" />
          <Box component="form" sx={{ mt: 5 }}>
            <WriteArea
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              margin="normal"
              fullWidth
              id="
              id"
              name="id"
              autoComplete="email"
              label="아이디"
              autoFocus
            />
            <WriteArea
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
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

            <Grid container columns={12}>
              <Grid item xs>
                <CheckLoginState
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleChecked />}
                    />
                  }
                  label="로그인 상태 유지"
                />
              </Grid>
              <Grid item xs sx={{ textAlign: "right" }}>
                <CheckLoginState
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleChecked />}
                    />
                  }
                  label="아이디 기억하기"
                />
              </Grid>
            </Grid>

            <LoginButton type="submit" fullWidth variant="contained">
              로그인
            </LoginButton>
            <Grid container columns={12}>
              <Grid item xs>
                <FindId href="#" variant="body2">
                  아이디 찾기
                </FindId>
              </Grid>
              <Grid item xs sx={{ textAlign: "center" }}>
                <FindPassword href="#" variant="body2">
                  비밀번호 찾기
                </FindPassword>
              </Grid>
              <Grid item xs sx={{ textAlign: "right" }}>
                <Account href="/signup" variant="body2">
                  회원가입
                </Account>
              </Grid>
            </Grid>
          </Box>
        </LoginArea>
        <CopyRightArea />
      </Container>
    </ThemeProvider>
  );
}
