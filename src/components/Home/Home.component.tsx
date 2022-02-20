import React from "react";
import { CartoonList } from "../CartoonList/CartoonList.component";
import { FilterMenu } from "../FilterMenu/FilterMenu.component";
import { SortMenu } from "../SortMenu/SortMenu.component";

export function Home() {
  return (
    <>
      <h1 className="page-title">Cartoons</h1>
      <SortMenu />
      <FilterMenu />
      <CartoonList />
    </>
  );
}
