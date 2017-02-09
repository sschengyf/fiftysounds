import React from 'react';
import { getCharacter } from 'utils/CharacterUtils';
import Paper from 'components/Paper';

export default class Exam extends React.Component {
	render() {
		let character = getCharacter();
		return (
			<div className='exam page'>
				<h1 className='intro'>Please pronounce alphabet below</h1>
				<div className='exam__center'>
					<Paper className='exam__paper' alphabet={character.data.display}/>
				</div>
			</div>
		);
	}
}