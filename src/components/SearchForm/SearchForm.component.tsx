import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchInputOnChange } from "../../store/actions/cartoons.actions";
import { RootReducer } from "../../store/store";

export function SearchForm() {
  const dispatch = useDispatch();
  const searchInput = useSelector(
    (store: RootReducer) => store.cartoons.searchValue
  );

  function handleOnChangeInput(event: FormEvent<HTMLInputElement>) {
    dispatch(searchInputOnChange(event.currentTarget.value));
  }
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        name="search"
        id="search"
        placeholder="Search title here"
        onChange={handleOnChangeInput}
        value={searchInput}
      />
      <button className="search-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7261 19.2913L17.832 15.3971C17.6562 15.2214 17.4179 15.1237 17.168 15.1237H16.5313C17.6093 13.7449 18.2499 12.0107 18.2499 10.1242C18.2499 5.63636 14.6135 2 10.1257 2C5.63783 2 2.00146 5.63636 2.00146 10.1242C2.00146 14.612 5.63783 18.2484 10.1257 18.2484C12.0122 18.2484 13.7464 17.6079 15.1252 16.5298V17.1665C15.1252 17.4165 15.2228 17.6547 15.3986 17.8305L19.2927 21.7246C19.6599 22.0918 20.2536 22.0918 20.6168 21.7246L21.7222 20.6193C22.0893 20.2521 22.0893 19.6584 21.7261 19.2913ZM10.1257 15.1237C7.36422 15.1237 5.12616 12.8896 5.12616 10.1242C5.12616 7.36276 7.36032 5.12469 10.1257 5.12469C12.8871 5.12469 15.1252 7.35885 15.1252 10.1242C15.1252 12.8857 12.891 15.1237 10.1257 15.1237Z"
            fill="currentColor"
          />
        </svg>
        Search
      </button>
    </form>
  );
}
