import React from "react";
import "./dish-card.css";
import rating from "../../assets/imgs/rating.svg";
export const DishCard = ({ img }) => {
  return (
    <div className="card">
      <img className="card-img" src={img} alt="food" />
      <p className="card-text">Barbecue Shish kebab Shashlik Skewer</p>
      <img className="card-rating" src={rating} alt="" />
      <p className="card-price">$12.00</p>
    </div>
  );
};
