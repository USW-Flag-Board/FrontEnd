import styled from 'styled-components';

function InfoState(props) {
  return (
      <InfoStatePosition>{props.message}</InfoStatePosition>
  );
}

const InfoStatePosition = styled.div`
  color: white;
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: end;
  height: 12;
`;

export default InfoState;
