import { ChangeThemeAction, ThemeStore } from "../store.models";

const themeInitialState = {
  darkMode: false,
};

export function themeReducer(
  prevStore: ThemeStore = themeInitialState,
  action: ChangeThemeAction
): ThemeStore {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        darkMode: !prevStore.darkMode,
      };

    default:
      return prevStore;
  }
}
