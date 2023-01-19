import styled from "styled-components";
import ListThem from "../components/ListThem";
import SideBar from "../components/SideBar";
import LikeButton from "../components/LikeButton";

const DetailWritePage = () => {
  const itemContents = [
    "공지",
    "자유게시판 공지입니다.",
    "문희조",
    "2022.08.03",
    "1234",
    "123",
  ];
  const boardItem = ["스터디", "프로젝트"];

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
          items={boardItem}
          paddingTop="0"
          borderRadius="0 15px 15px 0"
        />
        <PostArea>
          <PostBox>
            <ListThem themList={itemContents} />
            <PostContentBox>
              <PostContentSort>
                <PostHeader style={{}}>
                  <PostHeaderLeftArea>
                    <PostAuthor>글쓴이 {itemContents[2]}</PostAuthor>
                    <PostTime>{itemContents[3]} 22:07</PostTime>
                  </PostHeaderLeftArea>
                  <PostHeaderRightArea>
                    <PostModify>수정하기</PostModify>
                    <PostDelete>삭제하기</PostDelete>
                  </PostHeaderRightArea>
                </PostHeader>
                <PostContentTitle>{itemContents[1]}</PostContentTitle>
                <PostContent>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </PostContent>
                <PostViews>view {itemContents[4]}</PostViews>
                <PostLike>
                  <LikeButton />
                  {itemContents[5]}
                </PostLike>
              </PostContentSort>
            </PostContentBox>
            <RelativeArea>
              <ReplyButton
                type="text"
                placeholder="댓글을 입력하세요."
              ></ReplyButton>
              <AddIcon>dd</AddIcon>
            </RelativeArea>
            <ReplyArea>
              <ReplyContent>여기에 댓글 컴포넌트 넣을 예정</ReplyContent>
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

const PostContent = styled.div``

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
  ::placeholder{
    color: #ffffffcc;
  };
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

export default DetailWritePage;
