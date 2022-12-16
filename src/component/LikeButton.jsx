import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { styled } from "@mui/system";

const LikeButtonFullin = styled(FavoriteIcon)({
  color: "red",
  "&:hover": {
    transform: "scale(1.1)",
  },
  fontSize: "10px",
});

const LikeButtonOutLine = styled(FavoriteBorderOutlinedIcon)({
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
    <div style={{ display: "inline-block" }}>
      {state ? (
        <LikeButtonFullin onClick={Like} />
      ) : (
        <LikeButtonOutLine onClick={Like} />
      )}
    </div>
  );
};

export default LikeButton;
