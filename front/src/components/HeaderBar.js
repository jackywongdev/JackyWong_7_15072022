import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import { Header } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import axios from "axios";

export default function HeaderBar() {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: "1" });
    }
  };
  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    window.location = "/";
  };
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <Header>
        <div className="logo-container">
          <LogoutOutlined className="logout-icon" onClick={logout} />
          <p>Se déconnecter</p>
        </div>
        <div className="welcome-container">
          <h1>Bienvenue {userData.pseudo}</h1>
        </div>
      </Header>
    </>
  );
}
