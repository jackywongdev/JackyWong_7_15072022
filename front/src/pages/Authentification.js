import React from "react";
import Log from "../components/Log";
import groupomaniaLogo from "../assets/groupomania/icon-above-font.png";
const Authentification = () => {
  return (
    <div className="authentification-page">
      <div className="log-container">
        <Log signin={false} signup={true} />
        <div className="img-container">
          <img src={groupomaniaLogo} alt="logo groupomania" />
        </div>
      </div>
    </div>
  );
};

export default Authentification;
