import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Authentification from "./Authentification";
import AccountContent from "../components/Content/AccountContent";

const Account = () => {
  const uid = useContext(UidContext);
  return (
    <div className="account-page">
      {uid ? (
        <>
          <AccountContent />
        </>
      ) : (
        <div className="log-page">
          <Authentification />
        </div>
      )}
    </div>
  );
};

export default Account;
