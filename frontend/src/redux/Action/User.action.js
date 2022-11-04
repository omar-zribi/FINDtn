import {
  SIGN_UP_USER, SIGN_UP_USER_FAIL, SIGN_UP_USER_SUCCESS,
  LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,
  GET_PROFILE_USER, GET_PROFILE_USER_FAIL, GET_PROFILE_USER_SUCCESS,
  GET_all_PROFILE_USER, GET_all_PROFILE_USER_FAIL, GET_all_PROFILE_USER_SUCCESS,
  UPDATE_PROFILE_USER, UPDATE_PROFILE_USER_FAIL, UPDATE_PROFILE_USER_SUCCESS,
  DELETE_PROFILE_USER, DELETE_PROFILE_USER_FAIL, DELETE_PROFILE_USER_SUCCESS,
  ACTIVE_PROFILE_USER, ACTIVE_PROFILE_USER_FAIL, ACTIVE_PROFILE_USER_SUCCESS, LOG_OUT_USER
} from '../ActionTypes/User.actionTypes';
import axios from "axios";

export const userLogOut=()=> async (dispatch) => {
  try {
    const res = await axios.post("/logout/:userName");
    localStorage.getItem("token", res.data.token);
    dispatch({
      type: LOG_OUT_USER,
      payload: res.response.data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const userSignUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP_USER });
  try {
    const res = await axios.post("/signup", newUser);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: SIGN_UP_USER_SUCCESS,
      payload: res.response.data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    const res = await axios.post("/login", user);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const userActivation = () => async (dispatch) => {
  dispatch({ type: ACTIVE_PROFILE_USER });
  try {
    const res = await axios.post(`/activation/:userName`);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: ACTIVE_PROFILE_USER_SUCCESS,
      payload: res.response.data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVE_PROFILE_USER_FAIL,
      payload: error.response.data,
    });
  }
};
export const getUserProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_USER
  })
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token
    }
  }
  try {
    const res = await axios.get("/:userName", config)
    dispatch({
      type: GET_PROFILE_USER_SUCCESS,
      payload: res.response.data,
    })
  } catch (error) {
    dispatch({
      type: GET_PROFILE_USER_FAIL,
      payload: error.response.data,
    });
  }
}