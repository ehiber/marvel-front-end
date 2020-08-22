import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Card , Icon , Name , Container, Img} from "./styled"
import { AppContext } from "../../store/appContext.js";
import ModalComics from "../../component/ModalComics/ModalComics.js";

const CardCharacters = ({localID,name,cover,isFavorite,url}) => {

    const { store, actions } = useContext(AppContext);

    const handelChangeFavorite = (e) => {
        actions.setIsFavorite(localID,!isFavorite)
    }

    const handelFetchModal = async (e, url, localID) => {
        
        await actions.fetchGetComics(url);
        actions.setShowModal(localID, true);
        
    }

    return (  
        <Fragment>
			<Card>
                <Container>
                    
                    <Img 
                        src={cover}
                        onClick = {e => { handelFetchModal(e,url,localID) }}
                        
                    />

                    { store.characters[localID-1].isFavorite    ?   <Icon className = "star-solid" onClick = {handelChangeFavorite}></Icon>
                                                                :   <Icon className = "star-regular" onClick = {handelChangeFavorite}></Icon>    
                    }
                    
                    <Name>{name}</Name>
                    
                    {/* para mostrar el modal de ese personje */}
                    {store.characters[localID-1].showModal && (
						<ModalComics
							nameCharacter={name}
                            
							handleOuterClick={e => {
								actions.setShowModal(localID, false);
							}}
						/>
					)}				


                </Container>
			</Card>
		</Fragment>
    );
}

export default CardCharacters ;

CardCharacters.propTypes = {
    localID: PropTypes.number,
    name: PropTypes.string,
    cover: PropTypes.string,
    isFavorite: PropTypes.bool,
    url: PropTypes.string
};

ModalComics.propTypes = {
	title: PropTypes.string,
	handleOuterClick: PropTypes.func
};
