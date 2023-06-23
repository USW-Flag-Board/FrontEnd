import styled from "styled-components";

const PaginationArea = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PagenitionNum = styled.li`
  font-size: 1rem;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  background-color: ${(props) => (props.selected ? "#e9ecef" : null)};
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CustomPagination = ({ totalPosts, currentPage, handlePageClick }) => {
  const totalPages = Math.ceil(totalPosts / 10);
  const visiblePags = Math.min(totalPages, 5);

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= visiblePags) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - 2, 1);
      let endPage = Math.min(startPage + visiblePags - 1, totalPages);

      if (endPage - startPage < visiblePags - 1) {
        startPage = Math.max(endPage - visiblePags + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers;
  };

  return (
    <PaginationArea>
      <PaginationBox>
        {currentPage !== 1 && (
          <PagenitionNum onClick={() => handlePageClick(currentPage - 1)}>
            {"이전"}
          </PagenitionNum>
        )}
        {getPageNumbers().map((pageNumber) => (
          <PagenitionNum
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            selected={pageNumber === currentPage}
          >
            {pageNumber}
          </PagenitionNum>
        ))}
        {currentPage !== totalPages && (
          <PagenitionNum onClick={() => handlePageClick(currentPage + 1)}>
            {"다음"}
          </PagenitionNum>
        )}
      </PaginationBox>
    </PaginationArea>
  );
};

export default CustomPagination;
