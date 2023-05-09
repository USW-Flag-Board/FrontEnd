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
  height: 10%;
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
`;

const Title = styled.div`
  height: 40%;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Deadline = styled.div`
  height: 20%;
  margin: 0.7rem 0;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Name = styled.div`
  width: 100%;
  font-size: 0.9rem;
  display: flex;
`;

export default ActivityCard;
