import styled from "styled-components";

const ActivityCard = ({ title, name, type, semester, status }) => {
  return (
    <Mainbox>
      <TypeAndStatus>
        <Type>{type}</Type>
        <Notice>
          {status === "RECRUIT" && "모집중"}
          {status === "ON" && "활동중"}
          {status === "OFF" && "활동종료"}
        </Notice>
      </TypeAndStatus>
      <Title>{title}</Title>
      <Deadline>
        기간: <span>{semester}</span>
      </Deadline>
      <Name>{name}</Name>
    </Mainbox>
  );
};

const Mainbox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid #dee2e6;
  cursor: pointer;
  padding: 1rem 1rem 1.5rem 1rem;

  @media (max-width: 480px) {
    padding: 0.8rem 1rem 0.8rem 1rem;
  }
`;

const TypeAndStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Notice = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: #f1f3f5;
  color: #212529;
`;

const Type = styled.div`
  font-weight: bold;
  color: #339af0;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Title = styled.div`
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Deadline = styled.div`
  margin: 0.7rem 0;
  font-size: 0.8rem;
  font-weight: 500;
  @media (max-width: 480px) {
    height: 1.5rem;
    font-size: 0.7rem;
    margin: 0.3rem 0;
  }
`;

const Name = styled.div`
  font-size: 0.9rem;
  display: flex;
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export default ActivityCard;
