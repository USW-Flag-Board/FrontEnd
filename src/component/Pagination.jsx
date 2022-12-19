import React, { useState } from 'react';
import ReactPaginate from "react-paginate";

const Pagination = () => {
    return (
        <ReactPaginate 
            pageCount={10}
            pageRangeDisplayed={8}
            breakLabel={""}
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            // onPageChange={changePage}
            containerClassName={"pagination-ul"}
            activeClassName={"currentPage"}
            previousClassName={"pageLabel-btn"}
            nextClassName={"pageLabel-btn"}
        />
    )
}

export default Pagination;
