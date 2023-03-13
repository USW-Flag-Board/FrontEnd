import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFile } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { Footer, SideBar } from "../components";
<<<<<<< HEAD
=======
import axios from "axios";
import { boardAPI } from '../apis/boardAPI'; 
>>>>>>> d210eb112eedf68259918e3ab966b0226e028550

const boardItems = [
    {
        id: 1,
        krName: "자유게시판",
        engName: "",
    },
    {
        id: 2,
        krName: "동아리 이모저모",
        engName: "",
    },
    {
        id: 3,
        krName: "사전게시판",
        engName: "",
    },
    {
        id: 4,
        krName: "정보게시판",
        engName: "",
    },
];

const buttonItems = [
    {
        id: 1,
        faIcon: faImage,
        text: "사진",
    },
    {
        id: 2,
        faIcon: faFile,
        text: "파일",
    },
];

<<<<<<< HEAD
const PostInput = ({
    handlePostSubmit, 
    handleEditSubmit, 
    handleButton, 
    pageTitle,
    title,
    content,
    setTitle,
    setContent,
    board,
    canSubmit,
    handleBoardChange}) => {
=======
const PostInput = ({handlePostSubmit, handleEditSubmit, handleButton, pageTitle}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [image, setImage] = useState({
    //   image_file: "",
    //   priview_URL: "",
    // });

    const [title, setTitle] = useState(""); // 글 제목
    const [content, setContent] = useState(""); // 글 내용
    const [board, setBoard] = useState(""); // 게시판 종류
    const data = {
        userId: 3,
        boardId: 1,
        title: `${title}`,
        content: `${content}`,
        status: "NORMAL",
    };
    const handleBoardChange = (e) => {
        setBoard(e.target.value);
    };

    const canSubmit = useCallback(() => {
        return content !== "" && title !== "" && (board !== "게시판을 선택해주세요" && board !== "");
    }, [content, title, board]);
    
>>>>>>> d210eb112eedf68259918e3ab966b0226e028550
    return(
        <>
            <BoardArea>
                <SideBar
                title="BOARD"
                mainColor="#4B4B4B"
                subColor="#3C3C3C"
                mainWidth="13%"
                subWidth="90%"
                items={boardItems}
                paddingTop="0"
                paddingTopMain="6%"
                borderRadius="0 15px 15px 0"
                />
                <ContentArea>
                    <TitleArea>
                        <TitleBox>{pageTitle}</TitleBox>
                    </TitleArea>
                    <SelectArea>
                        <BoardSelect onChange={handleBoardChange}>
                        <option>게시판을 선택해주세요</option>
                        {boardItems.map(({id, krName}) => (
                            <option key={id} >{krName}</option>
                        ))}
                        </BoardSelect>
                        {canSubmit() ? pageTitle === "글쓰기" ?
                            (<PostButton 
<<<<<<< HEAD
                                onClick={() => {handlePostSubmit()}}
=======
                                onClick={() => dispatch(boardAPI.setWritePostAxios(data))}
>>>>>>> d210eb112eedf68259918e3ab966b0226e028550
                                type="button"
                            >
                                {handleButton}
                            </PostButton>) : 
                            (<PostButton
                                onClick={() => {handleEditSubmit()}}
                                type="button"
                            >
                                {handleButton}
                            </PostButton>) 
                        : ""}
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
                        {buttonItems.map(({id, faIcon, text}) => (
                            <ContentButton key={id}>
                            <FaIcon icon={faIcon}/>
                            <p>{text}</p>
                            </ContentButton>
                        ))}
                        </ContentButtonBox>
                    </ContentInputBox>
                </ContentArea>
            </BoardArea>
            <Footer />
        </>
    )
};

const BoardArea = styled.div`
    height: 88vh;
    display: flex;
`;


const ContentArea = styled.div`
    width: 87%;
    padding: 0 2rem 0 2rem;
`;

const TitleArea = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const TitleBox = styled.h2`
    font-weight: 700;
    height: 100%;
    font-size: 35px;
    display: flex;
    align-items: flex-end;
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

export default PostInput;