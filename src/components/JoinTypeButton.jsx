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

const SortArea = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 20,
});

const CheckArea = styled("label")({
  display: "flex",
  alignItems: "center",
});

const CheckLabel = styled("p")({
  marginLeft: 10,
});

const JoinTypeButton = (props) => {
  const [firstState, setFirstState] = useState(false);
  const [secondState, setSecondState] = useState(false);
  const Checked = (type) => {
    if (type === 1) {
      if (firstState) {
        setFirstState(false);
        if (!secondState) {
          props.getValue("");
        }
      } else {
        setSecondState(false);
        setFirstState(true);
        props.getValue("동아리");
      }
    } else if (type === 2) {
      if (secondState) {
        setSecondState(false);
        if (!firstState) {
          props.getValue("");
        }
      } else {
        setFirstState(false);
        setSecondState(true);
        props.getValue("일반");
      }
    }
  };

  return (
    <SortArea>
      <CheckArea>
        <div style={{display: "inline-block"}}>
          {firstState ? (
            <CheckedButton icon={faCircleCheck} onClick={() => Checked(1)} />
          ) : (
            <UnCheckedButton icon={faCircle} onClick={() => Checked(1)} />
          )}
        </div>
        <CheckLabel>FLAG 동아리원</CheckLabel>
      </CheckArea>
      <CheckArea>
        <div style={{display: "inline-block"}}>
          {secondState ? (
            <CheckedButton icon={faCircleCheck} onClick={() => Checked(2)} />
          ) : (
            <UnCheckedButton icon={faCircle} onClick={() => Checked(2)} />
          )}
        </div>
        <CheckLabel>일반유저</CheckLabel>
      </CheckArea>
    </SortArea>
  );
};

export default JoinTypeButton;
