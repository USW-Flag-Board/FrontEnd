import { useEffect, useState, useCallback } from 'react';
import PostInput from "../../components/PostInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditPost = ({setHeader}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleEditSubmit = () => {
        dispatch();
        navigate("/board");
    }

    return(
        <PostInput 
            handleEditSubmit={handleEditSubmit}
            handleButton={"수정하기"}
            pageTitle={"글 수정"}
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            board={board}
            canSubmit={canSubmit}
            handleBoardChange={handleBoardChange}/>
    )
};

export default EditPost;