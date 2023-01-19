import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const SortArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const CheckArea = styled.label`
  display: flex;
  align-items: center;
`;

const CheckLabel = styled.p`
  margin-left: 10px;
`;

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
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{
                filter:
                  "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
                transition: "opacity 0.2s",
              }}
              onClick={() => Checked(1)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircle}
              style={{
                filter:
                  "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
                transition: "opacity 0.2s",
              }}
              onClick={() => Checked(1)}
            />
          )}
        </div>
        <CheckLabel>FLAG 동아리원</CheckLabel>
      </CheckArea>
      <CheckArea>
        <div style={{display: "inline-block"}}>
          {secondState ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{
                filter:
                  "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
                transition: "opacity 0.2s",
              }}
              onClick={() => Checked(2)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircle}
              style={{
                filter:
                  "invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg) brightness(97%) contrast(83%)",
                transition: "opacity 0.2s",
              }}
              onClick={() => Checked(2)}
            />
          )}
        </div>
        <CheckLabel>일반유저</CheckLabel>
      </CheckArea>
    </SortArea>
  );
};

export default JoinTypeButton;
