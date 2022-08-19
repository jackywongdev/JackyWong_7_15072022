import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Authentification from "./Authentification";
import HomeContent from "../components/Content/HomeContent";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="main-page">
      {uid ? (
        <>
          <HomeContent />
        </>
      ) : (
        <div className="log-page">
          <Authentification />
        </div>
      )}
    </div>
  );
};

export default Home;
