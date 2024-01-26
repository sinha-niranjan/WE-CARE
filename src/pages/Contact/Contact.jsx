import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
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
    </div>
  );
};

export default Contact;
