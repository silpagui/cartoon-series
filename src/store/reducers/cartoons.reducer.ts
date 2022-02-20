import { CartoonsStore } from "../store.models";

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
  prevStore: CartoonsStore = cartoonsInitialState
  // action: CartoonsAction
): CartoonsStore {
  return prevStore;
}
