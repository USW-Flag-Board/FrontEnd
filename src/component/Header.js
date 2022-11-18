import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import { styled } from '@mui/system';


const HomeHeader = styled('div')({
  backgroundColor: 'black',
  width: "100vw",
  height: "10vh"
})

const Header = () => {
  const sections = ["FLAG", "BOARD", "ACTIBITY", "NOTICE"];
  return (
    <Box>
      <HomeHeader></HomeHeader>
    </Box>
    // <Container sx={{width: "100vw", height: "100vh"}}>
    //   <Box>
    //     <img className="logo" src="img/logo.JPG" alt="blog-logo" style={{height: "100%"}}/>
    //   </Box>
    // </Container>  

            // <Box sx={{display: 'flex', alignItems: 'center', }}>
            //   {sections.map((section) => (
            //     <Box
            //       key={section}
            //       variant="body1"
            //       sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: 175, height: 60, justifyContent: 'center'
            //     ,"&:hover":{
            //       backgroundColor: "#adb5bd"
            //       , borderRadius: "10px"
            //     }}}
            //     >
            //       {section}
            //     </Box>
            //   ))}
            //   <Paper 
            //   component="form"
            //   sx={{display: 'flex', width: 200, height: 30, borderRadius: "15px", ml: 2}}
            //   >
            //     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            //       <SearchIcon />
            //     </IconButton>
            //     <InputBase
            //       sx={{ ml: 1, flex: 1}}
            //     />
            //   </Paper>
            //   <IconButton sx={{ p: '8px', display: 'flex', alignItems: 'flex-end'}} aria-label="menu">
            //     <MenuIcon />
            //   </IconButton>
            // </Box>
    );
}

export default Header;
