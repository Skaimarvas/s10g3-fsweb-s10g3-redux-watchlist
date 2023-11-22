import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { movieReducer } from "./reducers/movieReducer";
import logger from "redux-logger";
import { favoriteReducer } from "./reducers/favoriteReducer";

const reducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
});

export const store = createStore(reducer, applyMiddleware(logger));
