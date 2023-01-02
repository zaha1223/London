import React from "react";
// import { NewCard } from "../../home_new-card/new_card";
import styled from "./news.module.css";
import axios from "axios";
import itemImg from "../../../assets/img/news_cards_img.png";
import css from "../../home_new-card/new_card.module.css";

export const News = () => {
  const [item, setItem] = React.useState("");

  const URL = "https://eaturkishback-production.up.railway.app";
  React.useEffect(() => {
    axios.get(URL + "/news").then((el) => setItem(el.data));
  }, []);
  const { data } = item;

  return (
    <section className={styled.news_section}>
      <div className="container">
        <p className={styled.news_subtitle}>News</p>
        <h6 className={styled.news_title}>Gerícht updates</h6>
        <ul className={styled.news_card_list}>
          {data?.map((el) => (
            <li key={el.news_id} className={css.card}>
              <img src={el.news_img ? itemImg : ""} alt="kebab" />
              <div className={css.card_inner}>
                <h5 className={css.card_subtitle}>{el.news_title}</h5>
                <p className={css.card_text}>{el.news_desc}</p>
                <span className={css.card_link}>Read More</span>
              </div>
            </li>
          ))}
        </ul>
        <button className={styled.news_btn}>View More</button>
      </div>
    </section>
  );
};
