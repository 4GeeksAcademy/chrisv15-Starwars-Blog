import React, { useContext } from "react";
import "../../styles/home.css";
import ItemCard from "../component/itemCard.js"
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let characters = store.characters || [];
	console.log(characters);
	return (
		<div className="mt-5">
			<h1 className="color-white">Characters</h1>
			<div className="container text-center">
				<div className="row nowrap overflow-scroll">
					{characters.map((character, index) => (
						<ItemCard key={index} character={character}/>
					))}
				</div>
			</div>
		</div>
	)
};
