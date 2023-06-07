import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";

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
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const TitleBox = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 1.5rem 2rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 480px) {
    height: 2.3rem;
    font-size: 0.4rem;
  }
`;

const Button = styled.button`
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 30%;
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

const CheckMembersBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const ContentBox = styled.div`
  width: 100%;
  min-height: 13rem;
  border: 1px solid #8e8e8e;
  border-radius: 0.3rem;
  padding: 1rem 0;
  :nth-child(2) {
    height: 30%;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  resize: none;
  overflow-y: auto;
  /* 스크롤바 전체 */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* 스크롤바의 슬라이더 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #555;
  }

  /* 스크롤바의 트랙 */
  ::-webkit-scrollbar-track {
    border: 1px solid #8e8e8e;
    background-color: white;
    border-radius: 10px;
  }
`;

const MembersTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ReportsEtcModal = ({ handleEtcModal, modalContents }) => {
  const navigate = useNavigate();
  const { id, loginId, postId, reportCategory, category, detailExplanation } =
    modalContents;

  const handelReport = async (method, id) => {
    try {
      if (method === "post") {
        const response = await instance.delete(`/admin/reports/handle/${id}`);
        if (response.status === 200) handleEtcModal(false);
      } else {
        const response = await instance.delete(`/admin/reports/${id}`);
        if (response.status === 200) handleEtcModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalArea>
      <ModalBox>
        <TitleBox>
          <Title>신고 보기</Title>
        </TitleBox>
        {reportCategory === "기타" && (
          <CheckMembersBox>
            <MembersTitle>참여자</MembersTitle>
            <ContentBox>{detailExplanation}</ContentBox>
          </CheckMembersBox>
        )}
        <ButtonBox>
          {reportCategory === "기타" && <div></div>}
          {category === "user" && (
            <Button
              onClick={() => {
                navigate(`/userInfo/${loginId}`);
                handleEtcModal(false);
              }}
            >
              해당 유저 보기
            </Button>
          )}
          {category === "post" && (
            <Button
              onClick={() => {
                navigate(`/board/post/${postId}`);
                handleEtcModal(false);
              }}
            >
              해당 게시글 보기
            </Button>
          )}
          {category === "reply" && (
            <Button
              onClick={() => {
                navigate(`/board/post/${postId}`);
                handleEtcModal(false);
              }}
            >
              해당 댓글 보기
            </Button>
          )}
          <Button onClick={() => handelReport("post", id)}>
            신고 처리하기
          </Button>
          <Button onClick={() => handelReport("delete", id)}>
            신고 삭제하기
          </Button>
          <Button onClick={() => handleEtcModal(false)}>닫기</Button>
        </ButtonBox>
      </ModalBox>
    </ModalArea>
  );
};

export default ReportsEtcModal;
