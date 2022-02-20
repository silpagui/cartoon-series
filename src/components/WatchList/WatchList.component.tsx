import React from "react";
import { CartoonList } from "../CartoonList/CartoonList.component";

export function WatchList() {
  return (
    <>
      <h1 className="page-title">Cartoons in my Watchlist</h1>
      <CartoonList />
    </>
  );
}
