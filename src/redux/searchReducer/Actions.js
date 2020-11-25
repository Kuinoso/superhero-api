import * as actions from './Constants.js';

export const getAllCharacters = (props) => async (dispatch) => {
    dispatch({
        type: actions.GET_CHARACTERS,
        payload: props,
    });
};