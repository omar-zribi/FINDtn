import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUp } from "../../../redux/Action/User.action";
import SignUpCSS from "./SignUp.module.css";

const SignUp = () => {
  const user = useSelector((state) => state.userReducer.user);
  var userLink;
  user ? (userLink = user.userName) : (userLink = null);
  var userIsActive;
  user ? (userIsActive = user.isActive) : (userIsActive = null);

  const [userName, setUserName] = useState();
  const [userSex, setUserSex] = useState();
  const [email, setEmail] = useState();
  const [etabOrigin, setEtabOrigin] = useState();
  const [gouvernerat, setGouvernerat] = useState();
  const [posteAcctuel, setPosteAcctuel] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const signUp = (e) => {
    e.preventDefault();
    dispatch(
      userSignUp({
        userName,
        userSex,
        email,
        etabOrigin,
        gouvernerat,
        posteAcctuel,
        password,
      })
    );
  };
  return (
    <div className={SignUpCSS.SignUp}>
      <h1 className={SignUpCSS.SignUpH1}>Signup</h1>
      <form className={SignUpCSS.SignUpForm}>
        <span className={SignUpCSS.SignUpGrandSpan}>
          <span className={SignUpCSS.SignUpSpanPartieA}>
            <h4 className={SignUpCSS.SignUpH4}>User-Name</h4>
            <input
              className={SignUpCSS.SignUpInput}
              type="text"
              required
              value={userName}
              placeholder="&emsp;tapez votre User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <h4 className={SignUpCSS.SignUpH4}>User-Sex</h4>
            <select
              className={SignUpCSS.SignUpInput}
              name="userSex"
              value={userSex}
              onChange={(e) => setUserSex(e.target.value)}
            >
              <option hidden defaultValue>
                &emsp;&emsp;&emsp;&emsp;&ensp;-- select an option
                --&ensp;&emsp;&emsp;&emsp;&emsp;
              </option>
              <option>&emsp;male</option>
              <option>&emsp;female</option>
            </select>
            <h4 className={SignUpCSS.SignUpH4}>E-mail</h4>
            <input
              className={SignUpCSS.SignUpInput}
              type="email"
              required
              value={email}
              placeholder="&emsp;tapez votre Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className={SignUpCSS.SignUpH4}>Password</h4>
            <input
              className={SignUpCSS.SignUpInput}
              type="password"
              required
              value={password}
              placeholder="&emsp;tapez votre Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <span className={SignUpCSS.SignUpSpanPartieB}>
            <h4 className={SignUpCSS.SignUpH4}>Gouvernerat Actuel</h4>
            <input
              className={SignUpCSS.SignUpInput}
              type="text"
              required
              value={gouvernerat}
              placeholder="&emsp;tapez votre Gouvernerat Actuel"
              onChange={(e) => setGouvernerat(e.target.value)}
            />
            <h4 className={SignUpCSS.SignUpH4}>Établissement Actuel</h4>
            <input
              className={SignUpCSS.SignUpInput}
              type="text"
              required
              value={etabOrigin}
              placeholder="&emsp;tapez votre Établissement Actuel"
              onChange={(e) => setEtabOrigin(e.target.value)}
            />

            <h4 className={SignUpCSS.SignUpH4}>Poste Actuel</h4>
            <input
              className={SignUpCSS.SignUpInput}
              type="text"
              required
              value={posteAcctuel}
              placeholder="&emsp;tapez votre Poste Actuel"
              onChange={(e) => setPosteAcctuel(e.target.value)}
            />
          </span>
        </span>
      </form>
      <button className={SignUpCSS.SignUpButton} type="submit" onClick={signUp}>
        {`Sign-Up`}
      </button>
    </div>
  );
};

export default SignUp;
