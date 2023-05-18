import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { LOGOUT_USER_ITEMS, HEADER_ITEMS } from "../constants/header";
import logo from "../assets/images/logo2.png";
import { SessionStorage } from "../utils/browserStorage";

const Header = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    switch (item) {
      case "로그인":
        navigate("/login");
        break;
      case "회원가입":
        navigate("/signup");
        break;
      case "BOARD":
        navigate("/board");
        break;
      case "ACTIVITY":
        navigate("/activity");
        break;
      case "INTRODUCTION":
        navigate("/resume");
        break;
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    if (SessionStorage.get("UserToken")) setLogin(true);
  }, []);

  return (
    <HeaderArea>
      <HeaderBox>
        <BarsBox>
          <FontAwesomeIcon icon={faBars} />
        </BarsBox>
        <LogoBox>
          <LogoImg src={logo} alt="blog-logo" onClick={() => navigate("/")} />
        </LogoBox>
        <MenuItemBox>
          <MenuItems>
            {HEADER_ITEMS.map((item) => (
              <MenuButton key={item} onClick={() => handleItemClick(item)}>
                {item}
              </MenuButton>
            ))}
          </MenuItems>
        </MenuItemBox>
        <SearchBox login={login}>
          <SearchPaper>
            <FaMagnifyingGlass icon={faMagnifyingGlass} />
            <InputBase type="text" />
          </SearchPaper>
        </SearchBox>
        <UserBox loging={login}>
          {login ? (
            <UserButton
              login={login}
              type="button"
              onClick={() => navigate("/edit")}
            >
              마이페이지
            </UserButton>
          ) : (
            LOGOUT_USER_ITEMS.map((item) => (
              <UserButton
                type="button"
                key={item}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </UserButton>
            ))
          )}
        </UserBox>
      </HeaderBox>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 11vh;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 480px) {
    height: 9vh;
  }

  /* 태블릿 */
  @media (min-width: 481px) and (max-width: 1024px) {
    /* 태블릿에서 적용할 스타일 */
    width: 100%;
  }

  /* 노트북 */
  @media (min-width: 1025px) and (max-width: 1366px) {
    /* 노트북에서 적용할 스타일 */
  }

  /* 데스크탑 */
  @media (min-width: 1367px) {
    /* 데스크탑에서 적용할 스타일 */
  }
`;

const HeaderBox = styled.div`
  width: 80%;
  box-sizing: border-box;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  background-color: white;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    padding: 0;
    width: 90%;
  }
`;

const BarsBox = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    width: 35%;
    height: 40%;
    font-size: 1.5rem;
  }
`;

const LogoBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    width: 30%;
  }
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
  margin-left: 1rem;
  @media (max-width: 480px) {
    display: none;
  }
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MenuButton = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
    border-radius: 0.6rem 0.6rem 0 0;
  }
`;

const SearchBox = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.login ? "25%" : "20%")};
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 480px) {
    display: none;
  }
`;

const SearchPaper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
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
  color: #bababa;
  display: flex;
  align-items: center;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.login ? "10%" : "15%")};
  height: 70%;
  color: #bababa;
  gap: 0.7rem;
  justify-content: flex-end;
  @media (max-width: 480px) {
    width: 35%;
    height: 80%;
    font-size: 0.4rem;
  }
`;

const UserButton = styled.button`
  width: ${(props) => (props.login ? "80%" : "45%")};
  height: 90%;
  border: none;
  background-color: #339af0;
  color: white;
  &:nth-child(2) {
    background-color: #748ffc;
  }
  @media (max-width: 480px) {
    width: 40%;
    height: 50%;
    font-size: 0.2rem;
  }
  cursor: pointer;
`;

export default Header;
