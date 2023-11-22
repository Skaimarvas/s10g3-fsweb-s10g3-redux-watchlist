import { legacy_createStore as createStore } from "redux";
import { movieReducer } from "./reducers/movieReducer";
import { combineReducers } from "redux";

// const reducer = combineReducers({
//     movies : movieReducer;
// })

export const store = createStore(movieReducer);
