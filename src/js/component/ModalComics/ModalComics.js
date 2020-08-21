import React, { Fragment, useContext, useEffect } from "react"
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import "../../../styles/modalComics.scss"

const ModalComics = ({ nameCharacter, url, handleOuterClick = () => {} }) =>  {

    const { store, actions } = useContext(AppContext);

    useEffect(() => {
		
		console.log("usandome este efecto");

	}, []);        
        
	return (
		<Fragment>
			<div className="modal">
                <div className = "flex">
                    <div className = "contenido-modal">
                        <div className="modal-header flex">
                            <h2>{nameCharacter}</h2>
                            <div className="close" onClick={e => {handleOuterClick(e)}}>
                                &times;
                            </div>
                        </div>
                        <br />
                        <div className="modal-body">
                            
                        </div>
                    </div>
    		    </div>
            
            </div>
		</Fragment>
	);
};

export default ModalComics;

ModalComics.propTypes = {
	nameCharacter: PropTypes.string,
	url: PropTypes.string,
	handleOuterClick: PropTypes.func
};


