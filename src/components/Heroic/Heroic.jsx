import React from "react";
import "./Heroic.css";
import banner from "../../assets/banner.jpg"

const Heroic = () => {
  return (
    <div className="heroic">
      <img
        src={banner}
              alt=""
              className="img"
      />
    </div>
  );
};

export default Heroic;
