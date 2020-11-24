import * as actions from './Constants.js';

const initialState = {
  specificData: {},
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return {
        ...state,
        specificData: action.payload
      };
    default:
      return state;
  }
};