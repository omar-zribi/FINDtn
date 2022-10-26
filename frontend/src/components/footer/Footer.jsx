import React from "react";
import FooterCSS from "./Footer.module.css";

const Footer = () => {
  const d = new Date();
  const Year = 2021;
  const Now = d.getFullYear();
  
  return (
    <div className={FooterCSS.footer}>
      {/* <ul className={FooterCSS.ul}>
        <li className={FooterCSS.li}>Home</li>
        <li className={FooterCSS.li}>About</li>
        <li className={FooterCSS.li}>Servises</li>
        <li className={FooterCSS.li}>Contact</li>
      </ul> */}
      <p
        className={FooterCSS.p}
      >{`Copyright @${Year} - ${Now} All Rights Reserved.`}</p>
    </div>
  );
};

export default Footer;
