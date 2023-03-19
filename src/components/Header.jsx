import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { HEADER_ITEMS } from "../constants/header";
import { LOGIN_USER_ITEMS } from "../constants/header";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const ref = useRef();


  const handleMenuClick = (menu) => {
    setUserToggled(false);
    if (menu === "BOARD") {
      setIsToggled(!isToggled)
    } else if (menu === "ACTIVITY") {
      alert("구현중입니다.");
      // navigate("/activity");
    } else if (menu === "NOTICE") {
      alert("구현중입니다.");
    }
  };

  const handleUserClick = () => {
    setUserToggled((prev) => (!prev));
    cookies.get("refresh_token") ? setLogin(true) : setLogin(false);
  };

  const handleUserItemClick = (item) => {
    setUserToggled(false);
    switch(item){
      case '마이페이지':
        navigate('/my');
        break;
      case '로그인 / 회원가입':
        navigate('/login')
        break;
      case '로그아웃':

        break;
      default:
        
    }
  };

  return (
    <HomeHeaderArea>
      <HomeHeader>
        <LogoBox>
          <LogoImg
            src="../images/logo.JPG"
            alt="blog-logo"
            onClick={() => navigate("/")}
          />
        </LogoBox>
        <MenuItemBox>
          <MenuItems>
            {HEADER_ITEMS.map((item) => (
              <MenuButton key={item} onClick={() => handleMenuClick(item)}>
                {item}
              </MenuButton>
            ))}
          </MenuItems>
        </MenuItemBox>
        <SearchBox>
          <SearchPaper>
            <FaMagnifyingGlass icon={faMagnifyingGlass}/>
            <InputBase type="text" />
          </SearchPaper>
          <FaUser icon={faUser} onClick={handleUserClick}/>
        </SearchBox>
      </HomeHeader>
      {isToggled ? <DropHeaderArea></DropHeaderArea> : ""}
      {userToggled ? login 
        ? <DropUserArea>
            {LOGIN_USER_ITEMS.map((item) => (
              <DropUserBox key={item} onClick={()=> handleUserItemClick(item)}>
                {item}
              </DropUserBox>
            ))}
          </DropUserArea> 
        : 
          <DropUserArea >
            <DropUserBox onClick={()=> handleUserItemClick("로그인 / 회원가입")}>
              로그인 / 회원가입
            </DropUserBox>
          </DropUserArea> : ""
      }
    </HomeHeaderArea>
  );
};

const HomeHeaderArea = styled.div``;

const HomeHeader = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 11vh;
  display: flex;
  align-items: flex-end;
  background-color: white;
`;

const LogoBox = styled.div`
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 2rem ;
`;

const LogoImg = styled.img`
  width: 50%; 
  height: 80%; 
  cursor: pointer;
`;

const MenuItemBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  
`;

const MenuButton = styled.div`
  width: 25%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #F2F2F2;
    border-radius: 0.6rem;
  }
  cursor: pointer;
`;

const SearchBox = styled.div`
  width: 20%;
  height: 60%;
  display: flex;
  align-items: center;
  padding-left: 1.3rem;
`;

const SearchPaper = styled.form`
  display: flex;
  width: 80%;
  height: 60%;
  margin-left: 0.1rem;
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

const FaMagnifyingGlass = styled(FontAwesomeIcon)`
  width: 14%;
  color: #BABABA;
  display: flex;
  align-items: center;
`;

const FaUser = styled(FontAwesomeIcon)`
  width: 14%; 
  color: #BABABA; 
  height: 50%;
`;

const DropHeaderArea = styled.div`
  width: 100vw;
  height: 20vh; 
  background-color: #F2F2F2;
  border-radius: 0 0 50px 50px;
  position: absolute;
  z-index: 1;
`;

const DropUserArea = styled.div`
  position: absolute;
  height: 16vh; 
  width: 13vw;
  right: 0;
  background-color: #F2F2F2;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  &:nth-child(2){
    justify-content: center;
  }
  z-index: 1;
`;

const DropUserBox = styled.div`
  font-size: 0.8rem;
  width: 100%;
  height: 33%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    border-radius: 0.6rem;
  }
`;

export default Header;
