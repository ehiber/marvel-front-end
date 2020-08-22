const getState = ({ getStore, getActions, setStore }) => {
	

	const APIurlMarvelCharacters = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ae5fdb0f7fe8f2a7848c3a15e561cb85&hash=0750a5e7e851d8e2830a9d35f488eeda"
	const APIurlMarvelCharactersBySearchPart1  = "https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith="
	const APIurlMarvelCharactersBySearchPart2  = "&apikey=ae5fdb0f7fe8f2a7848c3a15e561cb85&hash=0750a5e7e851d8e2830a9d35f488eeda"

	return {
		store: {
			
			characters : [],

			comicsToRender : [],

			comicToRender : {index: 0, redirect:false},
			
			favorite : false,

			inputHeroe : "",

		},
		actions: {
			// usada para ver todos los favoritos
			setFavorite : favorite => {
								
				setStore({
					favorite: !favorite
				});

			},
			// usada para saber cual comic renderizar en la view comics
			setComicToRender : (id,redirect) => {
								
				setStore({
					comicToRender: {index: id, redirect:redirect}
				});

			},
			// usada para saber cual personaje es favorito
			setIsFavorite : (localID,isFavorite) => {
				
				let store = getStore();

				let newList = 	store.characters.map((character) => {   
									if (character.localID === localID) {
										character.isFavorite = isFavorite;
									}

									return character
								});

				setStore({
					characters: newList 
				});

			},
			// usada para saber cual modal debe ser renderizado
			setShowModal : (localID,showModal) => {
				
				let store = getStore();

				let newList = 	store.characters.map((character) => {   
									if (character.localID === localID) {
										character.showModal = showModal;
									}

									return character
								});

				setStore({
					characters: newList 
				});

			},
			// usada para hacer la busqueda tanto local como el fetch
			setInputHeroe : newInput => {

				setStore({
					inputHeroe : newInput
				});

			},
			// usada al iniciar para tener los personajes
			fetchGetCharacters: async () => {
				
				const store = getStore();
				
				try {
					let response = await fetch(APIurlMarvelCharacters, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						},
					});
					
					if (response.ok) {
						
						let responseBody = await response.json();
						
						let responseBodyDATA = responseBody["data"];
			
						let characters = responseBodyDATA.results.map((character,index) =>{
							
							let newCharacter = {}
							
							newCharacter["localID"] = index + 1;

							newCharacter["id"] = character.id;

							newCharacter["name"] = character.name;

							newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;

							newCharacter["comics"] = character.comics;

							newCharacter["isFavorite"] = false;

							newCharacter["showModal"] = false;

							return newCharacter;

						});

						setStore({ characters: characters });

					} else if (response.stats == 400) {
						console.log("hubo un error");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
			},
			// usada para buscar personajes segun parametro de busqueda
			fetchGetCharactersBySearch: async () => {
			
				const store = getStore();

				try {
					let response = await fetch(APIurlMarvelCharactersBySearchPart1 + store.inputHeroe + APIurlMarvelCharactersBySearchPart2, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						},
					});
					
					if (response.ok) {
						
						let lengthCharacters = store.characters.length;

						let responseBody = await response.json();
						
						let responseBodyDATA = responseBody["data"];

						responseBodyDATA.results.map((character,index) =>{
							
							let newCharacter = {}
							
							newCharacter["localID"] = index + 1 + lengthCharacters;

							newCharacter["id"] = character.id;

							newCharacter["name"] = character.name;

							newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;

							newCharacter["comics"] = character.comics;

							newCharacter["isFavorite"] = false;

							newCharacter["showModal"] = false;
							// solo almacena si no existe ya en el store
							let isInStore = store.characters.map( storeCharacter =>{
								
								return storeCharacter.id === newCharacter.id

							});

							if (!isInStore.includes(true)){

								setStore({ characters: [...store.characters, newCharacter] });

							} else {

								lengthCharacters--

							}

						});
							
					} else if (response.stats == 400) {
						console.log("hubo un error");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
			},
			// usado para renderizar lista de comics de cada personaje
			fetchGetComics: async (url) => {
				
				const store = getStore();
				
				try {
					let response = await fetch(url + "?ts=1&apikey=ae5fdb0f7fe8f2a7848c3a15e561cb85&hash=0750a5e7e851d8e2830a9d35f488eeda", {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						},
					});
					
					if (response.ok) {
						
						let responseBody = await response.json();
						
						let responseBodyDATA = responseBody["data"];
			
						let comicsToRender = responseBodyDATA.results.map((comic,index) =>{
							
							let newComic = {}
							
							newComic["localID"] = index + 1;

							newComic["id"] = comic.id;

							newComic["title"] = comic.title;

							newComic["cover"] = comic.thumbnail.path + "." + comic.thumbnail.extension;

							newComic["date"] = comic.dates[0].date;

							newComic["description"] = comic.description;

							newComic["creators"] = comic.creators;

							return newComic;

						});

						setStore({ comicsToRender: comicsToRender });

					} else if (response.stats == 400) {
						console.log("hubo un error");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}

			}
		}
	};
};

export default getState;
