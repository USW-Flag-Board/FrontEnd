import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {useState} from "react";
import {styled} from "@mui/system";

const CheckedButton = styled(FontAwesomeIcon)({
  filter:
    "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
  transition: "opacity 0.2s",
});

const UnCheckedButton = styled(FontAwesomeIcon)({
  filter:
    "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
  transition: "opacity 0.2s",
});

const CheckButton = (props) => {
  const [state, setState] = useState(false);

  const Checked = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div style={{display: "inline-block"}}>
      {state ? (
        <CheckedButton icon={faCircleCheck} onClick={Checked} />
      ) : (
        <UnCheckedButton icon={faCircle} onClick={Checked} />
      )}
    </div>
  );
};

export default CheckButton;
