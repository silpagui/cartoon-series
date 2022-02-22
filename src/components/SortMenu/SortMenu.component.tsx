import React from "react";
import { useDispatch } from "react-redux";
import { sortByAction } from "../../store/actions/cartoons.actions";

export function SortMenu() {
  const dispatch = useDispatch();

  return (
    <div className="submenu">
      <h2>Sort By</h2>
      <form className="form-sort">
        <div className="field-radio">
          <input
            type="radio"
            id="year"
            name="sortBy"
            value="year"
            onChange={() => {
              dispatch(sortByAction("year"));
            }}
          />
          <label htmlFor="year">Year</label>
        </div>
        <div className="field-radio">
          <input
            type="radio"
            id="title"
            name="sortBy"
            value="title"
            onChange={() => {
              dispatch(sortByAction("title"));
            }}
          />
          <label htmlFor="title">Title</label>
        </div>
      </form>
    </div>
  );
}
