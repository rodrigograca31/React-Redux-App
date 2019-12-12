import React from "react";
import { connect } from "react-redux";

export const ListCharacters = ({ characters }) => {
	return (
		<div>
			{characters.map(character => (
				<div>{character.name}</div>
			))}
		</div>
	);
};

// Step 8: Use "connect" to plug the component to redux
export default connect(state => state, {})(ListCharacters);
