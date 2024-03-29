import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../assets/users.png";
import "./NavCard.css";

function NavUser() {
  return (
    <Link className="nav_container" to="/admin/user">
      <img className="nav_img" src={UserImage} alt="Borne" />
      <p className="nav_text"> Utilisateurs</p>
    </Link>
  );
}

export default NavUser;
