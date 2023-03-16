import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostInput from '../../components/PostInput';
import boardAPI from '../../apis/boardAPI';

const WritePost = ({setHeader}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(""); // 글 제목
  const [content, setContent] = useState(""); // 글 내용
  const [board, setBoard] = useState(""); // 게시판 종류

  const handleBoardChange = (e) => {
      setBoard(e.target.value);
  };

  const canSubmit = useCallback(() => {
      return content !== "" && title !== "" && (board !== "게시판을 선택해주세요" && board !== "");
  }, [content, title, board]);

  useEffect(() => {
    setHeader(true);
  },[setHeader]);
  
  return (
    <PostInput
      handleButton={"등록하기"}
      pageTitle={"글쓰기"}
      title={title}
      content={content}
      setTitle={setTitle}
      setContent={setContent}
      board={board}
      canSubmit={canSubmit}
      handleBoardChange={handleBoardChange}/>
  );
};

export default WritePost;
