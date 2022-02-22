import { Dispatch } from "react";

export type Cartoon = {
  title: string;
  year: number;
  creator: string[];
  rating: string;
  genre: string[];
  episodes: number;
  image: string;
  id: number;
};

export type FilterBy = {
  creator: string;
  genre: string;
  rating: string;
};

export type CartoonsStore = {
  data: Cartoon[];
  isLoading: boolean;
  errorMessage: string;
  searchValue: string;
  filter: FilterBy;
  sortBy: SortBy;
};

//ALL CARTOONS ACTIONS

export type FilterAllCartoonsAction = {
  type: "FILTER_ALL_CARTOONS";
  payload: FilterBy;
};

export type LoadAllCartoonsAction = {
  type: "LOAD_ALL_CARTOONS";
  payload: Cartoon[];
};

export type StartLoadingAllCartoonsAction = {
  type: "START_LOADING_ALL_CARTOONS";
};

export type ErrorLoadingAllCartoonsAction = {
  type: "ERROR_LOADING_ALL_CARTOONS";
  payload: string;
};

export type LoadingAllCartoonsActionThunk = () => (
  dispatch: Dispatch<CartoonsAction>
) => void;

export type SearchInputOnChange = {
  type: "SEARCH_INPUT_ON_CHANGE";
  payload: string;
};

export type SortBy = "title" | "year" | null;

export type SortByAction = {
  type: "SORT_BY";
  payload: SortBy;
};

export type ResetFiltersAction = {
  type: "RESET_FILTERS";
};

export type CartoonsAction =
  | LoadAllCartoonsAction
  | StartLoadingAllCartoonsAction
  | ErrorLoadingAllCartoonsAction
  | SearchInputOnChange
  | SortByAction
  | FilterAllCartoonsAction
  | ResetFiltersAction;

//WATCHLIST

export type WatchlistStore = {
  cartoons: number[];
};

export type AddToWatchlistAction = {
  type: "ADD_TO_WATCHLIST";
  payload: number;
};

export type DeleteFromWatchlistAction = {
  type: "DELETE_FROM_WATCHLIST";
  payload: number;
};

export type WatchlistAction = AddToWatchlistAction | DeleteFromWatchlistAction;

//THEME

export type ThemeStore = {
  darkMode: boolean;
};

export type ChangeThemeAction = {
  type: "CHANGE_THEME";
};
