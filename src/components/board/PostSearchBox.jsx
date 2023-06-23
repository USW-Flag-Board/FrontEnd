import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  SEARCH_SELECT_ITEMS_OPTION,
  SEARCH_SELECT_ITEMS_PERIOD,
} from "../../constants/board";

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

const PostSearchArea = styled.div`
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

const PostSearchBox = ({ board }) => {
  const navigate = useNavigate();
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
    navigate(
      `/board/${board}/${searchQuery.option}/${searchQuery.period}/${searchQuery.keyword}`
    );
  };
  return (
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
      <PostSearchArea>
        <PostSearch
          type="text"
          placeholder="검색어를 입력해주세요"
          name="keyword"
          onChange={upDateSearchQuery}
          value={searchQuery.keyword}
        />
        <SearchButton type="submit" onClick={handleSubmit}>
          검색
        </SearchButton>
      </PostSearchArea>
    </SearchArea>
  );
};

export default PostSearchBox;
