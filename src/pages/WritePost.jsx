import { Footer, SideBar, } from '../components/';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const WritePost = () => {
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
                                    height: "70%",
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

const boardItem = ["자유게시판", "동아리 이모저모", "사전게시판", "정보게시판"];
const BoardArea = styled.div`
    height: 82.5vh;
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

const ListArea = styled.div`
    width: 87%,
    height: 100%;
    padding: 0 2rem 0 2rem;
    box-sizing: border-box;
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
    margin: 0.2rem  0 1.3rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 1rem;
`;

const TitleInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    background-color: #2C2C2C;
    border: none;
    font-size: 1rem;
    color: white;
    &:focus{outline: none};
`;

const ContentInputBox = styled.div`
    boxSizing: border-box;
    width: 100%;
    height: 60%;
    border: 1px solid white;
    border-radius: 7px;
    padding: 1rem;
`;

const ContentButtonBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 20%;
    display: flex;
`;

const ContentInput = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    resize: none;
    background-color: #2C2C2C;
    border: none;
    font-size: 1rem;
    color: white;
    &:focus{outline: none};
`;

const TagInputBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 8%;
    border: 1px solid white;
    border-radius: 7px;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
`;

const TagInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    background-color: #2C2C2C;
    border: none;
    font-size: 1rem;
    color: white;
    &:focus{outline: none};
`;

export default WritePost;
