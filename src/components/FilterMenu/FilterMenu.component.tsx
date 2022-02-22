import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAllCartoonsAction,
  resetFiltersAction,
} from "../../store/actions/cartoons.actions";
import { RootReducer } from "../../store/store";

function accumulateUniques(acc: string[], item: string) {
  if (!acc.includes(item)) {
    return acc.concat(item);
  } else {
    return acc;
  }
}

export function FilterMenu() {
  const dispatch = useDispatch();
  const cartoons = useSelector((store: RootReducer) => store.cartoons.data);
  const filter = useSelector((store: RootReducer) => store.cartoons.filter);

  let creators: string[] = [];
  let ratings: string[] = [];
  let genres: string[] = [];

  cartoons.forEach((cartoon) => {
    creators = creators.concat(cartoon.creator);
    ratings = ratings.concat(cartoon.rating);
    genres = genres.concat(cartoon.genre);
  });

  creators = creators.reduce<string[]>(accumulateUniques, []);
  ratings = ratings.reduce<string[]>(accumulateUniques, []);
  genres = genres.reduce<string[]>(accumulateUniques, []);

  function handleFilterOnChange(event: FormEvent<HTMLSelectElement>) {
    const element = event.currentTarget;
    const id = element.id;
    const value = element.value;

    dispatch(
      filterAllCartoonsAction({
        ...filter,
        [id]: value,
      })
    );
  }

  function handleResetFilters() {
    dispatch(resetFiltersAction());
  }

  return (
    <div className="submenu submenu--filter">
      <h2>Filter By</h2>
      <button className="reset-filters-button" onClick={handleResetFilters}>
        reset filters
      </button>
      <form className="form-filter">
        <div className="field-select">
          <label htmlFor="creator">Creator</label>
          <select
            name="creator"
            id="creator"
            value={filter.creator}
            onChange={handleFilterOnChange}
          >
            <option disabled value="">
              Select
            </option>
            {creators.map((creator) => {
              return (
                <option value={creator} key={creator}>
                  {creator}
                </option>
              );
            })}
          </select>
        </div>
        <div className="field-select">
          <label htmlFor="genre">Genre</label>
          <select
            name="genre"
            id="genre"
            onChange={handleFilterOnChange}
            value={filter.genre}
          >
            <option disabled value="">
              Select
            </option>
            {genres.map((genre) => {
              return (
                <option value={genre} key={genre}>
                  {genre}
                </option>
              );
            })}
          </select>
        </div>
        <div className="field-select">
          <label htmlFor="rating">Rating</label>
          <select
            name="rating"
            id="rating"
            onChange={handleFilterOnChange}
            value={filter.rating}
          >
            <option disabled value="">
              Select
            </option>
            {ratings.map((rating) => {
              return (
                <option value={rating} key={rating}>
                  {rating}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
