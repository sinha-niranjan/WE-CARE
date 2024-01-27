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
            Call for Ambulance : 7667581402
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
