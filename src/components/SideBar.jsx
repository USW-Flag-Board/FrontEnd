import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { postActions } from '../redux/slice/toDos';
import { useCallback } from "react";
const SideBar = ({
    mainWidth, 
    paddingTop, 
    paddingTopMain, 
    mainColor, 
    height, 
    borderRadius, 
    subColor, 
    subWidth, 
    title, 
    items,
    boardTitle}) => {
    
  const dispatch = useDispatch();
  const handleBoardClick = useCallback((board) => {
    dispatch(postActions.getBoard(board));
  },[dispatch])
  
  return (
    <SideArea
      style={{width: mainWidth, paddingTop: paddingTopMain}}
    >
      <SideBarBox
        style={{
          backgroundColor: mainColor,
          height: height,
          borderRadius: borderRadius,
        }}
      >
        <SideBarContent
          style={{
            backgroundColor: subColor,
            width: subWidth,
            borderRadius: borderRadius,
            paddingTop: paddingTop
          }}
        >
          <ContentsTitle>{title}</ContentsTitle>
          <ItemBox>
            {items.map(({id, engName, krName}) => (
              <Item key={id} onClick={()=> {handleBoardClick(engName); boardTitle(krName)}}>{krName}</Item>
            ))}
          </ItemBox>
        </SideBarContent>
      </SideBarBox>
    </SideArea>
  );
};

const SideArea = styled.div`
  box-sizing: border-box;
  height: 100%;
`;
  
const SideBarBox = styled.div`
  box-sizing: border-box;
`;

const SideBarContent = styled.div`
  box-sizing: border-box;
  width: 92%;
`;

const ContentsTitle = styled.div`
  box-sizing: border-box;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 3rem 0 1rem 2.5rem;
  border-bottom: 1px solid #cccccc;
`;

const ItemBox = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 3rem 2.5rem;
`;

const Item = styled.li`
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 0 1rem 0;
  cursor: pointer;
  &:hover{
    color: black;
  }
`;

export default SideBar;
