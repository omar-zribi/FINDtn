import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UserCSS from './User.module.css'

const User = () => {
  const user = useSelector((state) => state.combineReducers);
  console.log(user)

  return (
      <div  className={UserCSS.user}>
       <div className={UserCSS.loginuser}>
      <div className={UserCSS.loginBox}>
        <h2>Log-in</h2>
        <form>
          <div className={UserCSS.userBox}>
            <input type="text" name="" required autoFocus/>
            <label>User-Name</label>
          </div>
          <div className={UserCSS.userBox}>
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="/profile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
    <div className={UserCSS.signupuser}>
      <div className={UserCSS.loginBox}>
        <h2>Sign-up</h2>
        <form>
          <div className={UserCSS.userBox}>
            <input type="text" name="" required />
            <label>User-Name</label>
          </div>
          <div className={UserCSS.userBox}>
            <input type="email" name="" required />
            <label>User-Email</label>
          </div>
          <div className={UserCSS.userBox}>
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <div className={UserCSS.userBox}>
            <input type="password" name="" required />
            <label>confirme Password</label>
          </div>
          <a href="/profile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default User;
