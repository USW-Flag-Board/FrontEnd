import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import boardsActions  from '../../redux/thunkActions/boardsActions';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SideBar, Footer, ListThem, Pagination, Header } from "../../components";
import boardData from '../../constants/board';

const BulletinBoard = () => {
  const header = true;
  const [boardName, setBoardName] = useState("자유게시판");
  const [currentItems, setCurrentItems] = useState([]);
  const posts = useSelector((state) => state.toDo.getPostsData);
  const board = useSelector((state) => state.toDo.boardName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const writeClick = () => {
    navigate("/board/write");
  }

  useEffect(()=>{
      dispatch(boardsActions.getBoardAPI(board));
  }, [board, dispatch])

  return (
    <>
      {header && <Header/>}
      <BoardArea>
        <ContentArea>
          <SideBar
            title="BOARD"
            mainColor="#4B4B4B"
            subColor="#3C3C3C"
            mainWidth="13%"
            subWidth="90%"
            items={boardData.BOARD_NAMES}
            boardTitle={setBoardName}
            paddingTop="0"
            paddingTopMain="75px"
            borderRadius="0 15px 15px 0"
          />
          <ListArea>
            <TitleArea>
              <TitleBox>{boardName}</TitleBox>
              <WriteButton onClick={writeClick}>
                <FaPen icon={faPen} />
                  글쓰기
              </WriteButton>
            </TitleArea>
            <ListBar>
              <BarItemBox>
              {boardData.TITLE_ITEMS.map((item) => (
                <BarItem key={item}>{item}</BarItem>
              ))}
              </BarItemBox>
            </ListBar>
            <ListBox>
              <ListThem
                itemContents={currentItems}
              />
            </ListBox>
            <PaginationArea>
              <Pagination
                itemsPerPage={8}
                items={posts}
                setCurrentItems={setCurrentItems}
              />
            </PaginationArea>
            <FilterAndSearchForm>
            {boardData.SEARCH_SELECT_ITEMS.map((item) => (
              <FilterSelect key={item}>
                <option>{item}</option>
              </FilterSelect>
              ))}
              <SearchArea>
                <FaMagnifyingGlass icon={faMagnifyingGlass}/>
                <InputBase type="text" placeholder="게시글 + 작성자" />
              </SearchArea>
            </FilterAndSearchForm>
          </ListArea>
        </ContentArea>
      </BoardArea>
      <Footer />
    </>
  );
};

const BoardArea = styled.div`
  width: 100vw;
  height: 86vh;
`;

const TitleArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  padding: 0 0 1rem 0;
  align-items: flex-end;
  justify-content: space-between;
`;

const TitleBox = styled.h2`
  font-weight: 700px;
  height: 100%;
  font-size: 35px;
  display: flex;
  align-items: flex-end;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

const ListArea = styled.div`
  width: 87%;
  height: 100%;
  padding: 0px 2rem 0 2rem;
  box-sizing: border-box;
`;

const ListBar = styled.div`
  height: 10%;
  background-color: black;
`;

const BarItemBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const BarItem = styled.li`
  width: 10%;
  height: 100%;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 1rem;
  font-weight: 600px;
  &:nth-of-type(1) {
    margin-left: 10px;
    padding-left: 6%;
    width: 30%;
  }
`;

const ListBox = styled.div`
  height: 70%;
`;

const PaginationArea = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterAndSearchForm = styled.form`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterSelect = styled.select`
  box-sizing: border-box;
  width: 10rem;
  background-color: #535353cc;
  border: 1px solid #535353;
  border-radius: 16px;
  padding: 0.6rem 0.4rem 0.6rem 1.5rem;
  &:first-of-type {
    padding: 0.6rem 0.4rem 0.6rem 2.7rem;
  }
  color: #9b9b9b;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteButton = styled.button`
  background-color: white;
  width: 6rem;
  height: 2rem;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    background-color: white;
  }
  border: none;
  border-radius: 5px;
`;

const SearchArea = styled.div`
  border: 2px solid #535353;
  border-radius: 15px;
  padding-left: 0.6rem;
  background-color: #535353cc;
  height: 50%;
  display: flex;
  align-items: center;
`;

const InputBase = styled.input`
  box-sizing: border-box;
  font-size: 15px;
  color: white;
  height: 70%;
  width: 85%;
  border: none;
  background-color: #535353cc;
  &:focus {
    outline: none;
  }
`;

const FaPen = styled(FontAwesomeIcon)`
  text-decoration: none;
`;

const FaMagnifyingGlass = styled(FontAwesomeIcon)`
  padding-right: 0.5rem;
`;

export default BulletinBoard;
