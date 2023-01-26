import ReactPaginate from "react-paginate";
import { useEffect, useState } from 'react';
import styled from "styled-components";

const Pagination = ({itemsPerPage, items}) => {
    const [pageCount, setPageCount] = useState(0) // 검색결과에 따라 다름
    const [itemOffset, setItemOffset] = useState(0) // 데이터를 가져왔는데 어디서부터 어디까지 자를건지
    const [currentItems, setCurrentItems] = useState([]);
    
    useEffect(()=>{
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset))
            setPageCount(Math.ceil((items.length ?? 0) / itemsPerPage))
    },[itemOffset, itemsPerPage, setCurrentItems, items])

    const handlePageClick = (e)=>{
      setItemOffset((e.selected * itemsPerPage) % items.length)
    }

    return (
        <StyledPaginateContainer>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={8}
                breakLabel={""}
                previousLabel={"< PREV"}
                nextLabel={"NEXT >"}
                // onPageChange={changePage}
                containerClassName={"pagination"}
                previousClassName={"pageLabel-btn"}
                nextClassName={"pageLabel-btn"}
                onPageChange={handlePageClick}
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
