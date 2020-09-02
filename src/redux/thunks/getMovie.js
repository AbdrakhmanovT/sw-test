import { movieLoaded, movieLoading, setMovie } from '../actionCreators';

export default function getMovie(url) {
  return async (dispatch) => {
    dispatch(movieLoading());
    const response = await fetch(url);
    const data = await response.json();
    dispatch(setMovie(data));
    dispatch(movieLoaded());
  };
}
