import React, { useContext } from "react";
import "../../styles/home.css";
import ItemCard from "../component/itemCard.js"
import PlanetCard from "../component/planetCard.js"
import VehicleCard from "../component/vehicleCard.js"

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let characters = store.characters || [];
	let planets = store.planets || [];
	let vehicles = store.vehicles || [];
	console.log(planets);
	return (
		<div className="mt-5">
			<div className="container">
				<h1 className="color-white mt-2">Characters</h1>
				<div className="row nowrap overflow-scroll">
					{characters.map((character, index) => (
						<ItemCard key={index} character={character} />
					))}
				</div>
				<h1 className="color-white mt-5">Planets</h1>
				<div className="row nowrap overflow-scroll">
					{planets.map((planet, index) => (
						<PlanetCard key={index} planet={planet} />
					))}
				</div>
				<h1 className="color-white mt-5">Vehicles</h1>
				<div className="row nowrap overflow-scroll">
					{vehicles.map((vehicle, index) => (
						<VehicleCard key={index} vehicle={vehicle} />
					))}
				</div>
			</div>
		</div>
	)
};
