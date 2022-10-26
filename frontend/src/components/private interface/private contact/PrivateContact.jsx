import React from 'react'
import PrivateContactCSS from './PrivateContact.module.css'


const PrivateContact = () => {
  return (
    <div className={PrivateContactCSS.privateContact}>
      <h2 className="form-headline">Envoie-nous un message</h2>
      <form>
          <input className={PrivateContactCSS.privateInput} type="text" placeholder="Your Name*" required autoFocus/> <br />
          <input className={PrivateContactCSS.privateInput} type="email" placeholder="Your Email*"required/> <br />
          <input className={PrivateContactCSS.privateInput} type="text" placeholder="Company Name"/> <br />
          <textarea  className={PrivateContactCSS.privateMesssage}
          rows="7" cols="50" maxlength="250" type="text"
           placeholder="Your Message**" required></textarea>
        <h6><input type="checkbox" id="checkbox" name="checkbox"  required/>Yes, I would like to receive communications by call / email about Company's services.</h6>
        <button>Envoyer</button>
          <button>Réinitialiser</button>
      </form>
      <span><h6 style={{textAlign:"left",marginLeft:'450px'}}>* : champ obligatoire
         <br />
         ** : longueur maximale 250 lettres</h6></span>
    </div>
  )
}

export default PrivateContact