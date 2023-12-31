import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	let charactersGlobal = [];
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadFavorites: () => {
				if (localStorage.getItem("favorites")) {
					setStore({ favorites: JSON.parse(localStorage.getItem("favorites")) })
				}
			},
			addToFavorite: (item) => {
				setStore({ favorites: [...getStore().favorites, item]});
				localStorage.setItem("favorites", JSON.stringify(getStore().favorites))
			},
			removeFavorite: (item) => {
				setStore({ favorites: getStore().favorites.filter((element) => element.name != item.name) })
				localStorage.setItem("favorites", JSON.stringify(getStore().favorites))
			},
			loadCharacters: () => {
				if (localStorage.getItem("characters")) {
					setStore({ characters: JSON.parse(localStorage.getItem("characters")) })
				}
				else {
					let charactersAux = [];
					fetch("https://www.swapi.tech/api/people/")
						.then(res => res.json())
						.then(
							data => {
								console.log(data)
								for (let i = 1; i <= data.total_records - 75; i++) {
									getActions().loadCharacterInfo(i, charactersAux)
								}
							}
						)
						.catch(err => console.error(err))
				}
			},
			loadCharacterInfo: (uid, characters) => {
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							if (data?.result?.properties.name) {
								characters.push(data?.result)
								setStore({ characters: characters })
								localStorage.setItem("characters", JSON.stringify(characters))
							}
						}
					)
					.catch(err => console.log(err))
			},
			loadPlanets: () => {
				if (localStorage.getItem("planets")) {
					setStore({ planets: JSON.parse(localStorage.getItem("planets")) })
				}
				else {

					let planetsAux = [];
					fetch("https://www.swapi.tech/api/planets/")
						.then(res => res.json())
						.then(
							data => {
								console.log(data)
								for (let i = 1; i <= data.total_records - 55; i++) {
									getActions().loadPlanetInfo(i, planetsAux)
								}
							}
						)
						.catch(err => console.error(err))
				}
			},
			loadPlanetInfo: (uid, planets) => {
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							if (data?.result?.properties.name) {
								planets.push(data?.result)
								setStore({ planets: planets })
								localStorage.setItem("planets", JSON.stringify(planets))

							}
						}
					)
					.catch(err => console.log(err))
			},
			loadvehicles: () => {
				if (localStorage.getItem("vehicles")) {
					setStore({ vehicles: JSON.parse(localStorage.getItem("vehicles")) })
				}
				else {

					let vehiclesAux = [];
					fetch("https://www.swapi.tech/api/vehicles")
						.then(res => res.json())
						.then(
							data => {
								console.log(data)
								for (let i = 1; i <= data.total_records - 10; i++) {
									getActions().loadVehicleInfo(i, vehiclesAux)
								}
							}
						)
						.catch(err => console.error(err))
				}
			},
			loadVehicleInfo: (uid, vehicles) => {
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							if (data?.result?.properties.name) {
								vehicles.push(data?.result)
								setStore({ vehicles: vehicles })
								localStorage.setItem("vehicles", JSON.stringify(vehicles))
							}
						}
					)
					.catch(err => console.log(err))
			}
		}
	};
};

export default getState;
