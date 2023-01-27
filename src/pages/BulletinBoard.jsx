import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SideBar, Footer, ListThem, Pagination } from "../components/";

const boardItem = ["자유게시판", "동아리 이모저모", "사전게시판", "정보게시판"];
const barItem = ["제목", "작성자", "작성일", "조회수", "댓글"];
const selectItems = ["전체기간", "게시물 + 작성자"];

const BulletinBoard = () => {
  return (
    <>
      <BoardArea>
        <TitleArea>
          <TitleBox>자유게시판</TitleBox>
          <WriteButton>
            <Link to="/board/write" style={{textDecoration: "none"}}>
              <FontAwesomeIcon icon={faPen}/>
              글쓰기
            </Link>
          </WriteButton>
        </TitleArea>
        <ContentArea>
          <SideBar
            title="BOARD"
            mainColor="#4B4B4B"
            subColor="#3C3C3C"
            mainWidth="13%"
            subWidth="90%"
            items={boardItem}
            paddingTop="0"
            borderRadius="0 15px 15px 0"
          />
          <ListArea>
            <ListBar>
              <BarItemBox>
                {barItem.map((item) => (
                  <BarItem key={item}>{item}</BarItem>
                ))}
              </BarItemBox>
            </ListBar>
            <ListBox>
              <ListThem />
            </ListBox>
            <PaginationArea>
              <Pagination />
            </PaginationArea>
            <FilterAndSearchForm>
              {selectItems.map((item) => (
                <FilterSelect key={item}>
                  <option>{item}</option>
                </FilterSelect>
              ))}
              <SearchArea>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{paddingRight: "0.5rem"}}
                />
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
  height: 88vh;
`;

const TitleArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  padding: 0px 2rem 1rem 2rem;
  align-items: flex-end;
  justify-content: space-between;
`;

const TitleBox = styled.h2`
  font-weight: 700px;
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
  &:nth-of-type(5) {
    padding-right: 24%;
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
    backgroundcolor: white;
  }
  border: none;
  border-radius: 5px;
`;

const SearchArea = styled.div`
  border: 2px solid #535353;
  border-radius: 15px;
  padding: 0.6rem 0.4rem 0.6rem 0.4rem;
  background-color: #535353cc;
`;

const InputBase = styled.input`
  box-sizing: border-box;
  width: 85%;
  border: none;
  background-color: #535353cc;
  &:focus {
    outline: none;
  }
  color: #9b9b9b;
`;

export default BulletinBoard;
