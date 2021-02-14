import {useEffect, useState} from "react";
import Search from "./components/Search";
import ResultTable from "./components/ResultTable";
import axios from "axios";

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [spinnerActive, setSpinnerActive] = useState(false);

    const handleClickSearch = () => {
        if (searchValue !== '') {
            setSpinnerActive(true);
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=40`)
                .then((response) => {
                    setResultSearch(response.data.items);
                    setSpinnerActive(false);
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
                resultSearch={resultSearch} spinnerActive={spinnerActive} />
        </div>
    );
}

export default App;
