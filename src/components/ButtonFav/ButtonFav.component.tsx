import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlistAction,
  deleteFromWatchlistAction,
} from "../../store/actions/watchlist.actions";
import { RootReducer } from "../../store/store";

type ButtonFavProps = {
  id: number;
};

export function ButtonFav({ id }: ButtonFavProps) {
  const dispatch = useDispatch();

  const watchlist = useSelector(
    (store: RootReducer) => store.watchlist.cartoons
  );

  const isAddedAsFav = watchlist.find((fav) => fav === id);

  return (
    <button
      className={`cartoon-item__fav ${
        isAddedAsFav ? "cartoon-item__fav--remove" : ""
      }`}
      onClick={() => {
        if (isAddedAsFav) {
          dispatch(deleteFromWatchlistAction(id));
        } else {
          dispatch(addToWatchlistAction(id));
        }
      }}
    >
      {isAddedAsFav ? (
        <svg
          width="25px"
          height="25px"
          version="1.1"
          viewBox="0 0 752 752"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m533.86 237.88c0-32.695-26.504-59.199-59.199-59.199h-197.32c-32.695 0-59.199 26.504-59.199 59.199v315.72c0 7.0352 3.7461 13.535 9.8281 17.066 6.0859 3.5312 13.586 3.5547 19.695 0.066406l128.34-73.336 128.34 73.336c6.1055 3.4883 13.609 3.4648 19.691-0.066406 6.0859-3.5312 9.832-10.031 9.832-17.066zm-217.06 78.93c-10.898 0-19.734 8.832-19.734 19.73 0 10.898 8.8359 19.734 19.734 19.734h118.39c10.898 0 19.73-8.8359 19.73-19.734 0-10.898-8.832-19.73-19.73-19.73z"
            fillRule="evenodd"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          width="25px"
          height="25px"
          version="1.1"
          viewBox="0 0 752 752"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m474.66 178.68c32.695 0 59.199 26.504 59.199 59.199v315.72c0 7.0352-3.7461 13.535-9.832 17.066-6.082 3.5312-13.586 3.5547-19.691 0.066406l-128.34-73.336-128.34 73.336c-6.1094 3.4883-13.609 3.4648-19.695-0.066406-6.082-3.5312-9.8281-10.031-9.8281-17.066v-315.72c0-32.695 26.504-59.199 59.199-59.199zm-177.59 157.86c0-10.898 8.8359-19.73 19.734-19.73h39.465v-39.465c0-10.898 8.832-19.734 19.73-19.734s19.734 8.8359 19.734 19.734v39.465h39.465c10.898 0 19.73 8.832 19.73 19.73 0 10.898-8.832 19.734-19.73 19.734h-39.465v39.465c0 10.898-8.8359 19.73-19.734 19.73s-19.73-8.832-19.73-19.73v-39.465h-39.465c-10.898 0-19.734-8.8359-19.734-19.734z"
            fillRule="evenodd"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
