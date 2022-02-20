import React from "react";

export function Detail() {
  return (
    <div className="detail">
      <img src="http://placekitten.com/300/400" alt="cover" />
      <div className="item-details">
        <div className="detail-title">
          <h2>Bob Esponja</h2>
          <button>
            <svg
              width="20px"
              height="20px"
              version="1.1"
              viewBox="0 0 752 752"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m533.86 237.88c0-32.695-26.504-59.199-59.199-59.199h-197.32c-32.695 0-59.199 26.504-59.199 59.199v315.72c0 7.0352 3.7461 13.535 9.8281 17.066 6.0859 3.5312 13.586 3.5547 19.695 0.066406l128.34-73.336 128.34 73.336c6.1055 3.4883 13.609 3.4648 19.691-0.066406 6.0859-3.5312 9.832-10.031 9.832-17.066zm-217.06 78.93c-10.898 0-19.734 8.832-19.734 19.73 0 10.898 8.8359 19.734 19.734 19.734h118.39c10.898 0 19.73-8.8359 19.73-19.734 0-10.898-8.832-19.73-19.73-19.73z"
                fill-rule="evenodd"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <table className="detail-table">
          <tbody>
            <tr>
              <td colSpan={3} className="table-title">
                <span>Original Title:</span> Title
              </td>
            </tr>
            <tr>
              <td className="info-cell">
                <span>rating:</span>TV-PG
              </td>
              <td className="info-cell">
                <span>Year:</span>1990
              </td>
              <td className="info-cell">
                <span>Episodes:</span>324
              </td>
            </tr>
          </tbody>
        </table>
        <div className="link-list">
          <h3>Creator:</h3>
          <ul>
            <li>
              <a href="#2">Pepito</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
