import {
    SIGN_UP_USER, SIGN_UP_USER_FAIL, SIGN_UP_USER_SUCCESS,
    LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,
    GET_PROFILE_USER, GET_PROFILE_USER_FAIL, GET_PROFILE_USER_SUCCESS,
    GET_all_PROFILE_USER, GET_all_PROFILE_USER_FAIL, GET_all_PROFILE_USER_SUCCESS,
    UPDATE_PROFILE_USER, UPDATE_PROFILE_USER_FAIL, UPDATE_PROFILE_USER_SUCCESS,
    DELETE_PROFILE_USER, DELETE_PROFILE_USER_FAIL, DELETE_PROFILE_USER_SUCCESS,
} from '../ActionTypes/User.actionTypes';
import axios from "axios";

export const userSignUp = (newUser) => async (dispatch) => {
    dispatch({ type: SIGN_UP_USER });
    try {
        const res = await axios.post("http://localhost:2010signup", newUser);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: SIGN_UP_USER_SUCCESS, payload: res.data, });
    } catch (error) {
        dispatch({
            type: SIGN_UP_USER_FAIL,
            payload: error.response.data,
        });
    }
};

export const logInUsers = (User) => async (dispatch) => {
    dispatch({ type: LOGIN_USER, });
    try {
        const res = await axios.post("http://localhost:2010login", User);
        localStorage.setItem("token", res.data.token);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response.data,
        });
    }
};

export const getAllUserProfile = (User) => async (dispatch) => {
    dispatch({
        type: GET_all_PROFILE_USER
    })
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token
        }
    }
    try {
        const res = await axios.get("http://localhost:2010/getall", config)
        dispatch({
            type: GET_all_PROFILE_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_all_PROFILE_USER_FAIL,
            payload: error.response.data,
        })
    }
}

export const getUserProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE_USER })
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } }
    try {
        const res = await axios.get("http://localhost:2010/get/:userName", config)
        dispatch({
            type: GET_PROFILE_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_PROFILE_USER_FAIL,
            payload: error.response.data,
        })
    }
}

export const updateUserProfile = () => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_USER })
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } }
    try {
        const res = await axios.put("http://localhost:2010/update/:userName", config)
        dispatch({
            type: UPDATE_PROFILE_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_USER_FAIL,
            payload: error.response.data,
        })
    }
}

export const deleteUserProfile = () => async (dispatch) => {
    dispatch({ type: DELETE_PROFILE_USER })
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: token } }
    try {
        const res = await axios.delete("http://localhost:2010/delete/:userName", config)
        dispatch({
            type: DELETE_PROFILE_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: DELETE_PROFILE_USER_FAIL,
            payload: error.response.data,
        })
    }
}