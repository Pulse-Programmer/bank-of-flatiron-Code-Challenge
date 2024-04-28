// import logo from './logo.svg';
import "./App.css";
import FormItem from "./components/FormItem";
import Search from "./components/Search";
import Table from "./components/Table";
import transactions from "./data/transactions";

function App() {
  return (
    <div className="App container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="row bg-info">
        <h3>The Royal Bank of Flatiron</h3>
      </header>
      <Search transactions={transactions} />
      <div className="row border p-3">
        <FormItem />
      </div>
      <Table transactions={transactions} />
    </div>
  );
}

export default App;
