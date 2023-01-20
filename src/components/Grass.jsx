import styled from "styled-components";

const Grass = () => {
  return (
    <GrassArea>
      <GrassBox>
        <GrassItem></GrassItem>
        <GrassItem />
        <GrassItem />
      </GrassBox>
      <GrassBox>
        <GrassItem />
        <GrassItem />
        <GrassItem />
      </GrassBox>
    </GrassArea>
  );
};

const GrassArea = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
`;

const GrassBox = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
`;

const GrassItem = styled.div`
  width: 46%;
  margin: 0px 5px;
  border: 1px solid #9a9a9a;
  border-radius: 8px;
`;

export default Grass;
