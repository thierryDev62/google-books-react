import React from 'react';
import Moment from 'moment';
import noCover from '../images/no-cover.jpg';

const ResultTable = ({resultSearch}) => {

    return (
        resultSearch ?
            resultSearch.length !== 0  &&
            <div className="row mt-5">
                <table className="table table-success table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author(s)</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Published date</th>
                        <th scope="col">ISBN 10</th>
                        <th scope="col">ISBN 13</th>
                        <th scope="col">Page count</th>
                        <th scope="col">Image</th>
                        <th scope="col">Language</th>
                    </tr>
                    </thead>
                    <tbody>
                    { resultSearch.map(book => (
                        <tr key={book.id}>
                            <td>{book.volumeInfo.title && book.volumeInfo.title}</td>
                            <td>
                                {
                                    book.volumeInfo.authors &&
                                    book.volumeInfo.authors.map(author => (
                                        author
                                    ))}
                            </td>
                            <td>{book.volumeInfo.publisher}</td>
                            <td>{
                                Moment(book.volumeInfo.publishedDate)
                                    .format('DD/MM/YYYY')
                            }
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>{book.volumeInfo.pageCount}</td>
                            <td><img src={
                                book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                                    book.volumeInfo.imageLinks.thumbnail : noCover
                            }
                                     alt="{book.volumeInfo.title}"/></td>
                            <td className="text-center">{book.volumeInfo.language}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div> :
            <p>No result</p>
    );
};

export default ResultTable;