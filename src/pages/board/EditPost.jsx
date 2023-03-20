import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import boardAPI from '../../apis/boardAPI'; 
import boardData from "../../constants/board";
import buttonData from "../../constants/button";
import { Footer, SideBar, Header } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
    const header = true;
    const postData = useSelector((state) => state.toDo.getPostData);
    const navigate = useNavigate();
    const [title, setTitle] = useState(postData.title);
    const [content, setContent] = useState(postData.content);
    const [board, setBoard] = useState(postData.board);
    console.log(postData)
    
    const editData = {
        boardId: board,
        content: `${content}`,
        fileUrl: "",
        imgUrl: "",
        status: "NORMAL",
        title: `${title}`,
        userId: 3,
        id: postData.id,
    };

    const handleBoardChange = (e) => {
        setBoard(e.target.value);
    };

    const canSubmit = useCallback(() => {
        return content !== "" && title !== "" && (board !== "게시판을 선택해주세요" && board !== "" && board !==undefined);
    }, [content, title, board]);
    
    
    return(
        <>
            {header && <Header/>}
            <BoardArea>
                <TitleArea>
                    <TitleBox>글 수정</TitleBox>
                </TitleArea>
                <ContentArea>
                    <SideBar
                    title="BOARD"
                    mainColor="#4B4B4B"
                    subColor="#3C3C3C"
                    mainWidth="13%"
                    subWidth="90%"
                    items={boardData.BOARD_NAMES}
                    paddingTop="0"
                    borderRadius="0 15px 15px 0"
                    />
                    <ListArea>
                    <SelectArea>
                        <BoardSelect onChange={handleBoardChange}>
                            <option>게시판을 선택해주세요</option>
                            {boardData.BOARD_NAMES.map(({id, krName}) => (
                            <option key={id} value={id}>{krName}</option>
                            ))}
                        </BoardSelect>
                        {canSubmit() ?
                        <PostButton
                            onClick={() => {boardAPI.setEditedPostAxios(editData); navigate("/board");}}
                            type="button"
                        >
                            수정하기
                        </PostButton> : ""}
                    </SelectArea>
                    <TitleInputBox>
                        <TitleInput
                        type="text"
                        value={title}
                        placeholder="제목을 입력해주세요."
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        />
                    </TitleInputBox>
                    <ContentInputBox>
                        <ContentInput
                            value={content}
                            placeholder="내용을 입력해주세요."
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                        />
                        <ContentButtonBox>
                        {buttonData.BUTTON_ITEMS.map(({id, faIcon, text}) => (
                            <ContentButton key={id}>
                            <FaIcon icon={faIcon}/>
                            <p>{text}</p>
                            </ContentButton>
                        ))}
                        </ContentButtonBox>
                    </ContentInputBox>
                    </ListArea>
                </ContentArea>
            </BoardArea>
            <Footer />
        </>
    )
};

const BoardArea = styled.div`
    height: 88vh;
`;

const TitleArea = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    display: flex;
    padding: 0 2rem 1rem 2rem;
    align-items: flex-end;
    justify-content: space-between;
`;

const TitleBox = styled.h2`
    font-weight: 700;
    height: 100%;
    font-size: 35px;
    display: flex;
    align-items: flex-end;
    padding-left: 14%;
`;

const ContentArea = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
`;

const PostButton = styled.button`
    background-color: white;
    height: 2rem;
    color: black;
    font-weight: 700;
    border-radius: 5px;
    width: 6rem;
    cursor: pointer;
    border: none;
`;

const ListArea = styled.form`
    width: 87%;
    height: 100%;
    padding: 0 2rem 0 2rem;
    box-sizing: border-box;
`;

const BoardSelect = styled.select`
    width: 20%;
    height: 80%;
    border: 1px solid white;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 0 1rem;
    font-weight: 600;
    background-color: #2c2c2c;
    color: white;
`;

const SelectArea = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    margin-top: 0.6rem;
    align-items: flex-end;
    padding-bottom: 0.8rem;
`;

const TitleInputBox = styled.div`
    width: 100%;
    height: 8%;
    border: 1px solid white;
    border-radius: 7px;
    margin: 0.2rem 0 1.3rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 1rem;
`;

const TitleInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    background-color: #2c2c2c;
    border: none;
    font-size: 1rem;
    ::placeholder {
        color: white;
    }
    color: white;
    caret-color: white;
    &:focus {
        outline: none;
    }
`;

const ContentInputBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    border: 1px solid white;
    border-radius: 7px;
    padding: 1rem 1rem;
`;

const ContentButtonBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ContentButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 0 4px 4px 0;
    width: 3.5rem;
    height: 70%;
    border: none;
    box-sizing: border-box;
    padding: 0.3rem 0 0 0;
    &:first-of-type {
        border-radius: 4px 0 0 4px;
    }
`;

const ContentInput = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    resize: none;
    background-color: #2c2c2c;
    border: none;
    font-size: 1rem;
    ::placeholder {
        color: white;
    }
    color: white;
    caret-color: white;
    &:focus {
        outline: none;
    }
`;

const FaIcon = styled(FontAwesomeIcon)`
    width: 100%; 
    height: 50%;
`;

export default EditPost;