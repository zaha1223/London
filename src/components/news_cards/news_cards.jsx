import React, { useEffect,useState } from "react";
import "./../news_cards/news_cards.css";
import NewsImgs from "../../assets/img/news_cards_img.png"

const NewsCards = () => {

  const [news, setNews] = useState([])

  useEffect(()=> {
    fetch("https://eaturkishback-production.up.railway.app/news")
    .then(res=> res.json())
    .then(data=> setNews(data.data))
  })


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
            {news?.map(item => <li className="news_cards_list_item">
              <img src={item.news_img} alt="" width={400} />
              <h2 className="news_cards_title">{item.news_title}</h2>
              <p className="news_cards_copy">
                {item.news_desc}
              </p>
              <div>
                <a href="#" className="news_cards_link">Read More</a>
                <span className="news_cards_span">{item.created_at.slice(0,10)}</span>
              </div>
            </li>)}
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
