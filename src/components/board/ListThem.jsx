import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useElapsedTime } from "../../hooks/useElaspedTime";

const ListThem = ({ post }) => {
  const { author, createdAt, likeCount, replyCount, title, viewCount, edited } =
    post;
  const [newPost, setNewPost] = useState(false);
  const timeAgo = useElapsedTime(
    `${createdAt[0]}-${createdAt[1]}-${createdAt[2]} ${createdAt[3]}:${createdAt[4]}:${createdAt[5]}`
  );

  useEffect(() => {
    if (
      timeAgo === "방금" ||
      timeAgo.endsWith("시간") ||
      timeAgo.endsWith("분") ||
      timeAgo.endsWith("1일")
    ) {
      setNewPost(true);
    }
  }, [timeAgo]);

  return (
    <ListThemBox>
      <NoticeBox>{newPost ? <Notice>새로운 글</Notice> : null}</NoticeBox>
      <Title>{title}</Title>
      <EditedNoticeBox className="edited-post">
        <EditedNotice>{edited ? "수정됨" : ""}</EditedNotice>
      </EditedNoticeBox>
      <PostInfoArea>
        <PostInfoBox>
          <InfoBox>
            <Icon icon={faEye} className="view" />
            <span>{viewCount}</span>
          </InfoBox>
          <InfoBox>
            <Icon icon={faComment} className="comment" />
            <span>{replyCount}</span>
          </InfoBox>
          <InfoBox>
            <Icon icon={faThumbsUp} className="like" />
            <span>{likeCount}</span>
          </InfoBox>
        </PostInfoBox>
        <PostInfoBox>
          <CreatedAt>{timeAgo}전</CreatedAt>
          <WriterName>
            <span>{author}</span>
          </WriterName>
        </PostInfoBox>
      </PostInfoArea>
    </ListThemBox>
  );
};

const ListThemBox = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #dee2e6;
  cursor: pointer;
  box-sizing: border-box;
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

const EditedNoticeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
  color: #868e96;
`;

const EditedNotice = styled.div`
  width: fit-content;
  height: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
  padding-bottom: 1.5rem;
`;

const WriterName = styled.div`
  font-size: 1rem;
  padding-left: 1rem;
`;

const CreatedAt = styled.div`
  padding-top: 0.1rem;
  font-size: 0.9rem;
  color: #868e96;
`;

const PostInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
`;

const PostInfoBox = styled.div`
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
  .like {
    color: #fcc419;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.3rem;
  padding: 0;
`;

export default ListThem;
