import React from "react";
import hero_bg from "../../assets/imgs/hero-bg.png";
import { Customers } from "../../components/home/customers/customers";
import { Popdishes } from "../../components/home/dishes/popdishes";
import { Gallery } from "../../components/home/gallery/gallery";
import { Menupack } from "../../components/home/menupack/menupack";
import { News } from "../../components/home/news/news";
import { Video } from "../../components/home/video_/video";
import "./home.css";
export const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container hero">
          <div className="hero-content">
            <strong className="hero-subtitle">Chase the new Flavour</strong>
            <h2 className="hero-title">The key to Fine dining</h2>
            <p className="hero-text">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>
            <button className="hero-btn">Explore Menu</button>
          </div>
          <img src={hero_bg} alt="" />
        </div>
      </section>
      <Popdishes />
      <Menupack />
      <Customers />
      <News />
      <Video />
      <Gallery />
    </>
  );
};
