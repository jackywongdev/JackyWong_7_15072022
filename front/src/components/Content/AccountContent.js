import React from "react";
import { Content } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import { Button } from "antd/lib/radio";
import UploadPicture from "../Account/UploadPicture";

export default function AccountContent() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280,
        }}
      >
        <h1>Profil de {userData.pseudo}</h1>

        <div className="account-content-container">
          <div className="picture-update-container">
            <div className="upload-picture-container">
              <div className="left-container">
                <h1>Photo de profil</h1>
                <img src={userData.picture} alt="avatar utilisateur" />
                <img src="" alt="" />
                <UploadPicture />
              </div>
              <div className="right-container">
                <div className="account-delete-container">
                  <div>
                    <p>modifier mon nom d'utilisateur</p>
                    <input type="text" />
                  </div>
                  <Button danger type="file">
                    Supprimer mon Compte
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
