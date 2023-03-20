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

  const handleLogOut = () => {
    LocalStorage.clear();
    SessionStorage.clear();
    cookiesOption.remove("refresh_token");
    cookiesOption.remove("remember_id");
    setLogin(false);
    navigate("/login");
  };

  const handleUserItemClick = (item) => {
    switch(item){
      case '마이페이지':
        navigate('/my');
        break;
      case '로그인':
        navigate('/login')
        break;
      case '로그아웃':
        handleLogOut();
        break;
      case '회원가입':
        navigate('/signup');
        break;
      default:
        
    }
  };

  return (
    <HomeHeader>
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
          <FaUser icon={faUser}/>
          <DropUserArea>
            {login 
            ? headerData.LOGIN_USER_ITEMS.map((item) => 
              (<DropUserBox 
                key={item} 
                onClick={()=> handleUserItemClick(item)}
                >
                  {item}
                </DropUserBox>))
            : headerData.LOGOUT_USER_ITEMS.map((item) => 
              (<DropUserBox
                key={item} 
                onClick={()=> handleUserItemClick(item)}>
                {item}
              </DropUserBox>))}
          </DropUserArea> 
        </UserBox>
      </SearchBox>
    </HomeHeader>
  );
};

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
  &:hover > div {
    display: block;
  }
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
  align-items: center;
  width: 80%;
  height: 60%;
  margin-left: 0.1rem;
  border: 2px solid #5c5c5c;
  border-radius: 2rem;
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
  width: 14%; 
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
  border-radius: 0 0 50px 50px;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 11vh;
  display: none;
  cursor: default;
`;

const DropUserArea = styled.div`
  position: absolute;
  display: none !important;
  height: 16vh; 
  width: 13vw;
  top: 11vh;
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
