import React, {useState} from 'react';
import axios from "axios";

const Search = ({setResultSearch}) => {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (value) => {
        setSearchValue(value);
    }

    const handleClickSearch = () => {

        if(searchValue !== '') {
            axios
                .get("https://www.googleapis.com/books/v1/volumes?q=" + searchValue + "&maxResults=40")
                .then((response) => {
                    setResultSearch(response.data.items);
                })
                .catch(() => {
                    console.log("Oops, request failed! Please try later...");
                });
        }
    }

    return (
        <>
            <div className="row mt-5">
                <h2 className="text-center">Search for a book</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Please type a title, author, ..." onChange={e => handleChange(e.target.value)}/>
                        <button className="input-group-text" id="search" onClick={handleClickSearch}>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;