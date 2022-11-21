import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';


const HomeHeader = styled('div')({
  width: "100vw",
  height: "10vh",
  display: "flex",
  alignItems: "flex-end",
});

const LogoBox = styled('div')({
  width: "20vw",
  height: "100%",
  display: "flex", 
  alignItems: "center",
  paddingLeft: "15px"
});

const MenuItemBox = styled('div')({
  width: "80vw",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  marginRight: "5px",
})

const MenuItems = styled('ul')({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  margin: 0,
});

const MenuItem = styled('li')({
  width: "200px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '&:hover':{
      backgroundColor: "#adb5bd", 
      borderRadius: "10px"
  }
});

const Header = () => {
  const sections = ["FLAG", "BOARD", "ACTIBITY", "NOTICE"];
  return (
    <Box>
      <HomeHeader>
        <LogoBox>
          <img className="logo" src="img/logo.JPG" alt="blog-logo" style={{height: "80%"}}/>
        </LogoBox>
        <Box>
          <MenuItemBox>
            <MenuItems>
              {sections.map((item) => <MenuItem key={item}>{item}</MenuItem>)}
            </MenuItems>
            <Paper 
              component="form"
              sx={{display: 'flex', width: 250, height: 30, borderRadius: "15px", ml: 2, border: "1px solid #adb5bd"}}
              >
                <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1}}
                />
              </Paper>
              <IconButton sx={{ p: '8px'}} aria-label="menu">
                <MenuIcon />
              </IconButton>
          </MenuItemBox>
        </Box>
      </HomeHeader>
    </Box>
    );
}

export default Header;
