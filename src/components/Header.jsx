import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Cookies from "universal-cookie";
import headerData from "../constants/header";
import { LocalStorage, SessionStorage } from "../utils/browserStorage";
import { cookiesOption } from "../utils/cookiesOption";
import logo from "../assets/images/logo.JPG"

const Header = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  
  useEffect(()=>{
    const cookies = new Cookies();
    cookies.get("refresh_token") ? setLogin(true) : setLogin(false);
  }, [login])

  // const handleLogOut = () => {
  //   LocalStorage.clear();
  //   SessionStorage.clear();
  //   cookiesOption.remove("refresh_token");
  //   cookiesOption.remove("remember_id");
  //   setLogin(false);
  //   navigate("/login");
  // };

  const handleUserItemClick = (item) => {
    switch(item){
      case '로그인':
        navigate('/login')
        break;
      case '회원가입':
        navigate('/signup');
        break;
      default:
        
    }
  };

  return (
    <HeaderArea>
      <HeaderBox>
        <LogoBox>
          <LogoImg
            src={logo}
            alt="blog-logo"
            onClick={() => navigate("/")}
          />
        </LogoBox>
        <MenuItemBox>
          <MenuItems>
            {headerData.HEADER_ITEMS.map((item) => (
              <MenuButton key={item}>
                {item}
                <DropHeaderArea>

                </DropHeaderArea>
              </MenuButton>
            ))}
          </MenuItems>
        </MenuItemBox>
        <SearchBox>
          <SearchPaper>
            <FaMagnifyingGlass icon={faMagnifyingGlass}/>
            <InputBase type="text" />
          </SearchPaper>
          <UserBox>
            {headerData.LOGOUT_USER_ITEMS.map((item)=>(
              <UserButton type="button" key={item} onClick={()=> handleUserItemClick(item)}>{item}</UserButton>
            ))}
          </UserBox>
        </SearchBox>
      </HeaderBox>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  width: 100%;
  height: 11vh;
  `;

const HeaderBox = styled.div`
  box-sizing: border-box;
  width: calc(100% - 16rem);
  height: 100%;
  margin: 0 8rem;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  background-color: white;
`;

const LogoBox = styled.div`
  width: 10%;
  height: 80%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100%; 
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
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MenuButton = styled.div`
  width: 18%;
  height: 100%;
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
  &:hover > div {
    display: block;
  }
`;

const SearchBox = styled.div`
  box-sizing: border-box;
  width: 30%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  `;

const SearchPaper = styled.form`
  width: calc(50% - 1rem);
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: 80%;
  border: 1px solid #dee2e6;
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

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: calc(50% - 1rem);
  height: 100%;
  color: #BABABA; 
  height: 100%;
  &:hover > div{
    display: block !important;
  }
`;

const FaUser = styled(FontAwesomeIcon)`
  width: 80%; 
  color: #BABABA; 
  height: 50%;
`;

const DropHeaderArea = styled.div`
  width: 100vw;
  height: 20vh; 
  background-color: #F2F2F2;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 11vh;
  display: none;
  cursor: default;
`;

const UserButton = styled.button`
  width: 50%;
  height: 80%;
  border: none;
  &:nth-child(1){
    margin-right: 1rem;
  }
  &:nth-child(2){
    background-color: #ff922b;
  }
`;


export default Header;
