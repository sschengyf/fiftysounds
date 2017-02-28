import * as types from 'constants/ActionTypes';

const initialState = {
    status: 'pending',
    character: {
        data: {
            display: ''
        }
    },
    correct: false
};

export default function exam(state = initialState, action) {
    switch (action.type) {
        case types.RECORD_VOICE:
            return Object.assign({}, state, {
                status: 'recording',
                character: action.character
            });

        case types.RECOGNIZE_VOICE:
            return Object.assign({}, state, {
                status: 'recognizing',
                character: action.character
            });

        case types.NEXT_CHARACTER:
            return {
                status: 'pending',
                character: action.character,
                correct: false
            };

        case types.UPDATE_VOICE_RECOGNITION_RESULT:
            return Object.assign({}, state, {
                status: 'recognized',
                correct: action.correct
            });

        default:
            return state;
    }
}