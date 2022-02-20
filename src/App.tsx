import React from "react";
import { Header } from "./components/Header/Header.component";
import { Home } from "./components/Home/Home.component";
import { Detail } from "./components/Detail/Detail.component";
import { Footer } from "./components/Footer/Footer.component";
import "./App.scss";
import { WatchList } from "./components/WatchList/WatchList.component";

export function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="page-content content-layout">
        <Home />
        <Detail />
        <WatchList />
      </div>
      <Footer />
    </div>
  );
}
