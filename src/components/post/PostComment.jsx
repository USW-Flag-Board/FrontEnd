import styled from "styled-components";
import { useElapsedTime } from "../../hooks/useElaspedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { SessionStorage } from "../../utils/browserStorage";
import { useState } from "react";
import instance from "../../apis/AxiosInterceptorSetup";
import ReportModal from "../ReportModal";

const PostComment = ({ comment, postId, handleDeleteComment }) => {
  const imgUrl = process.env.REACT_APP_IMAGE_BASE_URL;

  const { content, createdAt, nickname, profileImage, edited, loginId, id } =
    comment;
  const timeAgo = useElapsedTime(
    `${createdAt[0]}-${createdAt[1]}-${createdAt[2]} ${createdAt[3]}:${createdAt[4]}:${createdAt[5]}`
  );
  const [postComment, setPostComment] = useState(content);
  const [editComment, setEditComment] = useState(content);
  const [edit, setEdit] = useState(false);
  const [editedStatus, setEditedStatus] = useState(edited);
  const [like, setLike] = useState({
    liked: comment.like.liked,
    likeCount: comment.like.likeCount,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = (state) => {
    setModalOpen(state);
  };

  const handleEditClick = async () => {
    try {
      await instance.put(`/posts/replies/${id}`, {
        newContent: editComment,
      });
      setEdit(false);
      setPostComment(editComment);
      setEditedStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeClick = async () => {
    try {
      if (!like.liked) {
        await instance.post(`/posts/replies/${id}/like`);
        setLike((prevPost) => ({
          liked: true,
          likeCount: prevPost.likeCount + 1,
        }));
      } else {
        await instance.delete(`/posts/replies/${id}/like`);
        setLike((prevPost) => ({
          liked: false,
          likeCount: prevPost.likeCount - 1,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentBox>
      {modalOpen && (
        <ReportModal
          content={content}
          type="REPLY"
          id={id}
          nickname={nickname}
          handleModalOpen={handleModalOpen}
        />
      )}
      <CommentHeader>
        <WriterInfoBox>
          <WriterImg src={imgUrl + profileImage} />
          <WriterInfo>
            <WriterName>{nickname}</WriterName>
            <ElaspedTime>
              <span>{timeAgo}전</span>
              {editedStatus ? <span>(수정됨)</span> : null}
            </ElaspedTime>
          </WriterInfo>
        </WriterInfoBox>
        <ButtonBox>
          {loginId === SessionStorage.get("User_id") ? (
            <>
              <Button
                type="button"
                className="edit-delete"
                onClick={() => setEdit(true)}
              >
                수정
              </Button>
              <Button
                type="button"
                className="edit-delete"
                onClick={() =>
                  handleDeleteComment(`/posts/${postId}/replies/${id}`)
                }
              >
                삭제
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                className="edit-delete"
                onClick={() => handleModalOpen(true)}
              >
                신고
              </Button>
            </>
          )}
          <LikeButton
            type="button"
            className="like"
            onClick={
              SessionStorage.get("User_id") ? handleLikeClick : undefined
            }
            liked={like.liked}
          >
            <FontAwesomeIcon icon={faThumbsUp} className="thum" />
            <span>{like.likeCount}</span>
          </LikeButton>
        </ButtonBox>
      </CommentHeader>
      {!edit && <CommentContent>{postComment}</CommentContent>}
      {edit && (
        <>
          <EditCommentBox>
            <CommentInputBox>
              <CommentInput
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
              />
            </CommentInputBox>
          </EditCommentBox>
          <ContentButtonBox>
            <ContentButton onClick={() => setEdit(false)}>취소</ContentButton>
            <ContentButton onClick={handleEditClick}>수정</ContentButton>
          </ContentButtonBox>
        </>
      )}
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
  width: 40%;
  @media (max-width: 480px) {
    width: 50%;
  }
`;

const WriterImg = styled.img`
  width: 3rem;
  height: 3rem;
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
  width: 40%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .edit-delete {
    border: none;
  }
  @media (max-width: 480px) {
    width: 50%;
  }
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  height: 100%;
  width: auto;
  border-radius: 0.25rem;
  border: 1px solid #adb5bd;
  margin: 0 0.2rem;
  @media (max-width: 480px) {
    width: 3rem;
  }
`;

const LikeButton = styled.button`
  color: ${(props) => (props.liked ? "#339af0" : "rgb(215, 226, 235)")};
  width: 5rem;
  font-size: 1.1rem;
  height: 80%;
  border-radius: 0.25rem;
  border: 1px solid #adb5bd;
  background: none;
  cursor: pointer;
  .thum {
    padding-right: 0.5rem;
  }
`;

const EditCommentBox = styled.div`
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
  gap: 1rem;
`;

const ContentButton = styled.button`
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  width: 5rem;
  height: 100%;
  border: none;
  padding: 0.3rem 0 0 0;
  cursor: pointer;
  background-color: #ced4da;
  color: black;
  :nth-child(2) {
    background-color: #339af0;
    color: white;
  }
`;

export default PostComment;
