import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";
import ReportsEtcModal from "../components/admin/ReportsEtcModal";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/toastui-editor.css";

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
  @media screen and (max-width: 480px) {
    width: 90%;
  }
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
    width: 80%;
  }
`;

const BoardButton = styled.button`
  cursor: pointer;
  height: 2rem;
  @media screen and (max-width: 480px) {
    width: 20%;
  }
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
  width: 70%;
  margin-bottom: 1.5rem;
  min-height: 10rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .join-box {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    .join-box {
      font-size: 0.7rem;
      padding: 0 0.4rem;
    }
  }
  .name {
    width: 10%;
  }
  .major {
    width: 20%;
  }
  .email {
    width: 40%;
  }
  .approve-reject {
    width: 30%;
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

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid black;
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

const DataContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const AllDeleteButton = styled.button`
  height: 2rem;
  width: 20%;
  margin-bottom: 1rem;
  @media screen and (max-width: 480px) {
    width: 40%;
  }
`;

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const ContentLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  ::after {
    content: "*";
    color: rgb(240, 61, 12);
    margin-left: 0.125rem;
  }
  margin-bottom: 1rem;
`;

const TitleInputBox = styled.div`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #ced4da;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 99%;
  border: none;
  font-size: 1rem;
  caret-color: black;
  &:focus {
    outline: none;
  }
`;

const ContentInputBox = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const ContentButtonBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const ContentButton = styled.button`
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  width: 6rem;
  height: 100%;
  border: none;
  padding: 0.3rem 0 0 0;
  cursor: pointer;
  &:nth-child(2) {
    background-color: #339af0;
    color: white;
  }
  @media screen and (max-width: 480px) {
    height: 90%;
    font-size: 0.8rem;
  }
`;

const Admin = () => {
  const [boardItems, setBoardItems] = useState("");
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const [reportModal, setReportModal] = useState(false);
  const editorRef = useRef();

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
  const [joinRequests, setJoinRequests] = useState([]);

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

  const handleContent = () => {
    setNoticeContent(editorRef.current?.getInstance().getMarkdown());
  };

  const addBoard = async () => {
    try {
      const response = await instance.post("/admin/boards", {
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
      await instance.put(`/admin/boards/${board.delete}`, {
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
      await instance.delete(`/admin/boards/${board.delete}`);
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

  const handleJoinRequests = async (value, id) => {
    try {
      if (value === "approve") {
        const response = await instance.post(
          `/admin/join-requests/${id}/approval`
        );
        if (response.status === 201)
          setJoinRequests(joinRequests.filter((el) => el.id !== id));
      } else {
        const response = await instance.delete(
          `/admin/join-requests/${id}/rejection`
        );
        if (response.status === 200)
          setJoinRequests(joinRequests.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const allDeleteReports = async () => {
    try {
      if (window.confirm("모든 신고를 삭제하시겠습니까?")) {
        const response = await instance.delete("/admin/reports");
        if (response.status === 200) alert("모든 신고가 삭제되었습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostClick = async () => {
    const data = {
      board: "NOTICE",
      content: noticeContent,
      title: noticeTitle,
    };
    try {
      const reponse = await instance.post("/admin/posts/notice", data);
      if (reponse.status === 200) {
        setNoticeContent("");
        setNoticeTitle("");
        alert("공지사항이 작성되었습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get("/boards?type=MAIN");
        const reportsResponse = await instance.get("/admin/reports");
        const joinResponse = await instance.get("/admin/join-requests");
        const reports = reportsResponse.data.payload;
        setJoinRequests(joinResponse.data.payload);
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
        <AreaTitle>공지사항</AreaTitle>
        <NoticeBox>
          <ContentLabel>제목</ContentLabel>
          <TitleInputBox>
            <TitleInput
              value={noticeTitle}
              onChange={(e) => setNoticeTitle(e.target.value)}
            />
          </TitleInputBox>
          <ContentLabel>내용</ContentLabel>
          <ContentInputBox>
            <Editor
              height="35rem"
              placeholder="내용을 입력해 주세요"
              previewStyle="vertical"
              initialEditType="wysiwyg"
              ref={editorRef}
              onChange={handleContent}
              toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol"],
                ["table", "link"],
              ]}
              useCommandShortcut={false}
              plugins={[colorSyntax]}
            />
          </ContentInputBox>
          <ContentButtonBox>
            <ContentButton
              onClick={() => {
                setNoticeTitle("");
                setNoticeContent("");
              }}
            >
              취소
            </ContentButton>
            <ContentButton onClick={handlePostClick}>등록</ContentButton>
          </ContentButtonBox>
        </NoticeBox>
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
          <JoinBox>
            <BoxHeader>
              <DataContent className="name">이름</DataContent>
              <DataContent className="major">전공</DataContent>
              <DataContent className="email">이메일</DataContent>
              <DataContent className="approve-reject">승인/거절</DataContent>
            </BoxHeader>
            {Array.isArray(joinRequests) &&
              joinRequests.map(({ id, email, major, name }) => (
                <Box key={id} className="join-box">
                  <DataContent className="name">{name}</DataContent>
                  <DataContent className="major">{major}</DataContent>
                  <DataContent className="email">{email}</DataContent>
                  <JoinButtonBox className="approve-reject">
                    <button onClick={() => handleJoinRequests("approve", id)}>
                      승인
                    </button>
                    <button onClick={() => handleJoinRequests("reject", id)}>
                      거절
                    </button>
                  </JoinButtonBox>
                </Box>
              ))}
          </JoinBox>
        </JoinArea>
        <AreaTitle>신고</AreaTitle>
        <AllDeleteButton onClick={allDeleteReports}>
          모든 신고 삭제
        </AllDeleteButton>
        <ReportsArea>
          <ReportsBox>
            <ReportTitle>멤버</ReportTitle>
            <ReportBox>
              <BoxHeader>
                <DataContent>신고 타입</DataContent>
                <DataContent>유저 아이디</DataContent>
                <DataContent>아이디</DataContent>
              </BoxHeader>
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
                      <DataContent>{reportCategory}</DataContent>
                      <DataContent>{loginId}</DataContent>
                      <DataContent>{reported}</DataContent>
                    </Box>
                  )
                )}
            </ReportBox>
          </ReportsBox>
          <ReportsBox>
            <ReportTitle>게시글</ReportTitle>
            <ReportBox>
              <BoxHeader>
                <DataContent>신고 타입</DataContent>
                <DataContent>게시판</DataContent>
                <DataContent>게시글 아이디</DataContent>
              </BoxHeader>
              {Array.isArray(reports.postReportResponses) &&
                reports.postReportResponses.map(
                  ({
                    detailExplanation,
                    board,
                    id,
                    postId,
                    reportCategory,
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
                      <DataContent>{reportCategory}</DataContent>
                      <DataContent>{board}</DataContent>
                      <DataContent>{postId}</DataContent>
                    </Box>
                  )
                )}
            </ReportBox>
          </ReportsBox>
          <ReportsBox>
            <ReportTitle>멤버</ReportTitle>
            <ReportBox>
              <BoxHeader>
                <DataContent>신고 타입</DataContent>
                <DataContent>게시글 아이디</DataContent>
                <DataContent>댓글 아이디</DataContent>
              </BoxHeader>
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
                      <DataContent>{reportCategory}</DataContent>
                      <DataContent>{postId}</DataContent>
                      <DataContent>{replyId}</DataContent>
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
