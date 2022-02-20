import { combineReducers, createStore } from "@reduxjs/toolkit";
import { cartoonsReducer } from "./reducers/cartoons.reducer";
import { watchlistReducer } from "./reducers/watchlist.reducer";
import { themeReducer } from "./reducers/theme.reducer";

const rootReducer = combineReducers({
  cartoons: cartoonsReducer,
  watchlist: watchlistReducer,
  theme: themeReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export const appStore = createStore(rootReducer);
