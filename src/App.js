import {useEffect, useState} from "react";
import Search from "./components/Search";
import ResultTable from "./components/ResultTable";
import axios from "axios";

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [spinnerActive, setSpinnerActive] = useState(false);

    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);

    const handleClickSearch = () => {
        if (searchValue !== '') {
            setSpinnerActive(true);
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=40`)
                .then((response) => {
                    const data = response.data.items;
                    setResultSearch(data);
                    setSpinnerActive(false);
                    setPageCount(Math.ceil(data.length / perPage))
                })
                .catch(() => {
                    console.log("Oops, request failed! Please try later...");
                });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            handleClickSearch()
        }, 200);
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className="text-center">Search for a book with the Google Books API - React</h1>
            </div>
            <Search
                setSearchValue={setSearchValue}
                setResultSearch={setResultSearch}
                handleClickSearch={handleClickSearch}
            />
            <ResultTable
                resultSearch={resultSearch}
                spinnerActive={spinnerActive}
                offset={offset}
                setOffset={setOffset}
                perPage={perPage}
                pageCount={pageCount}
                setPageCount={setPageCount}

            />
        </div>
    );
}

export default App;
