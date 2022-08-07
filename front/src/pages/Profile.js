import { Layout } from "antd";
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import ProfileContent from "../components/Content/ProfileContent";
import FooterBar from "../components/FooterBar";
import HeaderBar from "../components/HeaderBar";
import Navbar from "../components/Navbar";
import Authentification from "./Authentification";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profile-page">
      {uid ? (
        <div className="profil-page">
          <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout>
              <HeaderBar />
              <ProfileContent />
              <FooterBar />
            </Layout>
          </Layout>
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
