import { ThemeStore } from "../store.models";

const themeInitialState = {
  darkMode: false,
};

export function themeReducer(
  prevStore: ThemeStore = themeInitialState
  // action: ThemeAction
): ThemeStore {
  return prevStore;
}
