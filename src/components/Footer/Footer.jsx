import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">
            <img src={logo} alt="logo" className="footer_logo" />
            <p className="footer_about">
              <strong>We Care</strong> stands for{" "}
              <strong>Health Accessible in Need and Utility for Mankind</strong>
              .
            </p>
          </div>
          <div className="col">
            <h3>
              Office{" "}
              <div className="bottom_line">
                <span></span>
              </div>
            </h3>
            <p>Jhauganj </p>
            <p>Hajiganj</p>
            <p>Patna</p>
            <p>Bihar, 800008, India</p>
            <p className="footer_email">wecare@gamil.com</p>
            <h4>+91 - 7667581402</h4>
          </div>
          <div className="col">
            <h3>
              Links{" "}
              <div className="bottom_line">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <Link href="#">HOME</Link>
              </li>
              <li>
                <Link href="#">ABOUT</Link>
              </li>
              <li>
                <Link href="#">SERVICE</Link>
              </li>
              <li>
                <Link href="#">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter
              <div className="bottom_line">
                <span></span>
              </div>
            </h3>
            <form>
              <ion-icon className="icon" name="mail"></ion-icon>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">
                <ion-icon
                  className="icon_right"
                  name="arrow-round-forward"
                ></ion-icon>
              </button>
            </form>
            <div className="social_icons">
              <BsFacebook className="social_icon" />
              <BsWhatsapp className="social_icon" />
              <BsTwitter className="social_icon" />
              <BsInstagram className="social_icon" />
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">We Care Ⓒ 2024 - All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
