import {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";

const sections = ["BOARD", "ACTIVITY", "NOTICE"];

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (menu) => {
    if (menu === "BOARD") {
      navigate("/board");
    } else if (menu === "ACTIVITY") {
      alert("구현중입니다.");
      // navigate("/activity");
    } else if (menu === "NOTICE") {
      alert("구현중입니다.");
    }
  };
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
        <LogoImg
          src="../images/logo.JPG"
          alt="blog-logo"
          onClick={() => navigate("/")}
        />
      </LogoBox>
      <MenuItemBox>
        <MenuItems>
          <MenuButton onClick={() => navigate("/resume")}>FLAG</MenuButton>
          {sections.map((item) => (
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
        <FaUser icon={faUser} onClick={() => LoginCheck()}/>
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
  padding-left: 2rem ;
`;

const LogoImg = styled.img`
  width: 50%; 
  height: 80%; 
  cursor: pointer;
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
  width: 12.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: black;
  &:hover {
    background-color: #adb5bd;
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

//fontAwesomeIcon
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

export default Header;
