import React from "react";
import { Clock } from "../Clock";
import NavBarAdminCSS from "./NavBarAdmin.module.css";

const NavBarAdmin = () => {
  return (
    <div className={NavBarAdminCSS.navbar}>
      <Clock />
      <ul className={NavBarAdminCSS.navbarUl}>
        <a href="/">
        <li className={NavBarAdminCSS.navbarLI}>ligne 1</li>
        </a>
        <a href="/">
        <li className={NavBarAdminCSS.navbarLI}>ligne 2</li>
        </a>
        <a href="/">
        <li className={NavBarAdminCSS.navbarLI}>ligne 3</li>
        </a>
        <a href="/">
        <li className={NavBarAdminCSS.navbarLI}>ligne 4</li>
        </a>
        <a href="/">
        <li className={NavBarAdminCSS.navbarLI}>ligne 5</li>
        </a>
      </ul>
    </div>
  );
};

export default NavBarAdmin;
