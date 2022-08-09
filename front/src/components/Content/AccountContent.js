import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd/lib/radio";
import UploadPicture from "../Account/UploadPicture";
import { WarningOutlined } from "@ant-design/icons";

export default function AccountContent() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <div className="account-container">
        <h1>Profil de {userData.pseudo}</h1>
        <div className="left-container">
          <div>
            <h1>Photo de profil</h1>
          </div>
          <div>
            <img src={userData.picture} alt="avatar utilisateur" />
          </div>
          <UploadPicture />
        </div>

        <div className="right-container">
          <div className="account-delete-container">
            <div>
              <p>Supprimer mon compte</p>
              <img
                className="delete-image"
                src="./images/groupomania/delete-account.png"
                alt="suprimer mon compte"
              />
            </div>
            <Button icon={<WarningOutlined />}>Supprimer mon Compte</Button>{" "}
            <Button type="primary" danger>
              Primary
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
