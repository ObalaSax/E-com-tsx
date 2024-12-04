import "./Sidepanel.css";
function Sidepanel() {
  return (
    <div className="sidepanel">
      <div className="sidepanel-container">
        <div className="sidepanel-search">
          <input type="text" placeholder="Search" />
        </div>
        {/*---------Inputs for maximum and minimum-----------------*/}
        <div className="sidepanel-prices">
          <input type="number" placeholder="Min." />
          <input type="number" placeholder="Max." />
        </div>
        {/*---------Inputs for category-----------------*/}
        <div className="sidepanel-category">
          <hr />
          <h2>Category</h2>

          <label>
            <input type="radio" name="category" />
          </label>
        </div>
        {/*---------RESET BUTTON-----------------*/}
        <div className="sidepanel-reset-btn">
          <hr />
          <button>Reset Filters</button>
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
