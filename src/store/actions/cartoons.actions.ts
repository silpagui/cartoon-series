import {
  Cartoon,
  ErrorLoadingAllCartoonsAction,
  FilterAllCartoonsAction,
  FilterBy,
  LoadAllCartoonsAction,
  LoadingAllCartoonsActionThunk,
  ResetFiltersAction,
  SearchInputOnChange,
  SortBy,
  SortByAction,
  StartLoadingAllCartoonsAction,
} from "../store.models";

export function loadAllCartoons(data: Cartoon[]): LoadAllCartoonsAction {
  return {
    type: "LOAD_ALL_CARTOONS",
    payload: data,
  };
}

export function startLoadingAllCartoons(): StartLoadingAllCartoonsAction {
  return {
    type: "START_LOADING_ALL_CARTOONS",
  };
}

export function errorLoadingAllCartoons(): ErrorLoadingAllCartoonsAction {
  return {
    type: "ERROR_LOADING_ALL_CARTOONS",
    payload: "Oopss, error Loading!",
  };
}

export function searchInputOnChange(data: string): SearchInputOnChange {
  return {
    type: "SEARCH_INPUT_ON_CHANGE",
    payload: data,
  };
}

export const loadingAllCartoonsThunk: LoadingAllCartoonsActionThunk = () => {
  return function (dispatch: any) {
    dispatch(startLoadingAllCartoons());
    fetch("https://api.sampleapis.com/cartoons/cartoons2D")
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadAllCartoons(data));
      })
      .catch((error) => dispatch(errorLoadingAllCartoons()));
  };
};

export function sortByAction(data: SortBy): SortByAction {
  return {
    type: "SORT_BY",
    payload: data,
  };
}

export function filterAllCartoonsAction(
  filters: FilterBy
): FilterAllCartoonsAction {
  return {
    type: "FILTER_ALL_CARTOONS",
    payload: filters,
  };
}

export function resetFiltersAction(): ResetFiltersAction {
  return {
    type: "RESET_FILTERS",
  };
}
