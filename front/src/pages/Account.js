import { Layout } from "antd";
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NavBar from "../components/Navbar";
import FooterBar from "../components/FooterBar";
import Authentification from "./Authentification";
import HeaderBar from "../components/HeaderBar";
import AccountContent from "../components/Content/AccountContent";

const Account = () => {
  const uid = useContext(UidContext);
  return (
    <div className="account-page">
      {uid ? (
        <div className="account-container">
          <Layout style={{ minHeight: "100vh" }}>
            <NavBar />
            <Layout>
              <HeaderBar />
              <AccountContent />
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

export default Account;
