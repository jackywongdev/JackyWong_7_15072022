import { Layout } from "antd";
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NavBar from "../components/Navbar";
import FooterBar from "../components/FooterBar";
import Authentification from "./Authentification";
import HeaderBar from "../components/HeaderBar";
import HomeContent from "../components/Content/HomeContent";
const MyFriends = () => {
  const uid = useContext(UidContext);
  return (
    <div className="my-friend-page">
      {uid ? (
        <div className="my-friend-page">
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

export default MyFriends;
