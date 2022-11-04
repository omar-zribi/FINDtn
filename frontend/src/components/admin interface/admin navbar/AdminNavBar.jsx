import React from "react";
import imguser from "../../../image/user.png";
import job from "../../../image/job.png";
import message from "../../../image/message.png";
import AdminNavBarCSS from "./AdminNavBar.module.css";
import { useSelector } from "react-redux";

const AdminNavBar = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className={AdminNavBarCSS.navbarp}>
      <nav className={AdminNavBarCSS.nav}>
        <ul className={AdminNavBarCSS.ul}>
          <li className={AdminNavBarCSS.li}>
            <a className={AdminNavBarCSS.title} href="/">
              <h1 className={AdminNavBarCSS.h1}>FIND</h1>
              <h6 className={AdminNavBarCSS.h6}>.tn</h6>
            </a>
          </li>
          <span className={AdminNavBarCSS.span}>
            <li className={AdminNavBarCSS.li}>
              <a className={AdminNavBarCSS.a} href={`/${user.userName}`}>
                <img src={imguser} alt="" className={AdminNavBarCSS.imgUser} />
              </a>
            </li>
            <li className={AdminNavBarCSS.li}>
              <a className={AdminNavBarCSS.a} href="/alljob">
                <img src={job} alt="" className={AdminNavBarCSS.imgJob} />
              </a>
            </li>
            <li className={AdminNavBarCSS.li}>
              <a className={AdminNavBarCSS.a} href="/message">
                <img
                  src={message}
                  alt=""
                  className={AdminNavBarCSS.imgMessage}
                />
              </a>
            </li>
          </span>
          <li className={AdminNavBarCSS.li}>
            <a className={AdminNavBarCSS.contact} href="/contact">
              contact
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavBar;
