import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootReducer } from "../../store/store";
import { ButtonFav } from "../ButtonFav/ButtonFav.component";

export function Detail() {
  let { id } = useParams();
  const idSelected = Number(id);

  const cartoons = useSelector((store: RootReducer) => store.cartoons.data);

  const cartoon = cartoons.find((cartoon) => cartoon.id === idSelected);

  return (
    <div className="detail">
      <div className="detail-image">
        <ButtonFav id={idSelected} />
        <img src={cartoon?.image} alt={`${cartoon?.title} cover`} width="300" />
      </div>
      <div className="item-details">
        <div className="detail-title">
          <h2>{cartoon?.title}</h2>
        </div>
        <table className="detail-table">
          <tbody>
            <tr>
              <td colSpan={3} className="table-title">
                <span>Original Title:</span> {cartoon?.title}
              </td>
            </tr>
            <tr>
              <td className="info-cell">
                <span>rating:</span>
                {cartoon?.rating}
              </td>
              <td className="info-cell">
                <span>Year:</span>
                {cartoon?.year}
              </td>
              <td className="info-cell">
                <span>Episodes:</span>
                {cartoon?.episodes}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="link-list">
          <h3>Creator:</h3>
          <ul>
            <li>
              <a href={`https://www.google.com/search?q=${cartoon?.creator}`}>
                {cartoon?.creator}
              </a>
            </li>
          </ul>
          <h3 className="genre">Genre:</h3>
          <ul>
            <li>
              <a href={`https://www.google.com/search?q=${cartoon?.genre}`}>
                {cartoon?.genre}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
