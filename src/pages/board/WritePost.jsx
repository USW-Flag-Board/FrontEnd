import { useState } from "react";
import styled from "styled-components";
import boardData from "../../constants/board";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
    const header = true;
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [board, setBoard] = useState("");

    const data = {
        boardName: board,
        content: content,
        title: title,
    };

    const handleBoardChange = (e) => {
        setBoard(e.target.value);
    };

    return(
        <>  
            {header && <Header/>}
            <BoardArea>
                <ContentArea>
                    <ContentLabel>게시판</ContentLabel>
                    <BoardSelect onChange={handleBoardChange}>
                        <option>게시판을 선택해주세요</option>
                        {boardData.BOARD_NAMES.map(({id, krName}) => (
                        <option key={id} value={krName}>{krName}</option>
                        ))}
                    </BoardSelect>
                    <ContentLabel>제목</ContentLabel>
                    <TitleInputBox>
                        <TitleInput
                        type="text"
                        value={title}
                        placeholder="제목을 입력해주세요."
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}/>
                    </TitleInputBox>
                    <ContentLabel>내용</ContentLabel>
                    <ContentInputBox>
                        <ContentInput
                            value={content}
                            placeholder="내용을 입력해주세요."
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                        />
                    </ContentInputBox>
                    <ContentButtonBox>
                        <ContentButton>취소</ContentButton>
                        <ContentButton>등록</ContentButton>
                    </ContentButtonBox>
                </ContentArea>
            </BoardArea>
        </>
    )
};

const BoardArea = styled.div`
    padding: 2rem 8rem;
`;

const ContentArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ContentLabel = styled.label`
    font-weight: bold;
    font-size: 0.8rem;
    ::after{
        content: "*";
        color: rgb(240, 61, 12);
        margin-left: 0.125rem;
    }
    margin-bottom: 1rem;
`;


const BoardSelect = styled.select`
    width: 20%;
    height: 2.5rem;
    border: 1px solid #ced4da;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 0 1rem;
    font-weight: 600;
    margin-bottom: 2rem;
    &:hover{
        border: 2px solid #339af0;
    }
`;


const TitleInputBox = styled.div`
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
    &:hover{
        border: 2px solid #339af0;
    }
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
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    border: 1px solid #ced4da;
    border-radius: 7px;
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    &:hover{
        border: 2px solid #339af0;
    }
`;

const ContentButtonBox = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    gap: 1rem;
`;

const ContentButton = styled.button`
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
    width: 6rem;
    height: 100%;
    border: none;
    padding: 0.3rem 0 0 0;
    &:nth-child(2){
        background-color: #339af0;
        color: white;
    }
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 24rem;
    resize: none;
    caret-color: black;
    border: none;
    &:focus {
        outline: none;
    }
    ::placeholder{
        font-size: 1rem;
    }
`;

export default WritePost;
