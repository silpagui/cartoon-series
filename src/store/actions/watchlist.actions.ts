import {
  AddToWatchlistAction,
  DeleteFromWatchlistAction,
} from "../store.models";

export function addToWatchlistAction(cartoons: number): AddToWatchlistAction {
  return {
    type: "ADD_TO_WATCHLIST",
    payload: cartoons,
  };
}

export function deleteFromWatchlistAction(
  cartoons: number
): DeleteFromWatchlistAction {
  return {
    type: "DELETE_FROM_WATCHLIST",
    payload: cartoons,
  };
}
