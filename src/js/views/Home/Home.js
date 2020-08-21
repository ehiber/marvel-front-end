import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import CardCharacters from "../../component/cardCharacters/CardCharacters"
import { AllCards , Container } from "./Styled.js"


export const Home = () => {
	const { store, actions } = useContext(AppContext);
 
	const charactersToRender = store.characters.filter((character) => {
		let shouldRender = false;
		
		if (character.isFavorite === true) {
			return (shouldRender = true);
		}
		
		return shouldRender;
	});

	const charactersToRenderBySearch = (charactersToRender) => charactersToRender.filter((character) => {
		
		if (store.inputHeroe == "") {
			return true
		} else {
			console.log(store.inputHeroe)
			let regEx = new RegExp(store.inputHeroe.trim() , "i")
			
			if (character.name.search(regEx) != -1){
				return true
			} else {
				return false
			}
		}

	});

	return (
		<Fragment>

			<Container>

				<AllCards>
									
					{(store.favorite == false)? (
					
						charactersToRenderBySearch(store.characters).map((character) => {   
							return (

								<CardCharacters
									key={Math.random()} 
									localID = {character.localID}
									name = {character.name}
									cover = {character.cover}
									isFavorite = {character.isFavorite}
									url={character.comics.collectionURI}
								/> 
							);
						})
					
					) : (
						
						charactersToRenderBySearch(charactersToRender).map((character) => {   
							return (
	
								<CardCharacters
									key={Math.random()} 
									localID = {character.localID}
									name = {character.name}
									cover = {character.cover}
									isFavorite = {character.isFavorite}
									url={character.comics.collectionURI}
								/> 
							);
						})
					)
				
					}
				

				</AllCards>

			</Container>
			
		</Fragment>
 	);
};  

export default Home

CardCharacters.propTypes = {
	localID: PropTypes.number,
	name: PropTypes.string,
	cover: PropTypes.string,
	isFavorite: PropTypes.bool,
	url: PropTypes.string
};



