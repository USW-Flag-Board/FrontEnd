import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

const AutoLoginButton = (props) => {
  const [state, setState] = useState(false);

  const Checked = () => {
    if (state) {
      setState(false);
      props.getValue(1);
    } else {
      setState(true);
      props.getValue(2);
    }
  };

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
          onClick={() => Checked()}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCircle}
          style={{
            filter:
              "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
            transition: "opacity 0.2s",
          }}
          onClick={() => Checked()}
        />
      )}
    </div>
  );
};

export default AutoLoginButton;