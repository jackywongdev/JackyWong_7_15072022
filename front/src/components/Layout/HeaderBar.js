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
      {uid ? (
        <Header>
          <>
            <div className="logo-container">
              <LogoutOutlined className="logout-icon" onClick={logout} />
              <p>Se déconnecter</p>
            </div>
            <div className="welcome-container">
              <Avatar size="large" src={userData.picture} />) (
              <div className="log-page"></div>)
              <h1>Bienvenue {userData.pseudo}</h1>
            </div>
          </>
        </Header>
      ) : (
        ""
      )}
    </>
  );
}
