function FormItem() {
  return (
    <form className="formItem row">
      <div className="col-3">
        <label>
          Date:
          <input
            type="date"
            name="date"
            placeholder="dd/mm/yyyy"
            className="ms-2"
          />
        </label>
      </div>
      <div className="col-3">
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="w-100"
        />
      </div>

      <div className="col-3">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-100"
        />
      </div>

      <div className="col-3">
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          className="w-100"
        />
      </div>

      <button type="submit" className="my-3 w-25 mx-auto rounded-2">
        Add Transaction
      </button>
    </form>
  );
}

export default FormItem;
