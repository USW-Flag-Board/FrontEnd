import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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

const darkTheme = createTheme({
  textField: {
    border: "1px solid blue",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
    },
    text: {
      primary: "#696969",
      borderRadius: "28",
    },
  },
});

export default function LoginPage() {
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
          <img className="Logo" alt="로고입니다." src="flag.JPG" width="120" height="60" />
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 5 }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
                color: "text.secondary",
                ".MuiFilledInput-root": { borderRadius: 100, borderBottom: 0 },
                ".MuiFilledInput-root:before": {
                  borderBottom: 0,
                },
                ".MuiFilledInput-root:after": {
                  borderBottom: 0,
                },
                ".MuiFilledInput-root:hover:not": {
                  borderBottom: 0,
                },
                ".MuiFilledInput-root:hover": {
                  backgroundColor: "rgb(87, 87, 87)",
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgb(105, 105, 105)",
                },
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
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              sx={{
                input: { color: "white", paddingLeft: 2 },
                color: "text.secondary",
                ".MuiFilledInput-root": { borderRadius: 100, borderBottom: 0 },
                ".MuiFilledInput-root:before": {
                  borderBottom: 0,
                },
                ".MuiFilledInput-root:after": {
                  borderBottom: 0,
                },
                ".MuiFilledInput-root:hover": {
                  backgroundColor: "rgb(87, 87, 87)",
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgb(105, 105, 105)",
                },
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

            <Grid container columns={12}>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleChecked />}
                    />
                  }
                  sx={{
                    "	.MuiFormControlLabel-label": {
                      color: "#ffffff",
                    },
                  }}
                  label="로그인 상태 유지"
                />
              </Grid>
              <Grid item xs sx={{ textAlign: "right" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleChecked />}
                    />
                  }
                  sx={{
                    "	.MuiFormControlLabel-label": {
                      color: "#ffffff",
                    },
                  }}
                  label="아이디 기억하기"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#378975",
                color: "#ffffff",
                mt: 3,
                mb: 2,
                borderRadius: 28,
                height: 60,
              }}
            >
              로그인
            </Button>
            <Grid container columns={12}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  아이디 찾기
                </Link>
              </Grid>
              <Grid item xs sx={{ textAlign: "center" }}>
                <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item xs sx={{ textAlign: "right" }}>
                <Link href="/signup" variant="body2">
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 20, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
