export const ADD_FAVORITE = "ADD_FAVORITE";

export const addFavoriteMovie = (movie) => {
  return { type: ADD_FAVORITE, payload: movie };
};
