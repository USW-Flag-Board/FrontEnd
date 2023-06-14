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
    font-weight: bold;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
  .disabled {
    color: #e9ecef;
  }
  .active {
    color: blue;
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
        breakLabel={""}
        nextLabel={">"}
        previousLabel={"<"}
        containerClassName={"pagination"}
        onPageChange={handlePageClick}
        disabledClassName="disabled"
      />
    </StyledPaginateContainer>
  );
};

export default Pagination;
