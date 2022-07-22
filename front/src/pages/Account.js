import React from "react";
import Navbar from "../components/Navbar";

const Account = () => {
  return (
    <div>
      <Navbar />
      <h1>Mon compte</h1>
      <p>modification du nom d'utilisateur</p>
      <p>modification de photo</p>
      <p>supression du compte</p>
    </div>
  );
};

export default Account;
