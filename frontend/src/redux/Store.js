import { applyMiddleware, compose, createStore } from "redux";
import Root from "./Reducer/Root";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const store = createStore(persistReducer({ key: "FINDTN", storage: storage }, Root),
compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const persistor = persistStore(store);
export { persistor, store };