import styled from "styled-components";

const PageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 2rem;
`;

const PageBox = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const NotFound = () => {
  return (
    <PageArea>
      <PageBox>404 Not Found</PageBox>
      <PageBox>페이지가 존재하지 않습니다.</PageBox>
    </PageArea>
  );
};

export default NotFound;
