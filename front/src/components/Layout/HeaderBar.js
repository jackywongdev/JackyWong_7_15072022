import { LogoutOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { Header } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import axios from "axios";
import { Avatar } from "antd";
import { UidContext } from "../../components/AppContext";

export default function HeaderBar() {
  const uid = useContext(UidContext);
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: "1" });
    }
  };
  const logout = async () => {
    if (window.confirm("Êtes-vous sur de vouloir vous deconnectez ?")) {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
        withCredentials: true,
      })
        .then(() => removeCookie("jwt"))
        .catch((err) => console.log(err));
      window.location = "/";
    }
  };
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      {uid ? (
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="header-container">
            <div className="groupomania-header">
              <img src="./images/groupomania/logo.png" alt="logo groupomania" />
            </div>
            <div className="groupomania-small-header">
              <img
                src="./images/groupomania/icon.png"
                alt="small logo groupomania"
              />
            </div>

            <div className="welcome-container">
              <div className="header-user-container">
                <Avatar size="large" src={userData.picture} />

                <h1>Bienvenue {userData.pseudo}</h1>
              </div>
              <div className="logout-container" onClick={logout}>
                <LogoutOutlined className="logout-icon" />
                <p>Se déconnecter</p>
              </div>
            </div>
          </div>
        </Header>
      ) : (
        ""
      )}
    </>
  );
}
