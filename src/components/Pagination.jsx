import ReactPaginate from "react-paginate";
import { useState } from 'react';
import styled from "styled-components";

const Pagination = () => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    
    return (
        <StyledPaginateContainer>
            <ReactPaginate
                pageCount={10}
                pageRangeDisplayed={8}
                breakLabel={""}
                previousLabel={"< PREV"}
                nextLabel={"NEXT >"}
                // onPageChange={changePage}
                containerClassName={"pagination"}
                previousClassName={"pageLabel-btn"}
                nextClassName={"pageLabel-btn"}
            />
        </StyledPaginateContainer>
    )
}

const StyledPaginateContainer = styled.div`
    .pagination{
        display: flex;
    }
    li{ 
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.6rem;
        font-size: 1rem;
        padding: 0.4rem 0.6rem;
        cursor: pointer;
        &:hover{
            border-radius: 7px;
            background-color: #4B4B4B;
        }
    }
`;

export default Pagination;
