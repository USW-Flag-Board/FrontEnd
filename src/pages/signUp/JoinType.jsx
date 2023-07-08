import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SORTBOX_DATA } from "../../constants/signUp";
import { setUserData } from "../../redux/slice/signUpSlice.js";

const SortBox = ({
  qualification,
  introduce,
  value,
  isChecked,
  handleCheckboxChange,
}) => {
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
};

const JoinType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkedValues, setCheckedValues] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const handleCheckboxChange = (value) => {
    const newCheckedValues = checkedValues.includes(value) ? [] : [value];
    setCheckedValues(newCheckedValues);
    dispatch(setUserData({ joinType: newCheckedValues[0] }));
  };

  useEffect(() => {
    if (checkedValues.length !== 0) {
      return setButtonState(true);
    }
    return setButtonState(false);
  }, [setButtonState, checkedValues]);

  return (
    <PageArea>
      <PageBox>
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
        <ButtonBox>
          <Button
            type="button"
            className={buttonState ? "open" : "close"}
            disabled={!buttonState}
            onClick={() => navigate("/signUp/idPassword")}
          >
            계속
          </Button>
        </ButtonBox>
      </PageBox>
    </PageArea>
  );
};

export default JoinType;

const PageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageBox = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  @media (max-width: 480px) {
    border: none;
  }
`;

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

const ButtonBox = styled.div`
  width: 80%;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  color: white;
  height: 4rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background: #228be6;
  border-radius: 10px;
  &.close {
    background: #a5d8ff;
  }

  &.open {
    background: #228be6;
  }
`;
