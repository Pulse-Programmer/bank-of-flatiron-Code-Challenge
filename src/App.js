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
    date: new Date(),
    description: "",
    category: "",
    amount: "",
  });

  function handleSearch(e) {
    setInputSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTransactionsArray([...transactionsArray, formData]);
  }

  //transactions = transactionsArray;

  const filteredTransactions = transactionsArray.filter((record) =>
    record.description.toLowerCase().includes(inputSearch.toLowerCase()),
  );

  return (
    <div className="App container">
      <header className="row bg-info">
        <h3>The Royal Bank of Flatiron</h3>
      </header>
      <Search onHandleSearch={handleSearch} inputSearch={inputSearch} />
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
