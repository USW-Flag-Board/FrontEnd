import { useEffect, useState } from "react";
import styled from "styled-components";
import { SORTBOX_DATA } from "../../constants/signUp";

const SortBox = ({qualification, introduce, value, getJoinTypeValue}) => {
  const handleRadioClick = (checked) =>{
    getJoinTypeValue(checked);
  }

  return(
    <SortArea>
      <CheckArea>
        <AgreeButton 
          type="radio"
          value={value}
          name="check"
          onClick={(e)=> handleRadioClick(e.target.value)}
        />
        <CheckLabel>{qualification}</CheckLabel>
      </CheckArea>
      <IntroduceJoinTypeArea>
        {introduce}
      </IntroduceJoinTypeArea>
    </SortArea>
  )
}

const JoinTypeSelect = ({ setButtonState, signUpData, setJoinType }) => {
  const getJoinTypeValue = (text) => {
    setJoinType({...signUpData, joinType: text});
  };

  useEffect(() => {
    if (signUpData.joinType !== "") {
      return setButtonState(true);
    }
    return setButtonState(false);
  }, [setButtonState, signUpData.joinType]);
  
  return (
    <div>
      <IntroduceArea>회원구분</IntroduceArea>
      {SORTBOX_DATA.map(({id, qualification, introduce, value})=> 
        <SortBox 
          key={id} 
          qualification={qualification}
          introduce={introduce}
          value={value}
          getJoinTypeValue={getJoinTypeValue}
        />)}
    </div>
  );
};

export default JoinTypeSelect;

const IntroduceArea = styled.div`
  font-size: 24px;
  font-weight: 100;
  line-height: 33px;
  width: 450px;
  color: black;
  margin-bottom:20px;
  text-align: left;
  display: flex;
  align-items: flex-end;
`;

const IntroduceJoinTypeArea = styled.div`
  border: 2px solid #9a9a9a;
  border-radius: 20px;
  font-size: 14px;
  margin: 10px 0 40px 0;
  padding: 20px;
  color: black;
  line-height: 28px;
  white-space: pre-wrap;
`;

const SortArea = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
`;

const CheckArea = styled.div`
  display: flex;
  align-items: center;
`;

const CheckLabel = styled.label`
  margin-left: 10px;
  font-size: 20px;
  color: black;
`;

const AgreeButton = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 1px solid #868e96;
  border-radius: 50px;
  &:checked{
    background-color: #228be6;
  }
`;

