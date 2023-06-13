import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import { Header, ListThem } from "../../components";
import {
  SEARCH_SELECT_ITEMS_OPTION,
  SEARCH_SELECT_ITEMS_PERIOD,
} from "../../constants/board";
import { SessionStorage } from "../../utils/browserStorage";

const BulletinBoard = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState("자유게시판");
  const [posts, setPosts] = useState([]);
  const [boardItems, setBoardItems] = useState([]);
  const [page, setPage] = useState({
    pageNumber: 1,
    totalPages: 0,
    pagination: [],
  });
  const [searchQuery, setSearchQuery] = useState({
    keyword: "",
    option: "TITLE",
    period: "ALL",
  });
  const upDateSearchQuery = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSerchClick();
  };

  const handlePageClick = (num) => {
    setPage((prev) => ({
      ...prev,
      pageNumber: num,
    }));
    navigate({
      pathname: `/board/${board}`,
      search: createSearchParams({
        page: num,
      }).toString(),
    });
  };

  const handleSerchClick = async () => {
    const { keyword, option, period } = searchQuery;
    try {
      const response = await instance.get(
        `/posts/search?board=${board}&keyword=${keyword}&option=${option}&period=${period}`
      );
      setPosts(response.data.payload.searchResults);
    } catch (error) {
      console.lop(error);
    }
  };

  useEffect(() => {
    setPage((prevPage) => ({
      ...prevPage,
      pageNumber: 1,
    }));
  }, [board]);

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(
          `/posts?board=${board}&page=${page.pageNumber - 1}`
        );
        const boardResponse = await instance.get("/boards?type=MAIN");
        setBoardItems(boardResponse.data.payload.boards);
        setPosts(response.data.payload.content);
        setPage((prevPage) => ({
          ...prevPage,
          totalPages: response.data.payload.totalPages,
          pagination: [...Array(response.data.payload.totalPages).keys()].map(
            (num) => num + 1
          ),
        }));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [board, page.pageNumber]);

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
                        pathname: `/board/${boardName}`,
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
          <PostListBox>
            {posts?.map((post) => (
              <PostList
                key={post.id}
                onClick={() => navigate(`/board/post/${post.id}`)}
              >
                <ListThem post={post} />
              </PostList>
            ))}
          </PostListBox>
          <PaginationArea>
            <PaginationBox>
              {page.pagination.map((num) => (
                <PagenitionNum key={num} onClick={() => handlePageClick(num)}>
                  {num}
                </PagenitionNum>
              ))}
            </PaginationBox>
          </PaginationArea>
          {posts.length !== 0 && (
            <SelectBox onSubmit={handleSubmit}>
              <Select
                name="period"
                onChange={upDateSearchQuery}
                value={searchQuery.period}
              >
                {SEARCH_SELECT_ITEMS_PERIOD.map(({ id, option, value }) => (
                  <option key={id} value={value}>
                    {option}
                  </option>
                ))}
              </Select>
              <Select
                name="option"
                onChange={upDateSearchQuery}
                value={searchQuery.option}
              >
                {SEARCH_SELECT_ITEMS_OPTION.map(({ id, option, value }) => (
                  <option key={id} value={value}>
                    {option}
                  </option>
                ))}
              </Select>
              <PostSearchBox>
                <PostSearch
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  name="keyword"
                  onChange={upDateSearchQuery}
                  value={searchQuery.keyword}
                />
                <SearchButton type="submit" onClick={handleSerchClick}>
                  검색
                </SearchButton>
              </PostSearchBox>
            </SelectBox>
          )}
        </ListArea>
      </BoardArea>
    </div>
  );
};

const BoardArea = styled.div`
  width: 100%;
  margin-bottom: 10rem;
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
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const BarItemBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  gap: 0.3rem;
`;

const BarItem = styled.div`
  height: 100%;
  width: 4rem;
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
  width: 70%;
  margin: 1rem 0;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const PostList = styled.div`
  text-decoration: none;
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

const SelectBox = styled.form`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1rem;
  width: 70%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const Select = styled.select`
  padding: 0.7rem;
  @media screen and (max-width: 480px) {
    width: 6rem;
    font-size: 0.5rem;
  }
`;

const PostSearchBox = styled.div`
  display: flex;
`;

const PostSearch = styled.input`
  padding: 0.7rem;
  @media screen and (max-width: 480px) {
    width: 8rem;
    font-size: 0.6rem;
  }
`;

const SearchButton = styled.button`
  width: 4rem;
  background-color: #339af0;
  border: none;
  cursor: pointer;
  color: #fff;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const PaginationArea = styled.div`
  margin-bottom: 1rem;
  height: 3rem;
  width: 70%;
  display: flex;
  align-items: center;
`;

const PaginationBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const PagenitionNum = styled.li`
  font-size: 1rem;
  padding: 0.4rem;
  cursor: pointer;
  font-weight: 700;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default BulletinBoard;
