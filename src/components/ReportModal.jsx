import styled from "styled-components";
import { REPORT_LIST } from "../constants/user";
import { useState } from "react";
import instance from "../apis/AxiosInterceptorSetup";

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  width: 500px;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const TitleBox = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
`;

const InfoArea = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-bottom: 1px solid #dcdcdc;
`;

const InfoBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const InfoTitle = styled.div`
  font-weight: bold;
  color: #98a8b9;
`;

const InfoContent = styled.div`
  font-size: 0.8rem;
`;

const ListBox = styled.div`
  padding: 0 3rem;
  .reason-title {
    padding: 0;
    margin: 1rem 0;
    font-size: 1rem;
  }
  margin-bottom: 2rem;
`;

const ListItemsBox = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  border-radius: 0.3rem;
`;

const ListItem = styled.li`
  display: flex;
  height: 3rem;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid #dcdcdc;
  :nth-child(6) {
    border: none;
  }
`;

const Radio = styled.input`
  cursor: pointer;
`;

const EtcInputBox = styled.div`
  padding: 0.5rem 1rem;
`;

const EtcInput = styled.textarea`
  outline: none;
  resize: none;
  width: 100%;
  min-height: 5rem;
  border: 1px solid #dcdcdc;
  padding: 1rem;
  border-radius: 0.3rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 3rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  gap: 1rem;
  @media screen and (max-width: 480px) {
    height: 2.3rem;
    font-size: 0.4rem;
  }
`;

const Button = styled.button`
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 20%;
  height: 100%;
  border: none;
  padding: 0.3rem 0.2rem;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 25%;
  }
`;

const ReportModal = ({
  handleModalOpen,
  loginId,
  nickname,
  content,
  id,
  type,
}) => {
  const [reportReason, setReportReason] = useState("");
  const [explanation, setExplanation] = useState("");
  const handleReport = async () => {
    try {
      if (type === "POST") {
        await instance.post("/reports/post", {
          detailExplanation: explanation,
          target: id,
          reportCategory: reportReason,
          reportType: "POST",
        });
      } else if (type === "REPLY") {
        await instance.post("/reports/reply", {
          detailExplanation: explanation,
          target: id,
          reportCategory: reportReason,
          reportType: "REPLY",
        });
      } else {
        await instance.post("/reports/member", {
          detailExplanation: explanation,
          loginId: loginId,
          reportCategory: reportReason,
        });
      }
      alert("신고가 완료되었습니다.");
      handleModalOpen(false);
    } catch (error) {
      if (error.response.status === 409) alert("이미 신고한 대상입니다.");
    }
  };
  const handleListItemClick = (reason) => {
    setReportReason(reason);
  };
  return (
    <ModalArea>
      <ModalBox>
        <TitleBox>
          <Title>신고하기</Title>
        </TitleBox>
        <InfoArea>
          <InfoBox>
            <InfoTitle>유저</InfoTitle>
            <InfoContent>{nickname}</InfoContent>
          </InfoBox>
          {type === "USER" || type === "REPLY" ? (
            ""
          ) : (
            <InfoBox>
              <InfoTitle>내용</InfoTitle>
              <InfoContent>{content}</InfoContent>
            </InfoBox>
          )}
        </InfoArea>
        <ListBox>
          <Title className="reason-title">사유선택</Title>
          <ListItemsBox>
            {REPORT_LIST.map(({ id, reportCategory }) => (
              <ListItem key={id}>
                <Radio
                  type="radio"
                  name="reason"
                  id={id}
                  onClick={() => handleListItemClick(reportCategory)}
                />
                <label>{reportCategory}</label>
              </ListItem>
            ))}
            {reportReason === "기타" && (
              <EtcInputBox>
                <EtcInput
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                />
              </EtcInputBox>
            )}
          </ListItemsBox>
        </ListBox>
        <ButtonBox>
          <Button onClick={() => handleModalOpen(false)}>취소하기</Button>
          <Button onClick={handleReport}>신고하기</Button>
        </ButtonBox>
      </ModalBox>
    </ModalArea>
  );
};

export default ReportModal;
