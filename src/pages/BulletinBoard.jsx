import { styled } from '@mui/system';
import SideBar from '../component/SideBar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../component/Footer";
import { Link } from 'react-router-dom';
import ListThem from '../component/ListThem';
import Pagination from '../component/Pagination';

const BulletinBoard = () => {
  const boardItem = ["자유게시판", "동아리 이모저모", "사전게시판", "정보게시판"];
  const barItem = ["제목", "작성자", "작성일", "조회수", "댓글"];
  const itemContents = ["공지", "자유게시판 공지입니다.", "문희조", "2022.08.03", "1234", "123"];
  const inputItem = ["전체기간", "게시글 + 작성자"];

  return (
  <ThemeProvider theme={theme}>
    <BoardArea>
      <TitleArea>
        <TitleBox>자유게시판</TitleBox>
        <Button sx={{
          backgroundColor: "white",
          height: "2rem", 
          color: "black", 
          fontWeight: "700", 
          "&:hover": {backgroundColor: "white"}
        }}>
          <Link to="/board/write">
            <EditIcon sx={{height: "2rem"}}/>
            글쓰기
          </Link>
        </Button>
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
          <ListBar>
            <BarItemBox>
              {barItem.map((item) => <BarItem key={item}>{item}</BarItem>)}
            </BarItemBox>
          </ListBar>
          <ListBox>
            <ListThem themList={itemContents}/>
          </ListBox>
          <PaginationArea>
            <Pagination/>
          </PaginationArea>
          <FilterAndSearch>
            {inputItem.map((item) => 
            <FormControl 
              sx={{ m: 1, width: 160}} 
              size="small" key={item}>
              <InputLabel 
                id="demo-select-small" 
                sx={{fontSize: "12px", p: "1px 0 1px 10px", color: "#adb5bd"}}>
                {item}
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label={item}
                sx={{borderRadius: "15px", backgroundColor: "#4B4B4B"}}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>)}
            <Paper
              component="form"
              sx={{display: 'flex', 
                  width: 250, 
                  height: 30, 
                  borderRadius: "15px", 
                  backgroundColor: "#4B4B4B",
                  border: "2px solid #adb5bd",
                  ml: 2,
                  }}
              >
              <IconButton type="button" sx={{pl: "10px"}} aria-label="search">
                <SearchIcon  sx={{color: "#adb5bd", p: '0 0 0 5px'}}/>
              </IconButton>
              <InputBase placeholder="게시글 + 작성자" sx={{ ml: 1, flex: 1, color: "#adb5bd"}}/>
            </Paper>
          </FilterAndSearch>
        </ListArea>
      </ContentArea>
    </BoardArea>
    <Footer/>
  </ThemeProvider>
  )
}

export default BulletinBoard;

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B4B4B",
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

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
  paddingLeft: "14%"
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
  width: "10%",
  height: "100%",
  color: "white",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: "10px",
  fontSize: "1rem",
  fontWeight: "600",
  "&:nth-of-type(1)": {marginLeft: "10px", paddingLeft: "6%", width: "30%"},
  "&:nth-of-type(5)": {paddingRight: "24%"},
});

const ListBox = styled('div')({
  height: "70%",
});

const PaginationArea = styled('div')({
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const FilterAndSearch = styled('div')({
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
