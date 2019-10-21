import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);
}

ReactDOM.render(<App />, document.getElementById("root"));


// window.setState(initialState);