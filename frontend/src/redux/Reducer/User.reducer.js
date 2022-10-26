import {
    SIGN_UP_USER, SIGN_UP_USER_FAIL, SIGN_UP_USER_SUCCESS,
    LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,
    GET_PROFILE_USER, GET_PROFILE_USER_FAIL, GET_PROFILE_USER_SUCCESS,
    GET_all_PROFILE_USER, GET_all_PROFILE_USER_FAIL, GET_all_PROFILE_USER_SUCCESS,
    UPDATE_PROFILE_USER, UPDATE_PROFILE_USER_FAIL, UPDATE_PROFILE_USER_SUCCESS,
    DELETE_PROFILE_USER, DELETE_PROFILE_USER_FAIL, DELETE_PROFILE_USER_SUCCESS,
} from '../ActionTypes/User.actionTypes';

const initUser = {
    user: null,
    error: null,
    loading: false,
    token: localStorage.getItem("token"),
    isAuth: false
};

const userReducer = (state = initUser, { type, payload }) => {
    switch (type) {
        case SIGN_UP_USER:
        case LOGIN_USER :
        case GET_PROFILE_USER :
        case GET_all_PROFILE_USER :
        case UPDATE_PROFILE_USER :
        case DELETE_PROFILE_USER :
            return {
                ...state,
                user: null,
                error: null,
                loading: true,
                // token: localStorage.getItem("token"),
                isAuth: false,
            };
        case SIGN_UP_USER_FAIL :
        case LOGIN_USER_FAIL :
        case GET_PROFILE_USER_FAIL :
        case GET_all_PROFILE_USER_FAIL :
        case UPDATE_PROFILE_USER_FAIL :
        case DELETE_PROFILE_USER_FAIL :
            return {
                ...state,
                // user: null,
                error: payload,
                loading: false,
                // token: localStorage.getItem("token"),
                isAuth: false,
            };
        case SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                error: null,
                loading: false,
                token: localStorage.getItem("token"),
                isAuth: true,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                error: null,
                loading: false,
                token: localStorage.getItem("token"),
                isAuth: true,
            }
        case GET_PROFILE_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                error: null,
                loading: false,
                token: localStorage.getItem("token"),
                isAuth: true,
            }
        case GET_all_PROFILE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                error: null,
                user: payload,
            }
        case UPDATE_PROFILE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                error: null,
            }
        case DELETE_PROFILE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                error: null,
            }
        // case LOGOUT_USER:
        //     return {
        //         ...state,
        //         loading: true,
        //         isAuth: false,
        //         error: null,
        //     }
        // case LOGOUT_USER_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         isAuth: true,
        //         error: null,
        //     }
        // case LOGOUT_USER_FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         isAuth: false,
        //         error: payload,
        //     }
        default:
            return state;
    }
}
export default userReducer;
