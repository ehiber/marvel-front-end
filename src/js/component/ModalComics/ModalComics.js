import React, { Fragment, useContext } from "react"
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import { Modal, Flex, ContenidoModal, Close, ModalHeader, OneComic, ImgComic, Text} from "./Styled"
import "../../../styles/modalComics.scss"
import { Redirect } from "react-router-dom";

const ModalComics = ({ nameCharacter, handleOuterClick = () => {} }) =>  {

    const { store, actions } = useContext(AppContext);

    const handleRenderComic = (e,index) =>{
        
        actions.setComicToRender(index,true)
                        
    }
        
	return (
		<Fragment>
			<Modal className="modal">
                <Flex>
                    <ContenidoModal>
                        <ModalHeader>
                            <h2>{nameCharacter}</h2>
                            <Close onClick={e => {handleOuterClick(e);}}>
                                &times;
                            </Close>
                        </ModalHeader>
                        <br />
                        <div>
                            {store.comicsToRender.map((comic,index)=>{
                                
                                return (
                                    
                                    <Fragment key={Math.random()}>
                                        <OneComic onClick = {e =>    {handleRenderComic(e,index);}}>

                                            <ImgComic src= {comic.cover} />

                                            <Text>

                                                <h3>{comic.title}</h3>

                                                <p>{comic.description}</p>

                                            </Text>

                                            {store.comicToRender.redirect && <Redirect to= "/comics" />}

                                        </OneComic>
                                    </Fragment>

                                );

                            })}                            
                        </div>
                    </ContenidoModal>
    		    </Flex>
            </Modal>
		</Fragment>
	);
};

export default ModalComics;

ModalComics.propTypes = {
	nameCharacter: PropTypes.string,
	handleOuterClick: PropTypes.func
};


