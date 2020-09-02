import { movieListLoaded, movieListLoading, setMovieList } from '../actionCreators';

export default function getMovieList() {
  return async (dispatch) => {
    dispatch(movieListLoading());
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    dispatch(setMovieList(data.results));
    dispatch(movieListLoaded());
  };
}
