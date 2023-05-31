import styled from "styled-components";

const ButtonBox = styled.div`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  .onApply {
    color: white;
    background-color: #339af0;
  }
  .offApply {
    background-color: #cd5e5e;
    color: black;
  }
`;

const Button = styled.button`
  cursor: pointer;
  height: 80%;
  border: none;
  border-radius: 0.3rem;
`;

const ReaderButtonBox = ({ apply, onApply }) => {
  return (
    <ButtonBox>
      <Button
        className={apply ? "offApply" : "onApply"}
        onClick={() => onApply(apply)}
      >
        신청하기
      </Button>
    </ButtonBox>
  );
};

export default ReaderButtonBox;
