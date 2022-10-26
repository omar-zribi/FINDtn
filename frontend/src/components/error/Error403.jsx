import React from "react";
import Error404CSS from "./Error404.module.css";

const Error403 = () => {
  return (
    <div>
      <div className={Error404CSS.bgimage}></div>
      <div className={Error404CSS.bgtext}>
        <h1 className={Error404CSS.h1}>403</h1>
        <p className={Error404CSS.pp}>ACCÈS REFUSÉ</p>
        <h6 className={Error404CSS.h6}>Oups, vous n'êtes pas autorisé à accéder à cette page.</h6>
      </div>
    </div>
  );
};

export default Error403;
