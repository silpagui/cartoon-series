import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootReducer } from "../../store/store";
import { ButtonFav } from "../ButtonFav/ButtonFav.component";

export function CartoonList({ favorites }: { favorites?: boolean }) {
  const filters = useSelector((store: RootReducer) => store.cartoons.filter);

  const cartoonList = useSelector((store: RootReducer) => {
    const listCopy = [...store.cartoons.data];
    if (store.cartoons.sortBy === "year") {
      return listCopy.sort((a, b) => {
        if (a.year < b.year) {
          return 1;
        }
        if (a.year > b.year) {
          return -1;
        }
        return 0;
      });
    } else if (store.cartoons.sortBy === "title") {
      return listCopy.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    } else {
      return store.cartoons.data;
    }
  });

  const searchInput = useSelector(
    (store: RootReducer) => store.cartoons.searchValue
  );

  const watchlist = useSelector(
    (store: RootReducer) => store.watchlist.cartoons
  );

  const watchlistFiltered = cartoonList.filter((cartoon) =>
    watchlist.find((id) => id === cartoon.id)
  );

  const search = searchInput.toLocaleLowerCase();

  const filteredCartoons = cartoonList
    .filter(
      (cartoon) =>
        filters.creator === "" || cartoon.creator.includes(filters.creator)
    )
    .filter(
      (cartoon) => filters.genre === "" || cartoon.genre.includes(filters.genre)
    )
    .filter((cartoon) => cartoon.rating.includes(filters.rating));

  const listToBeMapped = favorites
    ? watchlistFiltered
    : filteredCartoons.filter((cartoon) =>
        cartoon.title.toLocaleLowerCase().includes(search)
      );

  return (
    <ul className="cartoon-list">
      {listToBeMapped.length ? (
        listToBeMapped.map((cartoon) => {
          return (
            <li className="cartoon-item" key={cartoon.id}>
              <span className="cartoon-item__episode">
                episodes: {cartoon.episodes}
              </span>
              <Link to={`/${cartoon.id}`} className="cartoon-item__cover">
                <span className="cartoon-item__cover__rating">
                  rating: {cartoon.rating}
                </span>
                <img src={cartoon.image} alt={`cover ${cartoon.title}`} />
              </Link>
              <h3 className="cartoon-item__title">{cartoon.title}</h3>
              <p className="cartoon-item__year">{cartoon.year}</p>
              <ButtonFav id={cartoon.id} />
            </li>
          );
        })
      ) : (
        <h3 className="error-message">There are not cartoon ):</h3>
      )}
    </ul>
  );
}
