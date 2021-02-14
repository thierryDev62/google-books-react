import {useEffect, useState} from "react";
import Search from "./components/Search";
import ResultTable from "./components/ResultTable";
import axios from "axios";

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);

    const handleClickSearch = () => {
        if(searchValue !== '') {
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=40`)
                .then((response) => {
                    setResultSearch(response.data.items);
                })
                .catch(() => {
                    console.log("Oops, request failed! Please try later...");
                });
        }
    }

    useEffect(() => {
        handleClickSearch()
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
        <ResultTable resultSearch={resultSearch} />
    </div>
  );
}

export default App;
