import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";

const sections = ["BOARD", "ACTIVITY", "NOTICE"];

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (menu) => {
    if(menu === "BOARD"){
      navigate("/board");
    }else if(menu === "ACTIVITY"){
      navigate("/activity");
    }
  }
  const cookies = new Cookies();

  const LoginCheck = () => {
    if (cookies.get("refresh_token")) {
      navigate("/my");
    } else {
      navigate("/login");
    }
  };

  return (
    <HomeHeader>
      <LogoBox>
        <img
          className="logo"
          src="../images/logo.JPG"
          alt="blog-logo"
          onClick={() => navigate("/")}
          style={{width: "30%", height: "80%", cursor: "pointer"}}
        />
      </LogoBox>
      <MenuItemBox>
        <MenuItems>
          <MenuButton onClick={() => navigate("/resume")}>FLAG</MenuButton>
          {sections.map((item) => (
            <MenuButton key={item} onClick={() => handleMenuClick(item)}>{item}</MenuButton>
          ))}
        </MenuItems>
      </MenuItemBox>
      <SearchBox>
        <SearchPaper>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              width: "14%",
              color: "#BABABA",
              display: "flex",
              alignItems: "center",
            }}
          />
          <InputBase type="text" />
        </SearchPaper>
        <FontAwesomeIcon
          icon={faUser}
          onClick={() => LoginCheck()}
          style={{width: "14%", color: "#BABABA", height: "50%"}}
        />
      </SearchBox>
    </HomeHeader>
  );
};

const HomeHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: flex-end;
  background-color: white;
  // @media screen and (max-width: 768px){
  //   width: 768px;
  // }
`;

const LogoBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const MenuItemBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: end;
  align-items: center;
  // @media screen and (max-width: 768px){
  //   display: none;
  // }
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
`;

const MenuButton = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
  &:hover {
    background-color: #adb5bd;
    border-radius: 10px;
  }
  cursor: pointer;
`;

const SearchBox = styled.div`
  width: 20%;
  height: 60%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const SearchPaper = styled.form`
  display: flex;
  width: 80%;
  height: 60%;
  margin-left: 2px;
  border: 2px solid #5c5c5c;
  border-radius: 2rem;
  align-items: center;
`;

const InputBase = styled.input`
  width: 75%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Header;
