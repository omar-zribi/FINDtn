import { combineReducers } from "redux";
import userReducer from './User.reducer';
import publicContactReducer from './ContactPublic.reducer'

export default combineReducers({  userReducer,publicContactReducer });