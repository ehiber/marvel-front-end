import React, { useState, useEffect, useContext, Fragment } from "react";
import { AppContext } from "../store/appContext";


export const NavbarMarvel = () => {
	const { store, actions } = useContext(AppContext);

	// const handleLogOut = e => {
	// 	actions.fetchUserLogOut();
	// };

	return (
		<div>HOLA SOY NAVBAR</div>
	);
};
