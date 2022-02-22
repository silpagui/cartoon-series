import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeAction } from "../../store/actions/theme.actions";
import { RootReducer } from "../../store/store";

export function ThemeButton() {
  const dispatch = useDispatch();
  const darkMode = useSelector((store: RootReducer) => store.theme.darkMode);

  function handleOnClick() {
    dispatch(changeThemeAction());
  }

  return (
    <button className="theme-button" type="button" onClick={handleOnClick}>
      Dark Mode: <strong>{darkMode ? "ON" : "OFF"}</strong>
    </button>
  );
}
