import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar-container">
        <NavLink to="/">
          <li className="navbar-item"> Accueil</li>
        </NavLink>
        <NavLink to="/profil">
          <li className="navbar-item">Profil</li>
        </NavLink>
        <NavLink to="/mon-compte">
          <li className="navbar-item">Mes paramètres</li>
        </NavLink>
        <li className="navbar-item">Se deconnecter</li>
      </ul>
    </nav>
  );
}
