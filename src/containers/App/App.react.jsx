import React from "react";
import {applyMiddleware, createStore, compose} from "redux";
import {combineReducers} from "redux-immutable";
import {Provider} from "react-redux";
import {Map} from "immutable";
import {reducer as buttonReducer} from "../ConnectedButton/ConnectedButton.reducer.js";
import FirstView from "../FirstView/FirstView.react.jsx";

const reducers = {
	counter: buttonReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware();

const initialState = Map();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, initialState, composeEnhancers(middleware));

const App = () => (
	<Provider store={ store }>
		<FirstView/>
	</Provider>
);

export default App;

