import { ChangeThemeAction } from "../store.models";

export function changeThemeAction(): ChangeThemeAction {
  return {
    type: "CHANGE_THEME",
  };
}
