import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import Cookies from "universal-cookie";
import styled from "styled-components";

const IdRememberButton = ({getRememberState}) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const toggleAndgetRememberState = () => {
    if (toggle) {
      setToggle(false);
      getRememberState(false);
    } else {
      setToggle(true);
      getRememberState(true);
    }
  };

  useEffect(() => {
    if (cookies.get("remember_id")) {
      setToggle(true);
    }
  }, [navigate]);

  return (
    <IdRememberButtonArea>
      {toggle ? (
        <ToggleButton
          icon={faCircleCheck}
          onClick={toggleAndgetRememberState}
        />
      ) : (
        <ToggleButton icon={faCircle} onClick={toggleAndgetRememberState} />
      )}
    </IdRememberButtonArea>
  );
};

const IdRememberButtonArea = styled.div`
  display: inline-block;
`;

const ToggleButton = styled(FontAwesomeIcon)`
  filter: invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg)
    brightness(97%) contrast(83%);
  transition: opacity 0.2s;
`;

export default IdRememberButton;
