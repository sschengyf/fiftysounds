import * as types from '../constants/ActionTypes';
import { getCharacter } from 'utils/CharacterUtils';

export function refreshCharacter() {
	return {
		type: types.NEXT_CHARACTER,
		character: getCharacter()
	};
}

export function recordVoice(character) {
	return {
		type: types.RECORD_VOICE,
        character: character
	};
}

export function recognizeVoice(character) {
	return dispatch => {
		dispatch(startRecogonize(character));

		setTimeout(function() {
			dispatch(refreshCharacter())
		}, 1000);
	}
}

export function startRecogonize(character) {
	return {
		type: types.RECOGNIZE_VOICE,
		character: character
	};
}