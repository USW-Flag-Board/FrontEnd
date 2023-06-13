import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo2.png";
import { MODAL_MENU_TTEMS } from "../../constants/header";
import { SessionStorage } from "../../utils/browserStorage";
import { cookiesOption } from "../../utils/cookiesOption";

const MenuModal = ({ handleModalOpen }) => {
  const navigate = useNavigate();
  const handleItemClick = (name) => {
    switch (name) {
      case "BOARD":
        navigate({
          pathname: `/board/${"자유게시판"}`,
          search: createSearchParams({
            page: 1,
          }).toString(),
        });
        break;
      case "ACTIVITY":
        navigate("/activity");
        break;
      case "MY PAGE":
        navigate("/edit");
        break;
      case "LOGIN":
        navigate("/login");
        break;
      case "SIGN UP":
        navigate("/signup");
        break;
    }
    handleModalOpen(false);
  };

  const handleLogOutClick = () => {
    SessionStorage.clear();
    cookiesOption.remove("refresh_token");
    navigate("/login");
  };

  return (
    <ModalArea>
      <MenuBarArea>
        <MenuBarBox>
          <MenuBarHeader>
            <LogoImg src={logo} alt="blog-logo" />
            <CloseButtonBox>
              <Xmark icon={faXmark} onClick={() => handleModalOpen(false)} />
            </CloseButtonBox>
          </MenuBarHeader>
          <MenuBarItemsBox>
            {MODAL_MENU_TTEMS.map(({ id, name }) => (
              <MenuBarItem key={id} onClick={() => handleItemClick(name)}>
                {name}
              </MenuBarItem>
            ))}
            {SessionStorage.get("User_id") && (
              <MenuBarItem
                id="MY PAGE"
                onClick={(e) => handleItemClick(e.target.id)}
              >
                MY PAGE
              </MenuBarItem>
            )}
          </MenuBarItemsBox>
          <AuthBox>
            <ButtonBox>
              {SessionStorage.get("User_id") ? (
                <ButtonItem
                  className="logout"
                  type="button"
                  onClick={handleLogOutClick}
                >
                  로그아웃
                </ButtonItem>
              ) : (
                <>
                  <ButtonItem
                    id="LOGIN"
                    type="button"
                    onClick={(e) => handleItemClick(e.target.id)}
                  >
                    로그인
                  </ButtonItem>
                  <ButtonItem
                    id="SIGN UP"
                    type="button"
                    onClick={(e) => handleItemClick(e.target.id)}
                  >
                    회원가입
                  </ButtonItem>
                </>
              )}
            </ButtonBox>
          </AuthBox>
        </MenuBarBox>
      </MenuBarArea>
    </ModalArea>
  );
};

export default MenuModal;

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const MenuBarArea = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0;
  width: 100%;
  padding: 0.5rem;
`;

const MenuBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  padding: 0 1rem 0 0.3rem;
  padding-top: 0.2rem;
`;

const LogoImg = styled.img`
  width: 9rem;
  height: 100%;
`;

const CloseButtonBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Xmark = styled(FontAwesomeIcon)`
  width: 1.7rem;
  height: 1.6rem;
  color: #339af0;
  cursor: pointer;
`;

const MenuBarBox = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 90vh;
`;

const MenuBarItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid #dee2e6;
  gap: 0.4rem;
`;

const MenuBarItem = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;
  font-weight: 500;
  font-size: 0.8rem;
`;

const AuthBox = styled.div`
  display: flex;
  width: 14rem;
  height: 5rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
  .logout {
    background: none;
  }
`;

const ButtonItem = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  cursor: pointer;
  border-radius: 0.4rem;
  :nth-child(2) {
    background-color: #339af0;
    color: white;
  }
`;
