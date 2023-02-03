import { useEffect, useState } from "react";
import postsActions  from '../redux/thunkActions/postsActions';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ListThem, SideBar, LikeButton, Reply } from "../components";

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
  console.log(getPost)
  const dispatch = useDispatch();
  const onChange = (e) => {
    setInput(e.target.value);
  };
  
  useEffect(()=>{
    dispatch(postsActions.getPostAPI());
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
    setInput("");
  };

  const addReply = () => {
    setComments(
      comments.concat({
        ids: comments.length + 1,
        content: input,
      })
    );
  };

  const removeComment = (id) => {
    // 코멘트 삭제
    return setComments(comments.filter((comment) => comment.id !== id));
  };

  const removeReply = (ids) => {
    // 코멘트 삭제
    return setComments(comments.filter((comment) => comment.ids !== ids));
  };

  const abcde = () => {
    return (
      <>
        <RelativeArea>
          <ReplyButton
            placeholder="댓글을 입력하세요."
            value={input}
            onChange={onChange}
          ></ReplyButton>
          <AddIcon>
            <Button
              onClick={() => {
                addReply(input);
                setInput("");
              }}
            >
              등록
            </Button>
          </AddIcon>
        </RelativeArea>
      </>
    );
  };

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
        <ListThemBox>
          <ListThem themList={getPost}/>
        </ListThemBox>
        <PostDatailBox>
          
        </PostDatailBox>
          <PostBox>
            <PostContentBox>
              <PostContentSort>
                <PostHeader>
                  <PostHeaderLeftArea>
                    <PostAuthor>글쓴이 {getPost.memberName}</PostAuthor>
                    <PostTime>{getPost.createdAt.slice(0, 3).join('.')}</PostTime>
                  </PostHeaderLeftArea>
                  <PostHeaderRightArea>
                    <PostModify>수정하기</PostModify>
                    <PostDelete>삭제하기</PostDelete>
                  </PostHeaderRightArea>
                </PostHeader>
                <PostContentTitle>{getPost.title}</PostContentTitle>
                <PostContent>
                  {getPost.content}
                </PostContent>
                <PostViews>view {getPost.viewCount}</PostViews>
                <PostLike>
                  <LikeButton />
                  {getPost.likeCount}
                </PostLike>
              </PostContentSort>
            </PostContentBox>
            <RelativeArea>
              <ReplyButton
                placeholder="댓글을 입력하세요."
                value={input}
                onChange={onChange}
              ></ReplyButton>
              <AddIcon>
                <Button
                  onClick={() => {
                    addComment(input);
                    setInput("");
                  }}
                >
                  등록
                </Button>
              </AddIcon>
            </RelativeArea>
            <ReplyArea>
              <ReplyContent>
                {comments.map((comment, index) => (
                  <Reply
                    key={`${comment}_${index}`}
                    name="이수빈"
                    delete={
                      <Deletebutton onClick={() => removeComment(comment.id)}>
                        삭제하기
                      </Deletebutton>
                    }
                    Comment={comment.content}
                  />
                ))}
              </ReplyContent>
            </ReplyArea>
          </PostBox>
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
  padding-left: 1.5rem;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  height: 100%;
`;

const ListThemBox = styled.div`
  width: 90%;
  height: 12.5%;
`;

const PostDatailBox = styled.div`
  box-sizing: border-box;
  width: 87%;
  padding: 0 2rem 0 2rem;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
`;

const PostContentBox = styled.div`
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 28px;
`;

const PostContentSort = styled.div`
  box-sizing: border-box;
  padding: 20px 40px 40px 20px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostHeaderLeftArea = styled.div``;

const PostHeaderRightArea = styled.div``;

const PostModify = styled.div`
  display: inline;
  cursor: pointer;
`;

const PostDelete = styled.div`
  margin-left: 10px;
  display: inline;
  cursor: pointer;
`;

const PostAuthor = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const PostTime = styled.div`
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
`;

const PostContentTitle = styled.h2`
  fontsize: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const PostContent = styled.div``;

const PostViews = styled.div`
  margin-top: 20px;
  font-size: 10px;
  display: inline-block;
`;

const PostLike = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  font-size: 10px;
  display: inline-block;
`;

const RelativeArea = styled.div`
  position: relative;
`;

const ReplyButton = styled.input`
  width: calc(100% - 122px);
  margin-top: 25px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  border-radius: 28px;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 60px;
  padding-right: 60px;
  color: white;
  ::placeholder {
    color: #ffffffcc;
  }
`;

const AddIcon = styled.label`
  color: white;
  position: absolute;
  left: calc(100% - 60px);
  top: 44px;
`;

const ReplyArea = styled.div`
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 28px;
`;

const ReplyContent = styled.div`
  margin: 20px 60px 20px 60px
`;

//댓글 답글 입력 버튼
const Button = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Deletebutton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
`;

export default DetailWritePage;
