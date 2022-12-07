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

const HomeHeader = styled('div')({
  width: "100vw",
  height: "9vh",
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
  height: "2vh",
  padding: "2.5vh 1vw 1vh 0",
});

const Header = () => {
  const sections = ["FLAG", "INTRODUCE","BOARD", "ACTIBITY", "NOTICE"];
  const menuItem = ["STUDY", "PROJECT"];
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonItem = [
    {name: "출석체크", bgColor: "#4caf50", fontColor: "white"}, 
    {name: "Notion" , bgColor: "#f8f9fa", fontColor: "black"},
    {name: "Github", bgColor: "#9c27b0", fontColor: "white"},
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
            <img className="logo" 
              src="img/logo.JPG" 
              alt="blog-logo" 
              style={{height: "80%", cursor: "pointer"
            }}/>
          </LogoBox>
          <Box>
            <MenuItemBox>
              <MenuItems>
                {sections.map((item) => 
                <Button key={item}
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
                  MenuListProps={{'aria-labelledby': 'fade-button',}}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}>
                  {menuItem.map((item)=> 
                  (<MenuItem 
                    key={item} 
                    onClick={handleClose} 
                    sx={{width:"200px",
                      display: "flex",
                      alignItems: "flex-end", 
                      justifyContent: "center", 
                      fontSize: "13px",
                      borderBottom: "3px solid #adb5bd",
                      "&:last-child": {borderBottom: "none"}
                    }}>
                    {item}
                  </MenuItem>))}
                </Menu>
              </MenuItems>
              <Paper
                component="form"
                sx={{display: 'flex', 
                  width: "20%", 
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
        {buttonItem.map((item)=>(<Button 
          key={item.name}
          style={{ 
            color: `${item.fontColor}`, 
            backgroundColor: `${item.bgColor}`,
            margin: "1rem 0.5rem 0.5rem 0",
            height: "2.5rem",
            fontSize: "1.2rem",
            borderRadius: "12px",
          }}>
          {item.name}
        </Button>))}
      </ButtonArea>
    </>
  );
}

export default Header;
