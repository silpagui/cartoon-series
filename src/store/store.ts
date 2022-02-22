import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { cartoonsReducer } from "./reducers/cartoons.reducer";
import { watchlistReducer } from "./reducers/watchlist.reducer";
import { themeReducer } from "./reducers/theme.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cartoons: cartoonsReducer,
  watchlist: watchlistReducer,
  theme: themeReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

function getStateFromStorage() {
  try {
    const storeStr = localStorage.getItem("store");
    if (storeStr) {
      return JSON.parse(storeStr);
    }
  } catch (error) {
    console.warn("getStateFromStorage", error);
  }
}

const stateFromLocalStorage = getStateFromStorage();

export const appStore = createStore(
  rootReducer,
  stateFromLocalStorage,
  applyMiddleware(thunk)
);

appStore.subscribe(() => {
  const store = appStore.getState();
  localStorage.setItem("store", JSON.stringify(store));
});
