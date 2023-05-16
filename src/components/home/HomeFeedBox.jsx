import styled from "styled-components";
import { useState } from "react";
import { useElapsedTime } from "../../hooks/useElaspedTime";
import { useNavigate } from "react-router-dom";

const HomePosts = ({ post }) => {
  const { author, createdAt, likeCount, replyCount, title, viewCount } = post;
  const timeAgo = useElapsedTime(
    `${createdAt[0]}-${createdAt[1]}-${createdAt[2]} ${createdAt[3]}:${createdAt[4]}:${createdAt[5]}`
  );
  return (
    <PostBox>
      <PostInfoItem>{title}</PostInfoItem>
      <PostInfoItem>{viewCount}</PostInfoItem>
      <PostInfoItem>{likeCount}</PostInfoItem>
      <PostInfoItem>{replyCount}</PostInfoItem>
      <PostInfoItem>{`${timeAgo}전`}</PostInfoItem>
      <PostInfoItem>{author}</PostInfoItem>
    </PostBox>
  );
};

const HomePostsBar = () => {
  return (
    <PostInfoBox>
      <PostInfo>제목</PostInfo>
      <PostInfo>조회</PostInfo>
      <PostInfo>추천</PostInfo>
      <PostInfo>댓글</PostInfo>
      <PostInfo>작성일</PostInfo>
      <PostInfo>작성자</PostInfo>
    </PostInfoBox>
  );
};

const HomeFeedBox = ({ post, title }) => {
  const handlePostClick = (id) => {
    navigate(`/board/post/${id}`);
  };
  const navigate = useNavigate();
  return (
    <FeedBox>
      <FeedTitle>{title}</FeedTitle>
      <div>
        <HomePostsBar />
        {Array.isArray(post) &&
          post.map((item) => (
            <PostsBox key={item.id} onClick={() => handlePostClick(item.id)}>
              <HomePosts post={item} />
            </PostsBox>
          ))}
      </div>
    </FeedBox>
  );
};

export default HomeFeedBox;

const FeedBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 2rem;
  flex: 1 1 40%;
  @media (max-width: 480px) {
    width: 100%;
    flex: none;
  }
`;

const FeedTitle = styled.h3`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 3rem;
  background-color: #339af0;
  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;

const PostsBox = styled.div`
  cursor: pointer;
`;

const PostInfoBox = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: #f8f9fa;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  width: 14%;
  :nth-child(1) {
    width: 40%;
  }
`;

const PostBox = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  cursor: pointer;
  border-bottom: 1px solid #ced4da;
`;

const PostInfoItem = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  width: 14%;
  :nth-child(1) {
    width: 40%;
    padding: 0 0.5rem;
    &:hover {
      color: #4dabf7;
    }
  }
`;
