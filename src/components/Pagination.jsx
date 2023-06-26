import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  li {
    display: flex;
    border: 1px solid #adb5bd;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
  .disabled {
    color: #e9ecef;
  }
  .active {
    border: 1px solid #339af0;
    color: #339af0;
  }
  .off-previous {
    display: none;
  }
  .off-next {
    display: none;
  }
`;

const Pagination = ({ itemsPerPage, items, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil((items.length ?? 0) / itemsPerPage));
  }, [itemOffset, itemsPerPage, setCurrentItems, items]);

  const handlePageClick = (e) => {
    setItemOffset((e.selected * itemsPerPage) % items.length);
  };
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        pageCount={pageCount}
        activeClassName="active"
        pageRangeDisplayed={itemsPerPage}
        breakLabel="..."
        nextLabel="다음"
        previousLabel="이전"
        previousClassName={items.length === 0 ? "off-previous" : null}
        nextClassName={items.length === 0 ? "off-next" : null}
        containerClassName="pagination"
        onPageChange={handlePageClick}
        disabledClassName="disabled"
      />
    </StyledPaginateContainer>
  );
};

export default Pagination;
