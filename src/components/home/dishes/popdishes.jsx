import React from "react";
import cardImg from "../../../assets/imgs/dishes1.png";
import "./popdishes.css";
import { DishCard } from "../../card/dish-card";
import smallLogo from "../../../assets/imgs/quote.svg";
export const Popdishes = () => {
  return (
    <section className="dishes-section">
      <div className="container">
        <div className="dishes_wrap">
          <h3 className="dishes-title">Popular Dishes</h3>
          <ul className="dishes-card">
            <DishCard img={cardImg} />
            <DishCard img={cardImg} />
            <DishCard img={cardImg} />
            <DishCard img={cardImg} />
          </ul>
          <img className="dishes_bottom-img" src={smallLogo} alt="" />
        </div>
      </div>
    </section>
  );
};
