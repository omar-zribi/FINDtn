import React from "react";
import imguser from "../../../image/user.png";
import job from "../../../image/job.png";
import message from "../../../image/message.png";
import PrivateNavBarCSS from "./PrivateNavBar.module.css";
import { useSelector } from "react-redux";

const PrivateNavBar = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className={PrivateNavBarCSS.navbarp}>
      <nav className={PrivateNavBarCSS.nav}>
        <ul className={PrivateNavBarCSS.ul}>
          <li className={PrivateNavBarCSS.li}>
            <a className={PrivateNavBarCSS.title} href="/">
              <h1 className={PrivateNavBarCSS.h1}>FIND</h1>
              <h6 className={PrivateNavBarCSS.h6}>.tn</h6>
            </a>
          </li>
          <span className={PrivateNavBarCSS.span}>
            <li className={PrivateNavBarCSS.li}>
              <a className={PrivateNavBarCSS.a} href={`/${user.userName}`}>
                <img src={imguser} alt="" className={PrivateNavBarCSS.imgUser} />
              </a>
            </li>
            <li className={PrivateNavBarCSS.li}>
              <a className={PrivateNavBarCSS.a} href="/alljob">
                <img src={job} alt="" className={PrivateNavBarCSS.imgJob} />
              </a>
            </li>
            <li className={PrivateNavBarCSS.li}>
              <a className={PrivateNavBarCSS.a} href="/message">
                <img
                  src={message}
                  alt=""
                  className={PrivateNavBarCSS.imgMessage}
                />
              </a>
            </li>
          </span>
          <li className={PrivateNavBarCSS.li}>
            <a className={PrivateNavBarCSS.contact} href="/contact">
              contact
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default PrivateNavBar;
