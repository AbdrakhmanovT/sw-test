import * as actionTypes from './actionTypes.js';

const inititalState = {
  movieListLoading: false,
  movieLoading: false,
  movieList: [],
  movie: null,
  reviewPending: false,
  reviewSubmittedSuccessfully: false,
  review: null,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.movieListLoading:
      return {
        ...state,
        movieListLoading: true,
      };
    case actionTypes.setMovieList:
      return {
        ...state,
        movieList: action.movieList,
      };
    case actionTypes.movieListLoaded:
      return {
        ...state,
        movieListLoading: false,
      };
    case actionTypes.movieLoading:
      return {
        ...state,
        movieLoading: true,
      };
    case actionTypes.setMovie:
      return {
        ...state,
        movie: action.movie,
      };
    case actionTypes.movieLoaded:
      return {
        ...state,
        movieLoading: false,
      };
    case actionTypes.reviewPending: {
      return {
        ...state,
        reviewPending: true,
      };
    }
    case actionTypes.reviewSubmittedSuccessfully: {
      return {
        ...state,
        reviewPending: false,
        reviewSubmittedSuccessfully: true,
      };
    }
    case actionTypes.reviewReset: {
      return {
        ...state,
        review: null,
        reviewPending: false,
        reviewSubmittedSuccessfully: true,
      };
    }
    case actionTypes.setReview: {
      return {
        ...state,
        review: action.review,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
