const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <div className="row">
        <div className="col">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Filter By Name or Username"
                    aria-label="Search Input"
                    value={filterText}
                    onChange={onFilter}
                />
                <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={onClear}
                >
                    X
                </button>
            </div>
        </div>
    </div>
);

export default FilterComponent;