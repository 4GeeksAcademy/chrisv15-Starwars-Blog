import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let favorites = store.favorites || [];
	console.log(store.favorites);
	return (
		<nav className="navbar navbar-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={logo} width="90" />
				</span>
			</Link>
			<div className="d-flex">
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite<span className="btn-secondary">{favorites.lenght}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
					
					{store.favorites.map((favorite, index) => (
						<li>
							<a className="dropdown-item active" href="#">{favorite}</a>
						</li>

					))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
