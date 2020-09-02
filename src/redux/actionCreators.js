import * as actionTypes from './actionTypes.js';

export function movieListLoading() {
  return { type: actionTypes.movieListLoading };
}

export function setMovieList(movieList) {
  return { type: actionTypes.setMovieList, movieList };
}

export function movieListLoaded() {
  return { type: actionTypes.movieListLoaded };
}

export function movieLoading() {
  return { type: actionTypes.movieLoading };
}

export function setMovie(movie) {
  return { type: actionTypes.setMovie, movie };
}

export function movieLoaded() {
  return { type: actionTypes.movieLoaded };
}

export function reviewPending() {
  return { type: actionTypes.reviewPending };
}

export function reviewSubmittedSuccessfully() {
  return { type: actionTypes.reviewSubmittedSuccessfully };
}

export function reviewReset() {
  return { type: actionTypes.reviewReset };
}

export function setReview(review) {
  return { type: actionTypes.setReview, review };
}
