import characters from 'data/characters';

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

export function getCharacter() {
	const keys = Object.keys(characters);
	let i = getRandomInt(0, keys.length),
		key = keys[i];

	return {
		id: key,
		data: characters[key]
	};
}