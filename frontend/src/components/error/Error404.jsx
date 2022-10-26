import React from "react";
import Error404CSS from "./Error404.module.css";

const Error404 = () => {
  return (
    <div>
      <div className={Error404CSS.bgimage}></div>
      <div className={Error404CSS.bgtext}>
        <h1 className={Error404CSS.h1}>404</h1>
        <p className={Error404CSS.p}>Oups! <br /> page introuvable</p>
      </div>
    </div>
  );
};

export default Error404;
