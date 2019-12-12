import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadCharacters } from "../state/actionCreators";

export const ListCharacters = ({ characters, loadCharacters }) => {
	useEffect(() => {
		console.log("get them");

		loadCharacters();
	}, []);
	return (
		<div>
			{characters.map(character => (
				<div>{character.name}</div>
			))}
		</div>
	);
};

// Step 8: Use "connect" to plug the component to redux
export default connect(state => state, { loadCharacters })(ListCharacters);
