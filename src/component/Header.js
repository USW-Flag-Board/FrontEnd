import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


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

const MenuItems = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  margin: 0,
});


const Header = () => {
  const sections = ["FLAG", "BOARD", "ACTIBITY", "NOTICE"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <HomeHeader>
        <LogoBox>
          <img className="logo" src="img/logo.JPG" alt="blog-logo" style={{height: "80%"}}/>
        </LogoBox>
        <Box>
          <MenuItemBox>
            <MenuItems>
              {sections.map((item) => <Button key={item}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>{item}
              </Button>)}
              <Menu 
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
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
