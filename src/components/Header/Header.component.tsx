import React from "react";
import { Nav } from "../Nav/Nav.component";
import { SearchForm } from "../SearchForm/SearchForm.component";
import { ThemeButton } from "../ThemeButton/ThemeButton.component";

export function Header() {
  return (
    <header className="header content-layout">
      <img src="http://placekitten.com/100/100" alt="Logo" className="logo" />
      <SearchForm />
      <Nav />
      <ThemeButton />
    </header>
  );
}
