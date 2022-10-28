import {SEND_CONTACT_PUBLIC,SEND_CONTACT_PUBLIC_FAIL,SEND_CONTACT_PUBLIC_SUCCESS}from '../ActionTypes/ContactPublic.actionTypes'
import axios from "axios";

export const ContactPublic = (newMsg) => async (dispatch) => {
    dispatch({ type: SEND_CONTACT_PUBLIC });
    try {
        const res = await axios.post("/send", newMsg);
        dispatch({ type: SEND_CONTACT_PUBLIC_SUCCESS, payload: res.data, });
    } catch (error) {
        dispatch({
            type: SEND_CONTACT_PUBLIC_FAIL,
            payload: error.response.data,
        });
    }
};