import Search from "./components/Search";
import ResultTable from "./components/ResultTable";
import {useState} from "react";
import TableResult from "./components/TableResult";
import { columns, title } from "./components/data";

function App() {
    const [resultSearch, setResultSearch] = useState([]);

  return (
    <div className="container-fluid">
        <div className="row">
            <h1 className="text-center">Search for a book with the Google Books API - React</h1>
        </div>
        <Search setResultSearch={setResultSearch} />
        <ResultTable resultSearch={resultSearch} />

        <TableResult title={title} columns={columns} />
    </div>
  );
}

export default App;
