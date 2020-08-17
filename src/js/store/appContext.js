import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import getState from "./flux.js";

export const AppContext = createContext(null);

const AppContextProvider = props => {
		
	const [state, setState] = useState(
		getState({
			getStore: () => state.store,
			getActions: () => state.actions,
			setStore: updatedStore =>
				setState({
					store: Object.assign(state.store, updatedStore),
					actions: { ...state.actions }
				})
		})
	);

	useEffect(() => {
		/**
		 * EDIT THIS!
		 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
		 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
		 * store, instead use actions, like this:
		 *
		 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
		 *
		 **/
		// state.actions.fetchGetTournaments();
	}, []);

	// The initial value for the context is not null anymore, but the current state of this component,
	// the context will now have a getStore, getActions and setStore functions available, because they were declared
	// on the state of this component
	return (
		<AppContext.Provider value={state}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};