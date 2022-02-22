import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.component";
import { Home } from "./components/Home/Home.component";
import { Detail } from "./components/Detail/Detail.component";
import { Footer } from "./components/Footer/Footer.component";
import { WatchList } from "./components/WatchList/WatchList.component";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "./store/store";
import { loadingAllCartoonsThunk } from "./store/actions/cartoons.actions";

export function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((store: RootReducer) => store.theme.darkMode);
  const cartoonList = useSelector((store: RootReducer) => store.cartoons.data);

  useEffect(() => {
    if (cartoonList.length === 0) {
      dispatch(loadingAllCartoonsThunk());
    }
  }, [dispatch, cartoonList]);

  return (
    <div className={`app-container ${darkMode ? "dark-theme" : ""}`}>
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
