import React from "react";
import { Header } from "./components/Header/Header.component";
import { Home } from "./components/Home/Home.component";
import { Detail } from "./components/Detail/Detail.component";
import { Footer } from "./components/Footer/Footer.component";
import { WatchList } from "./components/WatchList/WatchList.component";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <div className="page-content content-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
