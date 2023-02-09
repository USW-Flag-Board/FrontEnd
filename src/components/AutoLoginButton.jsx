import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const AutoLoginButton = ({getButtonValue}) => {
  const [toggle, setToggle] = useState(false);

  const toggleAndGetButtonValue = () => {
    if (toggle) {
      setToggle(false);
      getButtonValue(1);
    } else {
      setToggle(true);
      getButtonValue(2);
    }
  };

  return (
    <AutoLoginButtonArea>
      {toggle ? (
        <ToggleButton
          icon={faCircleCheck}
          onClick={() => toggleAndGetButtonValue()}
        />
      ) : (
        <ToggleButton
          icon={faCircle}
          onClick={() => toggleAndGetButtonValue()}
        />
      )}
    </AutoLoginButtonArea>
  );
};

const AutoLoginButtonArea = styled.div`
  display: inline-block;
`;

const ToggleButton = styled(FontAwesomeIcon)`
  filter: invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg)
    brightness(97%) contrast(83%);
  transition: opacity 0.2s;
`;

export default AutoLoginButton;
