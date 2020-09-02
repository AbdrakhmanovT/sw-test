import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function () {
  const movie = useSelector((state) => state.movie);
  const movieLoading = useSelector((state) => state.movieLoading);

  if (movieLoading) {
    return (
      <div className="text-center h-75" height="300px">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (movie) {
    return (
      <Card>
        <Card.Img variant="top" src="/Star_Wars_Logo.png" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.opening_crawl}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return <></>;
}
