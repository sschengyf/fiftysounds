import * as types from '../constants/ActionTypes';
import { getCharacter } from 'utils/CharacterUtils';

const initialState = {
  status: 'pending',
  character: getCharacter()
};

export default function exam(state = initialState, action) {

  switch (action.type) {
    case types.RECORD_VOICE:
      return {
        status: 'recording',
        character: action.character
      };

    case types.RECOGNIZE_VOICE:
      return {
        status: 'recognizing',
        character: action.character
      };

    case types.NEXT_CHARACTER:
      return {
        status: 'pending',
        character: action.character
      };

    default:
      return state;
  }
}