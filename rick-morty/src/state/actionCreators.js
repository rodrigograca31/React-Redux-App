import * as types from "./actionTypes";

// Step 7: Design action creator functions
export function loadCharacters() {
	return {
		type: types.LOAD_CHARACTERS
	};
}

// Step 7: Design action creator functions
export function setCharacters(characters) {
	return {
		type: types.SET_CHARACTERS,
		payload: {
			characters
		}
	};
}
