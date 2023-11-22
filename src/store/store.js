import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { movieReducer } from "./reducers/movieReducer";
import logger from "redux-logger";

// const reducer = combineReducers({
//     movies : movieReducer;
// })

export const store = createStore(movieReducer, applyMiddleware(logger));
