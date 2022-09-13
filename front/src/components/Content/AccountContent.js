import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd/lib/radio";
import UploadPicture from "../Account/UploadPicture";
import { WarningOutlined } from "@ant-design/icons";
import axios from "axios";

export default function AccountContent() {
  const userData = useSelector((state) => state.userReducer);

  const deleteAccount = async () => {
    const RemoveUserComment = axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/api/post/delete-user-comments/${userData._id}`,
      data: {
        commenterId: userData._id,
      },
    });

    const deleteUserPost = axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/post/delete-user-posts/${userData._id}`,
      data: {
        posterId: userData._id,
      },
    });

    const deleteUserAccount = axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/user/${userData._id}`,
      withCredentials: true,
    });

    await axios
      .all([RemoveUserComment, deleteUserPost, deleteUserAccount])
      .then(
        axios.spread(function (res1, res2, res3) {
          console.log(res1);
          console.log(res2);
          console.log(res3);
        })
      );

    window.location = "/";
  };

  return (
    <>
      <div className="vertical-center">
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
