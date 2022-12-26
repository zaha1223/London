import React from "react";
import "./../footer/footer.css";
import FooterLogo from "../../assets/img/header_logo.png";
import Foocebok from "../../assets/img/footer_foocebok.png";
import Tiwiter from "../../assets/img/footer_tiwiter.png";
import Instagram from "../../assets/img/footer_instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_cards">
          <div className="footer_newsletter">
            <p className="footer_letter">Newsletter</p>
            <h2 className="footer_letter_title">Subscribe to Our Newsletter</h2>
            <p className="footer_letter_copy">And never miss latest Updates!</p>
            <form className="footer_form">
              <input
                type="text"
                placeholder="Email Address"
                className="form_input"
              />
              <button className="form_input_btn">Subscribe</button>
            </form>
          </div>
          <div className="footer_next">
            <div className="footer_next_box">
              <h3 className="footer_next_title">Contact Us</h3>
              <p className="footer_next_copy">
                9 W 53rd St, London, NY 10019, UK
              </p>
              <a href="tel">+1 212-344-1230</a> <br />
              <a href="tel">+1 212-555-1230</a>
            </div>
            <div className="footer_next_box">
              <img src={FooterLogo} alt="" width={336} height={117} />
              <p className="footer_next_copy">
                "The best way to find yourself is to lose yourself in the <br />
                service of others.”
              </p>
              <div className="footer_link">
                <a href="#" className="img"><img src={Foocebok} alt="" /></a>
                <a href="#" className="img"><img src={Tiwiter} alt="" /></a>
                <a href="#" className="img"><img src={Instagram} alt="" /></a>
              </div>
              <p className="footer_year">2022 Pop online. All Rights reserved.</p>
            </div>
            <div className="footer_next_box">
              <h3 className="footer_next_title">Working Hours</h3>
              <p className="footer_next_copy">
                Monday-Friday: <br />
                08:00 am -12:00 am
              </p>
              <p className="footer_next_copy">
                Saturday-Sunday: <br />
                07:00am -11:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
