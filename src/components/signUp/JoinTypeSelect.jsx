import { useEffect } from "react";
import styled from "styled-components";
import { JoinTypeButton } from "../../components";

const JoinTypeSelect = ({ setButtonState, joinType, setJoinType }) => {
    const getJoinTypeValue = (text) => {
      setJoinType(text);
    };
  
    useEffect(() => {
      if (joinType !== "") {
        return setButtonState(true);
      }
      return setButtonState(false);
    }, [joinType, setButtonState]);
  
    return (
      <>
        <IntroduceArea>회원구분</IntroduceArea>
        <JoinTypeButton getJoinTypeValue={getJoinTypeValue} />
      </>
    );
  };

export default JoinTypeSelect;


const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: black;
  margin-top: 20px;
  margin-bottom: 45px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;