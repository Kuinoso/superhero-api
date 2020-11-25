import * as actions from './Constants.js';

const initialState = {
  results: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};