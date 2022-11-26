import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
      <Container component="main" maxWidth="xs"></Container>
      <Box sx={{ height: "10000" }}>
        <Grid container>
          <Grid
            item
            alignContent="center"
            justifyContent="center"
            xs={5}
            sx={{ height: "90vh" }}
          >
            <Grid>
              <Grid item>
                <Box style={{ backgroundColor: "red", height: "16vh" }}>
                  MD = 6 Height = 200
                </Box>
                <Box style={{ backgroundColor: "black", height: "19vh" }}>
                  <Grid container>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      xs={2}
                    >
                      <Box
                        style={{ backgroundColor: "white", height: "19vh" }}
                      ></Box>
                    </Grid>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      xs={4}
                    >
                      <Box
                        style={{ backgroundColor: "blue", height: "19vh" }}
                      ></Box>
                    </Grid>
                    <Grid
                      item
                      alignContent="center"
                      justifyContent="center"
                      xs={6}
                    >
                      <Box
                        style={{ backgroundColor: "orange", height: "9.5vh" }}
                      ></Box>
                      <Box
                        style={{ backgroundColor: "yellow", height: "9.5vh" }}
                      ></Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Box style={{ backgroundColor: "red", height: "55vh" }}>
              MD = 6 Height = 200
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={{ backgroundColor: "green", height: "100%" }}>
              MD = 6 Height = 600
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}
