import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
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
						Favorite <span className="btn-secondary">0</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
						<li><a className="dropdown-item active" href="#">Leia Skywalker</a></li>
						<li><a className="dropdown-item" href="#">Luke Skywalker</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
