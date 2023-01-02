import React from "react";
import axios from "axios";
import style from "./home2.module.css";
import css from "./food_card.module.css";
import { Link } from "react-router-dom";
import { Gallery } from "../../components/home/gallery/gallery";

export const Menu = () => {
  const URL = "https://eaturkishback-production.up.railway.app";

  const [categories, setCategorie] = React.useState("");
  const [food, setFood] = React.useState("");

  React.useEffect(() => {
    axios.get(URL + "/categories").then((el) => setCategorie(el.data));
    axios.get(URL + "/foods").then((e) => setFood(e.data));
  }, []);

  const { data } = categories;
  const data2 = food.data;
  return (
    <>
      {" "}
      <section style={{ padding: "70px 0 294px 0" }}>
        <div className="container">
          <p className={style.menu_nav}>
            <Link to="/">Home</Link>
          </p>
          <div className={style.menu_content}>
            <div className={style.menu_category}>
              <h6 className={style.menu_category_title}>
                Our Regular Menu Pack
              </h6>
              <ul className={style.menu_category_list}>
                {data?.map((item) => (
                  <li
                    className={style.menu_category_item}
                    key={item.category_id}
                  >
                    {item.category_name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.menu_foods}>
              <ul className={style.menu_food_list}>
                {data2?.map((item) => (
                  <li className={css.food_card} key={item.food_id}>
                    <img
                      className={css.food_card_img}
                      src={item.food_img}
                      alt="food"
                    />
                    <p className={css.food_card_name}>{item.food_name}</p>
                    <p className={css.food_card_price}>{item.food_price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
    </>
  );
};
