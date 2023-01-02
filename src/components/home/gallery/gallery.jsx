import React from "react";
import gallery from "../../../assets/imgs/gallery.png";
import style from "./gallery.module.css";

export const Gallery = () => {
  return (
    <section className={style.gallery_section}>
      <div className="container">
        <div className={style.gallery_content}>
          <strong className={style.gallery_subtitle}>Instagram</strong>
          <h6 className={style.gallery_title}>Photo Gallery</h6>
          <p className={style.gallery_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button className={style.gallery_btn}>View More</button>
          <div className={style.gallery}>
            <img src={gallery} alt="food-photos" />
          </div>
        </div>
      </div>
    </section>
  );
};
