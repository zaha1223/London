import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/imgs/about_us.png";
import "./about.css";
export const About = () => {
  return (
    <section className="about_section">
      <div className="container">
        <Link to="/">Home</Link>
        <div className="about_content">
          <h2 className="about_title">About Us</h2>
          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            <br /> Quis pharetra adipiscing ultrices vulputate posuere
            tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <img className="about_img" src={bg} alt="" />
          <p className="about_bottom_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            <br /> Quis pharetra adipiscing ultrices vulputate posuere
            tristique. In sed odio nec aliquet eu proin mauris et.It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
