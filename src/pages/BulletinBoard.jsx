import React from 'react';
import { styled } from '@mui/system';
import SideBar from '../component/SideBar';
import Button from '@mui/material/Button';

const BoardArea = styled('div')({
  height: "82vh",
});

const TitleArea = styled('div')({
  height: "10%",
  display: "flex",
  paddingLeft: "15%",
  alignItems: "center",
});

const TitleBox = styled('h2')({
  fontWeight: "700",
  height: "100%",
  fontSize: "35px",
  display: "flex",
  alignItems: "center",
});

const ContentArea = styled('div')({
  width: "100%",
  height: "90%",
  display: "flex",
});

const ListArea = styled('div')({
  width: "87%",
  height: "100%",
});

const ListBar = styled('div')({
  height: "10%",
  backgroundColor: "black",
});

const BarItemBox = styled('ul')({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
});

const BarItem = styled('li')({
  boxSizing: "border-box",
  width: "10%",
  height: "100%",
  color: "white",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: "10px",
  fontSize: "12px",
  fontWeight: "600",
  "&:nth-of-type(1)": {width: "7%"},
  "&:nth-of-type(2)": {width: "30%"},
});

const ListBox = styled('div')({
  height: "70%",
});

const ListThem = styled('div')({
  height: "12.5%",
  display: "flex",
  flexWrap: "wrap",
});

const ListItem = styled('div')({
  boxSizing: "border-box",
  width: "10%",
  height: "100%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // flexDirection: "column",

  fontSize: "12px",
  fontWeight: "600",
  "&:nth-of-type(1)": {width: "7%", backgroundColor: "white", borderRadius: "15px", color: "red", padding: 0},
  "&:nth-of-type(2)": {width: "30%"},
});

const PageNation = styled('div')({
  height: "10%",
  backgroundColor: "green",
});

const FilterAndSearch = styled('div')({
  height: "10%",
  backgroundColor: "blue",
});

// #313131
const BulletinBoard = () => {
  const boardItem = ["자유게시판", "동아리 이모저모", "사전게시판", "정보게시판"];
  const barItem = ["", "제목", "작성자", "작성일", "조회수", "댓글"];
  const itemContents = ["공지", "자유게시판 공지입니다.", "문희조", "2022.08.03", "1234", "123"];
  return (
    <BoardArea>
      <TitleArea>
        <TitleBox>자유게시판</TitleBox>
        <Button sx={{backgroundColor: "white", 
          height: "3.3vh", 
          color: "black", 
          fontWeight: "700", 
          marginLeft: "75%",
          "&:hover": {backgroundColor: "white"}}}>글쓰기</Button>
      </TitleArea>
      <ContentArea>
        <SideBar title={"BOARD"}
          color={"#2F4842"}
          width={"13%"}
          items={boardItem}/>
        <ListArea>
          <ListBar>
            <BarItemBox>
              {barItem.map((item) => <BarItem key={item}>{item}</BarItem>)}
            </BarItemBox>
          </ListBar>
          <ListBox>
            <ListThem>
              {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </ListThem>
          </ListBox>
          <PageNation></PageNation>
          <FilterAndSearch></FilterAndSearch>
        </ListArea>
      </ContentArea>
    </BoardArea>
  )
}

export default BulletinBoard;
