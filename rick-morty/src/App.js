import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListCharacters from "./components/ListCharacters";
import { connect } from "react-redux";

function App() {
	return (
		<div className="App">
			<ListCharacters></ListCharacters>
		</div>
	);
}

// export App;
export default connect(state => state, {})(App);
