import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import headerData from "../constants/header";
import logo from "../assets/images/logo2.png"
import { useDispatch, useSelector } from "react-redux";
import activitiesActions from "../redux/thunkActions/activityActions";

const Header = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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

  const handleMenuClick = (item) => {
    switch(item){
      case 'BOARD':
        navigate('/board')
        break;
      case 'ACTIVITY':
        dispatch(activitiesActions.getAllactivitiesAPI())
        navigate('/activity');
        break;
      case 'INTRODUCTION':
        navigate('/resume');
        break;
      default:
        
    }
  }

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
              <MenuButton key={item} onClick={()=> handleMenuClick(item)}>
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
  height: 11vh;
  border-bottom: 1px solid black;
`;

const HeaderBox = styled.div`
  width: calc(100vw - 16rem);
  box-sizing: border-box;
  height: 100%;
  margin: 0 8rem;
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
  /* &:hover > div {
    display: block;
  } */
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
  width: 50%;
  height: 100%;
  color: #BABABA; 
  height: 100%;
  justify-content: flex-end;
`;

const FaUser = styled(FontAwesomeIcon)`
  width: 80%; 
  color: #BABABA; 
  height: 50%;
`;

const DropHeaderArea = styled.div`
  width: 100%;
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
