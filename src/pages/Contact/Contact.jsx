import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="contact-heading">
        <h3 style={{ fontSize: "30px", margin: "auto" }}>Contact Us</h3>
      </div>

      <div className="contact">
        <div className="form">
          <h3>Leave Us Message </h3>

          <form onSubmit={() => console.log("submit")}>
            <div className="input-box">
              <p>First name </p>
              <input
                className="input"
                type="text "
                placeholder="Enter your first name"
              />
            </div>
            <div className="input-box">
              <p>Last name </p>
              <input
                className="input"
                type="text "
                placeholder="Enter your last name"
              />
            </div>
            <div className="input-box">
              <p>Your email </p>
              <input
                type="email"
                className="input"
                placeholder="Enter your email "
              />
            </div>
            <div className="input-box">
              <p>Mobile No.</p>
              <input type="text" className="input" />
            </div>
            <div className="input-box">
              <p>Your message (optional) </p>
              <textarea className="input" cols="30" rows="8"></textarea>
            </div>
            <div className="input-box">
              {" "}
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="address">
          <h3>Address</h3>
          <br />
          <br />
          <p>
            <FaLocationDot
              style={{
                color: "#00a652",
                fontSize: "1rem",
                margin: "0 .5rem",
              }}
            />
            Registered Address :- Jhauganj, Hajiganj, Patna, Bihar 800008
          </p>
          <br />
          <br />
          <p>
            {" "}
            <IoIosCall
              style={{
                color: "#00a652",
                fontSize: "1.3rem",
                margin: "0 .5rem",
              }}
            />{" "}
            76667581402
          </p>
          <br />
          <p>
            {" "}
            <MdEmail
              style={{
                color: "#00a652",
                fontSize: "1.3rem",
                margin: "0 .5rem",
              }}
            />
            contact@wwecare.in
          </p>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4404.444154435683!2d85.2288667043568!3d25.596783549433813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM1JzQ4LjQiTiA4NcKwMTMnNTIuNSJF!5e0!3m2!1sen!2sin!4v1706371098665!5m2!1sen!2sin"
            loading="lazy"
            frameborder="0"
            className="map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
