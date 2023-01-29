import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add } from "../features/toDos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFile } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import { Footer, SideBar } from "../components/";
import axios from 'axios';

const boardItems = [
  "자유게시판",
  "동아리 이모저모",
  "사전게시판",
  "정보게시판",
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

const WritePost = () => {
  const navigate = useNavigate();
  // const [image, setImage] = useState({
  //   image_file: "",
  //   priview_URL: "",
  // });
  const dispatch = useDispatch();
  const [title, setTitle] = useState(""); // 글 제목
  const [content, setContent] = useState(""); // 글 내용
  const [board, setBoard] = useState(""); // 게시판 종류
  
  const todayTime = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let todayYear = now.getFullYear(); // 연
    let todayMonth = now.getMonth() + 1 // 월
    let todayDate = now.getDate(); // 일
    let hours = now.getHours(); // 시간
    let minutes = now.getMinutes(); // 분

    if(("" + todayMonth).length === 1){
      todayMonth = "0" + todayMonth;
    }
    if(("" + todayDate).length === 1){
      todayDate = "0" + todayDate;
    }
    if(("" + hours).length === 1){
      hours = "0" + hours;
    }
    if(("" + minutes).length === 1){
      minutes = "0" + minutes;
    }
    return(
        `${todayYear}.${todayMonth}.${todayDate}.${hours}.${minutes}`
      )
    }

  const handleBoardChange = (e) => {
    setBoard(e.target.value);
  }
  
  const canSubmit = useCallback(() => {
    return content !== "" && title !== "";
  }, [title, content]);
  
  // activityType: "PROJECT",
  // bookName: "원피스",
  // bookUsage: "미사용",
  // description: "어준혁",
  // githubLink: "어준혁",
  // name: "어준혁",
  // proceed: "오프라인"    
  const data = {
    board: `${board}`,
    title: `${title}`,
    content: `${content}`,
  }

  const handleSubmit = () => {
      axios.post("http://3.39.36.239:8080/api/posts", 
          {
            data: data,
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem("UserToken")}`,
              'Content-Type': 'application/json'
            },
          })
        .then((response) => {
          window.alert("등록이 완료되었습니다.");
          console.log("서버에서 내려온 값:", response);
        })
        // navigate("/board");
        .catch((error)=>{
          // 에러 핸들링
          console.log(error);
        })
      };

  // const onSubmit = (e) => {
  //   dispatch(add())
  // }
  
  return (
    <>
      <BoardArea>
        <TitleArea>
          <TitleBox>글쓰기</TitleBox>
        </TitleArea>
        <ContentArea>
          <SideBar
            title="BOARD"
            mainColor="#4B4B4B"
            subColor="#3C3C3C"
            mainWidth="13%"
            subWidth="90%"
            items={boardItems}
            paddingTop="0"
            borderRadius="0 15px 15px 0"
          />
          <ListArea>
            <SelectArea>
              <BoardSelect onChange={handleBoardChange}>
                <option>게시판을 선택해주세요</option>
                {boardItems.map((item) => (
                  <option key={item} >{item}</option>
                ))}
              </BoardSelect>
              {canSubmit() ?
                <button
                  onClick={() => {
                    handleSubmit()
                    // onSubmit()
                  }}
                  type="button"
                  style={{
                    backgroundColor: "white",
                    height: "2rem",
                    color: "black",
                    fontWeight: "700",
                    borderRadius: "5px",
                    width: "6rem",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  등록
                </button> :""}
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
                {buttonItems.map((item) => (
                  <ContentButton key={item.id}>
                    <FontAwesomeIcon
                      icon={item.faIcon}
                      style={{width: "100%", height: "50%"}}
                    />
                    <p>{item.text}</p>
                  </ContentButton>
                ))}
              </ContentButtonBox>
            </ContentInputBox>
          </ListArea>
        </ContentArea>
      </BoardArea>
      <Footer/>
    </>
  );
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
  width: 100%;
  height: 90%;
  display: flex;
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

export default WritePost;
