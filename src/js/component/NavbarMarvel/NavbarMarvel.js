import React, { useContext} from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../../store/appContext";
import "../../../styles/navbarMarvel.scss"
import marvel from "../../../img/marvel.png"
import {Navbar, InputHeroe, Icon, IconNavbar} from "./Styled"

export const NavbarMarvel = () => {
	const { store, actions } = useContext(AppContext);

	const handleChangeInput = e => {
		actions.setInputHeroe(e.target.value);
	};

	const handleChangeFavorite = e => {
		actions.setFavorite(store.favorite)
	};

	const handleSubmit = e => {

		e.preventDefault();

		if (store.inputHeroe != ""){
			
			actions.fetchGetCharactersBySearch();
		
		}
	};

	return (
		<Navbar>
			
			<Link to = "/">
				<IconNavbar
				src= {marvel} 
				className="icon-navbar-marvel"
				/>
			</Link>	
			
			<form onSubmit={handleSubmit}>

				<InputHeroe
					type="name"
					className="input-heroes search"
					id="inputHeroes"
					placeholder="&#xF002; Buscar"
					onChange={handleChangeInput}
					value={store.inputHeroe}
				/>

			</form>
				
		{store.favorite 	? <Icon className = "star-solid" onClick={handleChangeFavorite}></Icon>
							: <Icon className = "star-regular" onClick={handleChangeFavorite}></Icon>
		}
		
		</Navbar>
	);
};

export default NavbarMarvel