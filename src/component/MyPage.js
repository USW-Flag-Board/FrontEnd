import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
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

export default function MyPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs"></Container>
    </ThemeProvider>
  );
}
