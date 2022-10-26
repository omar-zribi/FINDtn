import React from "react";
import PublicHomeCSS from "./PublicHome.module.css";
import accord from "../../../image/accord.webp";

const PublicHome = () => {
  return (
    <div className={PublicHomeCSS.publicHome}>
      <div className={PublicHomeCSS.partie1}>
        <div className={PublicHomeCSS.text}>
          <p className={PublicHomeCSS.textP}>
            welcome to <span className={PublicHomeCSS.textSpan}>FIND.tn</span>
          </p>
          <h4 className={PublicHomeCSS.textH4}>
            nous vous aidons à trouver votre futur poste
          </h4>
          <a href="/about">
            <button className={PublicHomeCSS.buttonPartie1}>savoir plus</button>
          </a>
          <a href="/user">
            <span className={PublicHomeCSS.btnSpanUser}></span>
          </a>
        </div>
        <img className={PublicHomeCSS.partie1Image} src={accord} alt="" />
      </div>
    </div>
  );
};

export default PublicHome;
