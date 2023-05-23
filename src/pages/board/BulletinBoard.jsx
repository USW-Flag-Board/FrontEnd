import { useState, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Header, ListThem } from "../../components";
import { SessionStorage } from "../../utils/browserStorage";
import instance from "../../apis/AxiosInterceptorSetup";
import {
  SEARCH_SELECT_ITEMS_OPTION,
  SEARCH_SELECT_ITEMS_PERIOD,
} from "../../constants/board";

const BulletinBoard = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState("자유게시판");
  const [posts, setPosts] = useState([]);
  const [boardItems, setBoardItems] = useState([]);
  const [pageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState({
    keyword: "",
    option: "CONTENT_AND_REPLY",
    period: "ALL",
  });

  const handleWriteClick = () => {
    navigate("/board/write");
  };

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

  const handleSerchClick = async () => {
    const { keyword, option, period } = searchQuery;
    try {
      const response = await instance.get(
        `/posts/search?board=${board}&keyword=${keyword}&option=${option}&period=${period}`
      );
      console.log(response.data.payload);
    } catch (error) {
      console.lop(error);
    }
  };

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(
          `/posts?board=${board}&page=0&size=10&sort=desc`
        );
        const boardResponse = await instance.get("/boards?type=main");
        setBoardItems(boardResponse.data.payload.boards);
        setPosts(response.data.payload.content);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [board]);

  return (
    <>
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
          </BarArea>
          <PostListBox>
            {posts?.map((post) => (
              <PostList key={post.id}>
                <StyledLink to={`/board/post/${post.id}`}>
                  <ListThem post={post} />
                </StyledLink>
              </PostList>
            ))}
          </PostListBox>
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

const BarArea = styled.div`
  width: 100%;
  justify-content: center;
  background-color: #f1f3f5;
  display: flex;
  height: 3.5rem;
`;
const ListBar = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const BarItemBox = styled.div`
  width: 40%;
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
  min-height: 50rem;
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
  height: 2rem;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`;

const FaPen = styled(FontAwesomeIcon)`
  text-decoration: none;
  margin-right: 0.5rem;
`;

const SelectBox = styled.form`
  display: flex;
  gap: 0.6rem;
  margin: 1rem 0;
`;

const Select = styled.select`
  padding: 0.7rem;
`;

const PostSearchBox = styled.div`
  display: flex;
`;

const PostSearch = styled.input`
  padding: 0.7rem;
`;

const SearchButton = styled.button`
  width: 4rem;
  background-color: #339af0;
  border: none;
  cursor: pointer;
  color: #fff;
`;

export default BulletinBoard;
