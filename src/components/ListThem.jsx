import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "../features/toDos";


const ListThem = ({itemContents, themList, setPostId}) => {
    const counter = useSelector(state => state.toDo.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleTitleClick = (num) => {
        setPostId(num);
        navigate("/board/writeDetail");
    }
    
    return(
        <>
            {itemContents.map((item) => (
                <ListThemBox key={item.id}>
                    <ItemBox>
                        <ListItem>{item.id}</ListItem>
                        {itemContents ? <ListItem style={{cursor: "pointer"}} onClick={()=>handleTitleClick(item.id)}>{item.title}</ListItem> : <ListItem style={{cursor: "pointer"}}>{item.title}</ListItem>}
                        <ListItem>{item.memberName}</ListItem>
                        <ListItem>{item.createdAt.slice(0, 3).join('.')}</ListItem>
                        <ListItem>{item.viewCount}</ListItem>
                        <ListItem>{item.likeCount}</ListItem>
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
    &:nth-of-type(1){width: 5%; height: 50%; background-color: white; border-radius: 15px; color: black; margin-left: 10px};
    &:nth-of-type(2){width: 31%};
    &:nth-of-type(6){padding-right: 24%};
`;

export default ListThem;
