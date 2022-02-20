import React from "react";
import { Link } from "react-router-dom";

export function CartoonList() {
  return (
    <ul className="cartoon-list">
      <li className="cartoon-item">
        <span className="cartoon-item__episode">episodes: 232</span>
        <Link to="/id" className="cartoon-item__cover">
          <span className="cartoon-item__cover__rating">rating: TV-PG</span>
          <img src="http://placekitten.com/300/400" alt="cover" />
        </Link>
        <h3 className="cartoon-item__title">Bob Esponja</h3>
        <p className="cartoon-item__year">1991</p>
        <button className="cartoon-item__fav">
          <svg
            width="20px"
            height="20px"
            version="1.1"
            viewBox="0 0 752 752"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m474.66 178.68c32.695 0 59.199 26.504 59.199 59.199v315.72c0 7.0352-3.7461 13.535-9.832 17.066-6.082 3.5312-13.586 3.5547-19.691 0.066406l-128.34-73.336-128.34 73.336c-6.1094 3.4883-13.609 3.4648-19.695-0.066406-6.082-3.5312-9.8281-10.031-9.8281-17.066v-315.72c0-32.695 26.504-59.199 59.199-59.199zm-177.59 157.86c0-10.898 8.8359-19.73 19.734-19.73h39.465v-39.465c0-10.898 8.832-19.734 19.73-19.734s19.734 8.8359 19.734 19.734v39.465h39.465c10.898 0 19.73 8.832 19.73 19.73 0 10.898-8.832 19.734-19.73 19.734h-39.465v39.465c0 10.898-8.8359 19.73-19.734 19.73s-19.73-8.832-19.73-19.73v-39.465h-39.465c-10.898 0-19.734-8.8359-19.734-19.734z"
              fill-rule="evenodd"
              fill="currentColor"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
}
