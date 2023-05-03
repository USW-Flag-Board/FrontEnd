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
    <JoinTypeArea>
      <IntroduceArea>회원구분</IntroduceArea>
      {SORTBOX_DATA.map(({id, qualification, introduce, value})=> 
        <SortBox 
          key={id} 
          qualification={qualification}
          introduce={introduce}
          value={value}
          getJoinTypeValue={getJoinTypeValue}
        />)}
    </JoinTypeArea>
  );
};

export default JoinTypeSelect;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 2rem;
  width: 80%;
  color: black;
  margin-bottom: 1.25rem;
`;

const IntroduceJoinTypeArea = styled.div`
  border: 2px solid #9a9a9a;
  border-radius: 1.25rem;
  font-size: 0.9rem;
  margin: 0.6rem 0 2.5rem 0;
  padding: 1.25rem;
  color: black;
  line-height: 1.75rem;
  white-space: pre-wrap;
  
`;

const SortArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CheckArea = styled.div`
  display: flex;
  align-items: center;
`;

const CheckLabel = styled.label`
  margin-left: 0.6rem;
  font-size: 1.25rem;
  color: black;
`;

const AgreeButton = styled.input`
  width: 5%;
  height: 1.25rem;
  appearance: none;
  border: 1px solid #868e96;
  border-radius: 3.1rem;
  &:checked{
    background-color: #228be6;
  }
`;

const JoinTypeArea = styled.div`
  @media (min-width: 481px ) and (max-width: 1024px){
    width: 80%;
  }
  
  @media (max-width: 480px) {
    width: 80%;
  }
`;

