import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let favorites = store.favorites || [];
	function removeFavorite(favorite){
		actions.removeFavorite(favorite);
    }
	return (
		<nav className="navbar navbar-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={logo} width="120" />
				</span>
			</Link>
			<div className="d-flex">
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-danger " type="submit">Search</button>
				</form>
			</div>
			<div className="ml-auto">
				<div className="dropstart">
					<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite<span className="btn-outline-danger">&#32;{favorites.length}&#32;</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

						{store.favorites.map((favorite, index) => (
							<li key={index} className='d-grid'>
								<Link to={favorite.url}>
								<p className="dropdown-item" href="#">{favorite.name}
								</p>
								</Link>
								<button href="#" className="btn btn-warning bi bi-chat-right-heart float-end pr-5" onClick={() => removeFavorite(favorite)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
											<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
										</svg>
									</button>
							</li>

						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
