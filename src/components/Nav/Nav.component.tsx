import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <Link to="/watchlist" className="watchlist">
        My Watchlist
      </Link>
    </nav>
  );
}
