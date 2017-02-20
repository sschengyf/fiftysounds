import * as types from '../constants/ActionTypes';
import { getCharacter } from 'utils/CharacterUtils';

export function refreshCharacter() {
	return {
		type: types.REFRESH_CHARACTER,
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
	return {
		type: types.RECOGNIZE_VOICE,
		character: character
	};
}