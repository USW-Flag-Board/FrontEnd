import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { baseInstance } from "../../apis/instance";
import { useElapsedTime } from "../../hooks/useElaspedTime";

const PostContentPage = () => {
  const header = true;
  const postId = useSelector((state) => state.boardSlice.postId);
  const [postData, setPostData] = useState({});
  const [newPost, setNewPost] = useState(false);
  const {
    author,
    content,
    createdAt,
    edited,
    id,
    likeCount,
    replyCount,
    title,
    viewCount,
  } = postData;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await baseInstance.get(`/posts/${postId}`);
        setPostData(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [postId]);

  return (
    <>
      {header && <Header />}
      <PostArea>
        <PostBox>
          <ContentArea>
            <ContentInner>
              {/* <NoticeBox>
                {newPost ? <Notice>새로운 글</Notice> : null}
              </NoticeBox> */}
              <Title>{title}</Title>
              <WriterInfoBox>
                <WriterImg />
                <Info>
                  <WriterName>{author}</WriterName>
                  <ElaspsedTime>1시간전</ElaspsedTime>
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
                  <span>{Math.ceil(viewCount / 2)}</span>
                </InfoBox>
                <InfoBox>
                  <Icon icon={faComment} className="comment" />
                  <span>{replyCount}</span>
                </InfoBox>
              </PostInfoBox>
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

const PostBox = styled.div``;

const ContentArea = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid rgb(215, 226, 235);
`;

const ContentInner = styled.div`
  padding: 0 16rem;
`;

const NoticeBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 0.75rem;
`;

const Notice = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.875rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: rgb(234, 244, 255);
  color: rgb(0, 120, 255);
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

const CommentArea = styled.div`
  background-color: rgb(249, 250, 251);
`;

export default PostContentPage;
