import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext.js";


export const Home = () => {
	const { store, actions } = useContext(AppContext);

	return (
		<Fragment>
			<div className="">
				<div className="">
											
					<Link to="/register">
						<button className="btn btn-primary">UNETE YA</button>
					</Link>
					
				</div>
			</div>
			
		</Fragment>
 	);
};  
