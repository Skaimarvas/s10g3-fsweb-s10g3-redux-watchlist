import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie } from "./store/actions/favoriteActions";
function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favorites.favMovies);

  const movies = useSelector((store) => store.movies.movies);
  const dispatch = useDispatch();

  function sonrakiFilm() {
    setSira(sira + 1);
  }
  const oncekiFilm = () => {
    setSira(sira - 1);
  };
  const basaDon = () => {
    setSira(0);
  };

  const addFavHandler = () => {
    const select = movies[sira];
    console.log("SELECT", select);
    dispatch(addFavoriteMovie(select));
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-xl text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-xl text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={oncekiFilm}
              disabled={sira === 0 ? true : false}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 active:border-b-0 rounded disabled:cursor-not-allowed disabled:bg-blue-500 disabled:border-b-0 disabled:opacity-50 "
            >
              Önceki
            </button>
            <button
              onClick={basaDon}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 active:border-b-0 rounded"
            >
              Başa Dön
            </button>
            <button
              onClick={sonrakiFilm}
              disabled={sira === 19 ? true : false}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 active:border-b-0 rounded disabled:cursor-not-allowed disabled:bg-blue-500 disabled:border-b-0 disabled:opacity-50 "
            >
              Sıradaki
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 active:border-b-0 rounded"
              onClick={() => addFavHandler()}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
