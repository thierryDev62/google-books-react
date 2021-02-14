import React from 'react';

const Search = ({setSearchValue, handleClickSearch}) => {

    const handleChange = (value) => {
        setSearchValue(value);
    }

    const handlePwdKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleClickSearch()
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Please type a title, author, ..."
                            onChange={e => handleChange(e.target.value)}
                            onKeyUp={handlePwdKeyUp}
                        />
                        <button className="input-group-text" id="search" onClick={handleClickSearch}>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;