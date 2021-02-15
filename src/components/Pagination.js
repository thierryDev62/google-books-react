import React from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = ({pageCount, perPage, setOffset}) => {

    const handlePageClick = (e) => {
        setTimeout(() => {
            const selectedPage = e.selected;
            setOffset(selectedPage * perPage);
        }, 500);
        window.scrollTo({top: 0, left:0, behavior: "smooth"})
    };

    return (
        <div>
            <ReactPaginate
                previousLinkClassName={"page-link"}
                previousLabel={"prev"}
                nextLinkClassName={"page-link"}
                nextLabel={"next"}
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