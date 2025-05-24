import React from "react";
import "./RestuarantCard.css";
import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Updated to match new API structure
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} ⭐</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
