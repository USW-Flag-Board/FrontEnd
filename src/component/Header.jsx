import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';

const HomeHeader = styled('div')({
  width: "100vw",
  height: "10vh",
  display: "flex",
  alignItems: "flex-end",
  backgroundColor: "white !important",
});

const LogoBox = styled('div')({
  width: "20vw",
  height: "100%",
  display: "flex", 
  alignItems: "center",
  paddingLeft: "15px",
  cursor: "pointer",
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

const ButtonArea = styled('div')({
  display: "flex",
  alignItems: 'center',
  justifyContent: "flex-end",
  height: "3vh",
  padding: "2.5vh 1vw 2.5vh 0",
});

const ButtonItem = styled('div')({
  width: "3%",
  height: "70%", 
  margin: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  borderRadius: "12px",
  padding: "10px 0",
});


const Header = () => {
  const sections = ["FLAG", "INTRODUCE","BOARD", "ACTIBITY", "NOTICE"];
  const menuItem = ["STUDY", "PROJECT"];
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonItem = [
    {name: "CH", bgColor: "#5c940d", fontColor: "white"}, 
    {name: "N" , bgColor: "#f8f9fa", fontColor: "black"},
    {name: "G", bgColor: "#9775fa", fontColor: "white"},
  ];

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
                  onClick={handleClick}
                  sx={{width:"200px", 
                      height: "50px", 
                      display: "flex", 
                      alignItems: "flex-end", 
                      fontSize: "18px", 
                      color: "black",
                      "&:hover": {backgroundColor: "#adb5bd", borderRadius: "10px"}}}>{item}
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
                  {menuItem.map((item)=> (<MenuItem 
                    key={item} 
                    onClick={handleClose} 
                    sx={{width:"200px", 
                        display: "flex", 
                        alignItems: "flex-end", 
                        justifyContent: "center", 
                        fontSize: "13px", 
                        borderBottom: "3px solid #adb5bd", 
                        "&:last-child": {borderBottom: "none"}}}>{item}
                    </MenuItem>))}
                </Menu>
              </MenuItems>
              <Paper
                component="form"
                sx={{display: 'flex', 
                    width: 250, 
                    height: 30, 
                    borderRadius: "15px", 
                    ml: 2, 
                    border: "1px solid #adb5bd"}}
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
      <ButtonArea>
        {buttonItem.map((item)=>(<ButtonItem 
          key={item.name} 
          style={{color: `${item.fontColor}`, 
          backgroundColor: `${item.bgColor}` }}>{item.name}
        </ButtonItem>))}
      </ButtonArea>
    </>
  );
}

export default Header;
