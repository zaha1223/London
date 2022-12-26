import React from "react";
import "./../news_cards/news_cards.css";
import NewsImgs from "../../assets/img/news_cards_img.png"

const NewsCards = () => {
  return (
    <section>
      <div className="container">
        <div className="news_card">
          <div className="news_box">
            <span className="news_home">Home |</span>
            <span className="news_news">News</span>
            <h1 className="news_title">News</h1>
          </div>
          <ul className="news_cards_list">
            <li className="news_cards_list_item">
              <img src={NewsImgs} alt="" />
              <h2 className="news_cards_title">tips for prepping and caring for your grill</h2>
              <p className="news_cards_copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                in.
              </p>
              <div>
                <a href="#" className="news_cards_link">Read More</a>
                <span className="news_cards_span">16 Apr 2021</span>
              </div>
            </li>
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
