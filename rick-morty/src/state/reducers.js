import * as types from "./actionTypes";

// STEP 1: Decide state slices
const initialState = {
	characters: [
		{
			id: 0,
			name: "Rodrigo",
			status: "Alive",
			species: "Human",
			type: "",
			gender: "Male"
		}
	]
};

// STEP 3: create reducers
export function charactersReducer(
	characters = initialState.characters,
	action
) {
	switch (action.type) {
		case types.LOAD_CHARACTERS:
			return characters;
		case types.SET_CHARACTERS:
			return action.payload.characters;
		default:
			return characters;
	}
}
