import * as types from "./actionTypes";
import axios from "axios";

// Step 7: Design action creator functions
export const loadCharacters = () => dispatch => {
	axios
		.get("https://rickandmortyapi.com/api/character/")
		.then(response => {
			dispatch({
				type: types.SET_CHARACTERS,
				payload: {
					characters: response.data.results
				}
			});
		})
		.catch(() => {
			console.log("error!!!");
		});
	// return {
	// 	type: types.LOAD_CHARACTERS
	// };
};

// // Step 7: Design action creator functions
// export const setCharacters = characters => {
// 	return {
// 		type: types.SET_CHARACTERS,
// 		payload: {
// 			characters
// 		}
// 	};
// };
