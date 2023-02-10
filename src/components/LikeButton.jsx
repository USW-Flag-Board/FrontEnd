import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LikeButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <LikeButtonArea>
      {toggle ? (
        <LikeOnButton icon={solidHeart} onClick={() => setToggle(!toggle)} />
      ) : (
        <LikeOffButton icon={regularHeart} onClick={() => setToggle(!toggle)} />
      )}
    </LikeButtonArea>
  );
};

const LikeOnButton = styled(FontAwesomeIcon)`
  color: red;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  fontsize: 10px;
`;

const LikeOffButton = styled(FontAwesomeIcon)`
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  fontsize: 10px;
`;

const LikeButtonArea = styled.div`
  display: inline-block;
`;

export default LikeButton;
