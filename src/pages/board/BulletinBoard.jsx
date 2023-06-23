import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import {
  CustomPagination,
  Header,
  ListThem,
  PostSearchBox,
} from "../../components";
import { SessionStorage } from "../../utils/browserStorage";

const BoardArea = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const ListArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const BarArea = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  height: 3.5rem;
`;

const ListBar = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const BarItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.3rem;
`;

const BarItem = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  padding-top: 0.7rem;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selected ? "2px solid black" : "2px solid white"};
`;

const PostListBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const PostList = styled.div`
  text-decoration: none;
  :hover {
    background-color: #f8f9fa;
  }
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
  width: 7rem;
  height: 2rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    width: 4rem;
    font-size: 0.7rem;
  }
`;

const FaPen = styled(FontAwesomeIcon)`
  text-decoration: none;
  margin-right: 0.5rem;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const BulletinBoard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [board, setBoard] = useState(params.boardName);
  const [posts, setPosts] = useState([]);
  const [boardItems, setBoardItems] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (num) => {
    setCurrentPage(num);
    navigate({
      pathname: `/board/${board}`,
      search: createSearchParams({
        page: num,
      }).toString(),
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [board]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/posts?board=${board}&page=${currentPage - 1}`
        );
        setPosts(response.data.payload.content);
        setTotalPosts(response.data.payload.totalElements);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [board, currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardResponse = await instance.get("/boards?type=MAIN");
        setBoardItems(boardResponse.data.payload.boards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <BoardArea>
        <ListArea>
          <BarArea>
            <ListBar>
              <BarItemBox>
                {boardItems.map(({ id, boardName }) => (
                  <BarItem
                    key={id}
                    selected={board === boardName}
                    onClick={() => {
                      setBoard(boardName);
                      navigate({
                        pathname: `/board/${board}`,
                        search: createSearchParams({
                          page: 1,
                        }).toString(),
                      });
                    }}
                  >
                    {boardName}
                  </BarItem>
                ))}
              </BarItemBox>
              {SessionStorage.get("UserToken") ? (
                <WriteButtonBox>
                  <WriteButton onClick={() => navigate("/board/write")}>
                    <FaPen icon={faPlus} />
                    <span>글쓰기</span>
                  </WriteButton>
                </WriteButtonBox>
              ) : null}
            </ListBar>
          </BarArea>
          <PostSearchBox board={board} />
          <PostListBox>
            {posts.map((post) => (
              <PostList
                key={post.id}
                onClick={() => navigate(`/board/post/${post.id}`)}
              >
                <ListThem post={post} />
              </PostList>
            ))}
          </PostListBox>
          <PaginationBox>
            {totalPosts > 10 && (
              <CustomPagination
                totalPosts={totalPosts}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
              />
            )}
          </PaginationBox>
        </ListArea>
      </BoardArea>
    </div>
  );
};

export default BulletinBoard;
