import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const User = () => {
  const user = useSelector((state) => state.userReducer.user);
  const token = localStorage.getItem("token");

  return (
    <>
      {user && token && user.role === "user" && user.isActive === true ? (
        <Navigate to={`/${user.userName}`} />
      ) : user && token && user.role === "user" && user.isActive === false ? (
        <Navigate to={`/activation/${user.userName}`} />
      ) : user && token && user.role === "admin" && user.isActive === true ? (
        <Navigate to={`/${user.userName}`} />
      ) : user && token && user.role === "admin" && user.isActive === false ? (
        <Navigate to={`/activation/${user.userName}`} />
      ) : (
        <>
          <LogIn />
          <SignUp />
        </>
      )}
    </>
  );
};

export default User;
