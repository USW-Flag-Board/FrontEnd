import styled from "styled-components";

const ActivityCard = ({ title, name, type, semester }) => {
  return (
    <Mainbox type={type}>
      <Type type={type}>{type}</Type>
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
  cursor: pointer;
  padding: 1rem 1rem 1.5rem 1rem;
  background-color: ${(props) => {
    switch (props.type) {
      case "PROJECT":
        return "#e7f5ff";
      case "STUDY":
        return "#fff9db";
      case "MENTORING":
        return "#f4fce3";
      default:
        break;
    }
  }};
  &:hover {
    border: 1px solid;
    border-color: ${(props) => {
      switch (props.type) {
        case "PROJECT":
          return "#a5d8ff";
        case "STUDY":
          return "#ffec99";
        case "MENTORING":
          return "#d8f5a2";
        default:
          break;
      }
    }};
  }
`;

const Type = styled.div`
  font-weight: bold;
  color: ${(props) => {
    switch (props.type) {
      case "PROJECT":
        return "#4dabf7";
      case "STUDY":
        return "#fcc419";
      case "MENTORING":
        return "#66a80f";
      default:
        break;
    }
  }};
  @media (max-width: 480px) {
    font-size: 0.5rem;
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
    font-size: 0.8rem;
  }
`;

const Deadline = styled.div`
  margin: 0.7rem 0;
  font-size: 0.8rem;
  font-weight: 500;
  @media (max-width: 480px) {
    height: 1.5rem;
    font-size: 0.3rem;
    margin: 0.3rem 0;
  }
`;

const Name = styled.div`
  font-size: 0.9rem;
  display: flex;
  @media (max-width: 480px) {
    font-size: 0.3rem;
  }
`;

export default ActivityCard;
