import styled from "styled-components";
import { useElapsedTime } from "../../hooks/useElaspedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { SessionStorage } from "../../utils/browserStorage";

const PostComment = ({ comment }) => {
  const { content, createdAt, like, nickname, profileImage, edited } = comment;
  const timeAgo = useElapsedTime(
    `${createdAt[0]}-${createdAt[1]}-${createdAt[2]} ${createdAt[3]}:${createdAt[4]}:${createdAt[5]}`
  );
  const isLogined = SessionStorage.get("UserToken");

  return (
    <CommentBox>
      <CommentHeader>
        <WriterInfoBox>
          <WriterImg src={profileImage} />
          <WriterInfo>
            <WriterName>{nickname}</WriterName>
            <ElaspedTime>{timeAgo}전</ElaspedTime>
          </WriterInfo>
        </WriterInfoBox>
        <ButtonBox>
          {isLogined && (
            <>
              <Button type="button" className="edit-delete">
                수정
              </Button>
              <Button type="button" className="edit-delete">
                삭제
              </Button>
            </>
          )}
          <Button type="button" className="edit-delete">
            신고하기
          </Button>
          <Button type="button" className="like">
            <FontAwesomeIcon icon={faThumbsUp} className="thum" />
            <span>{like.likeCount}</span>
          </Button>
        </ButtonBox>
      </CommentHeader>
      <CommentContent>{content}</CommentContent>
    </CommentBox>
  );
};

const CommentBox = styled.div`
  width: 100%;
  background: #ffffff;
  border: 0.0625rem solid #e6eef5;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CommentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const WriterInfoBox = styled.div`
  display: flex;
  width: 70%;
`;

const WriterImg = styled.img`
  width: 3rem;
  border-radius: 50%;
`;

const WriterInfo = styled.div`
  width: calc(100% -3rem);
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const WriterName = styled.div`
  font-weight: bold;
`;

const ElaspedTime = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #777777;
`;

const CommentContent = styled.div``;

const ButtonBox = styled.div`
  width: 30%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .edit-delete {
    border: none;
  }
  .like {
    width: 30%;
    font-size: 1.1rem;
    height: 80%;
  }
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  width: fit-content;
  height: 100%;
  border-radius: 0.25rem;
  border: 1px solid #adb5bd;
  margin: 0 0.2rem;
  .thum {
    padding-right: 0.5rem;
  }
`;

export default PostComment;
