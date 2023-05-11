import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Header, ListThem } from "../../components";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";

const BulletinBoard = () => {
  const header = true;
  const navigate = useNavigate();
  const [board, setBoard] = useState("자유게시판");
  const [posts, setPosts] = useState([]);
  const [boardItems, setBoardItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handleWriteClick = () => {
    navigate("/board/write");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(
          `/posts?board=${board}&pageNumber=${pageNumber}&pageSize=3&offset=2`
        );
        const boardResponse = await instance.get("/boards?type=main");
        setBoardItems(boardResponse.data.payload.boards);
        console.log(boardResponse);
        setPosts(response.data.payload.content);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [board, pageNumber]);

  return (
    <>
      {header && <Header />}
      <BoardArea>
        <ListArea>
          <ListBar>
            <BarItemBox>
              {boardItems.map(({ id, boardName }) => (
                <BarItem
                  key={id}
                  selected={board === boardName}
                  onClick={() => setBoard(boardName)}
                >
                  {boardName}
                </BarItem>
              ))}
            </BarItemBox>
            {SessionStorage.get("UserToken") ? (
              <WriteButtonBox>
                <WriteButton onClick={handleWriteClick}>
                  <FaPen icon={faPlus} />
                  <span>글쓰기</span>
                </WriteButton>
              </WriteButtonBox>
            ) : null}
          </ListBar>
          <PostListBox>
            {posts?.map((post) => (
              <PostList key={post.id}>
                <StyledLink to={`/board/post/${post.id}`}>
                  <ListThem post={post} />
                </StyledLink>
              </PostList>
            ))}
          </PostListBox>
        </ListArea>
      </BoardArea>
    </>
  );
};

const BoardArea = styled.div`
  width: 100%;
`;

const ListArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListBar = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 8rem;
  background-color: #f1f3f5;
  display: flex;
  justify-content: space-between;
`;

const BarItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BarItem = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  margin-right: 1rem;
  background-color: ${(props) => (props.selected ? "#FFFFFF" : "#f1f3f5")};
`;

const PostListBox = styled.div`
  width: 70%;
  margin: 1rem 0;
`;

const PostList = styled.div`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const WriteButtonBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const WriteButton = styled.button`
  background-color: #339af0;
  cursor: pointer;
  color: white;
  width: 70%;
  height: 60%;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`;

const FaPen = styled(FontAwesomeIcon)`
  text-decoration: none;
  margin-right: 0.5rem;
`;

export default BulletinBoard;
