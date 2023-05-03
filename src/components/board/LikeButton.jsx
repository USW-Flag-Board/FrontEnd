import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart }  from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LikeButton = () => {
  const [state, setState] = useState(false);
  const Like = () => {
    state ? setState(false) : setState(true);
  };

  return (
    <>
      {state ? 
        <SolidHeart icon={solidHeart} onClick={Like}/> : 
        <RegularHeart icon={regularHeart} onClick={Like}/>
      }
    </>
  );
};

const RegularHeart = styled(FontAwesomeIcon)`
  &:hover{
    transform: scale(1.1);
  };
  font-size: 15px;
  margin-right: 8px;
`;

const SolidHeart = styled(FontAwesomeIcon)`
  color: red;
  font-size: 15px;
  margin-right: 8px;
`;

export default LikeButton;