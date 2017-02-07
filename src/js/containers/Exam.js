import React from 'react';
import { getCharacter } from 'utils/CharacterUtils';

export default class Exam extends React.Component {
	render() {
		let character = getCharacter();
		return (
			<div>
				<h1>Do some tests</h1>
				<h2>{character.id}</h2>
				<h2>{character.data.h}</h2>
				<h2>{character.data.k}</h2>
			</div>
		);
	}
}