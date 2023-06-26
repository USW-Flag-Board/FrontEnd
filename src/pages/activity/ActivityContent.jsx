import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import {
  ApplyCheckModal,
  Header,
  ReaderButtonBox,
  SelectedCheckModal,
  WriterButtonBox,
} from "../../components";
import { SessionStorage } from "../../utils/browserStorage";

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
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const WriterAndTime = styled.div`
  display: flex;
  gap: 1rem;
`;

const Writer = styled.div`
  font-weight: 500;
`;

const CreatedAt = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  padding-top: 0.1rem;
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

const GithubLink = styled.a`
  text-decoration: none;
  color: black;
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
  width: 100%;
  min-height: 19rem;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  .viewer {
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const ViewerBox = styled.div`
  width: 100%;
`;

const ActivityContent = () => {
  const writerName = SessionStorage.get("name");
  const { activityId } = useParams();
  const [apply, setApply] = useState(false);
  const [openModal, setOpenModal] = useState({
    applyCheck: false,
    selectedCheck: false,
  });
  const [activityData, setActivityData] = useState({});
  const {
    type,
    id,
    leader,
    name,
    status,
    description,
    githubURL,
    proceed,
    bookUsage,
    bookName,
    createdAt,
  } = activityData;

  const updateStatus = (value) => {
    setActivityData((prev) => ({
      ...prev,
      status: value,
    }));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(`/activities/${activityId}`);
        if (SessionStorage.get("User_id")) {
          const applyCheck = await instance.post(
            `/activities/${activityId}/check`
          );
          if (applyCheck.data.payload.exist === true) setApply(true);
          else setApply(false);
        }
        setActivityData(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [activityId]);

  const handleApplyClick = async () => {
    try {
      if (apply) {
        const response = await instance.delete(`/activities/${id}/apply`);
        if (response.status === 200) setApply(false);
      } else {
        const response = await instance.post(`/activities/${id}/apply`);
        if (response.status === 201) setApply(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = (name, value) => {
    setOpenModal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {openModal.applyCheck && (
        <ApplyCheckModal
          handleModal={handleModal}
          activityId={activityId}
          updateStatus={updateStatus}
        />
      )}
      {openModal.selectedCheck && (
        <SelectedCheckModal handleModal={handleModal} activityId={activityId} />
      )}
      <Header />
      <ContentArea>
        <ContentBox>
          <ContentHeader>
            <Title>{name}</Title>
            <WriterAndTime>
              <Writer>{leader}</Writer>
              <CreatedAt>
                {Array.isArray(createdAt) && createdAt.slice(0, 3).join(".")}
              </CreatedAt>
            </WriterAndTime>
          </ContentHeader>
          <InfoBox>
            <InfoItem>
              <InfoTitle>모집 구분</InfoTitle>
              <InfoContent>
                {type === "STUDY" && "스터디"}
                {type === "PROJECT" && "프로젝트"}
                {type === "MENTORING" && "멘토링"}
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoTitle>모집 상태</InfoTitle>
              <InfoContent>
                {status === "RECRUIT" && "모집중"}
                {status === "ON" && "활동중"}
                {status === "OFF" && "활동종료"}
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <InfoTitle>진행 방식</InfoTitle>
              <InfoContent>
                {proceed === "ONLINE" && "온라인"}
                {proceed === "OFFLINE" && "오프라인"}
                {proceed === "BOTH" && "온라인/오프라인 혼합"}
              </InfoContent>
            </InfoItem>
            {type === "PROJECT" ? (
              <InfoItem className="github">
                <InfoTitle>깃헙 주소</InfoTitle>
                <InfoContent>
                  <GithubLink href={githubURL} target="_blank">
                    {githubURL}
                  </GithubLink>
                </InfoContent>
              </InfoItem>
            ) : (
              <InfoItem>
                <InfoTitle>책 사용</InfoTitle>
                <InfoContent>
                  {bookUsage === "USE" && "사용"}
                  {bookUsage === "NOT_USE" && "미사용"}
                </InfoContent>
              </InfoItem>
            )}
            {bookUsage === "USE" && (
              <InfoItem>
                <InfoTitle>책 이름</InfoTitle>
                <InfoContent>{bookName}</InfoContent>
              </InfoItem>
            )}
          </InfoBox>
          <ContentDetail>
            <DetailTitle>활동 내용</DetailTitle>
            <DescriptionBox>
              <Content className="viewer">
                <ViewerBox>
                  {description && <Viewer initialValue={description || ""} />}
                </ViewerBox>
              </Content>
            </DescriptionBox>
          </ContentDetail>
          {writerName &&
            writerName !== leader &&
            status === "RECRUIT" &&
            SessionStorage.get("User_id") && (
              <ReaderButtonBox onApply={handleApplyClick} apply={apply} />
            )}
          {writerName && writerName === leader && (
            <WriterButtonBox
              updateStatus={updateStatus}
              status={status}
              id={id}
              handleModal={handleModal}
            />
          )}
        </ContentBox>
      </ContentArea>
    </div>
  );
};

export default ActivityContent;
