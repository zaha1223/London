import React from "react";
import phone from "../../assets/imgs/phone.svg";
import mail from "../../assets/imgs/mail.svg";
import insta from "../../assets/imgs/insta.svg";
import twitter from "../../assets/imgs/twiiter.svg";
import facebook from "../../assets/imgs/facebook.svg";
import "./contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section style={{ padding: "70px 0" }}>
      <div className="container">
        <Link to="/">Home</Link>
        <h5 className="contact_title">Contact Us</h5>
        <div className="contact_wrapper">
          <div className="contact_social">
            <ul className="social_links">
              <li className="contact_item">
                <a className="contact_link_wrapper" href="tel:+1-212-344-1230">
                  <img className="contact_link_img" src={phone} alt="" />
                </a>
                <div>
                  <p className="contact_link_title">Phone Number</p>
                  <a className="contact_link" href="tel:+1-212-344-1230">
                    +1 212-344-1230
                  </a>
                </div>
              </li>
              <li className="contact_item">
                <a
                  className="contact_link_wrapper"
                  href="eaturkish@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="contact_link_img" src={mail} alt="" />
                </a>
                <div>
                  <p className="contact_link_title">Email Address</p>
                  <a
                    className="contact_link"
                    href="eaturkish@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    eaturkish@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact_item">
                <a
                  className="contact_link_wrapper"
                  href="https://www.instagram.com/eaturkish/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="contact_link_img" src={insta} alt="" />
                </a>
                <div>
                  <p className="contact_link_title">Instagram</p>
                  <a
                    className="contact_link"
                    href="https://www.instagram.com/eaturkish/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    eaturkish
                  </a>
                </div>
              </li>
              <li className="contact_item">
                <a
                  className="contact_link_wrapper"
                  href="https://twitter.com/eaTurkishLondon/media"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="contact_link_img" src={twitter} alt="" />
                </a>
                <div>
                  <p className="contact_link_title">Twitter</p>
                  <a
                    className="contact_link"
                    href="https://twitter.com/eaTurkishLondon/media"
                    target="_blank"
                    rel="noreferrer"
                  >
                    eaturkish
                  </a>
                </div>
              </li>
              <li className="contact_item">
                <a
                  className="contact_link_wrapper"
                  href="https://www.facebook.com/eaturkishlondon?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="contact_link_img" src={facebook} alt="" />
                </a>
                <div>
                  <p className="contact_link_title">Facebook</p>
                  <a
                    className="contact_link"
                    href="https://www.facebook.com/eaturkishlondon?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    eaturkish
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact_message">
            <h4 className="message_title">Send Messege</h4>
            <p className="message_text">
              If you have any questions, you can send us an SMS or contact us by
              phone
              <br /> you can also contact us via social networks.
            </p>
            <form className="contact_form">
              <input
                className="contact_inpt"
                type="text"
                placeholder="Your name"
              />
              <input
                className="contact_inpt"
                type="mail"
                placeholder="Email addres"
              />
              <input
                className="contact_inpt"
                type="tel"
                placeholder="Phone Number"
              />
              <input
                className="contact_inpt"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="contact_textarea"
                // cols="10"
                // rows="10"
                placeholder="Message"
              ></textarea>
              <button className="form_btn">Send message</button>
            </form>
          </div>
        </div>
        <div className="contact_map_wrapper">
          <h4 className="contact_map_title">Find us by card</h4>
          <div className="contact_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39769.52849850708!2d-0.034773527042892084!3d51.465582184712105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a839030ef577%3A0x5fc2fd60774b5712!2sEaTurkish!5e0!3m2!1sru!2s!4v1672655283581!5m2!1sru!2s"
              width="100%"
              height="703"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
