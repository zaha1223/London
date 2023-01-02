import React from "react";
import axios from "axios";
import style from "./menu-card.module.css";
export const MenuCard = () => {
  const URL = "https://eaturkishback-production.up.railway.app";

  const [foods, setFoods] = React.useState("");

  React.useEffect(() => {
    axios.get(URL + "/foods").then((data) => setFoods(data.data));
  }, []);
  const { data } = foods;
  return (
    <>
      {data?.map((el) => (
        <div key={el.food_id} className={style.menu_card}>
          <img className={style.menu_img} src={el.food_img} alt="food" />
          <p className={style.menu_card_name}>{el.food_name}</p>
          <span className={style.menu_card_price}>{el.food_price}</span>
        </div>
      ))}
    </>
  );
};
