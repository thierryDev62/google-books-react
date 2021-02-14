import React, {useState} from 'react';
import Moment from 'moment';
import noCover from '../images/no-cover.jpg';
import Pagination from "./Pagination";

const ResultTable = ({resultSearch, offset, perPage}) => {
    const [data, setData] = useState([]);
    const slice = resultSearch.slice(offset, offset + perPage)

    console.log(slice)

    return (
        <>
            {resultSearch ?
                resultSearch.length !== 0 &&
                <div className="row mt-5">
                    <table className="table table-responsive table-success table-striped">
                        <thead>
                        <tr className="text-center" style={{verticalAlign: 'middle'}}>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Author(s)</th>
                            <th scope="col">Publisher</th>
                            <th scope="col">Published date</th>
                            <th scope="col">ISBN</th>
                            <th scope="col">Page count</th>
                            <th scope="col">Image</th>
                            <th scope="col">Language</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {resultSearch.map(book => (
                            <tr key={book.id}>
                                <td>{book.volumeInfo.title && book.volumeInfo.title.length > 200 ? book.volumeInfo.title.substr(0, 200) + ' (...)' : book.volumeInfo.title}</td>
                                <td>{book.volumeInfo.description && book.volumeInfo.description.length > 200 ? book.volumeInfo.description.substr(0, 200) + ' (...)' : book.volumeInfo.description}</td>
                                <td>
                                    {
                                        book.volumeInfo.authors &&
                                        book.volumeInfo.authors.map((author, index) => (
                                            <li key={index}>{author}</li>
                                        ))}
                                </td>
                                <td>{book.volumeInfo.publisher}</td>
                                <td>{
                                    Moment(book.volumeInfo.publishedDate)
                                        .format('YYYY')
                                }
                                </td>
                                <td>
                                    {
                                        book.volumeInfo.industryIdentifiers &&
                                        book.volumeInfo.industryIdentifiers.map((isbn, index) => (
                                            <li key={index}>{isbn.type}: {isbn.identifier}</li>
                                        ))
                                    }
                                </td>
                                <td>{book.volumeInfo.pageCount}</td>
                                <td><img src={
                                    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                                        book.volumeInfo.imageLinks.thumbnail : noCover
                                }
                                         alt="{book.volumeInfo.title}"/></td>
                                <td className="text-center">{book.volumeInfo.language}</td>
                                <td><a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer noopener">
                                    <div className="btn btn-secondary shadow-lg">Info</div>
                                </a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div> :
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="alert alert-danger mt-3 text-center fw-bold" role="alert">
                            Sorry no result!
                        </div>
                    </div>
                </div>}
                <div className="row">
                    <Pagination />
                </div>
    </>
    );
};

export default ResultTable;