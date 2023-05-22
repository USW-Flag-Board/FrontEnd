import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";
import { PostComment, Header } from "../../components";
import { useElapsedTime } from "../../hooks/useElaspedTime";
import { useParams, Link, useNavigate } from "react-router-dom";

const PostContentPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [postData, setPostData] = useState({});
  const [replies, setReplies] = useState("");
  const [liked, setLiked] = useState("");
  const [createdAt, setCreatedAt] = useState([]);
  const {
    content,
    like,
    edited,
    id,
    loginId,
    nickname,
    title,
    profileImage,
    viewCount,
  } = postData;
  const timeAgo = useElapsedTime(
    `${createdAt[0]}-${createdAt[1]}-${createdAt[2]} ${createdAt[3]}:${createdAt[4]}:${createdAt[5]}`
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(`/posts/${postId}`);
        const { postDetail, replies } = response.data.payload;
        setPostData(postDetail);
        setReplies(replies);
        setCreatedAt(postDetail.createdAt);
        setLiked(postDetail.like.liked);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [postId]);

  const handleCommentRegistration = async () => {
    try {
      const response = await instance.post(`/posts/${id}/reply`, {
        content: comment,
      });
      if (response.status === 201) {
        window.location.href = `/board/post/${id}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        await instance.patch(`/posts/${id}`);
        navigate("/board");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLikeClick = async () => {
    try {
      if (!liked) {
        await instance.post(`/posts/${id}/like`);
        setLiked(true);
        setPostData((prevPost) => ({
          ...prevPost,
          like: {
            ...prevPost.like,
            likeCount: prevPost.like.likeCount + 1,
          },
        }));
      } else {
        await instance.delete(`/posts/${id}/like`);
        setLiked(false);
        setPostData((prevPost) => ({
          ...prevPost,
          like: {
            ...prevPost.like,
            likeCount: prevPost.like.likeCount - 1,
          },
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (url) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      try {
        const response = await instance.delete(url);
        if (response.status === 200) {
          window.location.href = `/board/post/${id}`;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Header />
      <PostArea>
        <PostBox>
          <ContentArea>
            <ContentInner>
              <Title>{title}</Title>
              <WriterInfoBox>
                <WriterImg src={profileImage} />
                <Info>
                  <WriterName>{nickname}</WriterName>
                  <ElaspsedTime>
                    <span>{timeAgo}전</span>
                    {edited ? <span>(수정됨)</span> : null}
                  </ElaspsedTime>
                </Info>
              </WriterInfoBox>
              <ContentBox>
                {like && like.likeCount !== undefined && (
                  <LikeButtonBox liked={liked}>
                    <LikeButton
                      type="button"
                      onClick={
                        SessionStorage.get("User_id")
                          ? handleLikeClick
                          : undefined
                      }
                      liked={liked}
                    >
                      <Icon icon={faThumbsUp} className="like" />
                      <span className="like-count">{like.likeCount}</span>
                    </LikeButton>
                  </LikeButtonBox>
                )}
                <Content>{content}</Content>
              </ContentBox>
              <PostInfoBox>
                <InfoBox>
                  <Icon icon={faEye} className="view" />
                  <span>{viewCount}</span>
                </InfoBox>
                <InfoBox>
                  <Icon icon={faComment} className="comment" />
                  <span>{replies.length}</span>
                </InfoBox>
                {loginId === SessionStorage.get("User_id") && (
                  <>
                    <StyledLink to={`/board/post/${postId}/edit`}>
                      <InfoBox>수정하기</InfoBox>
                    </StyledLink>
                    <InfoBox onClick={handleDeleteClick}>삭제하기</InfoBox>
                  </>
                )}
              </PostInfoBox>
            </ContentInner>
          </ContentArea>
          <ContentArea className="comment-area">
            <ContentInner>
              <Title className="comment-title">댓글</Title>
              {Array.isArray(replies) &&
                replies.map((comment) => (
                  <PostComment
                    replies={replies}
                    comment={comment}
                    key={comment.id}
                    postId={id}
                    handleDeleteComment={handleDeleteComment}
                  />
                ))}
              {SessionStorage.get("User_id") && (
                <>
                  <CommentBox>
                    <CommentInputBox>
                      <CommentInput
                        placeholder="댓글을 입력해보세요"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </CommentInputBox>
                  </CommentBox>
                  <ContentButtonBox>
                    <ContentButton onClick={handleCommentRegistration}>
                      등록
                    </ContentButton>
                  </ContentButtonBox>
                </>
              )}
            </ContentInner>
          </ContentArea>
        </PostBox>
      </PostArea>
    </>
  );
};

const PostArea = styled.div`
  width: 100%;
`;

const PostBox = styled.div`
  .comment-area {
    background-color: #f9fafb;
    padding: 1rem 0;
    border-top: 0.0625rem solid #e7e7e7;
    height: auto;
  }
`;

const ContentArea = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
`;

const ContentInner = styled.div`
  width: 70%;

  .comment-title {
    font-size: 1.2rem;
    margin: 0.8rem 0px 1.125rem;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin: 0.5rem 0px 1.125rem;
`;

const WriterInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  height: 3rem;
`;

const WriterImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;
const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 0.4rem;
`;

const WriterName = styled.div`
  font-weight: bold;
`;
const ElaspsedTime = styled.div`
  color: #adb5bd;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
`;

const Content = styled.div`
  width: 90%;
  padding: 0.3rem;
`;

const LikeButtonBox = styled.div`
  width: 5rem;
  color: ${(props) => (props.liked ? "#339af0" : "rgb(215, 226, 235)")};
  .like {
    font-size: 1.3rem;
    color: ${(props) => (props.liked ? "#339af0" : "rgb(215, 226, 235)")};
  }
`;

const LikeButton = styled.button`
  width: 90%;
  height: 25%;
  background: none;
  cursor: pointer;
  border: 0.0625rem solid rgb(215, 226, 235);
  color: ${(props) => (props.liked ? "#339af0" : "rgb(215, 226, 235)")};
  border-radius: 0.25rem;
  .like-count {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const PostInfoBox = styled.div`
  padding-top: 1rem;
  display: flex;
`;

const InfoBox = styled.div`
  cursor: pointer;
  font-size: 1rem;
  margin-right: 0.8rem;
  .view {
    color: #adb5bd;
  }
  .comment {
    color: #339af0;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.3rem;
  padding: 0;
`;

const CommentBox = styled.div`
  border: 0.0625rem solid rgb(215, 226, 235);
  border-radius: 0.25rem;
  width: 100%;
  background-color: white;
  margin-bottom: 1rem;
`;

const CommentInputBox = styled.div`
  height: 10rem;
  padding: 1rem;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  :focus {
    outline: none;
  }
  resize: none;
`;

const ContentButtonBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ContentButton = styled.button`
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  width: 6rem;
  height: 100%;
  border: none;
  padding: 0.3rem 0 0 0;
  cursor: pointer;
  background-color: #339af0;
  color: white;
`;

const StyledLink = styled(Link)`
  color: black;
`;

export default PostContentPage;
