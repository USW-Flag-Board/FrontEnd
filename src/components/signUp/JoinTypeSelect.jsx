import { useEffect, useState } from "react";
import styled from "styled-components";
import { SORTBOX_DATA } from "../../constants/signUp";

function SortBox({
  qualification,
  introduce,
  value,
  isChecked,
  handleCheckboxChange,
}) {
  return (
    <SortArea>
      <CheckArea>
        <AgreeButton
          type="checkbox"
          value={value}
          name="check"
          checked={isChecked}
          onChange={() => handleCheckboxChange(value)}
        />
        <CheckLabel>{qualification}</CheckLabel>
      </CheckArea>
      <IntroduceJoinTypeArea>{introduce}</IntroduceJoinTypeArea>
    </SortArea>
  );
}

function JoinTypeSelect({ setButtonState, setJoinType }) {
  const [checkedValues, setCheckedValues] = useState([]);
  const handleCheckboxChange = (value) => {
    const newCheckedValues = checkedValues.includes(value) ? [] : [value];
    setCheckedValues(newCheckedValues);
    setJoinType({ joinType: newCheckedValues[0] });
  };

  useEffect(() => {
    if (checkedValues.length !== 0) {
      return setButtonState(true);
    }
    return setButtonState(false);
  }, [setButtonState, checkedValues]);

  return (
    <JoinTypeArea>
      <IntroduceArea>회원구분</IntroduceArea>
      {SORTBOX_DATA.map(({ id, qualification, introduce, value }) => (
        <SortBox
          key={id}
          qualification={qualification}
          introduce={introduce}
          value={value}
          isChecked={checkedValues.includes(value)}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </JoinTypeArea>
  );
}

export default JoinTypeSelect;

const JoinTypeArea = styled.div`
  width: 80%;
`;

const IntroduceArea = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  width: 100%;
  color: black;
  padding: 1.25rem 0;
`;

const IntroduceJoinTypeArea = styled.div`
  border: 1px solid #9a9a9a;
  border-radius: 0.6rem;
  font-size: 0.9rem;
  margin: 0.6rem 0 2.5rem 0;
  padding: 1.25rem;
  color: black;
  line-height: 1.3rem;
  white-space: pre-wrap;
`;

const SortArea = styled.div`
  width: 100%;
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
  width: 1.2rem;
  height: 1.25rem;
  border: 1px solid #868e96;
  cursor: pointer;
  &:checked {
    background-color: #228be6;
  }
`;
