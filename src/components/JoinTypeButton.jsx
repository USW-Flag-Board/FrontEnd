import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const JoinTypeButton = ({getValue}) => {
  const [firstState, setFirstState] = useState(false);
  const [secondState, setSecondState] = useState(false);

  const Checked = (type) => {
    if (type === 1) {
      if (firstState) {
        setFirstState(false);
        if (!secondState) {
          getValue("");
        }
      } else {
        setSecondState(false);
        setFirstState(true);
        getValue("동아리");
      }
    } else if (type === 2) {
      if (secondState) {
        setSecondState(false);
        if (!firstState) {
          getValue("");
        }
      } else {
        setFirstState(false);
        setSecondState(true);
        getValue("일반");
      }
    }
  };

  return (
    <SortArea>
      <CheckArea>
        <JoinTypeButtonArea>
          {firstState ? (
            <ToggleButton icon={faCircleCheck} onClick={() => Checked(1)} />
          ) : (
            <ToggleButton icon={faCircle} onClick={() => Checked(1)} />
          )}
        </JoinTypeButtonArea>
        <CheckLabel>FLAG 동아리원</CheckLabel>
      </CheckArea>
      <CheckArea>
        <JoinTypeButtonArea>
          {secondState ? (
            <ToggleButton icon={faCircleCheck} onClick={() => Checked(2)} />
          ) : (
            <ToggleButton icon={faCircle} onClick={() => Checked(2)} />
          )}
        </JoinTypeButtonArea>
        <CheckLabel>일반유저</CheckLabel>
      </CheckArea>
    </SortArea>
  );
};

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

const ToggleButton = styled(FontAwesomeIcon)`
  filter: invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg)
    brightness(97%) contrast(83%);
  transition: opacity 0.2s;
`;

const JoinTypeButtonArea = styled.div`
  display: inline-block;
`;

export default JoinTypeButton;
