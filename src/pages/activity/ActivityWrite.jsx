import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { Header } from "../../components";

const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const ContentHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ::after {
    content: "*";
    color: red;
    margin-left: 0.5rem;
  }
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const TitleInputBox = styled.div`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.input`
  width: 40%;
  height: 100%;
  padding: 0 0.6rem;
  border: 1px solid #ced4da;
`;

const InfoBox = styled.ul`
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  .github {
    width: 100%;
  }
`;

const InfoItem = styled.li`
  width: 48%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  gap: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const InfoTitle = styled.div`
  color: #339af0;
`;

const InfoContent = styled.div`
  font-size: 0.8rem;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ContentDetail = styled.div`
  margin: 2rem 0;
`;

const DetailTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const DescriptionBox = styled.div`
  border: 1px solid #ced4da;
  padding: 1rem;
  min-height: 20rem;
`;

const ActivityWrite = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <ContentArea>
        <ContentBox>
          <ContentHeader>
            <Label for="title">제목</Label>
            <TitleInputBox>
              <Title id="title" placeholder="제목을 입력하세요" />
            </TitleInputBox>
          </ContentHeader>
          <InfoBox>
            <InfoItem>
              <InfoTitle>모집 구분</InfoTitle>
              <InfoContent />
            </InfoItem>
            <InfoItem>
              <InfoTitle>진행 방식</InfoTitle>
              <InfoContent />
            </InfoItem>
            {/* {type === "PROJECT" ? (
              <InfoItem className="github">
                <InfoTitle>깃헙 주소</InfoTitle>
                <InfoContent />
              </InfoItem>
            ) : (
              <InfoItem>
                <InfoTitle>책 사용</InfoTitle>
                <InfoContent />
              </InfoItem>
            )} */}
            {/* {bookUsage === "USE" && (
              <InfoItem>
                <InfoTitle>책 이름</InfoTitle>
                <InfoContent/>
              </InfoItem>
            )} */}
          </InfoBox>
          <ContentDetail>
            <DetailTitle>활동 내용</DetailTitle>
            {/* <DescriptionBox>{description}</DescriptionBox> */}
          </ContentDetail>
        </ContentBox>
      </ContentArea>
    </div>
  );
};

export default ActivityWrite;
