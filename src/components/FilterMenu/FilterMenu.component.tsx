import React from "react";

export function FilterMenu() {
  return (
    <div className="submenu submenu--filter">
      <h2>Filter By</h2>
      <button className="reset-filters-button">reset filters</button>
      <form className="form-filter">
        <div className="field-select">
          <label htmlFor="creator">Creator</label>
          <select name="creator" id="creator" defaultValue="">
            <option disabled value="">
              Select
            </option>
            <option value="Peter">Peter</option>
            <option value="Man">Man</option>
          </select>
        </div>
        <div className="field-select">
          <label htmlFor="genre">Genre</label>
          <select name="genre" id="genre" defaultValue="">
            <option disabled value="">
              Select
            </option>
            <option value="Peter">Peter</option>
            <option value="Man">Man</option>
          </select>
        </div>
        <div className="field-select">
          <label htmlFor="rating">Rating</label>
          <select name="rating" id="rating" defaultValue="">
            <option disabled value="">
              Select
            </option>
            <option value="Peter">Peter</option>
            <option value="Man">Man</option>
          </select>
        </div>
      </form>
    </div>
  );
}
