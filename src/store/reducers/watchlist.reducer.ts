import { WatchlistStore } from "../store.models";

const watchlistInitialState = {
  cartoons: [],
};

export function watchlistReducer(
  prevStore: WatchlistStore = watchlistInitialState
  // action: WatchlistAction
): WatchlistStore {
  return prevStore;
}
