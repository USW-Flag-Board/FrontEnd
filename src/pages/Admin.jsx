import { useEffect, useState } from "react";
import styled from "styled-components";
import instance from "../apis/AxiosInterceptorSetup";

const Admin = () => {
  const [boardItems, setBoardItems] = useState("");
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
        const response = await instance.get("/boards?type=main");
        setBoardItems(response.data.payload.boards);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <AdminArea>
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
        <JoinArea>
          <AreaTitle>가입요청</AreaTitle>
        </JoinArea>
        <ReportArea>
          <AreaTitle>신고</AreaTitle>
        </ReportArea>
      </AdminBox>
    </AdminArea>
  );
};

export default Admin;

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

const BoardInput = styled.input``;

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
  padding: 1rem;
  margin-right: 2rem;
`;

const BoardItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
`;

const JoinArea = styled.div``;

const ReportArea = styled.div``;
