import React from 'react';

const Spinner = ({spinnerActive}) => {
    return (
        spinnerActive && <div className="spinner-grow text-secondary" role="status"><span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Spinner;