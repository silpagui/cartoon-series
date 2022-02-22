import { CartoonsAction, CartoonsStore } from "../store.models";

const cartoonsInitialState = {
  data: [],
  isLoading: true,
  errorMessage: "",
  searchValue: "",
  filter: {
    creator: "",
    genre: "",
    rating: "",
  },
  sortBy: null,
};

export function cartoonsReducer(
  prevStore: CartoonsStore = cartoonsInitialState,
  action: CartoonsAction
): CartoonsStore {
  switch (action.type) {
    case "START_LOADING_ALL_CARTOONS":
      return {
        ...prevStore,
        isLoading: true,
      };
    case "LOAD_ALL_CARTOONS":
      return {
        ...prevStore,
        data: action.payload.map((cartoon) => {
          // NOTE: This is because the API has a broken image
          if (cartoon.title === "CatDog") {
            return {
              ...cartoon,
              image:
                "https://m.media-amazon.com/images/M/MV5BMTZhMjEwNzItZDM3OS00OGJmLWEzMjYtYzNiY2U5NTM1MzQ0XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
            };
          } else {
            return cartoon;
          }
        }),
        isLoading: false,
      };
    case "ERROR_LOADING_ALL_CARTOONS":
      return {
        ...prevStore,
        isLoading: false,
        errorMessage: action.payload,
      };
    case "SEARCH_INPUT_ON_CHANGE":
      return {
        ...prevStore,
        searchValue: action.payload,
      };
    case "SORT_BY":
      return {
        ...prevStore,
        sortBy: action.payload,
      };
    case "FILTER_ALL_CARTOONS":
      return {
        ...prevStore,
        filter: action.payload,
      };
    case "RESET_FILTERS":
      return {
        ...prevStore,
        filter: cartoonsInitialState.filter,
      };

    default:
      return prevStore;
  }
}
