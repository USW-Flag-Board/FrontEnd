import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { Header, ListThem, Pagination, PostSearchBox } from "../../components";
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
  width: 40%;
  height: 100%;
  display: flex;
  gap: 0.3rem;
`;

const BarItem = styled.div`
  width: 100%;
  height: 100%;
  width: fit-content;
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
  font-weight: 700;
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

const SearchedPosts = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentSearchedPosts, setCurrentSearchedPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [board, setBoard] = useState(params.boardName);
  const [boardItems, setBoardItems] = useState([]);

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

  useEffect(() => {
    const handleSerchClick = async () => {
      try {
        const response = await instance.get(
          `/posts/search?board=${params.boardName}&keyword=${params.keyword}&option=${params.option}&period=${params.period}`
        );
        setSearchPosts(response.data.payload.searchResults);
      } catch (error) {
        console.log(error);
      }
    };
    handleSerchClick();
  }, [params]);

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
                      const currentBoard = boardName;
                      navigate({
                        pathname: `/board/${currentBoard}`,
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
            {currentSearchedPosts.map((searchedPost) => (
              <PostList
                key={searchedPost.id}
                onClick={() => navigate(`/board/post/${searchedPost.id}`)}
              >
                <ListThem post={searchedPost} />
              </PostList>
            ))}
            <PaginationBox>
              <Pagination
                itemsPerPage={10}
                items={searchPosts}
                setCurrentItems={setCurrentSearchedPosts}
              />
            </PaginationBox>
          </PostListBox>
        </ListArea>
      </BoardArea>
    </div>
  );
};

export default SearchedPosts;
