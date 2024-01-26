import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-box">
        <div className="left">
          <img
            src="https://hanumaan.in/wp-content/uploads/2019/01/ambulance-car.jpg"
            alt=""
            style={{ width: "30rem", height: "auto" }}
          />
        </div>

        <div className="right">
          <h3>Ambulance</h3>
          <p>
            350 ambulances are on-boarded across Bihar with channel partners
            across Delhi, NCR, Mumbai and Jharkhand, our Value Proposition is
            24*7 availability of ROAD/AIR/TRAIN ambulance in all districts of
            Bihar. Customer’s book ambulance through app, there are 3types of
            ambulances available from basic support, ICU services, Mortuary vans
            etc.
            <br />
            <br />
            We ensure to monitor the vehicle quality matrix, with drivers
            turn-around time, personal hygiene, ambulance booking and drop time,
            GPRS locator for each vehicle.
            <br />
            <br />
            Customer’s feedback is highly valuable for us thus every complaint
            is registered and driver’s performance is monitored colour grading
            wise. We calibre and maintain driver & customer’s feedback for
            compliance.
          </p>
        </div>
      </div>{" "}
      <div className="services-box">
        <div className="left">
          <img
            src="https://hanumaan.in/wp-content/uploads/2019/01/Nursing-1024x683.jpg"
            alt=""
            style={{ width: "25rem", height: "auto", margin: "1rem 2rem" }}
          />
        </div>

        <div className="right">
          <h3>Nursing At Home</h3>
          <p>
            Home Health Care has been caring for people in their homes, offering
            a full range of home health care services including personal care,
            homemaking, therapy and nursing services. etc.
            <br />
            <br />
            But beyond the medical and personal support, Hanuman offers more to
            our clients by not just considering their condition but their
            character.
            <br />
            <br />
            Hanuman brings the comfort and support you need at home with the
            right customized plan to preserve your loved ones independence and
            safety to help them live better.
          </p>
        </div>
      </div>{" "}
      <div className="services-box">
        <div className="left">
          <img
            src="https://hanumaan.in/wp-content/uploads/2019/01/blood-donation_istock-1024x768.jpg"
            alt=""
            style={{ width: "25rem", height: "auto", margin: "1rem 2rem" }}
          />
        </div>

        <div className="right">
          <h3>Ambulance</h3>
          <p>
            Hanuman Blood service is an initiative to connect, digitize and
            streamline the work flow of blood banks across the nation.
            <br />
            <br />
            1. Whole Blood
            <br />
            2. Platelets
            <br />
            3. Double Red Cells
            <br />
            4. Donating for Yourself (Autologous Donation)
            <br />
            5. Donating for Someone Else (Directed Donation)
          </p>
        </div>
      </div>
      <div className="services-box">
        <div className="left">
          <img
            src="https://hanumaan.in/wp-content/uploads/2019/01/schumer_home_testingpresserpkg111914400396png-1024x576.jpg"
            alt=""
            style={{ width: "25rem", height: "auto", margin: "1rem 2rem" }}
          />
        </div>

        <div className="right">
          <h3>Diagnostic at Home</h3>
          <p>
            We have empanelled with Pathkind, Thyrocare, Apollo diagnostics,
            Saral labs and local labs in are empanelled on our app to Customers
            can book home
            <br />
            <br />
            diagnostic using Hanuman App and based in the geographical
            demographic of the lab, based on price comparison customer can
            choose his preference and book sample collection from home. It can
            be booked across Bihar, we are aggregated with test labs with
            National presence and few local labs for sample testing, our
            phlebotomist are trained for end to end process from appointment
            booked to sample collection, sample submission in the lab to
            collecting results online. Each phlebotomist is trained and ensured
            that they follow SOP’s and maintain hygiene for their and customer’s
            safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
