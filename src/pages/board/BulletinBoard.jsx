import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Header, ListThem } from "../../components";
import boardData from '../../constants/board';

const BulletinBoard = () => {
  const header = true;
  const [board, setBoard] = useState("자유게시판");
  const navigate = useNavigate();
  
  const handleWrite = () => {
    navigate("/board/write");
  }

  return (
    <>
      {header && <Header/>}
      <BoardArea>
        <ListArea>
          <ListBar>
            <BarItemBox>
              {boardData.BOARD_NAMES.map(({id, krName})=>(
                <BarItem key={id}>{krName}</BarItem>
              ))}
            </BarItemBox>
            <WriteButtonBox>
              <WriteButton onClick={handleWrite}>
                <FaPen icon={faPlus} />
                <span>글쓰기</span> 
              </WriteButton>
            </WriteButtonBox>
          </ListBar>
          <ListBox>
            <ListThem/>
            <ListThem/>
            <ListThem/>
            <ListThem/>
            <ListThem/>
            <ListThem/>
          </ListBox>
          <FilterAndSearchForm>
          {/* {boardData.SEARCH_SELECT_ITEMS.map((item) => (
            <FilterSelect key={item}>
              <option>{item}</option>
            </FilterSelect>
            ))}
            <SearchArea>
              <FaMagnifyingGlass icon={faMagnifyingGlass}/>
              <InputBase type="text" placeholder="게시글 + 작성자" />
            </SearchArea> */}
          </FilterAndSearchForm>
        </ListArea>
      </BoardArea>
    </>
  );
};

const BoardArea = styled.div`
  width: 100%;
`;

const ListArea = styled.div`
  width: 100%;
`;

const ListBar = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 8rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
`;

const BarItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BarItem = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const ListBox = styled.div`
  padding: 0 8rem;
  margin-top: 1rem;
`;

const PaginationArea = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterAndSearchForm = styled.form`
  height: 12%;
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

const WriteButtonBox = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const WriteButton = styled.button`
  background-color: #339af0;
  color: white;
  width: 60%;
  height: 60%;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  margin-right: 0.5rem;
`;

const FaMagnifyingGlass = styled(FontAwesomeIcon)`
  padding-right: 0.5rem;
`;

export default BulletinBoard;
