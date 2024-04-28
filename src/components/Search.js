import { useState } from "react";

function Search({ transactions }) {
  const [inputSearch, setInputSearch] = useState("");

  function handleSearch(e) {
    setInputSearch(e.target.value);
  }

  transactions = transactions.filter((record) =>
    record.description.toLowerCase().includes(inputSearch.toLowerCase()),
  );

  return (
    <div className="searchFilter row my-2">
      <input
        type="text"
        name="search"
        className="rounded-2"
        placeholder="Search your Recent Transactions"
        onFocus={(e) => (e.target.className = "bg-dark text-white rounded-2")}
        onBlur={(e) => (e.target.className = "bg-white text-dark rounded-2")}
        value={inputSearch}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
