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
		 	let correct = result.includes(character.data.h) || result.includes(character.data.k);
		 	dispatch(updateRecognitionResult(correct));
		}, error => {
			console.log('Recognition error ', error);
		});
	}
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
	}
}

export function stopToRecognizeVoice(character) {
	return dispatch => {
		dispatch(startRecogonize(character));
		stopListening().then(response => {
			// dispatch(refreshCharacter());
		}, errors => {
			console.log('Recognition error: ', errors);
			// dispatch(refreshCharacter());
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
	}
}

export function updateRecognizerPermission(authorized) {
	return {
		type: types.UPDATE_RECOGNIZER_AUTHORIZATION,
		authorized: authorized
	};
}