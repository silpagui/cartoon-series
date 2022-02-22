import { WatchlistAction, WatchlistStore } from "../store.models";

const watchlistInitialState = {
  cartoons: [],
};

export function watchlistReducer(
  prevStore: WatchlistStore = watchlistInitialState,
  action: WatchlistAction
): WatchlistStore {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...prevStore,
        cartoons: prevStore.cartoons.concat(action.payload),
      };
    case "DELETE_FROM_WATCHLIST":
      return {
        ...prevStore,
        cartoons: prevStore.cartoons.filter((item) => {
          return item !== action.payload;
        }),
      };

    default:
      return prevStore;
  }
}
