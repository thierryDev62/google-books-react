import { useState, useEffect, useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from './Filter';
import axios from "axios";

export default function TableResult({columns, title}) {
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = users.filter(
        item =>
            (item.name.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.username.toLowerCase().includes(filterText.toLowerCase())
            )
    );

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data)
                setUsers(response.data);
            })
            .catch(() => {
                console.log("Oops, request failed! Please try later...");
            });
    }, []);

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <>
            <DataTable
                title={title}
                columns={columns}
                data={filteredItems}
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                pagination={true}
                paginationPerPage={5}
                paginationComponentOptions={{
                    noRowsPerPage: true
                }}
                highlightOnHover={true}
            />
        </>
    );
}