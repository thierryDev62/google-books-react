import React from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = ({pageCount, perPage, setOffset}) => {

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        console.log(selectedPage)
        setOffset(selectedPage * perPage);
    };

    return (
        <div>
            <ReactPaginate
                previousLinkClassName={"page-link"}
                previousLabel={"préc"}
                nextLinkClassName={"page-link"}
                nextLabel={"suiv"}
                breakLabel={"..."}
                breakClassName={"page-link"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center mt-5"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activeClassName={"active"} />
        </div>
    );
};

export default Pagination;