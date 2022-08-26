import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd/lib/radio";
import UploadPicture from "../Account/UploadPicture";
import { WarningOutlined } from "@ant-design/icons";
import axios from "axios";
import cookie from "js-cookie";

export default function AccountContent() {
  const userData = useSelector((state) => state.userReducer);
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: "1" });
    }
  };

  const deleteAccount = async () => {
    await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/post/delete-user-post`,
      data: { posterId: userData._id },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/user/${userData._id}`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    // window.location = "/";
  };

  return (
    <>
      <div className="account-container">
        <div className="left-container">
          <div>
            <h1>Changer votre photo de profil {userData.pseudo}</h1>
            <img src={userData.picture} alt="user" />
          </div>
          <UploadPicture />
        </div>

        <div className="right-container">
          <div className="account-delete-container">
            <div>
              <p>Supprimer votre compte</p>
              <img
                className="delete-image"
                src="./images/groupomania/delete-account.png"
                alt="suprimer mon compte"
              />
            </div>
            <Button onClick={deleteAccount} icon={<WarningOutlined />}>
              Supprimer mon Compte
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
