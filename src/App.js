// import logo from './logo.svg';
import "./App.css";
import FormItem from "./components/FormItem";
import Search from "./components/Search";
import Table from "./components/Table";
import transactions from "./data/transactions";
import { useState } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [transactionsArray, setTransactionsArray] = useState(transactions);
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "Food",
    amount: 10,
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearch(e) {
    setInputSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTransactionsArray([...transactionsArray, formData]);
  }

  //filters by category
  let transactionsCategory = transactionsArray.filter((transaction) => {
    if (selectedCategory === "All") return true;
    return transaction.category.toLowerCase() === selectedCategory;
  });

  //search filter by description
  let filteredTransactions = transactionsCategory.filter((record) =>
    record.description.toLowerCase().includes(inputSearch.toLowerCase()),
  );

  return (
    <div className="App container">
      <header className="row bg-dark text-white">
        <h3>The Royal Bank of Flatiron</h3>
      </header>
      <Search
        onHandleSearch={handleSearch}
        inputSearch={inputSearch}
        onCategoryChange={handleCategoryChange}
      />
      <div className="row border p-3">
        <FormItem
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
      <Table transactions={filteredTransactions} />
    </div>
  );
}

export default App;
