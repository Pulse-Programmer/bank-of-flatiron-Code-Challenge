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
            className="ms-2 rounded-2"
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
          className="w-100 rounded-2"
          value={formData.description}
          onChange={handleFormData}
          onFocus={(e) =>
            (e.target.className = "bg-dark text-white rounded-2 w-100")
          }
          onBlur={(e) =>
            (e.target.className = "bg-white text-dark rounded-2 w-100")
          }
          required
        />
      </div>

      <div className="col-3">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-100 rounded-2"
          value={formData.category}
          onChange={handleFormData}
          onFocus={(e) =>
            (e.target.className = "bg-dark text-white rounded-2 w-100")
          }
          onBlur={(e) =>
            (e.target.className = "bg-white text-dark rounded-2 w-100")
          }
          required
        />
      </div>

      <div className="col-3">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="w-100 rounded-2"
          value={formData.amount}
          onChange={handleFormData}
          onFocus={(e) =>
            (e.target.className = "bg-dark text-white rounded-2 w-100")
          }
          onBlur={(e) =>
            (e.target.className = "bg-white text-dark rounded-2 w-100")
          }
        />
      </div>

      <button
        type="submit"
        className="my-3 w-25 mx-auto rounded-2 bg-secondary text-white"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default FormItem;
