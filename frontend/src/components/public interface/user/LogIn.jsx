import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../../redux/Action/User.action";
import LoginCSS from "./LogIn.module.css";

const LogIn = () => {
  const user = useSelector((state) => state.userReducer.user);
  var userLink;
  user ? (userLink = user.userName) : (userLink = null);
  // console.log("userLink", userLink);
  var userIsActive;
  user ? (userIsActive = user.isActive) : (userIsActive = null);
  // console.log("userIsActive", userIsActive);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const logIn = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };
  return (
    <div className={LoginCSS.Login}>
      <h1 className={LoginCSS.LoginH1}>Login</h1>
      <form className={LoginCSS.LoginForm}>
        <>
          <span className={LoginCSS.LoginSpan}>
            <h4 className={LoginCSS.LoginH4}>E-mail</h4>
            <input
              className={LoginCSS.LoginInput}
              autoFocus
              type="email"
              required
              value={email}
              placeholder="&emsp;tapez votre Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <h4 className={LoginCSS.LoginH4}>Password</h4>
            <input
              className={LoginCSS.LoginInput}
              type="password"
              required
              value={password}
              placeholder="&emsp;tapez votre password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </>
        <button className={LoginCSS.LoginButton} type="submit" onClick={logIn}>
          LOG-In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
