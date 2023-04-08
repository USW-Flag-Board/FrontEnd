import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import boardsActions from "../redux/thunkActions/boardsActions";
import styled from 'styled-components';

const ListThem = ({itemContents}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardPosts = useSelector((state) => state.toDo.getPostsData);

    return(
        <>
            {itemContents.map(({id, memberName, createdAt, viewCount, likeCount, title, replyCount}) => (
                <ListThemBox key={id}>
                    <ItemBox>
                        <ListItem>{boardPosts.findIndex(v => v.id === id) + 1}</ListItem>
                        <ListItem 
                            style={{cursor: "pointer"}} 
                            onClick={()=>{
                                dispatch(boardsActions.getPostAPI(id)); 
                                navigate("/board/detail");
                                }}>
                                {title}
                        </ListItem>
                        <ListItem>{memberName}</ListItem>
                        <ListItem>{createdAt.slice(0, 3).join('.')}</ListItem>
                        <ListItem>{viewCount}</ListItem>
                        <ListItem>{likeCount}</ListItem>
                        <ListItem>{replyCount}</ListItem>
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
    height: 6.9vh;
    &:nth-of-type(odd){background-color: #313131};
`;

const ItemBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const ListItem = styled.div`
    width: 10%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    &:nth-of-type(1){width: 5%; height: 50%; background-color: white; border-radius: 15px; color: black; margin-left: 0.7rem};
    &:nth-of-type(2){width: 31%};
`;

export default ListThem;
