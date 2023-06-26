import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePosts = ({ post, headerTitle }) => {
  const { author, replyCount, title, leader, name, type } = post;

  return (
    <PostBox>
      {headerTitle === "모집중인 활동" ? (
        <>
          <PostInfoItem>{name}</PostInfoItem>
          <PostInfoItem>{leader}</PostInfoItem>
          <PostInfoItem>
            {type === "MENTORING" && "멘토링"}
            {type === "STUDY" && "스터디"}
            {type === "PROJECT" && "프로젝트"}
          </PostInfoItem>
        </>
      ) : (
        <>
          <PostInfoItem>{title}</PostInfoItem>
          <PostInfoItem>{author}</PostInfoItem>
          <PostInfoItem>{replyCount}</PostInfoItem>
        </>
      )}
    </PostBox>
  );
};

const HomePostsBar = ({ headerTitle }) => {
  return (
    <PostInfoBox>
      <PostInfo>제목</PostInfo>
      {headerTitle === "모집중인 활동" ? (
        <>
          <PostInfo>활동장</PostInfo>
          <PostInfo>모집구분</PostInfo>
        </>
      ) : (
        <>
          <PostInfo>작성자</PostInfo>
          <PostInfo>댓글</PostInfo>
        </>
      )}
    </PostInfoBox>
  );
};

const HomeFeedBox = ({ post, title }) => {
  const navigate = useNavigate();
  const handlePostClick = (id) => {
    navigate(`/board/post/${id}`);
  };

  const handleMoreButtonClick = (title) => {
    switch (title) {
      case "모집중인 활동":
        navigate("/activity");
        break;
      case "인기글":
        navigate("/board");
        break;
      case "최신글":
        navigate("/board");
        break;
      default:
        break;
    }
  };

  return (
    <FeedBox>
      <FeedBoxHeader>
        <FeedTitle>{title}</FeedTitle>
        <MoreContentButton
          type="button"
          onClick={() => handleMoreButtonClick(title)}
        >
          더보기
        </MoreContentButton>
      </FeedBoxHeader>
      <div>
        <HomePostsBar headerTitle={title} />
        {Array.isArray(post) &&
          post.map((item) => (
            <PostsBox
              key={item.id}
              onClick={
                title !== "모집중인 활동"
                  ? () => handlePostClick(item.id)
                  : () => navigate(`/activity/content/${item.id}`)
              }
            >
              <HomePosts post={item} headerTitle={title} />
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

const FeedBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #74c0fc;
  color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 3rem;
  padding: 0 1rem;
`;

const MoreContentButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FeedTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  @media (max-width: 480px) {
    font-size: 0.9rem;
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
  height: 2rem;
  background-color: #f8f9fa;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  width: 20%;
  :nth-child(1) {
    width: 55%;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    :nth-child(1) {
      width: 50%;
    }
    :nth-child(2) {
      width: 20%;
    }
    :nth-child(3) {
      width: 30%;
    }
  }
`;

const PostBox = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  cursor: pointer;
  border-bottom: 1px solid #e9ecef;
`;

const PostInfoItem = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  width: 20%;
  :nth-child(1) {
    width: 56%;
    padding: 0 0.5rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
    :nth-child(1) {
      width: 50%;
    }
    :nth-child(2) {
      width: 20%;
    }
    :nth-child(3) {
      width: 30%;
    }
  }
`;
