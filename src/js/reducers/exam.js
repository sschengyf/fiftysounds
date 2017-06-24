import * as types from 'constants/ActionTypes';

const initialState = {
    status: 'pending',
    character: {
        data: {
            display: ''
        }
    },
    correct: false,
    timer: null,
    time: 0
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
            return Object.assign({}, initialState, {
                character: action.character
            });

        case types.UPDATE_VOICE_RECOGNITION_RESULT:
            return Object.assign({}, state, {
                status: 'recognized',
                correct: action.correct
            });

        case types.START_RECORDER_TIMER:
            return Object.assign({}, state, {
                time: action.time,
                timer: action.timer
            });

        case types.STOP_RECORDER_TIMER:
            return Object.assign({}, state, {
                timer: null
            });

        case types.UPDATE_RECORDER_TIME:      
            return Object.assign({}, state, {
                time: action.time
            });

        default:
            return state;
    }
}