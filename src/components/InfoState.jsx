import styled from "styled-components";

function InfoState({message}) {
  return <InfoStatePosition>{message}</InfoStatePosition>;
}

const InfoStatePosition = styled.div`
  color: rgba(163, 163, 163, 0.8);
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: end;
  height: 11px;
  margin-bottom: 20px;
`;

export default InfoState;
