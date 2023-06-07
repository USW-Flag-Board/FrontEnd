import { useEffect, useState } from "react";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";
import ReportsEtcModal from "../components/admin/ReportsEtcModal";
import { AxiosHeaders } from "axios";
const AdminArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AdminBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2rem 0;
`;

const AreaTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  ::after {
    content: "*";
    color: rgb(240, 61, 12);
    margin-left: 0.4rem;
  }
  margin-bottom: 1rem;
`;

const BoardArea = styled.div`
  margin-bottom: 2rem;
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FunctionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 10rem;
`;

const FunctionItem = styled.div`
  display: flex;
`;

const BoardInput = styled.input`
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const BoardButton = styled.button`
  cursor: pointer;
  height: 2rem;
`;

const BoardItmesBox = styled.div`
  border: 1px solid black;
  border-radius: 0.8rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 10rem;
  padding: 1rem;
  margin-right: 2rem;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const BoardItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
`;

const JoinArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const JoinBox = styled.div`
  width: 50%;
  margin-bottom: 1.5rem;
  min-height: 10rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ReportsArea = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const ReportsBox = styled.div`
  width: 30%;
  margin-bottom: 1.5rem;
  min-height: 20rem;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ReportBox = styled.div`
  border: 1px solid black;
  border-radius: 0.8rem;
  width: 100%;
  height: 100%;
  padding: 0.3rem 0.5rem;
`;

const ReportTitle = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

const ReportBoxHeader = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const Box = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 0.5rem;
  :hover {
    color: blue;
  }
`;

const TypeAndId = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Admin = () => {
  const [boardItems, setBoardItems] = useState("");
  const [reportModal, setReportModal] = useState(false);
  const [modalContents, setModalContents] = useState({
    id: "",
    loginId: "",
    detailExplanation: "",
    postId: "",
    reportCategory: "",
    category: "",
  });

  const [reports, setReports] = useState({
    memberReportResponses: [],
    postReportResponses: [],
    replyReportResponses: [],
  });
  const [board, setBoard] = useState({
    create: "",
    update: "",
    delete: "",
  });

  const updateBoard = (e) => {
    const { name, value } = e.target;
    setBoard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEtcModal = (value) => {
    setReportModal(value);
  };

  const addBoard = async () => {
    try {
      const response = await instance.post("/admin/board", {
        boardType: "MAIN",
        name: board.create,
      });
      if (response.status === 200) alert("게시판 생성 완료");
    } catch (error) {
      if (error.response.status === 409)
        alert("이미 같은 게시판이 존재합니다.");
    }
  };
  const putBoard = async () => {
    try {
      await instance.put(`/admin/board/${board.delete}`, {
        boardType: "MAIN",
        name: board.update,
      });
    } catch (error) {
      if (error.response.status === 409)
        alert("이미 같은 게시판이 존재합니다.");
    }
  };
  const deleteBoard = async () => {
    try {
      await instance.delete(`/admin/board/${board.delete}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBoardClick = (item) => {
    setBoard((prev) => ({
      ...prev,
      update: item,
      delete: item,
    }));
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get("/boards?type=MAIN");
        const reportsResponse = await instance.get("/admin/reports");
        const reports = reportsResponse.data.payload;
        setReports({
          memberReportResponses: reports.memberReportResponses,
          postReportResponses: reports.postReportResponses,
          replyReportResponses: reports.replyReportResponses,
        });
        setBoardItems(response.data.payload.boards);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <AdminArea>
      {reportModal && (
        <ReportsEtcModal
          handleEtcModal={handleEtcModal}
          modalContents={modalContents}
        />
      )}
      <AdminBox>
        <AreaTitle>게시판</AreaTitle>
        <BoardArea>
          <BoardItmesBox>
            {Array.isArray(boardItems) &&
              boardItems.map(({ id, boardName }) => (
                <BoardItem
                  key={id}
                  onClick={() => {
                    handleBoardClick(boardName);
                  }}
                >
                  {boardName}
                </BoardItem>
              ))}
          </BoardItmesBox>
          <FunctionBox>
            <FunctionItem>
              <BoardInput
                type="text"
                value={board.create}
                name="create"
                onChange={updateBoard}
              />
              <BoardButton onClick={addBoard}>추가</BoardButton>
            </FunctionItem>
            <FunctionItem>
              <BoardInput
                type="text"
                value={board.update}
                name="update"
                onChange={updateBoard}
              />
              <BoardButton onClick={putBoard}>수정</BoardButton>
            </FunctionItem>
            <FunctionItem>
              <BoardInput
                type="text"
                value={board.delete}
                name="delete"
                disabled={true}
                onChange={updateBoard}
              />
              <BoardButton onClick={deleteBoard}>삭제</BoardButton>
            </FunctionItem>
          </FunctionBox>
        </BoardArea>
        <AreaTitle>가입요청</AreaTitle>
        <JoinArea>
          <JoinBox></JoinBox>
        </JoinArea>
        <AreaTitle>신고</AreaTitle>
        <ReportsArea>
          <ReportsBox>
            <ReportTitle>멤버</ReportTitle>
            <ReportBox>
              <ReportBoxHeader>
                <TypeAndId>신고 타입</TypeAndId>
                <TypeAndId>유저 아이디</TypeAndId>
                <TypeAndId>아이디</TypeAndId>
              </ReportBoxHeader>
              {Array.isArray(reports.memberReportResponses) &&
                reports.memberReportResponses.map(
                  ({
                    detailExplanation,
                    id,
                    loginId,
                    reportCategory,
                    reported,
                  }) => (
                    <Box
                      key={id}
                      onClick={() => {
                        setReportModal(true);
                        setModalContents({
                          id: id,
                          loginId: loginId,
                          detailExplanation: detailExplanation,
                          board: "",
                          postId: "",
                          category: "user",
                          reportCategory: reportCategory,
                        });
                      }}
                    >
                      <TypeAndId>{reportCategory}</TypeAndId>
                      <TypeAndId>{loginId}</TypeAndId>
                      <TypeAndId>{reported}</TypeAndId>
                    </Box>
                  )
                )}
            </ReportBox>
          </ReportsBox>
          <ReportsBox>
            <ReportTitle>게시글</ReportTitle>
            <ReportBox>
              <ReportBoxHeader>
                <TypeAndId>신고 타입</TypeAndId>
                <TypeAndId>게시판</TypeAndId>
                <TypeAndId>게시글 아이디</TypeAndId>
              </ReportBoxHeader>
              {Array.isArray(reports.postReportResponses) &&
                reports.postReportResponses.map(
                  ({
                    detailExplanation,
                    board,
                    id,
                    postId,
                    reportCategory,
                    reported,
                  }) => (
                    <Box
                      key={id}
                      onClick={() => {
                        setReportModal(true);
                        setModalContents({
                          id: id,
                          loginId: "",
                          detailExplanation: detailExplanation,
                          postId: postId,
                          category: "post",
                          reportCategory: reportCategory,
                        });
                      }}
                    >
                      <TypeAndId>{reportCategory}</TypeAndId>
                      <TypeAndId>{board}</TypeAndId>
                      <TypeAndId>{postId}</TypeAndId>
                    </Box>
                  )
                )}
            </ReportBox>
          </ReportsBox>
          <ReportsBox>
            <ReportTitle>멤버</ReportTitle>
            <ReportBox>
              <ReportBoxHeader>
                <TypeAndId>신고 타입</TypeAndId>
                <TypeAndId>게시글 아이디</TypeAndId>
                <TypeAndId>댓글 아이디</TypeAndId>
              </ReportBoxHeader>
              {Array.isArray(reports.replyReportResponses) &&
                reports.replyReportResponses.map(
                  ({
                    detailExplanation,
                    id,
                    postId,
                    reportCategory,
                    reported,
                    replyId,
                  }) => (
                    <Box
                      key={id}
                      onClick={() => {
                        setReportModal(true);
                        setModalContents({
                          id: id,
                          loginId: "",
                          detailExplanation: detailExplanation,
                          postId: postId,
                          category: "reply",
                          reportCategory: reportCategory,
                        });
                      }}
                    >
                      <TypeAndId>{reportCategory}</TypeAndId>
                      <TypeAndId>{postId}</TypeAndId>
                      <TypeAndId>{replyId}</TypeAndId>
                    </Box>
                  )
                )}
            </ReportBox>
          </ReportsBox>
        </ReportsArea>
      </AdminBox>
    </AdminArea>
  );
};

export default Admin;
