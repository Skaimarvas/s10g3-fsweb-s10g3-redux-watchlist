import { movies } from "../../movies";
import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favoriteActions";

const initialState = {
  favMovies: [movies[0]],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favMovies: !state.favMovies.includes(action.payload)
          ? [...state.favMovies, action.payload]
          : state.favMovies,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favMovies: state.favMovies.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};
