import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/AxiosInterceptorSetup";
import {
  CustomPagination,
  Header,
  ListThem,
  Pagination,
} from "../../components";
import {
  SEARCH_SELECT_ITEMS_OPTION,
  SEARCH_SELECT_ITEMS_PERIOD,
} from "../../constants/board";
import { SessionStorage } from "../../utils/browserStorage";

const BulletinBoard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [board, setBoard] = useState("자유게시판");
  const [posts, setPosts] = useState([]);
  const [currentSearchedPosts, setCurrentSearchedPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [boardItems, setBoardItems] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearched, setIsSearched] = useState(false);
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
    navigate({
      pathname: `/board/${board}`,
      search: createSearchParams({
        search: searchQuery.keyword,
      }).toString(),
    });
    handleSerchClick();
  };

  const handlePageClick = (num) => {
    setCurrentPage(num);
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
      setSearchPosts(response.data.payload.searchResults);
      setIsSearched(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setIsSearched(false);
  }, [board]);

  useEffect(() => {
    handleSerchClick();
  }, [params]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/posts?board=${board}&page=${currentPage - 1}`
        );
        const boardResponse = await instance.get("/boards?type=MAIN");
        setBoardItems(boardResponse.data.payload.boards);
        setPosts(response.data.payload.content);
        setTotalPosts(response.data.payload.totalElements);
        setIsSearched(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [board, currentPage]);

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
          <SearchArea onSubmit={handleSubmit}>
            <SelectBox>
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
            </SelectBox>
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
          </SearchArea>
          <PostListBox>
            {!isSearched &&
              posts.map((post) => (
                <PostList
                  key={post.id}
                  onClick={() => navigate(`/board/post/${post.id}`)}
                >
                  <ListThem post={post} />
                </PostList>
              ))}
            {isSearched &&
              currentSearchedPosts.map((searchedPost) => (
                <PostList
                  key={searchedPost.id}
                  onClick={() => navigate(`/board/post/${searchedPost.id}`)}
                >
                  <ListThem post={searchedPost} />
                </PostList>
              ))}
          </PostListBox>
          {searchPosts.length > 10 && isSearched && (
            <Pagination
              itemsPerPage={10}
              items={searchPosts}
              setCurrentItems={setCurrentSearchedPosts}
            />
          )}
          {totalPosts > 10 && !isSearched && (
            <CustomPagination
              totalPosts={totalPosts}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
            />
          )}
        </ListArea>
      </BoardArea>
    </div>
  );
};

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
  width: 60%;
  margin-bottom: 1rem;
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

const SearchArea = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem 0;
  background-color: #f8f9fa;
  width: 60%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const Select = styled.select`
  padding: 0.7rem;
  width: 49.3%;
  border-radius: 4px;
  border: 1px solid #ced4da;
  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PostSearchBox = styled.div`
  display: flex;
  width: 100%;
`;

const PostSearch = styled.input`
  padding: 0.7rem;
  width: 80%;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const SearchButton = styled.button`
  width: 20%;
  background-color: #339af0;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 0 4px 4px 0;
`;

export default BulletinBoard;
