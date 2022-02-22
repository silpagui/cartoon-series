import React from "react";
import { Link } from "react-router-dom";
import { CartoonList } from "../CartoonList/CartoonList.component";

export function WatchList() {
  return (
    <>
      <h1 className="page-title">Cartoons in my Watchlist</h1>
      <Link to="/" className="back-link">
        Back to home
      </Link>
      <CartoonList favorites={true} />
    </>
  );
}
