import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";

import Navbar from "../components/Navbar";
import Authentification from "./Authentification";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profile-page">
      {uid ? (
        <div className="profil-page">
          <Navbar />
          <h1>Mon profil</h1>
          <p>mes posts</p>
        </div>
      ) : (
        <div className="log-page">
          <Authentification />
        </div>
      )}
    </div>
  );
};

export default Profil;
