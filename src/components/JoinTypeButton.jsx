import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const JoinTypeButton = ({getJoinTypeValue}) => {
  const [firstState, setFirstState] = useState(false);
  const [secondState, setSecondState] = useState(false);

  const CheckType = (type) => {
    if (type === 1) {
      if (firstState) {
        setFirstState(false);
        if (!secondState) {
          return getJoinTypeValue("");
        }
        return;
      }
      setSecondState(false);
      setFirstState(true);
      return getJoinTypeValue("동아리");
    } else if (type === 2) {
      if (secondState) {
        setSecondState(false);
        if (!firstState) {
          return getJoinTypeValue("");
        }
        return;
      }
      setFirstState(false);
      setSecondState(true);
      return getJoinTypeValue("일반");
    }
  };

  return (
    <SortArea>
      <CheckArea>
        <JoinTypeButtonArea>
          {secondState ? (
            <ToggleButton icon={faCircleCheck} onClick={() => CheckType(2)} />
          ) : (
            <ToggleButton icon={faCircle} onClick={() => CheckType(2)} />
          )}
        </JoinTypeButtonArea>
        <CheckLabel onClick={() => CheckType(2)}>일반 회원</CheckLabel>
      </CheckArea>
      <IntroduceJoinTypeArea>
        FLAGROUND의 일반 회원입니다.
        <br />
        동아리 활동을 제외하고 모든 활동이 가능합니다.
      </IntroduceJoinTypeArea>
      <CheckArea>
        <JoinTypeButtonArea>
          {firstState ? (
            <ToggleButton icon={faCircleCheck} onClick={() => CheckType(1)} />
          ) : (
            <ToggleButton icon={faCircle} onClick={() => CheckType(1)} />
          )}
        </JoinTypeButtonArea>
        <CheckLabel onClick={() => CheckType(1)}>FLAG 동아리원</CheckLabel>
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
