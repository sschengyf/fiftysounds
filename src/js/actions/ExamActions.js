import * as types from 'constants/ActionTypes';
import { getCharacter } from 'utils/CharacterUtils';
import { hasPermission, requestPermission, startListening, stopListening } from 'utils/SpeechRecognitionUtils';

export function refreshCharacter() {
	return {
		type: types.NEXT_CHARACTER,
		character: getCharacter()
	};
}

export function startToRecordVoice(character) {
	return dispatch => {
		dispatch(startRecord(character));
		startListening().then( result => {
			console.log('Recognition result: ', result);
            let resultStr = result.join(''),
                correct = resultStr.includes(character.data.h) || resultStr.includes(character.data.k);
		 	dispatch(updateRecognitionResult(correct));
		}, error => {
			console.log('Recognition error: ', error);
            dispatch(updateRecognitionResult(false));
		});
	};
}

export function startRecord(character) {
	return {
		type: types.RECORD_VOICE,
        character: character
	};
}

export function updateRecognitionResult(correct) {
	return {
		type: types.UPDATE_VOICE_RECOGNITION_RESULT,
		correct: correct
	};
}

export function stopToRecognizeVoice(character) {
	return dispatch => {
		dispatch(startRecogonize(character));
		stopListening().then(response => {
            // nothing to do
		}, error => {
			console.log('Recognition error: ', error);
			dispatch(updateRecognitionResult(false));
		});
	}
}

export function startRecogonize(character) {
	return {
		type: types.RECOGNIZE_VOICE,
		character: character
	};
}

export function checkRecognizerPermission() {
	return dispatch => {
		hasPermission().then(authorized => {
			dispatch(updateRecognizerPermission(authorized));
		}, err => console.log(err));
	};
}

export function requestRecognizerPermission() {
	return dispatch => {
		requestPermission().then(success => {
			dispatch(updateRecognizerPermission(true));
		}, fail => {
			dispatch(updateRecognizerPermission(false));
		});
	};
}

export function updateRecognizerPermission(authorized) {
	return {
		type: types.UPDATE_RECOGNIZER_AUTHORIZATION,
		authorized: authorized
	};
}

export function startCountdown(time, interval = 100) {
	return dispatch => {
		let _time = Number(time);
		const timer = setInterval(() => {
			_time = _time - interval;		
			dispatch(updateTime(_time));
			if (_time <= 0) {
				dispatch(stopCountdown(timer));
			}
		}, interval);
		dispatch(dispatchTimer(timer, time));
	};
}

export function dispatchTimer(timer, time) {
	return {
		type: types.START_RECORDER_TIMER,
		timer,
		time
	};
}

export function stopCountdown(timer) {
	clearInterval(timer);
	return {
		type: types.STOP_RECORDER_TIMER,
		timer: null
	};
}

export function updateTime(time) {
	return {
		type: types.UPDATE_RECORDER_TIME,
		time: time
	}
}