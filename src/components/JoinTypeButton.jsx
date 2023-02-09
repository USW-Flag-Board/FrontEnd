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
          {secondState ? (
            <ToggleButton icon={faCircleCheck} onClick={() => Checked(2)} />
          ) : (
            <ToggleButton icon={faCircle} onClick={() => Checked(2)} />
          )}
        </JoinTypeButtonArea>
        <CheckLabel onClick={() => Checked(2)}>일반 회원</CheckLabel>
      </CheckArea>
      <IntroduceJoinTypeArea>
        FLAGROUND의 일반 회원입니다.
        <br />
        동아리 활동을 제외하고 모든 활동이 가능합니다.
      </IntroduceJoinTypeArea>
      <CheckArea>
        <JoinTypeButtonArea>
          {firstState ? (
            <ToggleButton icon={faCircleCheck} onClick={() => Checked(1)} />
          ) : (
            <ToggleButton icon={faCircle} onClick={() => Checked(1)} />
          )}
        </JoinTypeButtonArea>
        <CheckLabel onClick={() => Checked(1)}>FLAG 동아리원</CheckLabel>
      </CheckArea>
      <IntroduceJoinTypeArea>
        FLAGROUND의 동아리 회원입니다.
        <br />
        프로젝트, 스터디, 멘토링 참여 및 등록 등 모든 활동이 가능합니다.
        <br />+ FLAG 동아리원은 관리자의 승인절차 이후 가입이 완료됩니다.
      </IntroduceJoinTypeArea>
    </SortArea>
  );
};

const IntroduceJoinTypeArea = styled.div`
  display: flex;
  border: 2px solid #9a9a9a;
  border-radius: 20px;
  font-size: 14px;
  margin: 10px 0px 40px 0px;
  padding: 20px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 28px;
`;

const SortArea = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
`;

const CheckArea = styled.label`
  display: flex;
  align-items: center;
`;

const CheckLabel = styled.p`
  margin-left: 10px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

const ToggleButton = styled(FontAwesomeIcon)`
  filter: invert(40%) sepia(0%) saturate(1219%) hue-rotate(152deg)
    brightness(97%) contrast(83%);
  transition: opacity 0.2s;
  width: 24px;
  height: 24px;
`;

const JoinTypeButtonArea = styled.div`
  display: inline-block;
`;

export default JoinTypeButton;
