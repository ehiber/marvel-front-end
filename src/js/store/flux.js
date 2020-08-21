const getState = ({ getStore, getActions, setStore }) => {
	

	const APIurlMarvelCharacters = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ae5fdb0f7fe8f2a7848c3a15e561cb85&hash=0750a5e7e851d8e2830a9d35f488eeda"
	const APIurlMarvelCharactersBySearchPart1  = "https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith="
	const APIurlMarvelCharactersBySearchPart2  = "&apikey=ae5fdb0f7fe8f2a7848c3a15e561cb85&hash=0750a5e7e851d8e2830a9d35f488eeda"


	// const APIurlMarvelCharacters = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1a305a0b17d07430e6f861acc1fc6862&hash=5e7b5ab581c0fbe2540ff6eafb0e64a0"
	// const APIurlMarvelCharactersBySearchPart1  = "https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith="
	// const APIurlMarvelCharactersBySearchPart2  = "&apikey=1a305a0b17d07430e6f861acc1fc6862&hash=5e7b5ab581c0fbe2540ff6eafb0e64a0"
	
	return {
		store: {
			
			characters : [],

			comicsToRender : [],
			
			favorite : false,

			inputHeroe : "",

		},
		actions: {

			setFavorite : favorite => {
								
				setStore({
					favorite: !favorite
				});

			},

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

			setInputHeroe : newInput => {

				setStore({
					inputHeroe : newInput
				});

			},

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

						console.log(responseBodyDATA)
			
						responseBodyDATA.results.map((character,index) =>{
							
							let newCharacter = {}
							
							newCharacter["localID"] = index + 1 + lengthCharacters;

							newCharacter["id"] = character.id;

							newCharacter["name"] = character.name;

							newCharacter["cover"] = character.thumbnail.path + "." + character.thumbnail.extension;

							newCharacter["comics"] = character.comics;

							newCharacter["isFavorite"] = false;
							
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
