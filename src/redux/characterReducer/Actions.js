import * as actions from './Constants.js';

export const getCharacterInfo = (props) => async (dispatch) => {
    dispatch({
        type: actions.GET_CHARACTER_INFO,
        payload: props,
    });
};