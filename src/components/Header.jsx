import { useState } from "react";
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HomeHeader>
        <LogoBox>
          <img className="logo" 
            src="images/logo.JPG" 
            alt="blog-logo" 
            style={{height: "80%", cursor: "pointer"
          }}/>
        </LogoBox>
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
        </MenuItemBox>
        <SearchBox>
          <Paper
            component="form"
            sx={{display: 'flex', 
              width: "80%", 
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
          <IconButton sx={{ p: '8px', }} aria-label="menu">
            <PersonOutlineIcon fontSize= "large"/>
          </IconButton>
        </SearchBox>
      </HomeHeader>
    </>
  );
}

const sections = ["FLAG", "INTRODUCE","BOARD", "ACTIBITY", "NOTICE"];
const menuItem = ["STUDY", "PROJECT"];

const HomeHeader = styled('div')({
  boxSizing: "border-box",
  width: "100vw",
  height: "9vh",
  display: "flex",
  alignItems: "flex-end",
  backgroundColor: "white",
});

const LogoBox = styled('div')({
  width: "10%",
  height: "100%",
  display: "flex", 
  alignItems: "center",
  paddingLeft: "15px",
});

const MenuItemBox = styled('div')({
  width: "70%",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
});

const MenuItems = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  margin: 0,
});

const SearchBox = styled('div')({
  width: "20%",
  display: "flex",
  alignItems: "center",
})



export default Header;


