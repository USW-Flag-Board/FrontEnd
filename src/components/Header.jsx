import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { LOGOUT_USER_ITEMS, HEADER_ITEMS } from "../constants/header";
import logo from "../assets/images/logo2.png"
import { useDispatch } from "react-redux";
import { SessionStorage } from "../utils/browserStorage";

const Header = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  
  const handleItemClick = (item) => {
    switch(item){
      case '로그인':
        navigate('/login')
        break;
      case '회원가입':
        navigate('/signup');
        break;
      case '마이페이지':
        navigate('/my');
        break;
      case 'BOARD':
        navigate('/board')
        break;
      case 'ACTIVITY':
        navigate('/activity');
        break;
      case 'INTRODUCTION':
        navigate('/resume');
        break;
      default:
        break;
    }
  };

  useLayoutEffect(()=> {
    if(SessionStorage.get("UserToken")) setLogin(true);
  }, [])


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
            {HEADER_ITEMS.map((item) => (
              <MenuButton key={item} onClick={()=> handleItemClick(item)}>
                {item}
              </MenuButton>
            ))}
          </MenuItems>
        </MenuItemBox>
        <SearchBox>
          <SearchPaper login={login}>
            <FaMagnifyingGlass icon={faMagnifyingGlass}/>
            <InputBase type="text" />
          </SearchPaper>
          <UserBox loging={login}>
            { login 
              ? 
                (<UserButton
                  login={login}
                  type="button" 
                  onClick={()=>navigate("/my")}>
                  마이페이지
                </UserButton>) 
              : 
                (LOGOUT_USER_ITEMS.map((item)=>(
                  <UserButton 
                    type="button" 
                    key={item} 
                    onClick={()=> handleItemClick(item)}
                    >
                      {item}
                  </UserButton>
                ))
              )}
          </UserBox>
        </SearchBox>
      </HeaderBox>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  width: 100%;
  padding: 0 8rem;
  height: 11vh;
  border-bottom: 1px solid black;
  @media screen and (max-width: 1023px){
    width: 100%;
    padding: 0 2rem;
  }
`;

const HeaderBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  background-color: white;
`;

const LogoBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100%; 
  height: 100%; 
  cursor: pointer;
`;

const MenuItemBox = styled.div`
  width: 50%;
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
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #F2F2F2;
    border-radius: 0.6rem;
  }
`;

const SearchBox = styled.div`
  box-sizing: border-box;
  width: 40%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SearchPaper = styled.form`
  width: ${props => props.login ? "70%" : "calc(50% - 1rem)"};
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
  width: ${props => props.login ? "30%" : "50%"};
  height: 100%;
  color: #BABABA; 
  height: 100%;
  justify-content: ${props => props.login ? "flex-end" : "space-evenly"};
`;


const UserButton = styled.button`
  width: ${props => props.login ? "50%" : "40%"};
  height: 90%;
  border: none;
  &:nth-child(2){
    background-color: #ff922b;
  }
`;

export default Header;
