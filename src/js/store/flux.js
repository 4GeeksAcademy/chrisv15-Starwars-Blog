const getState = ({ getStore, getActions, setStore }) => {
	let charactersGlobal = [];
	return {
		store: {
			characters: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadCharacters: () => {
				let characters = [];
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							for (let i = 1; i <= data.total_records-70; i++) {
								getActions().loadCharacterInfo(i, characters)
							}
						}
					)
					.catch(err => console.error(err))
			},
			loadCharacterInfo: (uid, characters) => {
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							if(data?.result?.properties.name){
								characters.push(data?.result?.properties)
								console.log(getStore(characters))
								setStore({ characters: characters })
							}
						}
					)
					.catch(err => console.log(err))
			}
		}
	};
};

export default getState;
