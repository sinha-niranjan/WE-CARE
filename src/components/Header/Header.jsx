import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/weCare.png";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="heading">
        <div className="location center">
          <FaLocationDot
            style={{ color: "#00a652", fontSize: "1.3rem", margin: "0 .5rem" }}
          />{" "}
          Bihar, Patna , 800008
        </div>
        <div className="contact-call center">
          <IoIosCall
            style={{ color: "#00a652", fontSize: "1.3rem", margin: "0 .5rem" }}
          />{" "}
          7667581402
        </div>
        <div className="email center">
          <MdEmail
            style={{ color: "#00a652", fontSize: "1.3rem", margin: "0 .5rem" }}
          />{" "}
          contact@wecare.in
        </div>
        <div className="  center  ">
          <div className="icons">
            <FaFacebookF />
          </div>
          <div className="icons">
            <FaTwitter />
          </div>
          <div className="icons">
            <FaLinkedin />
          </div>
          <div className="icons">
            <FaYoutube />
          </div>
        </div>
      </div>
      {/* <hr style={{ color: "gray", hbackgroundColor: "gray" }} /> */}
      <div className="header-links">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links center">
          <NavLink
            to="/"
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            Services
          </NavLink>

          <NavLink to={"/blogs"} className="link">
            Blogs
          </NavLink>

          <NavLink to={"/about"} className="link">
            About us
          </NavLink>

          <NavLink to={"/contact"} className="link">
            Contact{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
