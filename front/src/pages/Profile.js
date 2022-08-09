import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import ProfileContent from "../components/Content/ProfileContent";
import Authentification from "./Authentification";

const Profile = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profile-page">
      {uid ? (
        <div className="profil-page">
          <ProfileContent />
        </div>
      ) : (
        <div className="log-page">
          <Authentification />
        </div>
      )}
    </div>
  );
};

export default Profile;
