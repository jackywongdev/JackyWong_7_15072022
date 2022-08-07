import { Layout } from "antd";
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NavBar from "../components/Navbar";
import FooterBar from "../components/FooterBar";
import Authentification from "./Authentification";
import HeaderBar from "../components/HeaderBar";
import HomeContent from "../components/Content/HomeContent";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profile-page">
      {uid ? (
        <div className="home-page-container">
          <Layout style={{ minHeight: "100vh" }}>
            <NavBar />
            <Layout>
              <HeaderBar />
              <HomeContent />
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

export default Home;
