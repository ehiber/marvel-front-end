import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext.js";
import marvel from "../../img/marvel.png"

export const Home = () => {
	const { store, actions } = useContext(AppContext);

	return (
		<Fragment>
			<div className="">
				<div className="">
					<div className="col welcome-block">
						<h1 className="headline-welcome-block">¿CANSAD@ DE JUGAR Y NO GANAR DINERO?</h1>
						<p className="p-welcome-block">Cambiemos eso</p>
						<p className="p-welcome-block">TOMA EL CONTROL</p>
						<img
							src= {marvel} //{require ('../../img/marvel-logo.png')}
							width="80"
							height="60"
							className="d-inline-block align-top"
						/>
						<Link to="/register">
							<button className="btn btn-primary">UNETE YA</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="container-fluid home-box">
				<div className="row second-block">
					<div className="col-sm-6 img-second-block">
						
					</div>
					<div className="col-sm-6 text-second-block">
						<h2>¿Qué es Gaming?</h2>
						<p>
							Somos una plataforma cazatalentos dedicada a los eSports (competiciones de
							videojuegos) a través de torneos organizados por Gaming o cualquier usuario
						</p>
					</div>
				</div>
			</div>
			<div className="container-fluid home-box">
				<div className="row third-block">
					<div className="col-sm-6 img-third-block">
						
					</div>
					<div className="col-sm-6 text-third-block">
						<h2>TORNEOS COMO LOS QUIERAS</h2>
						<p>
							Organiza o participa en torneos de manera clásica o personalizada en diversas
							plataformas
						</p>
					</div>
				</div>
			</div>
			<div className="container-fluid home-box">
				<div className="row fourth-block">
					<div className="col-sm-6 img-fourth-block">
						
					</div>
					<div className="col-sm-6 text-fourth-block">
						<h2>DINERO REAL</h2>
						<p>
							Juega con dinero real para obtener recompesas en dinero real, eventualmente habran
							torneos gratuitos con recompesas en dinero real, esperalos.
						</p>
					</div>
				</div>
			</div>
		</Fragment>
 	);
};  
