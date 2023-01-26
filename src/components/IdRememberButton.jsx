import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";

const IdRememberButton = (props) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const Checked = () => {
    if (state) {
      setState(false);
      props.getValue(false);
    } else {
      setState(true);
      props.getValue(true);
    }
  };

  useEffect(() => {
    if (cookies.get("remember_id")) {
      setState(true);
    }
  }, [navigate]);

  return (
    <div style={{display: "inline-block"}}>
      {state ? (
        <FontAwesomeIcon
          icon={faCircleCheck}
          style={{
            filter:
              "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
            transition: "opacity 0.2s",
          }}
          onClick={Checked}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCircle}
          style={{
            filter:
              "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
            transition: "opacity 0.2s",
          }}
          onClick={Checked}
        />
      )}
    </div>
  );
};

export default IdRememberButton;
