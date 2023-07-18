import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlanetDetailCard from "../component/PlanetDetailCard";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	console.log(store.planets);
	let planet = store.planets.filter((item) => item.uid == params.uid);
	console.log(planet);
	return (
		<PlanetDetailCard key={planet.uid} planet={planet} />
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
