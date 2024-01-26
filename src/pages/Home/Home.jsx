import React from "react";
import Heroic from "../../components/Heroic/Heroic";
import "./Home.css";
import { FaAmbulance, FaFirstAid } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BiTimer } from "react-icons/bi";
import { PiStethoscopeLight } from "react-icons/pi";
const services = [
  {
    icon: <FaAmbulance />,
    text: "Ambulance Services",
  },
  {
    icon: <FaUserDoctor />,
    text: "Nursing At Home",
  },
  {
    icon: <FaFirstAid />,
    text: "Diagnostic At Home",
  },
  {
    icon: <FaUserDoctor />,
    text: "Full Body Checkup",
  },
];

const infos = [
  {
    icon: <BiTimer />,
    text: "24 / 7 Services",
  },
  {
    icon: <PiStethoscopeLight />,
    text: "Professional Staff",
  },
  {
    icon: <FaAmbulance />,
    text: "Emergency Treatment",
  },
  {
    icon: <FaUserDoctor />,
    text: "Trusted Doctors",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="dashboard">
        <Heroic />
        <div className="call">
          <p
            style={{
              color: "white",
              borderRadius: " 50px",
              backgroundColor: "#00a652",
              padding: "1rem 2rem",
              fontSize: "18px",
            }}
          >
            Call for Ambulance : 9264198199
          </p>
        </div>
        <div className="services">
          <p style={{ margin: "1rem" }}>Our Services</p>
          <div className="service-icons">
            {services.map((item, i) => (
              <div className="service" key={i}>
                <div className="service-icon">{item.icon}</div>
                <p>{item.text} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="home-about">
          <h3>Welocme To We Care</h3>
          <p>
            <strong>We Care</strong> stands for{" "}
            <strong>Health Accessible in Need and Utility for Mankind</strong>.
            Hanuman is India’s innovative health-tech app based online service
            provider founded in 2020 we work on no refusal policy towards all
            our customers and ensure to provide all emergency support under any
            circumstances. Hanumancare app helps our customer to compare prices
            in just a click from more than 500+ service providers. In COVID Wave
            1 & Wave 2 we have helped thousands of lives across Bihar for
            Ambulance booking (road, air & train), Diagnostics services, Home
            Nursing, Home ECG, medicine delivery at home, oxygen cylinder,
            oxygen concentrator and other services to your door step. Preventive
            care is early diagnosis of illness to decrease the burden of disease
            and associated risk. 75 million Indians above 60yrs suffer from
            chronic disease as they fail to diagnose at early stage. 11.6% urban
            population in India suffers with type 2 diabetes mellitus Vs 2.4% in
            rural population. Our H.O. is based in Patna, Bihar and now we are
            expanding our Ambulance services across Jharkhand, Delhi, NCR &
            Mumbai.
          </p>
        </div>
        <div className="info-box">
          {infos.map((info, i) => (
            <div className="info">
              <div className="info-icon">{info.icon}</div>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
