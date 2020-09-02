import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import getMovieList from '../../redux/thunks/getMovieList.js';
import getMovie from '../../redux/thunks/getMovie.js';

export default function () {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);
  const movieListLoading = useSelector((state) => state.movieListLoading);
  const movieList = useSelector((state) => state.movieList);
  const movieLoading = useSelector((state) => state.movieLoading);
  const movie = useSelector((state) => state.movie);
  const handleClick = (url) => {
    dispatch(getMovie(url));
  };

  if (!movieListLoading) {
    return (
      <>
        <ListGroup>
          {movieList.map((movie) => <ListGroup.Item onClick={() => { handleClick(movie.url); }} key={movie.title} action>{movie.title}</ListGroup.Item>)}
        </ListGroup>
        {movie && (
        <Link to="/review">
          <Button disabled={movieLoading} className="my-2 btn-block">Write a review</Button>
        </Link>
        )}
      </>
    );
  }
  return <h1>LOADING</h1>;
}
