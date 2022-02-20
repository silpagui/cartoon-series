import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav.component";
import { SearchForm } from "../SearchForm/SearchForm.component";
import { ThemeButton } from "../ThemeButton/ThemeButton.component";

export function Header() {
  return (
    <header className="header content-layout">
      <Link to="/" className="logo-link">
        <img src="http://placekitten.com/100/100" alt="Logo" />
      </Link>

      <SearchForm />
      <Nav />
      <ThemeButton />
    </header>
  );
}
