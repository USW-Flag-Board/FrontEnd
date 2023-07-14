import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo2.png";
import { HEADER_ITEMS, LOGOUT_USER_ITEMS } from "../constants/header";
import { SessionStorage } from "../utils/browserStorage";
import MenuModal from "./home/MenuModal";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const handleModalOpen = (state) => {
    setMenuBarOpen(state);
  };
  const navigate = useNavigate();
  const handleSearchCotent = (e) => {
    e.preventDefault();
    navigate(`/search/${searchContent}`);
  };

  const handleItemClick = (item) => {
    switch (item) {
      case "로그인":
        navigate("/login");
        break;
      case "회원가입":
        navigate("/signup");
        break;
      case "게시판":
        navigate({
          pathname: `/board/자유게시판`,
          search: createSearchParams({
            page: 1,
          }).toString(),
        });
        break;
      case "활동":
        navigate("/activity");
        break;
      case "소개":
        navigate("/introduction");
        break;
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    if (SessionStorage.get("UserToken")) setLogin(true);
  }, []);

  return (
    <>
      {menuBarOpen && <MenuModal handleModalOpen={handleModalOpen} />}
      <HeaderArea>
        <HeaderBox>
          <LogoBox>
            <LogoImg src={logo} alt="blog-logo" onClick={() => navigate("/")} />
          </LogoBox>
          <BarsBox>
            <Bars>
              <BarIcon icon={faBars} onClick={() => handleModalOpen(true)} />
            </Bars>
          </BarsBox>
          <MenuItemBox>
            <MenuItems>
              {HEADER_ITEMS.map((item) => (
                <MenuItem key={item} onClick={() => handleItemClick(item)}>
                  {item}
                </MenuItem>
              ))}
            </MenuItems>
          </MenuItemBox>
          <SearchBox onSubmit={handleSearchCotent} login={login}>
            <SearchPaper>
              <FaMagnifyingGlass icon={faMagnifyingGlass} />
              <InputBase
                type="text"
                value={searchContent}
                onChange={(e) => setSearchContent(e.target.value)}
              />
            </SearchPaper>
          </SearchBox>
          <UserBox login={login}>
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
    </>
  );
};

const HeaderArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  height: 11vh;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 480px) {
    height: 9vh;
    padding: 0 1rem;
  }
`;

const HeaderBox = styled.div`
  width: 80%;
  box-sizing: border-box;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
  }
`;

const BarsBox = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    width: 20%;
    font-size: 1.5rem;
    color: #339af0;
  }
`;

const Bars = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const BarIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
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
  width: 40%;
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

const MenuItem = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
    border-radius: 0.6rem 0.6rem 0 0;
  }
`;

const SearchBox = styled.form`
  box-sizing: border-box;
  width: ${(props) => (props.login ? "30%" : "30%")};
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
  border-radius: 20px;
`;

const InputBase = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const FaMagnifyingGlass = styled(FontAwesomeIcon)`
  width: 3rem;
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
  justify-content: ${(props) => (props.login ? "center" : "flex-end")};
  @media (max-width: 480px) {
    display: none;
  }
`;

const UserButton = styled.button`
  width: ${(props) => (props.login ? "60%" : "45%")};
  height: 90%;
  border: none;
  border-radius: 22px;
  background-color: white;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
  @media (max-width: 480px) {
    width: 50%;
    height: 50%;
    font-size: 0.2rem;
  }
  cursor: pointer;
`;

export default Header;
