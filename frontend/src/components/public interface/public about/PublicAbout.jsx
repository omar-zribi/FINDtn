import React from "react";
import PublicAboutCSS from "./PublicAbout.module.css";

const PublicAbout = () => {
  return (
    <div className={PublicAboutCSS.publicAbout}>
      <h3 className={PublicAboutCSS.publicAboutH3}>
        Ce site vise à aider les employés du
        <span className={PublicAboutCSS.publicAboutspan}> secteur public </span> à
        trouver de{" "}
        <span className={PublicAboutCSS.publicAboutspan}>
          nouvelle opportunité
        </span>{" "}
        d'emploi.
        <br />
        nous vous aide a trouver un échange ou un détachement.
        <br />
        en quelque click et{" "}
        <span className={PublicAboutCSS.publicAboutspan}>
          sans partager
        </span>{" "}
        vos données personnelles n'hesiter pas de nous rejoindre.
        <br />
        service 100%{" "}
        <span className={PublicAboutCSS.publicAboutspan}>gratuit</span>.
      </h3>
      <h3 className={PublicAboutCSS.publicAboutH3}>
      Avez-vous un compte? <a href="/user">Connectez</a>-vous ici
      <br />
       
       Vous n'avez pas encore de compte? <a href="/user">Créer</a> un compte maintenant</h3>
    </div>
  );
};

export default PublicAbout;
