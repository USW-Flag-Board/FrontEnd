import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
  }
  li {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.6rem;
    font-size: 1rem;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    &:hover {
      border-radius: 7px;
      background-color: #4b4b4b;
    }
  }
`;

const Pagination = ({ itemsPerPage, items, updateCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    updateCurrentItems("", items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil((items.length ?? 0) / itemsPerPage));
  }, [itemOffset, itemsPerPage, updateCurrentItems, items]);

  const handlePageClick = (e) => {
    setItemOffset((e.selected * itemsPerPage) % items.length);
  };
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={itemsPerPage}
        breakLabel={""}
        previousLabel={"< PREV"}
        nextLabel={"NEXT >"}
        containerClassName={"pagination"}
        previousClassName={"pageLabel-btn"}
        nextClassName={"pageLabel-btn"}
        onPageChange={handlePageClick}
      />
    </StyledPaginateContainer>
  );
};

export default Pagination;
