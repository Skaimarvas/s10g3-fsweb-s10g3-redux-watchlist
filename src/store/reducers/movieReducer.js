import { movies } from "../../movies";

const initialState = {
  movies: movies,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
