import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootReducer } from "../../store/store";

export function Nav() {
  const watchlist = useSelector(
    (store: RootReducer) => store.watchlist.cartoons
  );

  return (
    <nav>
      <Link to="/watchlist" className="watchlist">
        <svg
          className="watchlist-icon"
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7932 1.37931C24.0231 1.37931 24.253 1.37931 24.3679 1.49425C24.138 0.689655 23.4484 0 22.5288 0H7.35641C6.43687 0 5.74722 0.574713 5.51733 1.49425C5.74722 1.37931 5.86216 1.37931 6.09205 1.37931H23.7932Z"
            fill="currentColor"
          />
          <path
            d="M5.40222 5.40223H27.1264V4.82751C27.1264 3.90797 26.5516 3.10337 25.747 2.87349C25.5172 2.75854 25.2873 2.75854 25.0574 2.75854H4.82751C4.59763 2.75854 4.36774 2.75854 4.13786 2.87349C3.33326 3.10337 2.75854 3.90797 2.75854 4.82751V5.40223H5.40222Z"
            fill="currentColor"
          />
          <path
            d="M27.1264 8.16089H2.75862C1.26437 8.16089 0 9.42526 0 10.9195V24.5977C0 26.0919 1.26437 27.3563 2.75862 27.3563H27.2414C28.7356 27.3563 30 26.0919 30 24.5977V10.9195C29.8851 9.31031 28.6207 8.16089 27.1264 8.16089ZM12.1839 15.0574C12.1839 14.5977 12.6437 14.2528 13.1034 14.4827L15.977 16.2069L17.3563 17.0115C17.5862 17.1264 17.7011 17.3563 17.7011 17.5862C17.7011 17.8161 17.5862 18.0459 17.3563 18.1609L15.977 18.9655L13.1034 20.6896C12.7586 20.9195 12.1839 20.6896 12.1839 20.1149V15.0574Z"
            fill="currentColor"
          />
        </svg>
        My Watchlist ({watchlist.length})
      </Link>
    </nav>
  );
}
