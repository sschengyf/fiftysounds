import * as types from '../constants/ActionTypes';

const initialState = {
    authorized: false
};

export default function recognizer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_RECOGNIZER_AUTHORIZATION:
            return {
                authorized: action.authorized
            };

        default:
            return state;
    }
}