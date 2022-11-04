import {
  SIGN_UP_USER, SIGN_UP_USER_FAIL, SIGN_UP_USER_SUCCESS,
  LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,
  GET_PROFILE_USER, GET_PROFILE_USER_FAIL, GET_PROFILE_USER_SUCCESS,
  GET_all_PROFILE_USER, GET_all_PROFILE_USER_FAIL, GET_all_PROFILE_USER_SUCCESS,
  UPDATE_PROFILE_USER, UPDATE_PROFILE_USER_FAIL, UPDATE_PROFILE_USER_SUCCESS,
  DELETE_PROFILE_USER, DELETE_PROFILE_USER_FAIL, DELETE_PROFILE_USER_SUCCESS,
  ACTIVE_PROFILE_USER, ACTIVE_PROFILE_USER_FAIL, ACTIVE_PROFILE_USER_SUCCESS, LOG_OUT_USER
} from '../ActionTypes/User.actionTypes';

const initUser = {
  users: null,
  error: null,
  loading: false,
  token: null,
  isAuth: false,
};

export default function userReducer(state = initUser, { type, payload }) {
  switch (type) {
    case SIGN_UP_USER:
    case LOGIN_USER:
    case ACTIVE_PROFILE_USER:
    case GET_PROFILE_USER:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_USER_FAIL:
    case LOGIN_USER_FAIL:
    case ACTIVE_PROFILE_USER_FAIL:
    case GET_PROFILE_USER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // case LOG_OUT_USER:
    //   return {
    //     ...state,
    //     users: null,
    //     error: null,
    //     loading: false,
    //     token: null,
    //     isAuth: false,
    //   };
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        users: payload.user,
        error: null,
        loading: false,
        token: payload.token,
        isAuth: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        users: payload.user,
        error: null,
        loading: false,
        token: payload.token,
        isAuth: true,
      };
    case ACTIVE_PROFILE_USER_SUCCESS:
      return {
        ...state,
        users: payload.user,
        error: null,
        loading: false,
        token: payload.token,
        isAuth: true,
      };
    case GET_PROFILE_USER_SUCCESS:
      return {
        ...state,
        users: payload.user,
        error: null,
        loading: false,
        token: payload.token,
        isAuth: true,
      };
    default:
      return state;
  }
};