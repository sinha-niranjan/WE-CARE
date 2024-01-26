import React from "react";
import Heroic from "../../components/Heroic/Heroic";
import "./Home.css";
import { FaAmbulance, FaFirstAid } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const services = [
  {
    icon: <FaAmbulance   />,
    text: "Ambulance Services",
  },
  {
    icon: <FaUserDoctor   />,
    text: "Nursing At Home",
  },
  {
    icon: <FaFirstAid   />,
    text: "Diagnostic At Home",
  },
  {
    icon: <FaUserDoctor   />,
    text: "Full Body Checkup",
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
          <p style={{margin: "1rem"}}>Our Services</p>
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
    </div>
  );
};

export default Home;
