import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ListThem from "../component/ListThem";
import SideBar from "../component/SideBar";
import LikeButton from "../component/LikeButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const BoardArea = styled("div")({
  height: "82.5vh",
});

const TitleArea = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  height: "10%",
  display: "flex",
  padding: "0 2rem 1rem 2rem",
  alignItems: "flex-end",
  justifyContent: "space-between",
});

const TitleBox = styled("h2")({
  fontWeight: "700",
  height: "100%",
  fontSize: "35px",
  display: "flex",
  alignItems: "flex-end",
  paddingLeft: "14%",
});

const ContentArea = styled("div")({
  width: "100%",
  height: "90%",
  display: "flex",
});

const PostArea = styled("div")({
  width: "87%",
  height: "100%",
  padding: "0 2rem 0 2rem",
  boxSizing: "border-box",
});

const PostBox = styled("div")({
  height: "70%",
});

const PostContentBox = styled("div")({
  marginTop: "25px",
  width: "100%",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "28px",
});

const PostContentSort = styled("div")({
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "60px",
  marginRight: "60px",
});

const PostHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const PostHeaderLeftArea = styled("div")({});

const PostHeaderRightArea = styled("div")({});

const PostModify = styled("div")({
  display: "inline",
});

const PostDelete = styled("div")({
  marginLeft: "10px",
  display: "inline",
});

const PostAuthor = styled("div")({
  display: "inline-block",
  marginRight: "20px",
});

const PostTime = styled("div")({
  display: "inline-block",
  color: "rgba(255, 255, 255, 0.5)",
});

const PostContentTitle = styled("h2")({
  fontSize: "20px",
  marginTop: "30px",
  marginBottom: "10px",
});

const PostContent = styled("div")({});

const PostViews = styled("div")({
  marginTop: "20px",
  fontSize: "10px",
  display: "inline-block",
});

const PostLike = styled("div")({
  marginTop: "20px",
  marginLeft: "15px",
  fontSize: "10px",
  display: "inline-block",
});

const ReplyButton = styled(TextField)({
  marginTop: "25px",
  width: "100%",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "28px",
  input: {
    color: "white",
    padding: "20px",
    paddingLeft: "60px",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: "28px",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
});

const ReplyArea = styled(Box)({
  marginTop: "25px",
  width: "100%",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "28px",
});

const ReplyContent = styled("div")({
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "60px",
  marginRight: "60px",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B4B4B",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const DetailWritePage = () => {
  const itemContents = [
    "공지",
    "자유게시판 공지입니다.",
    "문희조",
    "2022.08.03",
    "1234",
    "123",
  ];
  const boardItem = ["스터디", "프로젝트"];

  return (
    <ThemeProvider theme={theme}>
      <BoardArea>
        <TitleArea>
          <TitleBox>알고리즘(코테반)</TitleBox>
        </TitleArea>
        <ContentArea>
          <SideBar
            title="ACTIVITY"
            mainColor="#4B4B4B"
            subColor="#3C3C3C"
            mainWidth="13%"
            subWidth="90%"
            items={boardItem}
            paddingTop="0"
            borderRadius="0 15px 15px 0"
          />
          <PostArea>
            <PostBox>
              <ListThem themList={itemContents} />
              <PostContentBox>
                <PostContentSort>
                  <PostHeader style={{}}>
                    <PostHeaderLeftArea>
                      <PostAuthor>글쓴이 {itemContents[2]}</PostAuthor>
                      <PostTime>{itemContents[3]} 22:07</PostTime>
                    </PostHeaderLeftArea>
                    <PostHeaderRightArea>
                      <PostModify>수정하기</PostModify>
                      <PostDelete>삭제하기</PostDelete>
                    </PostHeaderRightArea>
                  </PostHeader>
                  <PostContentTitle>{itemContents[1]}</PostContentTitle>
                  <PostContent>
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                  </PostContent>
                  <PostViews>view {itemContents[4]}</PostViews>
                  <PostLike>
                    <LikeButton />
                    {itemContents[5]}
                  </PostLike>
                </PostContentSort>
              </PostContentBox>
              <ReplyButton
                InputProps={{
                  disableUnderline: true,
                  endAdornment: <Button sx={{ color: "white" }}>등록</Button>,
                }}
                variant="filled"
                fullWidth
                defaultValue="댓글을 입력하세요."
                autoFocus
              ></ReplyButton>
              <ReplyArea>
                <ReplyContent>여기에 댓글 컴포넌트 넣을 예정</ReplyContent>
              </ReplyArea>
            </PostBox>
          </PostArea>
        </ContentArea>
      </BoardArea>
    </ThemeProvider>
  );
};

export default DetailWritePage;
