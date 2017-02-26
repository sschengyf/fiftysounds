import * as types from 'constants/ActionTypes';
import { getCharacter } from 'utils/CharacterUtils';
import { hasPermission, requestPermission } from 'utils/SpeechRecognitionUtils';

export function refreshCharacter() {
	return {
		type: types.NEXT_CHARACTER,
		character: getCharacter()
	};
}

export function recordVoice(character) {
	return dispatch => {
		dispatch(startRecord(character));
	}
}

export function startRecord(character) {
	return {
		type: types.RECORD_VOICE,
        character: character
	};
}

export function recognizeVoice(character) {
	return dispatch => {
		dispatch(startRecogonize(character));
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

export function updateRecognizerPermission(authorized) {
	return {
		type: types.UPDATE_RECOGNIZER_AUTHORIZATION,
		authorized: authorized
	};
}