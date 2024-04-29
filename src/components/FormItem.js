function FormItem({ formData, setFormData, handleSubmit }) {
  function handleFormData(e) {
    const name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form className="formItem row" onSubmit={handleSubmit}>
      <div className="col-3">
        <label>
          Date:
          <input
            type="date"
            name="date"
            placeholder="dd/mm/yyyy"
            className="ms-2"
            value={formData.date}
            onChange={handleFormData}
          />
        </label>
      </div>
      <div className="col-3">
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="w-100"
          value={formData.description}
          onChange={handleFormData}
        />
      </div>

      <div className="col-3">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-100"
          value={formData.category}
          onChange={handleFormData}
        />
      </div>

      <div className="col-3">
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          className="w-100"
          value={formData.amount}
          onChange={handleFormData}
        />
      </div>

      <button type="submit" className="my-3 w-25 mx-auto rounded-2">
        Add Transaction
      </button>
    </form>
  );
}

export default FormItem;
