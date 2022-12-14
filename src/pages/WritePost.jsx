import React from 'react';
import Footer from '../component/Footer';
import SideBar from '../component/SideBar';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const WritePost = () => {
    const boardItem = ["자유게시판", "동아리 이모저모", "사전게시판", "정보게시판"];

    return (
        <>
            <BoardArea>
                <TitleArea>
                    <TitleBox>글쓰기</TitleBox>
                </TitleArea>
                <ContentArea>
                    <SideBar title="BOARD"
                        mainColor="#4B4B4B"
                        subColor="#3C3C3C"
                        mainWidth="13%"
                        subWidth="90%"
                        items={boardItem}
                        paddingTop="0"
                        borderRadius="0 15px 15px 0"/>
                    <ListArea>
                        <SelectArea>
                            <FormControl sx={{ width: "22%"}}>
                                <InputLabel id="demo-simple-select-autowidth-label" sx={{color: "white", fontWeight: "700"}}>게시판을 선택해주세요</InputLabel>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{border: "1px solid white", borderRadius: "7px"}}
                                >
                                    <MenuItem value={10}>자유게시판</MenuItem>
                                    <MenuItem value={20}>동아리 이모저모</MenuItem>
                                    <MenuItem value={30}>사전게시판</MenuItem>
                                    <MenuItem value={40}>정보게시판</MenuItem>
                                </Select>
                            </FormControl>
                            <Button sx={{backgroundColor: "white", height: "2rem", color: "black", fontWeight: "700", "&:hover": {backgroundColor: "white"}}}>등록</Button>
                        </SelectArea>
                        <TitleInputBox>
                            <TitleInput type="text" placeholder='제목을 입력해주세요.'>
                            </TitleInput>
                        </TitleInputBox>
                        <ContentInputBox>
                            <ContentButtonBox>
                                <Button sx={{
                                    p: 0, 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    backgroundColor: "white",
                                    borderRadius: "4px 0 0 4px",
                                    height: "70%"
                                }}>
                                    <InsertPhotoIcon sx={{}}/>
                                    <p>사진</p>
                                </Button>
                                <Button sx={{p: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "white",
                                    borderRadius: "0 4px 4px 0",
                                    height: "70%"
                                }}>
                                    <CreateNewFolderIcon/>
                                    <p>파일</p>
                                </Button>
                            </ContentButtonBox>
                            <ContentInput placeholder='내용을 입력해주세요.'></ContentInput>
                        </ContentInputBox>
                        <TagInputBox>
                            <TagInput type="text" placeholder='#태그 입력 (최대 10개)'></TagInput>
                        </TagInputBox>
                    </ListArea>
                </ContentArea>
            </BoardArea>
            <Footer/>
        </>
    )
}

export default WritePost;

const BoardArea = styled('div')({
    height: "82.5vh",
});

const TitleArea = styled('div')({
boxSizing: "border-box",
width: "100%",
height: "10%",
display: "flex",
padding: "0 2rem 1rem 2rem",
alignItems: "flex-end",
justifyContent: "space-between"
});

const TitleBox = styled('h2')({
fontWeight: "700",
height: "100%",
fontSize: "35px",
display: "flex",
alignItems: "flex-end",
paddingLeft: "14%",
});

const ContentArea = styled('div')({
width: "100%",
height: "90%",
display: "flex",
});

const ListArea = styled('div')({
width: "87%",
height: "100%",
padding: "0 2rem 0 2rem",
boxSizing: "border-box"
});

const SelectArea = styled('div')({
width: "100%",
height: "10%",
display: "flex",
boxSizing: "border-box",
justifyContent: "space-between",
marginTop: "0.6rem",
alignItems:"flex-end",
paddingBottom: "0.8rem"
});

const TitleInputBox = styled('div')({
width: "100%",
height: "8%",
border: "1px solid white",
borderRadius: "7px",
margin: "0.2rem  0 1.3rem 0",
boxSizing: "border-box",
display: "flex",
alignItems: "center",
padding: "0 1rem",
});

const TitleInput = styled('input')({
boxSizing: "border-box",
width: "100%",
height: "60%",
backgroundColor: "#2C2C2C",
border: "none",
fontSize: "1rem",
color: "white",
"&:focus": {outline: "none"},
});

const ContentInputBox = styled('div')({
boxSizing: "border-box",
width: "100%",
height: "60%",
border: "1px solid white",
borderRadius: "7px",
padding: "1rem"
});

const ContentButtonBox = styled('div')({
boxSizing: "border-box",
width: "100%",
height: "20%",
display: "flex",
});

const ContentInput = styled('textarea')({
boxSizing: "border-box",
width: "100%",
height: "80%",
resize: "none",
backgroundColor: "#2C2C2C",
border: "none",
fontSize: "1rem",
color: "white",
"&:focus": {outline: "none"},
});

const TagInputBox = styled('div')({
boxSizing: "border-box",
width: "100%",
height: "8%",
border: "1px solid white",
borderRadius: "7px",
margin: "1rem 0",
display: "flex",
alignItems: "center",
padding: "0 1rem"
});

const TagInput = styled('input')({
boxSizing: "border-box",
width: "100%",
height: "60%",
backgroundColor: "#2C2C2C",
border: "none",
fontSize: "1rem",
color: "white",
"&:focus": {outline: "none"},
});
