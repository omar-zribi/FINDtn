import React from "react";
import PublicContactCSS from "./PublicContact.module.css";

const PublicContact = () => {
  const x = "*";
  return (
    <div className={PublicContactCSS.publicContact}>
      <div id="x"></div>
      <h2 className="form-headline">Envoie-nous un message</h2>
      <form>
        <input
          className={PublicContactCSS.publicInput}
          type="text"
          placeholder={`Your Name${x}`}
          required
          autoFocus
        />{" "}
        <br />
        <input
          className={PublicContactCSS.publicInput}
          type="email"
          placeholder={`Your Email${x}`}
          required
        />{" "}
        <br />
        <input
          className={PublicContactCSS.publicInput}
          type="text"
          placeholder={`Company Name`}
        />{" "}
        <br />
        <textarea
          className={PublicContactCSS.publicMesssage}
          rows="7"
          cols="50"
          maxlength="250"
          type="text"
          placeholder={`Your Message${x}${x}`}
          required
        ></textarea>
        <h6>
          <input type="checkbox" id="checkbox" name="checkbox" required />
          Oui, je souhaite recevoir des communications par e-mail sur les
          services de la société.
        </h6>
        <button>Envoyer</button>
        <button>Réinitialiser</button>
      </form>
      <span>
        <h6
          className={PublicContactCSS.publicH6}
        >{`${x}  : champ obligatoire`}</h6>
        <br />
        <h6 className={PublicContactCSS.publicH6}>
          {" "}
          {`${x}${x}: longueur maximale 250 lettres`}
        </h6>
      </span>
    </div>
  );
};

export default PublicContact;
