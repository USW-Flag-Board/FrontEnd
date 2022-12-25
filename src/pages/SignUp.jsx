import { InputAdornment, MenuItem, rgbToHex } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CopyRightArea = styled(CopyRight)({
  marginTop: 160,
  marginBottom: 32,
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

const AccountButton = styled(Button)({
  backgroundColor: "#378975",
  color: "#ffffff",
  marginTop: 30,
  marginBottom: 30,
  borderRadius: 28,
  height: 60,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2C2C2C",
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

const SignUp = () => {
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

          <Box component="form" noValidate sx={{ mt: 5 }}>
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
              id="id"
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
            <WriteArea
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
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
            <WriteArea
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              margin="normal"
              fullWidth
              id="
              name"
              name="userName"
              autoComplete="name"
              label="이름"
              autoFocus
            />
            <WriteArea
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
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
            </WriteArea>
            <WriteArea
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              margin="normal"
              fullWidth
              id="
              studentId"
              name="studentId"
              autoComplete="studentId"
              label="학번"
              autoFocus
            />
            <AccountButton type="submit" fullWidth variant="contained">
              가입하기
            </AccountButton>
          </Box>
        </Box>
        <CopyRightArea />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
