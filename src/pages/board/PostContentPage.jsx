import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { Header } from "../../components";
import { useSelector } from "react-redux";
import { baseInstance } from "../../apis/instance";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";
import PostComment from "./PostComment";
import { useElapsedTime } from "../../hooks/useElaspedTime";

const PostContentPage = () => {
  const header = true;
  const postId = useSelector((state) => state.boardSlice.postId);
  const [comment, setComment] = useState("");
  const login = SessionStorage.get("UserToken");
  const [postData, setPostData] = useState({});
  const [commentData, setCommentData] = useState("");
  const [createdAt, setCreatedAt] = useState([]);
  const {
    author,
    content,
    edited,
    id,
    likeCount,
    replyCount,
    title,
    viewCount,
  } = postData;

  const timeAgo = useElapsedTime(
    `${createdAt[0]}-${createdAt[1]}-${createdAt[2]} ${createdAt[3]}:${createdAt[4]}:${createdAt[5]}`
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await baseInstance.get(`/posts/${postId}`);
        setPostData(response.data.payload);
        setCreatedAt(response.data.payload.createdAt);
        const commentResponse = await baseInstance.get(
          `/posts/${postId}/replies`
        );
        setCommentData(commentResponse.data.payload);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [postId]);

  const handleRegistration = async () => {
    try {
      await instance.post(`/posts/${id}/reply`, {
        content: comment,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {header && <Header />}
      <PostArea>
        <PostBox>
          <ContentArea className="post-content">
            <ContentInner>
              <Title>{title}</Title>
              <WriterInfoBox>
                <WriterImg />
                <Info>
                  <WriterName>{author}</WriterName>
                  <ElaspsedTime>{timeAgo}전</ElaspsedTime>
                </Info>
              </WriterInfoBox>
              <ContentBox>
                <LikeButtonBox>
                  <LikeButton>
                    <Icon icon={faThumbsUp} className="like" />
                    <span className="like-count">{likeCount}</span>
                  </LikeButton>
                </LikeButtonBox>
                <Content>{content}</Content>
              </ContentBox>
              <PostInfoBox>
                <InfoBox>
                  <Icon icon={faEye} className="view" />
                  <span>{viewCount}</span>
                </InfoBox>
                <InfoBox>
                  <Icon icon={faComment} className="comment" />
                  <span>{replyCount}</span>
                </InfoBox>
              </PostInfoBox>
            </ContentInner>
          </ContentArea>
          <ContentArea className="comment-area">
            <ContentInner>
              <Title className="comment-title">댓글</Title>
              {Array.isArray(commentData) &&
                commentData.map((comment) => (
                  <PostComment comment={comment} key={comment.id} />
                ))}
              {login && (
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
                    <ContentButton onClick={handleRegistration}>
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
  }
`;

const ContentArea = styled.div`
  padding: 3rem 0;
`;

const ContentInner = styled.div`
  margin: 0 10rem;
  padding: 0 6rem;
  .comment-title {
    font-size: 1.2rem;
    margin: 0.8rem 0px 1.125rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin: 1.25rem 0px 1.125rem;
`;

const WriterInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

const WriterImg = styled.img``;
const Info = styled.div``;
const WriterName = styled.div``;
const ElaspsedTime = styled.div``;

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
  width: 10%;
  .like {
    font-size: 1.3rem;
    color: #adb5bd;
  }
`;

const LikeButton = styled.button`
  width: 90%;
  height: 25%;
  background: none;
  cursor: pointer;
  border: 0.0625rem solid rgb(215, 226, 235);
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

export default PostContentPage;
