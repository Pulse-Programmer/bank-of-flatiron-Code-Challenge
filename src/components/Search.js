function Search({ onHandleSearch, inputSearch, onCategoryChange }) {
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

      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="income">Income</option>
        <option value="food">Food</option>
        <option value="fashion">Fashion</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </div>
  );
}

export default Search;
