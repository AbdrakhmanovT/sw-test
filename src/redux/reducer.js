import * as actionTypes from './actionTypes.js';

const inititalState = {
  movieLoading: false,
  movie: null
}

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        default: 
        return {
            ...state
        }
    }
}

export default reducer;