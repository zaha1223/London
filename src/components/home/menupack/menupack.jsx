import React from "react";
import axios from "axios";
import "./menupack.css";
import { MenuCard } from "../../menucard/menu-card";

export const Menupack = () => {
  const URL = "https://eaturkishback-production.up.railway.app";
  const [bigData, setData] = React.useState("");

  React.useEffect(() => {
    axios.get(URL + "/categories").then((el) => setData(el.data));
  }, []);

  const { data } = bigData;

  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu">
          <h4 className="menu_title">Our Regular Menu Pack</h4>
          <ul className="menu_list">
            {data?.map((item) => (
              <li key={item.category_id}>
                <button className="menu_btn">{item.category_name}</button>
              </li>
            ))}
          </ul>
          <ul className="menu_food-list">
            <MenuCard />
          </ul>
        </div>
      </div>
    </section>
  );
};
