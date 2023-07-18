import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CharacterDetailCard from "../component/CharacterDetailCard";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	console.log(store.characters);
	let character = store.characters.filter((item) => item.uid == params.uid);
	console.log(character);
	return (
		<CharacterDetailCard key={character.uid} character={character} />
	);
};

Character.propTypes = {
	match: PropTypes.object
};
