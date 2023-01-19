import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/system";
import { useState } from "react";

const LikeButtonFullin = styled(FontAwesomeIcon)({
  color: "red",
  "&:hover": {
    transform: "scale(1.1)",
  },
  fontSize: "10px",
});

const LikeButtonOutLine = styled(FontAwesomeIcon)({
  "&:hover": {
    transform: "scale(1.1)",
  },
  fontSize: "10px",
});

const LikeButton = () => {
  const [state, setState] = useState(false);

  const Like = () => {
    state ? setState(false) : setState(true);
  };

  return (
    <div style={{display: "inline-block"}}>
      {state ? (
        <LikeButtonFullin icon={solidHeart} onClick={Like} />
      ) : (
        <LikeButtonOutLine icon={regularHeart} onClick={Like} />
      )}
    </div>
  );
};

export default LikeButton;
