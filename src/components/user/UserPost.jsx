import styled from "styled-components";

const PostBox = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.8rem;

  justify-content: center;
  height: 2rem;
  cursor: pointer;
`;

const PostTitle = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostDate = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostWriter = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserPost = ({ title, date, writer }) => {
  return (
    <PostBox>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date.slice(0, 3).join(".")}</PostDate>
      <PostWriter>{writer}</PostWriter>
    </PostBox>
  );
};

export default UserPost;
