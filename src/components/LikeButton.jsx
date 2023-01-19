import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";

const LikeButton = () => {
  const [state, setState] = useState(false);

  const Like = () => {
    state ? setState(false) : setState(true);
  };

  return (
    <div style={{display: "inline-block"}}>
      {state ? (
        <FontAwesomeIcon
          icon={solidHeart}
          style={{
            color: "red",
            "&:hover": {
              transform: "scale(1.1)",
            },
            fontSize: "10px",
          }}
          onClick={Like}
        />
      ) : (
        <FontAwesomeIcon
          icon={regularHeart}
          style={{
            "&:hover": {
              transform: "scale(1.1)",
            },
            fontSize: "10px",
          }}
          onClick={Like}
        />
      )}
    </div>
  );
};

export default LikeButton;
