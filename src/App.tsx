import React from "react";
import "./App.scss";

export function App() {
  return (
    <div className="app-container ">
      <header className="header content-layout">
        <img src="http://placekitten.com/100/100" alt="Logo" className="logo" />
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            name="search"
            id="search"
            placeholder="Search title here"
          />
          <button className="search-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7261 19.2913L17.832 15.3971C17.6562 15.2214 17.4179 15.1237 17.168 15.1237H16.5313C17.6093 13.7449 18.2499 12.0107 18.2499 10.1242C18.2499 5.63636 14.6135 2 10.1257 2C5.63783 2 2.00146 5.63636 2.00146 10.1242C2.00146 14.612 5.63783 18.2484 10.1257 18.2484C12.0122 18.2484 13.7464 17.6079 15.1252 16.5298V17.1665C15.1252 17.4165 15.2228 17.6547 15.3986 17.8305L19.2927 21.7246C19.6599 22.0918 20.2536 22.0918 20.6168 21.7246L21.7222 20.6193C22.0893 20.2521 22.0893 19.6584 21.7261 19.2913ZM10.1257 15.1237C7.36422 15.1237 5.12616 12.8896 5.12616 10.1242C5.12616 7.36276 7.36032 5.12469 10.1257 5.12469C12.8871 5.12469 15.1252 7.35885 15.1252 10.1242C15.1252 12.8857 12.891 15.1237 10.1257 15.1237Z"
                fill="currentColor"
              />
            </svg>
            Search
          </button>
        </form>
        <nav>
          <a href="#1" className="watchlist">
            My Watchlist
          </a>
        </nav>
      </header>
      <div className="page-content content-layout">
        <h1 className="page-title">Cartoons</h1>
        <div className="submenu">
          <h2>Sort By</h2>
          <form className="form-sort">
            <div className="field-radio">
              <input type="radio" id="year" name="sortBy" value="year" />
              <label htmlFor="year">Year</label>
            </div>
            <div className="field-radio">
              <input type="radio" id="title" name="sortBy" value="title" />
              <label htmlFor="title">Title</label>
            </div>
          </form>
        </div>
        <div className="submenu submenu--filter">
          <h2>Filter By</h2>
          <button className="reset-filters-button">reset filters</button>
          <form className="form-filter">
            <div className="field-select">
              <label htmlFor="creator">Creator</label>
              <select name="creator" id="creator" defaultValue="">
                <option disabled value="">
                  Select
                </option>
                <option value="Peter">Peter</option>
                <option value="Man">Man</option>
              </select>
            </div>
            <div className="field-select">
              <label htmlFor="genre">Genre</label>
              <select name="genre" id="genre" defaultValue="">
                <option disabled value="">
                  Select
                </option>
                <option value="Peter">Peter</option>
                <option value="Man">Man</option>
              </select>
            </div>
            <div className="field-select">
              <label htmlFor="rating">Rating</label>
              <select name="rating" id="rating" defaultValue="">
                <option disabled value="">
                  Select
                </option>
                <option value="Peter">Peter</option>
                <option value="Man">Man</option>
              </select>
            </div>
          </form>
        </div>
        <ul className="cartoon-list">
          <li className="cartoon-item">
            <span className="cartoon-item__episode">episodes: 232</span>

            <a href="#23" className="cartoon-item__cover">
              <span className="cartoon-item__cover__rating">rating: TV-PG</span>
              <img src="http://placekitten.com/300/400" alt="cover" />
            </a>
            <h3 className="cartoon-item__title">Bob Esponja</h3>
            <p className="cartoon-item__year">1991</p>
            <button className="cartoon-item__fav">Add/Remove</button>
          </li>
        </ul>

        <div className="detail">
          <img src="http://placekitten.com/300/400" alt="cover" />
          <div className="item-details">
            <div className="detail-title">
              <h2>Bob Esponja</h2>
              <button>Add/Remove</button>
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
      </div>

      <footer className="footer">
        <div className="content-layout content-layout--footer">
          <div className="copyright">
            <img
              src="http://placekitten.com/100/100"
              alt="Logo"
              className="logo"
            />
          </div>
          <div className="social-media">
            <h4>follow us on</h4>
            <a href="#instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0022 4.87361C7.16453 4.87361 4.87563 7.16251 4.87563 10.0002C4.87563 12.8379 7.16453 15.1268 10.0022 15.1268C12.8399 15.1268 15.1288 12.8379 15.1288 10.0002C15.1288 7.16251 12.8399 4.87361 10.0022 4.87361ZM10.0022 13.3332C8.16843 13.3332 6.66927 11.8385 6.66927 10.0002C6.66927 8.16195 8.16397 6.66725 10.0022 6.66725C11.8405 6.66725 13.3352 8.16195 13.3352 10.0002C13.3352 11.8385 11.836 13.3332 10.0022 13.3332ZM16.5343 4.6639C16.5343 5.32871 15.9989 5.85966 15.3385 5.85966C14.6737 5.85966 14.1428 5.32425 14.1428 4.6639C14.1428 4.00356 14.6782 3.46814 15.3385 3.46814C15.9989 3.46814 16.5343 4.00356 16.5343 4.6639ZM19.9297 5.87751C19.8539 4.27573 19.488 2.85688 18.3146 1.68788C17.1456 0.518894 15.7267 0.153027 14.1249 0.0727147C12.4741 -0.020983 7.52593 -0.020983 5.87507 0.0727147C4.27775 0.148565 2.8589 0.514432 1.68544 1.68342C0.511991 2.85241 0.150586 4.27126 0.0702733 5.87305C-0.0234244 7.52391 -0.0234244 12.472 0.0702733 14.1229C0.146124 15.7247 0.511991 17.1435 1.68544 18.3125C2.8589 19.4815 4.27328 19.8474 5.87507 19.9277C7.52593 20.0214 12.4741 20.0214 14.1249 19.9277C15.7267 19.8519 17.1456 19.486 18.3146 18.3125C19.4835 17.1435 19.8494 15.7247 19.9297 14.1229C20.0234 12.472 20.0234 7.52838 19.9297 5.87751ZM17.797 15.8942C17.449 16.7688 16.7752 17.4425 15.8963 17.795C14.58 18.317 11.4568 18.1965 10.0022 18.1965C8.54769 18.1965 5.41997 18.3125 4.1082 17.795C3.23369 17.4469 2.55996 16.7732 2.20747 15.8942C1.68544 14.578 1.80591 11.4548 1.80591 10.0002C1.80591 8.54567 1.68991 5.41795 2.20747 4.10618C2.55549 3.23167 3.22922 2.55793 4.1082 2.20545C5.42443 1.68342 8.54769 1.80389 10.0022 1.80389C11.4568 1.80389 14.5845 1.68788 15.8963 2.20545C16.7708 2.55347 17.4445 3.2272 17.797 4.10618C18.319 5.42241 18.1985 8.54567 18.1985 10.0002C18.1985 11.4548 18.319 14.5825 17.797 15.8942Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8571 0H2.14286C1.57454 0 1.02949 0.225765 0.627628 0.627628C0.225765 1.02949 0 1.57454 0 2.14286L0 17.8571C0 18.4255 0.225765 18.9705 0.627628 19.3724C1.02949 19.7742 1.57454 20 2.14286 20H8.27009V13.2004H5.45759V10H8.27009V7.56071C8.27009 4.78616 9.92188 3.25357 12.4518 3.25357C13.6634 3.25357 14.9304 3.46964 14.9304 3.46964V6.19286H13.5344C12.1589 6.19286 11.7299 7.04643 11.7299 7.92188V10H14.8004L14.3094 13.2004H11.7299V20H17.8571C18.4255 20 18.9705 19.7742 19.3724 19.3724C19.7742 18.9705 20 18.4255 20 17.8571V2.14286C20 1.57454 19.7742 1.02949 19.3724 0.627628C18.9705 0.225765 18.4255 0 17.8571 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#twitter">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9442 7.92639C19.9569 8.10405 19.9569 8.28175 19.9569 8.4594C19.9569 13.8782 15.8326 20.1219 8.29444 20.1219C5.97209 20.1219 3.81473 19.4493 2 18.2818C2.32996 18.3198 2.64719 18.3325 2.98985 18.3325C4.90607 18.3325 6.67006 17.6853 8.0787 16.5813C6.27666 16.5432 4.7665 15.363 4.24618 13.7386C4.50001 13.7766 4.7538 13.802 5.02032 13.802C5.38833 13.802 5.75638 13.7513 6.099 13.6625C4.22083 13.2817 2.81215 11.632 2.81215 9.6396V9.58886C3.35782 9.89343 3.99239 10.0838 4.66493 10.1091C3.56087 9.37308 2.83754 8.11675 2.83754 6.69541C2.83754 5.934 3.04055 5.23603 3.3959 4.62689C5.41369 7.1142 8.4467 8.73854 11.8477 8.91624C11.7843 8.61167 11.7462 8.29444 11.7462 7.97717C11.7462 5.71826 13.5736 3.87817 15.8452 3.87817C17.0254 3.87817 18.0914 4.3731 18.8401 5.17259C19.7665 4.99494 20.6548 4.65228 21.4416 4.18275C21.137 5.13455 20.4898 5.93404 19.6396 6.44162C20.4645 6.35283 21.264 6.12435 22 5.80713C21.4417 6.61928 20.7437 7.3426 19.9442 7.92639Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
