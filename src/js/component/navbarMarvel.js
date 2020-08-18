import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../store/appContext";
import "../../styles/navbarMarvel.scss"
import marvel from "../../img/marvel.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

export const NavbarMarvel = () => {
	const { store, actions } = useContext(AppContext);

	const [inputHeroe, setInputHeroe] = useState("");

	//const [isFavorite, setIsFavorite] = useState(false);

	const handleChangeInput = e => {
		setInputHeroe(e.target.value);
	};

	const handleChangeFavorite = e => {
		actions.setFavorite(store.favorite)
		//setIsFavorite(!isFavorite);
	};

	return (
		<div className="navbar-marvel">
			
			<Link to = "/">
				<img
				src= {marvel} 
				className="icon-navbar-marvel"
				/>
			</Link>	
			
			<input
				type="name"
				className="input-heroes search"
				id="inputHeroes"
				placeholder="&#xF002; Buscar"
				onChange={handleChangeInput}
				value={inputHeroe}
			/>
		
				
		{store.favorite 	? <i className = "star-solid icon-favorite" onClick={handleChangeFavorite}></i>
						: <i className = "star-regular icon-favorite" onClick={handleChangeFavorite}></i>
		}
		
		</div>
	);
};
