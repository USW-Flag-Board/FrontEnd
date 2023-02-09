import { useEffect, useState } from "react";
import boardsActions  from '../../redux/thunkActions/boardsActions';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ListThem, SideBar, LikeButton, Reply } from "../../components";
import { useNavigate } from "react-router-dom";

const boardItems = [
  { 
    id: 1,
    krName: "스터디",
    engName: ""
  }, 
  { 
    id: 2,
    krName: "프로젝트",
    engName: ""
  }, 
];

const DetailWritePage = ({setHeader}) => {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);
  const postId = useSelector((state) => state.toDo.postId)
  const getPost = useSelector((state) => state.toDo.posts[postId-1]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setInput(e.target.value);
  };
  
  useEffect(()=>{
    dispatch(boardsActions.getBoardAPI());
  },[dispatch])

  useEffect(() => {
    setHeader(true);
  },[setHeader]);

  const addComment = () => {
    // 코멘트 추가
    setComments(
      comments.concat({
        id: comments.length + 1,
        content: input,
      })
    );
  };

  const editClick = () => {
    navigate("/board/edit");
  }

  return (
    <BoardArea>
      <SideBar
        title="ACTIVITY"
        mainColor="#4B4B4B"
        subColor="#3C3C3C"
        mainWidth="13%"
        subWidth="90%"
        items={boardItems}
        paddingTop="0"
        paddingTopMain="75px"
        borderRadius="0 15px 15px 0"
      />
      <ContentArea>
        <TitleBox>알고리즘(코테반)</TitleBox>
        <ListThem themList={getPost}/>
        <PostDatailBox>
          <PostHeader>
            <PostHeaderLeft>
              <PostAuthor>글쓴이</PostAuthor>
              <AuthorName>{getPost.memberName}</AuthorName>
              <PostTime>{getPost.createdAt.slice(0, 3).join('.')}</PostTime>
            </PostHeaderLeft>
            <PostHeaderRight>
              <PostModify onClick={editClick}>수정하기</PostModify>
              <PostDelete>삭제하기</PostDelete>
            </PostHeaderRight>
          </PostHeader>
          <PostContentTitle>{getPost.title}</PostContentTitle>
          <PostContent>{getPost.content}</PostContent>
          <PostFooter>
            <PostViewCount><PostView>View</PostView>{getPost.viewCount}</PostViewCount>
            <PostLike><LikeButton/>{getPost.likeCount}</PostLike>
          </PostFooter>
        </PostDatailBox>
        <CommentInputBox>
          <CommentInput placeholder="댓글을 입력하세요." value={input} onChange={onChange} onClick={() => {addComment(input); setInput(input);}}></CommentInput>
          <CommentAddButton type="submit">등록</CommentAddButton>
        </CommentInputBox>
        <CommentsArea>
          <Reply />
          <Reply />
        </CommentsArea>
      </ContentArea>
    </BoardArea>
  );
};

const BoardArea = styled.div`
  display: flex;
  width: 100vw;
  height: 91vh;
`;

const TitleBox = styled.h2`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-weight: 700;
  height: 10%;
  font-size: 35px;
`;

const ContentArea = styled.div`
  box-sizing: border-box;
  width: 87%;
  height: 100%;
  padding: 1.2rem;
`;

const PostDatailBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  border: 1px solid #9A9A9A;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem 0 1rem 0;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
`;

const PostHeaderLeft = styled.div`

`;

const PostAuthor = styled.span`
  margin-right: 8px;
`;

const AuthorName = styled.span`
  margin-right: 30px;
`;

const PostTime = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const PostHeaderRight = styled.div`

`;

const PostModify = styled.button`
  cursor: pointer;
  background-color: #2C2C2C;
  border: none;
  color: white;
`;

const PostDelete = styled.button`
  margin-left: 10px;
  cursor: pointer;
  background-color: #2C2C2C;
  border: none;
  color: white;
`;

const PostContentTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  padding-top: 1rem;
  height: 20%;
`;

const PostContent = styled.div`
  height: 45%;
`;

const PostFooter = styled.div`
  padding-top: 0.6rem;
  height: 10%;
`;

const PostView = styled.span`
  margin-right: 10px;
`

const PostViewCount = styled.span`
  font-size: 15px;
  margin-right: 20px;
`;

const PostLike = styled.span`
  margin-right: 20px;
`;

const CommentInputBox = styled.form`
  box-sizing: border-box;
  border: 1px solid #9A9A9A;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 8%;
`;

const CommentInput = styled.input`
  width: 95%;
  height: 35%;
  border: none;
  background-color: #2C2C2C;
  caret-color: white;
  color: white;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #ffffffcc;
  }
`;

const CommentAddButton = styled.button`
  height: 35%;
  color: white;
  background-color: #2C2C2C;
  border: none;
  cursor: pointer;
`;

const CommentsArea = styled.div`
  box-sizing: border-box;
  color: white;
  border: 1px solid #9A9A9A;
  border-radius: 20px;
  margin-top: 1rem;
  padding: 1.5rem  1.5rem 0 1.5rem;
`;


export default DetailWritePage;
