import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import VehicleDetailCard from "../component/VehicleDetailCard";

export const Vehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	console.log(store.vehicles);
	let vehicle = store.vehicles.filter((item) => item.uid == params.uid);
	console.log(vehicle);
	return (
		<VehicleDetailCard key={vehicle.uid} vehicle={vehicle} />
	);
};

Vehicle.propTypes = {
	match: PropTypes.object
};
