import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "../features/toDos";

// 작성한 게시물 배열
const itemContents = [
    {
        id: 1,
        boardId: "공지",
        title: "자유게시판 공지입니다.",
        userName: "문희조",
        date: "2022.08.03",
        count: 1234,
        comment: 123,
    },
    {
        id: 2,
        boardId: "1",
        title: "임시 게시물입니다.",
        userName: "어준혁",
        date: "2023.01.25",
        count: 1234,
        comment: 123,
    },
];

const ListThem = () => {
    const counter = useSelector(state => state.toDo.value);
    const dispatch = useDispatch();
    const handleTitleClick = () => {
        dispatch(increment());
    }
    return(
        <>
            {itemContents.map((item) => (
                <ListThemBox key={item.boardId}>
                    <ItemBox>
                        <ListItem>{item.boardId}</ListItem>
                        <ListItem style={{cursor: "pointer"}} onClick={handleTitleClick}>{item.title}</ListItem>
                        <ListItem>{item.userName}</ListItem>
                        <ListItem>{item.date}</ListItem>
                        <ListItem>{item.count}</ListItem>
                        <ListItem>{item.comment}</ListItem>
                    </ItemBox>
                </ListThemBox>
            ))}
        </>
    )
}

const ListThemBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 12.5%;
    &:nth-of-type(1){color: red};
    &:nth-of-type(odd){background-color: #313131};
`;

const ItemBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ListItem = styled.div`
    width: 10%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    fontSize: 0.8rem;
    fontWeight: 600;
    &:nth-of-type(1){width: 5%; height: 50%; background-color: white; border-radius: 15px; color: red; margin-left: 10px};
    &:nth-of-type(2){width: 31%};
    &:nth-of-type(6){padding-right: 24%};
`;

export default ListThem;
