import {SEND_CONTACT_PUBLIC,SEND_CONTACT_PUBLIC_FAIL,SEND_CONTACT_PUBLIC_SUCCESS}from '../ActionTypes/ContactPublic.actionTypes'

const initpublicContact = {
    msg: null,
    error: null,
    loading: false,
    isAuth: true,
};

const publicContactReducer = (state = initpublicContact, { type, payload }) => {
    switch (type) {
        case SEND_CONTACT_PUBLIC:
            return {
                ...state,
                msg: null,
                error: null,
                loading: true,
                isAuth: true,
            };
            case SEND_CONTACT_PUBLIC_FAIL :
            return {
                ...state,
                error: payload,
                loading: false,
                isAuth: false,
            };
            case SEND_CONTACT_PUBLIC_SUCCESS:
            return {
                ...state,
                msg: payload,
                error: null,
                loading: false,
                isAuth: true,
            }
            default:
                return state;
        }
    }
    export default publicContactReducer;