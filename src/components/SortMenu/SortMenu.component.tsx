import React from "react";

export function SortMenu() {
  return (
    <div className="submenu">
      <h2>Sort By</h2>
      <form className="form-sort">
        <div className="field-radio">
          <input type="radio" id="year" name="sortBy" value="year" />
          <label htmlFor="year">Year</label>
        </div>
        <div className="field-radio">
          <input type="radio" id="title" name="sortBy" value="title" />
          <label htmlFor="title">Title</label>
        </div>
      </form>
    </div>
  );
}
