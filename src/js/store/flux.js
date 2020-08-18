const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			favorite : false

		},
		actions: {

			setFavorite : favorite => {
								
				setStore({
					favorite: !favorite
				});

			}

			// fetchRegisterUser: async newUser => {
			// 	const store = getStore();

			// 	let successfulRegistration = false;

			// 	try {
			// 		let response = await fetch(APIurlRegisterUser + newUser["username"], {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/JSON"
			// 			},
			// 			body: JSON.stringify(newUser)
			// 		});

			// 		if (response.ok) {
			// 			successfulRegistration = true;
			// 		} else if (response.stats == 400) {
			// 			console.log("user exists");
			// 		}
			// 	} catch (error) {
			// 		console.log("something failed");
			// 		console.log(error);
			// 	}

			// 	setStore({
			// 		loggedInUser: newUser
			// 	});

			// 	return successfulRegistration;
			// },

			// fetchUserLogIn: async (username, password) => {
			// 	const store = getStore();

			// 	let successfulLogIn = false;

			// 	let body_to_send = {
			// 		password: password
			// 	};

			// 	try {
			// 		let response = await fetch(APIurlLogInUser + username, {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/JSON"
			// 			},
			// 			body: JSON.stringify(body_to_send)
			// 		});

			// 		if (response.status == 200) {
			// 			let responseBody = await response.json();
			// 			let responseBodyJSON = JSON.parse(responseBody["user"]);

			// 			setStore({ loggedInUser: responseBodyJSON });

			// 			setStore({
			// 				isLogIn: true
			// 			});

			// 			successfulLogIn = true;
			// 		} else if (response.status == 400) {
			// 			console.log("CREDENCIALES NO VALIDAS");
			// 		}
			// 	} catch (error) {
			// 		console.log("something failed");
			// 		console.log(error);
			// 	}

			// 	return successfulLogIn;
			// },

			// fetchUserLogOut: () => {
			// 	const store = getStore();

			// 	setStore({
			// 		isLogIn: false
			// 	});
			// 	setStore({
			// 		loggedInUser: {}
			// 	});
			// },

			// fetchRegisterTournament: async newTornament => {
			// 	const store = getStore();

			// 	let successfulRegistrationTournament = false;

			// 	try {
			// 		let response = await fetch(APIurlBaseHandleTournament + store.loggedInUser.id + "/tournaments", {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/JSON"
			// 			},
			// 			body: JSON.stringify(newTornament)
			// 		});

			// 		if (response.ok) {
			// 			successfulRegistrationTournament = true;
			// 		} else if (response.stats == 400) {
			// 			console.log("hubo un error");
			// 		}
			// 	} catch (error) {
			// 		console.log("something failed");
			// 		console.log(error);
			// 	}

			// 	setStore({
			// 		tournaments: [...store.tournaments, newTornament]
			// 	});

			// 	return successfulRegistrationTournament;
			// },

			// fetchGetTournaments: async () => {
			// 	const store = getStore();
			// 	try {
			// 		let response = await fetch(APIurlGETTournament, {
			// 			method: "GET",
			// 			headers: {
			// 				"Content-Type": "application/JSON"
			// 			}
			// 		});

			// 		if (response.ok) {
			// 			let responseBody = await response.json();

			// 			let responseBodyJSON = JSON.parse(responseBody["tournaments"]);

			// 			setStore({ tournaments: responseBodyJSON });
			// 		} else if (response.stats == 400) {
			// 			console.log("hubo un error");
			// 		}
			// 	} catch (error) {
			// 		console.log("something failed");
			// 		console.log(error);
			// 	}
			// },

			// fetchInscription: async tournamentId => {
			// 	const store = getStore();
			// 	let successfulInscriptionTournament = false;
			// 	let newDate = new Date();
			// 	try {
			// 		let response = await fetch(
			// 			APIurlBaseHandleTournament + store.loggedInUser.id + "/tournaments/" + tournamentId,
			// 			{
			// 				method: "POST",
			// 				headers: {
			// 					"Content-Type": "application/JSON"
			// 				},
			// 				body: JSON.stringify({
			// 					action: "take part",
			// 					status: "sin pagar",
			// 					date_inscription: "2020/3/5"
			// 				})
			// 			}
			// 		);
			// 		let responsePrueba = response.json;
			// 		console.log(responsePrueba);
			// 		if (response.ok) {
			// 			successfulInscriptionTournament = true;
			// 		} else if (response.status == 400) {
			// 			console.log("hubo un error");
			// 		}
			// 	} catch (error) {
			// 		console.log("something failed");
			// 		console.log(error);
			// 	}
		}
	};
};

export default getState;
