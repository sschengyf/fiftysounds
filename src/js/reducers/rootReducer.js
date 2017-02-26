import { combineReducers } from 'redux';
import exam from 'reducers/exam';
import recognizer from 'reducers/recognizer';

const rootReducer = combineReducers({
	exam,
    recognizer
});

export default rootReducer;