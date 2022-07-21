import React from "react";
import Log from "../components/Log";
const Authentification = () => {
  return (
    <div className="authentification-page">
      <div className="log-container">
        <Log signin={false} signup={true} />
        <div className="img-container">
          <img
            src="./images/groupomania/icon-above-font.png"
            alt="logo groupomania"
          />
        </div>
      </div>
    </div>
  );
};

export default Authentification;
