import characters from 'data/characters';

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomAlphabetDiaplay(characterData) {
	if(characterData.h && characterData.k) {
		characterData.display = Math.random() > 0.5 ? characterData.h : characterData.k;
	}
	return characterData;
}

export function getCharacter() {
	const keys = Object.keys(characters);
	let i = getRandomInt(0, keys.length),
		key = keys[i];

	return {
		id: key,
		data: randomAlphabetDiaplay(characters[key])
	};
}

export function getCharacters() {
	return characters;
}