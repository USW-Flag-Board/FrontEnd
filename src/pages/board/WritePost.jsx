import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import Header from "../../components/Header";

const WritePost = () => {
  const navigate = useNavigate();
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [board, setBoard] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [totalImages, setTotalImages] = useState([]);
  const editorRef = useRef();
  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
  };

  const onUploadImage = async (blob, callback) => {
    const formData = new FormData();
    formData.append("image", blob);
    try {
      const response = await instance.post("/images/post", formData);
      setTotalImages((prev) => [...prev, imgUrl + response.data?.message]);
      callback(imgUrl + response.data.message, "image");
    } catch (error) {
      console.log(error);
    }
  };
  const handleContent = () => {
    setContent(editorRef.current?.getInstance().getMarkdown());
  };

  const handleCancelClick = () => {
    navigate("/board");
  };
  const handlePostClick = async () => {
    const saveImages = totalImages.filter((img) => content?.includes(img));
    const deleteImages = totalImages.filter(
      (img) => !saveImages?.includes(img)
    );
    const data = {
      boardName: selectedBoard,
      content: content,
      title: title,
      deleteImages: deleteImages,
      saveImages: saveImages,
    };
    if (content.trim() !== "" && title.trim() !== "") {
      try {
        const reponse = await instance.post("/posts", data);
        if (reponse.status === 201) {
          alert("게시글이 작성되었습니다.");
          navigate("/board");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const boardResponse = await instance.get("/boards?type=MAIN");
        setBoard(boardResponse.data.payload.boards);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <BoardArea>
        <ContentArea>
          <ContentLabel>게시판</ContentLabel>
          <BoardSelect onChange={handleBoardChange}>
            <option>게시판을 선택해주세요</option>
            {Array.isArray(board) &&
              board.map(({ id, boardName }) => (
                <option key={id} value={boardName}>
                  {boardName}
                </option>
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
              }}
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
                ["table", "image", "link"],
                ["code"],
              ]}
              useCommandShortcut={false}
              plugins={[colorSyntax]}
              hooks={{
                addImageBlobHook: onUploadImage,
              }}
            />
          </ContentInputBox>
          <ContentButtonBox>
            <ContentButton onClick={handleCancelClick}>취소</ContentButton>
            <ContentButton onClick={handlePostClick}>등록</ContentButton>
          </ContentButtonBox>
        </ContentArea>
      </BoardArea>
    </>
  );
};

const BoardArea = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

const ContentArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
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

const BoardSelect = styled.select`
  width: 20%;
  height: 2.5rem;
  margin-bottom: 2rem;
  border: 1px solid #ced4da;
  padding: 0 1rem;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;

const TitleInputBox = styled.div`
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
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
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 2rem;
`;

const ContentButtonBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
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
`;

export default WritePost;
