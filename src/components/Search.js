function Search({ onHandleSearch, inputSearch }) {
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
        onChange={onHandleSearch}
      />
    </div>
  );
}

export default Search;
