import * as actions from './Constants.js';

export const getAllSkills = (props) => async (dispatch) => {
    dispatch({
        type: actions.GET_CHARACTERS,
        payload: props,
    });
};