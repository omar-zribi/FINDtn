import React, { useState } from "react";
import { useDispatch} from 'react-redux'
import { ContactPublic } from "../../../redux/Action/ContactPublic.action";
import PublicContactCSS from "./PublicContact.module.css";



const PublicContact = () => {
  function alertmessage(){
    var FullName = document.getElementById('FullName');
    var Email = document.getElementById('Email');
    var CompanyName = document.getElementById('CompanyName');
    var Msg = document.getElementById('Msg');
    var checkbox=document.getElementById('checkbox')

    const success = document.getElementById('success');

    if(FullName.value !== '' || Email.value !== '' || Msg.value !== ''||checkbox.checked){
        setTimeout(() => {
          FullName.value = '';
          Email.value = '';
          CompanyName.value = ''; 
          Msg.value = '';
          checkbox.checked=false;
        }, 2000);
        success.style.display = 'block';
    }
    setTimeout(() => {
        success.style.display = 'none';
    }, 4000);
}
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ContactPublic({fullName,email,company,message }))
  }
  const x = "*";
  return (
    <div className={PublicContactCSS.publicContact} >
      <div id="x"></div>
      <h2 className="form-headline">Envoie-nous un message</h2>
      <form onSubmit={handleSubmit}>
        <input id="FullName"
          className={PublicContactCSS.publicInput}
          type="text"
          placeholder={`Your Name${x}`}
          required
          autoFocus
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value)}}
        />{" "}
        <br />
        <input id="Email"
          className={PublicContactCSS.publicInput}
          type="email"
          placeholder={`Your Email${x}`}
          required
          value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)}}
        />{" "}
        <br />
        <input id="CompanyName"
          className={PublicContactCSS.publicInput}
          type="text"
          placeholder={`Company Name`}
          value={company}
          onChange={(e) => {
            setCompany(e.target.value)}}
        />{" "}
        <br />
        <textarea id="Msg"
          className={PublicContactCSS.publicMesssage}
          rows="7"
          cols="50"
          maxLength="250"
          type="text"
          placeholder={`Your Message${x}${x}`}
          required
          value={message}
          onChange={(e) => { 
            setMessage(e.target.value)}}
        ></textarea>
        <h6>
          <input type="checkbox" id="checkbox" name="checkbox" required />
          Oui, je souhaite recevoir des communications par e-mail sur les
          services de la société.
        </h6>

        <button type="submit" onClick={alertmessage}>Envoyer</button> 
        <button>Réinitialiser</button>
        <div className={PublicContactCSS.success} id="success">Your Message Successfully Sent!</div>
      </form>

      <span>
        <h6
          className={PublicContactCSS.publicH6A}
        >{`${x}  : champ obligatoire`}</h6>
        <br />
        <h6 className={PublicContactCSS.publicH6B}>
          {" "}
          {`${x}${x}: longueur maximale 250 lettres`}
        </h6>
      </span>
    </div>
  );
};

export default PublicContact;
