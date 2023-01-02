import React from "react";
import "./../news_cards/news_cards.css";
// import NewsImgs from "../../assets/img/news_cards_img.png";
import { Link } from "react-router-dom";
import axios from "axios";
const NewsCards = () => {
  const URL = "https://eaturkishback-production.up.railway.app";
  const [card, setCard] = React.useState("");

  React.useEffect(() => {
    axios.get(URL + "/news").then((e) => setCard(e.data));
  }, []);

  const { data } = card;
  console.log(data);
  return (
    <section>
      <div className="container">
        <div className="news_card">
          <div className="news_box">
            <span>
              <Link className="news_home" to="/">
                Home |
              </Link>
            </span>
            <span className="news_news">News</span>
            <h1 className="news_title">News</h1>
          </div>
          <ul className="news_cards_list">
            {data?.map((item) => (
              <li key={item.news_id} className="news_cards_list_item">
                <img className="news_card_img" src={item.news_img} alt="" />
                <h2 className="news_cards_title">{item.news_title}</h2>
                <p className="news_cards_copy">{item.news_desc}</p>
                <div>
                  <a href="#efc" className="news_cards_link">
                    Read More
                  </a>
                  <span className="news_cards_span">16 Apr 2021</span>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <button className="news_btn">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCards;
