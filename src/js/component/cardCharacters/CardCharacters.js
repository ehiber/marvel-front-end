import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Card , Icon , Name , Container, Img} from "./styled"
import { AppContext } from "../../store/appContext.js";
import ModalComics from "../../component/ModalComics/ModalComics.js";

const CardCharacters = ({localID,name,cover,isFavorite,url}) => {

    const { store, actions } = useContext(AppContext);

    const [showModal,setShowModal] = useState(false)

    const handelChangeFavorite = (e) => {
        actions.setIsFavorite(localID,!isFavorite)
    }

    return (  
        <Fragment>
			<Card>
                <Container>
                    
                    <Img 
                        src={cover}
                        onClick = {e => {
                            setShowModal(true);
                            // actions.fetchGetComics(url);
                        }}
                    />

                    { store.characters[localID-1].isFavorite    ?   <Icon className = "star-solid" onClick = {handelChangeFavorite}></Icon>
                                                                :   <Icon className = "star-regular" onClick = {handelChangeFavorite}></Icon>    
                    }
                    
                    <Name>{name}</Name>
                    
                    
                    {showModal && (
						<ModalComics
							nameCharacter={name}
                            
                            url={url}
												
							handleOuterClick={e => {
								setShowModal(false);
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
	url: PropTypes.string,
	handleOuterClick: PropTypes.func
};
