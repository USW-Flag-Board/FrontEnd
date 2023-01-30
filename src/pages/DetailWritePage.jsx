import {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import ListThem from "../components/ListThem";
import SideBar from "../components/SideBar";
import LikeButton from "../components/LikeButton";
import Reply from "../components/Reply";

const boardItems = [
  {id: 1, krName: "스터디", engName: ""},
  {id: 2, krName: "프로젝트", engName: ""},
];

const DetailWritePage = ({post, setHeader}) => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const onChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://3.39.36.239:8080/api/posts?postId=${post}&viaBoard=true`)
      .then((response) => {
        setDetailData(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post]);

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

  useEffect(() => {
    setHeader(true);
  });

  return (
    <BoardArea>
      <TitleArea>
        <TitleBox>알고리즘(코테반)</TitleBox>
      </TitleArea>
      <ContentArea>
        <SideBar
          title="ACTIVITY"
          mainColor="#4B4B4B"
          subColor="#3C3C3C"
          mainWidth="13%"
          subWidth="90%"
          items={boardItems}
          paddingTop="0"
          borderRadius="0 15px 15px 0"
        />
        <PostArea>
          <PostBox>
            <ListThem themList={detailData} />
            <PostContentBox>
              <PostContentSort>
                <PostHeader style={{}}>
                  <PostHeaderLeftArea>
                    <PostAuthor>글쓴이 {detailData.memberName}</PostAuthor>
                    <PostTime>{detailData.createdAt}</PostTime>
                  </PostHeaderLeftArea>
                  <PostHeaderRightArea>
                    <PostModify>수정하기</PostModify>
                    <PostDelete>삭제하기</PostDelete>
                  </PostHeaderRightArea>
                </PostHeader>
                <PostContentTitle>{detailData.title}</PostContentTitle>
                <PostContent>{detailData.content}</PostContent>
                <PostViews>view {detailData.viewCount}</PostViews>
                <PostLike>
                  <LikeButton />
                  {detailData.likeCount}
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
        </PostArea>
      </ContentArea>
    </BoardArea>
  );
};

const BoardArea = styled.div`
  height: 82.5vh;
`;

const TitleArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  padding: 0 2rem 1rem 2rem;
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

const PostArea = styled.div`
  width: 87%;
  height: 100%;
  padding: 0 2rem 0 2rem;
  box-sizing: border-box;
`;

const PostBox = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
`;

const PostContentBox = styled.div`
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 28px;
`;

const PostContentSort = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 60px;
  margin-right: 60px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostHeaderLeftArea = styled.div``;

const PostHeaderRightArea = styled.div``;

const PostModify = styled.div`
  display: inline;
`;

const PostDelete = styled.div`
  margin-left: 10px;
  display: inline;
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
  margintop: 20px;
  fontsize: 10px;
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
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 60px;
  margin-right: 60px;
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
